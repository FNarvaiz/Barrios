
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
            return new MyListHandler().Process(connection, request);
        }
        public List<MyRow> BookingList(IDbConnection connection,int resourceId)
        {
            List<MyRow> list = new List<MyRow>();
            StringBuilder sql = new StringBuilder();
            sql.Append("SELECT E.FECHA, dbo.HOUR_TO_STR(dbo.MINUTOS_A_HORA(E.INICIO)) AS TURNO, E.INICIO, E.ID_VECINO, E.ID_VECINO_2, E.ESTADO, " +
              "CAST(CASE WHEN dbo.FECHA_FIN_TURNO(E.FECHA, E.INICIO, T.DURACION) < GETDATE() THEN 1 ELSE 0 END AS BIT) AS FINALIZADO, " +
              "CAST(CASE WHEN GETDATE() < dbo.FECHA_INICIO_TURNO(FECHA, INICIO) AND UPPER(E.ESTADO)='DISPONIBLE' THEN 1 ELSE 0 END AS BIT) AS RESERVABLE, " +
              "dbo.ID_TIPO_RESERVA(dbo.ID_RESERVA_TURNO_RESERVA(" + resourceId + ", E.FECHA, E.INICIO, E.DURACION)) AS TIPO_RESERVA, " +
              "CAST(CAST(T.DURACION AS FLOAT) / 60 AS NVARCHAR) + ' hs (' + T.NOMBRE + ')' AS TIPO, T.NOMBRE AS TipoNombre, T.DURACION, " +
              "dbo.ESTADO_TURNO_RESERVA(" + resourceId + ", E.FECHA, E.INICIO, T.DURACION) AS ESTADO_TURNO, " +
              "dbo.TURNO_RESERVA_VALIDO(" + resourceId + ", E.INICIO, T.DURACION) AS VALIDO, T.REQUIERE_VECINO_2, " +
              "dbo.NOMBRE_TIPO_RESERVA(" + resourceId + ", E.ID_TIPO) AS TIPO_RESERVA_HECHA, T.ID AS ID_TIPO_RESERVA_DISPONIBLE, " +
              " v1.unidad AS UNIDAD,  " +
                " v1.unidad AS UNIDAD_PRIMARIA, v2.unidad AS UNIDAD_EXTRA FROM dbo.ESTADOS_RESERVAS(" + resourceId + ","+CurrentNeigborhood.Get().CantDiasReservables+","+0+") E JOIN RESERVAS_TIPOS T ON T.ID_RECURSO = " + resourceId +"  AND T.VIGENTE=1 " +
                " left join vecinos v1 on v1.id = E.ID_VECINO " +
                "left join vecinos v2 on v2.id = E.ID_VECINO_2 " +
                " GROUP BY E.INICIO, E.FECHA, T.ID, T.DURACION, T.NOMBRE, E.ID_VECINO, E.ID_VECINO_2, E.ESTADO, E.DURACION, T.REQUIERE_VECINO_2, E.ID_TIPO, v1.unidad, v2.unidad " +
              "ORDER BY E.INICIO, E.FECHA, T.ID");
            DataTable dt=  Utils.GetRequestString(connection, sql.ToString());
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
        public void BookingTake(IDbConnection connection, BookingTakeRequest request)
        {
            Dictionary<string, string> parameters = new Dictionary<string, string>();
            parameters.Add("resourceId", request.resourceId.ToString());
            parameters.Add("turnTypeId", request.turnType.ToString());
            parameters.Add("turnStart", request.turnStart.ToString());
            parameters.Add("date", request.bookingDate.ToString());
            parameters.Add("UserId", Authorization.UserDefinition.Id.ToString());
            parameters.Add("extraNeighborId", request.extraNeighborUnit.ToString());
            Utils.ExecuteNonQueryWithParam(connection, "YachtBookingTake", parameters);
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