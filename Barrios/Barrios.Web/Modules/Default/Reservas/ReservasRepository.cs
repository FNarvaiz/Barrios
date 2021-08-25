﻿
namespace Barrios.Default.Repositories
{
    using Barrios.Modules.Common.Utils;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Text;
    using MyRow = Entities.ReservasRow;
    using System.Linq;
    using Barrios.Default.Endpoints;
    using Barrios.Default.Entities;

    public class ReservasRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Update);
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyDeleteHandler().Process(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler().Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {

            Utils.AddNeigborhoodFilter(request);
            return new MyListHandler().Process(connection, request);
        }
        public List<MyRow> BookingList(ReservasRecursosRow resource)
        {
            int resourceId = resource.Id.Value;
            List<MyRow> list = new List<MyRow>();
            StringBuilder sql = new StringBuilder();
            var now = DateTime.Now;
            sql.Append("SELECT E.FECHA, dbo.HOUR_TO_STR(dbo.MINUTOS_A_HORA(E.INICIO)) AS TURNO, E.INICIO, E.ID_VECINO, E.ID_VECINO_2, E.ESTADO, " +
              "CAST(CASE WHEN dbo.FECHA_FIN_TURNO(E.FECHA, E.INICIO, T.DURACION) < GETDATE() THEN 1 ELSE 0 END AS BIT) AS FINALIZADO, " +
              "CAST(CASE WHEN GETDATE() < dbo.FECHA_INICIO_TURNO(FECHA, E.INICIO) AND UPPER(E.ESTADO)='DISPONIBLE' THEN 1 ELSE 0 END AS BIT) AS RESERVABLE, " +
              $"dbo.ID_TIPO_RESERVA(dbo.ID_RESERVA_TURNO_RESERVA({resourceId}, E.FECHA, E.INICIO, E.DURACION)) AS TIPO_RESERVA, " +
              "CAST(CAST(T.DURACION AS FLOAT) / 60 AS NVARCHAR) + ' hs (' + T.NOMBRE + ')' AS TIPO, T.NOMBRE AS TipoNombre, T.DURACION, " +
              $"CASE WHEN ({now.Hour}+RR.LimitHour)*60+{now.Minute}>DATEDIFF(DAY,GETDATE(),E.FECHA)*24*60+ E.INICIO then dbo.ESTADO_TURNO_RESERVA({resourceId}, E.FECHA, E.INICIO, T.DURACION) else 'No disponible' end AS ESTADO_TURNO, " +
              $"dbo.TURNO_RESERVA_VALIDO({resourceId}, E.INICIO, T.DURACION) AS VALIDO, T.REQUIERE_VECINO_2, " +
              $"case when RRR.id is not null then RRR.OBSERVACIONES ELSE  dbo.NOMBRE_TIPO_RESERVA({resourceId}, E.ID_TIPO)END  AS TIPO_RESERVA_HECHA, T.ID AS ID_TIPO_RESERVA_DISPONIBLE,  " +
               $" UB.Units AS UNIDAD_PRIMARIA, UB2.Units AS UNIDAD_EXTRA FROM dbo.ESTADOS_RESERVAS({resourceId},{(resource.Hasta - 1)},0) E " +
               "left join HOLIDAYS H on H.Day = E.FECHA " +
               $"left join RESERVAS_RECURRENTES RRR on RRR.ResourceId = {resourceId}  AND (E.inicio between RRR.inicio and RRR.inicio+RRR.Duracion-1) AND  dbo.PERTENECEALDIA(E.FECHA, RRR.DIAS, H.Day) = 1 " +
               $"JOIN RESERVAS_RECURSOS RR ON RR.ID= {resourceId} AND  dbo.PERTENECEALDIA(E.FECHA, RR.DIAS, H.Day) = 1 " +
               $"JOIN RESERVAS_TIPOS T ON T.ID_RECURSO = RR.ID AND ((T.VIGENTE=1 and ID_VECINO is null) OR E.ID_TIPO=T.ID) " +


                $" left join [users-barrios] UB on E.ID_VECINO = UB.userid and UB.barrioId= {CurrentNeigborhood.Get().Id } "+
                $" left join [users-barrios] UB2 on E.ID_VECINO_2 = UB2.userid and UB2.barrioId= {CurrentNeigborhood.Get().Id } " +
                " GROUP BY E.INICIO, E.FECHA,RR.LimitHour, T.ID, T.DURACION, T.NOMBRE, E.ID_VECINO, E.ID_VECINO_2, E.ESTADO, E.DURACION, T.REQUIERE_VECINO_2, E.ID_TIPO, UB.Units, UB2.Units,RRR.id,RRR.OBSERVACIONES  " +
              "ORDER BY E.INICIO, E.FECHA, T.ID");
            DataTable dt=  Utils.GetRequestString( sql.ToString());
            int count = 0;
            foreach(DataRow DR in dt.Rows)
            {

               list.Add(new MyRow() { Id = count,
                    Fecha = Convert.ToDateTime(DR[0]),
                    Inicio = Convert.ToInt16(DR["INICIO"]),
                    Finalizado= Convert.ToBoolean(DR["FINALIZADO"]),
                    Reservable = Convert.ToBoolean(DR["RESERVABLE"]),
                    Valido = Convert.ToBoolean(DR["VALIDO"]),
                    Turno = DR["Turno"].ToString(),
                    Estado = DR["ESTADO_TURNO"].ToString(),
                    TipoReservaHecha= DR["TIPO_RESERVA_HECHA"].ToString(),
                    IdTipo = Convert.ToInt16(DR["ID_TIPO_RESERVA_DISPONIBLE"]),
                    Tipo=DR["TipoNombre"].ToString(),
                    Required_Vecino= Convert.ToBoolean(DR["REQUIERE_VECINO_2"]),
                    IdVecino = DR["ID_VECINO"].ToString().IsEmptyOrNull() ? (int?)null : Convert.ToInt32(DR["ID_VECINO"]),
                    IdVecino2 = DR["ID_VECINO_2"].ToString().IsEmptyOrNull() ? (int?)null : Convert.ToInt32(DR["ID_VECINO"]),
                    IdVecinoUnidad = DR["UNIDAD_PRIMARIA"].ToString(),
                    IdVecinoUnidadExtra = DR["UNIDAD_EXTRA"].ToString(),

                });
                count++;
            }
            return list;
        }

        public bool HasBookings(object entityId)
        {
            DataTable dt = Utils.GetRequestString("Select count(*) from "+ MyRow.Fields.TableName+ " where " + MyRow.Fields.IdRecurso.Name + " = " + entityId);
            if (Convert.ToInt32(dt.Rows[0][0]) == 0)
                return false;
            return true;
        }

        public void ConfirmReservation(int BookingId)
        {
            Utils.InsertOrUpdateString("update " + MyRow.Fields.TableName + " set " + MyRow.Fields.Confirmada.Name + "=1 where " + MyRow.Fields.Id.Name + "=" + BookingId);

        }

        public ReservasRecursosRow GetResource(int id)
        {
            using (var connection = Utils.GetConnection())
                return connection.Query<ReservasRecursosRow>("SELECT * FROM [RESERVAS_RECURSOS] WHERE ID=" + id).SingleOrDefault();

        }
        public bool EnableBooking(BookingTakeRequest request)
        {
            ReservasRecursosRow resource = GetResource(request.resourceId);
            var list = BookingList(resource);
            foreach(var x in list)
            {
                if (x.Estado == "Disponible" && request.bookingDate == x.Fecha.Value.ToString("yyyyMMdd") && request.turnStart == x.Inicio && request.turnType == x.IdTipo)
                    return true;
            };
            return false;
        }
        public List<MyRow> BookingEspecialList(IDbConnection connection, ReservasRecursosRow resource)
        {
            List<MyRow> list = new List<MyRow>();
            StringBuilder sql = new StringBuilder();
            sql.Append("SELECT F.FECHA, T.INICIO, T.DURACION,T.NOMBRE as TURNO, dbo.NOMBRE_TURNO(T.INICIO,T.DURACION) AS DESCRIPTIVO,  " +
                "T.ID as IDTURNO,T.DIAS  ," +
                " U.userid as vecinoID, UB.units, " +
                $"dbo.ESTADO_TURNO_RESERVA({resource.Id }, F.FECHA, T.INICIO, T.DURACION)as ESTADO " +
                $"FROM dbo.LISTA_FECHAS_ESPECIALES({ resource.Desde},{ resource.Hasta }) AS F " +
                "left join HOLIDAYS H on H.Day = F.FECHA " +
                "INNER JOIN RESERVAS_TURNOS_ESPECIALES T ON dbo.PERTENECEALDIA(F.FECHA, T.DIAS, H.Day) = 1 " +
                "left join RESERVAS R on R.FECHA =F.FECHA AND R.ID_TIPO=T.ID " +
                "left join Users U on R.ID_VECINO =U.userID " +
                $"left join [users-barrios] UB on R.ID_VECINO = UB.userid and UB.barrioId= {CurrentNeigborhood.Get().Id } " +
                $"where T.ID_RECURSO= { resource.Id }  AND  dbo.PERTENECEALDIA(F.FECHA,T.DIAS, H.Day)=1  order by F.Fecha ASC, ESTADO DESC ,INICIO asc");
            DataTable dt = Utils.GetRequestString( sql.ToString());
            int count = 0;
            foreach (DataRow DR in dt.Rows)
            {
                list.Add(new MyRow()
                {
                    Id = count,
                    Fecha = Convert.ToDateTime(DR[0]),
                    Inicio = Convert.ToInt16(DR["INICIO"]),
                    Duracion = Convert.ToInt16(DR["DURACION"]),
                    Turno = DR["TURNO"].ToString(),
                    Hora= DR["DESCRIPTIVO"].ToString(),
                    IdTurnosEspeciales = Convert.ToInt16(DR["IDTURNO"]),
                    Dias = DR["DIAS"].ToString(),
                    Estado = DR["ESTADO"].ToString(),
                    IdVecino = DR["vecinoID"].ToString().IsEmptyOrNull() ? (int?)null : Convert.ToInt32(DR["vecinoID"]),
                    IdVecinoUnidad = DR["units"].ToString()
                });
                count++;
            }
            return list;
        }
        public void BookingTake(IDbConnection connection, BookingTakeRequest request)
        {
            if (request.extraNeighborUnit == Convert.ToInt16(Authorization.UserDefinition.Id))
                throw new Exception("Tiene que seleccionar otro vecino para realizar una reserva doble.");
            Dictionary<string, string> parameters = new Dictionary<string, string>();
            parameters.Add("resourceId", request.resourceId.ToString());
            parameters.Add("turnTypeId", request.turnType.ToString());
            parameters.Add("turnStart", request.turnStart.ToString());
            parameters.Add("date", request.bookingDate.ToString());
            parameters.Add("BarrioId", CurrentNeigborhood.Get().Id.ToString());
            parameters.Add("UserId", Authorization.UserDefinition.Id.ToString());
            parameters.Add("observaciones", request.comment);
            if (request.extraNeighborUnit!=0)
                parameters.Add("extraNeighborId", request.extraNeighborUnit.ToString());
            string storeProcedureName = "YachtBookingTake";
            if (CurrentNeigborhood.Get().Url.Contains("localhost"))
                storeProcedureName = "vecinosTodos." + storeProcedureName;
            Utils.ExecuteNonQueryWithParam(connection, storeProcedureName, parameters);
        }
        public List<DateTime> DaysList(List<MyRow> list)
        {
            List<DateTime> result = new List<DateTime>();
           var days = (from p in list
                   group p.Fecha by p.Fecha into L
                   select L).ToList();
            foreach(var aux in days)
                result.Add(aux.Key.Value);
            return result;
        }
        private class MySaveHandler : SaveRequestHandler<MyRow> { }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}