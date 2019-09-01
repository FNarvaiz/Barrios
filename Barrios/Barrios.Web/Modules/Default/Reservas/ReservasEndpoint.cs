﻿
namespace Barrios.Default.Endpoints
{
    using Barrios.Common;
    using Barrios.Default.Entities;
    using Barrios.Modules.Common.Utils;
    using Barrios.Modules.Default.Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using Serenity.Web;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Globalization;
    using System.Linq;
    using System.Text;
    using System.Web.Mvc;
    using MyRepository = Repositories.ReservasRepository;
    using MyRow = Entities.ReservasRow;
    using Barrios.Modules.Default.Reservas;
    [RoutePrefix("Services/Default/Reservas"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class ReservasController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Update(uow, request);
        }

        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyRepository().Delete(uow, request);
        }

        [HttpPost]
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRepository().Retrieve(connection, request);
        }

        [HttpPost]
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            Utils.AddNeigborhoodFilter(request);
            return new MyRepository().List(connection, request);
            
        }

        [HttpPost]
        public string renderBookingStatus(IDbConnection connection, BookingListRequest request)
        {
            MyRepository repo = new MyRepository();
            RenderBooking table;
            List<MyRow> list;
            List<DateTime> days = null;
            if (request.Resolution == 0)
            {
                list = repo.BookingEspecialList(connection, request.ID);
                table = new RenderListToTable(list);
            }
            else
            {
                list = repo.BookingList(connection, request.ID);
                days = repo.DaysList(list);
                table = new RenderBookingTable(list);
            }

            table.InitTBody();
            table.renderHeader(days);
            table.renderRows(request.ID);
            table.EndTBody();
            return table.getHTML();
           
        }
        [HttpPost]
        public string bookingsTake(IDbConnection connection, BookingTakeRequest request)
        {

            new MyRepository().BookingTake(connection,request);
           
            ReservasRecursosRow resource= Utils.GetConnection().Query<ReservasRecursosRow>("SELECT * FROM [RESERVAS_RECURSOS] WHERE id=" + request.resourceId).SingleOrDefault();
            if (!resource.Emails.IsEmptyOrNull())
            {
                DateTime date = DateTime.ParseExact(request.bookingDate, "yyyyMMdd",
                                  CultureInfo.InvariantCulture);
                MyRow obj = new MyRow
                {
                    IdRecursoNombre = resource.Nombre,
                    Turno = request.turnStart.MinutesToString(),
                    Observaciones = request.comment,
                    Fecha = date
                };
                string emails = EmailHelper.GetRenderMails(resource.Emails, request.resourceId, Authorization.UserDefinition.Email);

                var message = TemplateHelper.RenderTemplate(
                   MVC.Views.Default.Reservas.BookingTakeEmail, obj);

                EmailHelper.Send($"Reserva {request.resourceName} realizada", message, emails , CurrentNeigborhood.Get().LargeDisplayName, CurrentNeigborhood.Get().Mail);
            }
            return renderBookingStatus(Utils.GetConnection(), new BookingListRequest() { ID = request.resourceId,Resolution=10 });
        }
        [HttpPost]
        public string SendRequest(IDbConnection connection, BookingTakeRequest request)
        {
            DateTime date = DateTime.ParseExact(request.bookingDate, "yyyyMMdd",
                                  CultureInfo.InvariantCulture);
           

            bool ok = Convert.ToBoolean(Utils.GetRequestString( "SELECT CAST(CASE WHEN DATEDIFF(D, (SELECT TOP 1 FECHA FROM HOY), " + date.ToSql() + ") <= 180 THEN 1 ELSE 0 END AS BIT)").Rows[0][0]);
            if (ok) {
                string status = Utils.GetRequestString( "SELECT dbo.ESTADO_TURNO_RESERVA(" + request.resourceId + ", " + date.ToSql() + ", " + request.turnStart + ", " + request.turnDuration + ")").Rows[0][0].ToString();

                if (status.ToUpper() == "DISPONIBLE") {
                    MyRow obj = new MyRow
                    {
                        IdRecursoNombre = request.resourceName,
                        Turno = request.turnName,
                        Observaciones = request.comment,
                        Fecha = date
                    };
                    string emails =Utils.GetRequestString( "SELECT emails FROM [RESERVAS_RECURSOS] WHERE id=" + request.resourceId).Rows[0][0].ToString();
                    emails = EmailHelper.GetRenderMails(emails, request.resourceId, Authorization.UserDefinition.Email);
                    
                    var message = TemplateHelper.RenderTemplate(
                       MVC.Views.Default.Reservas.BookingRequestEmail, obj);
                    EmailHelper.Send("Solicitud reserva " + request.resourceName + " Enviada", message, emails + "," + Authorization.UserDefinition.Email, CurrentNeigborhood.Get().LargeDisplayName, CurrentNeigborhood.Get().Mail);
                }
                else {
                    throw new Exception("El turno indicado no se encuentra disponible.");
                }
            }
            else {
                throw new Exception("Las reservas del " + request.resourceName+ " deben solicitarse con una anticipación máxima de 6 meses.");
            }
            return "Se ha enviado la solicitud correctamente";
        }
        [HttpPost]
        public string bookingCancel(IDbConnection connection, IdRequest request)
        {
            DataRow DR = Utils.GetRequestString( "SELECT RR.NOMBRE,RR.RESOLUCION,R.ID_RECURSO,R.FECHA, dbo.HOUR_TO_STR(INICIO) AS TURNO, " +
              "CAST(CASE WHEN DATEDIFF(MINUTE, GETDATE(), dbo.FECHA_INICIO_TURNO(FECHA, INICIO)) >= 1 THEN 1 ELSE 0 END AS BIT) AS OK " +
              "FROM RESERVAS R INNER JOIN [RESERVAS_RECURSOS] RR ON R.ID_RECURSO=RR.ID WHERE R.ID=" + request.ID).Rows[0];

            if (Convert.ToInt32(DR["RESOLUCION"]) == 0)
                throw new ValidationError("Para cancelar la reserva del " + DR["NOMBRE"] + " House deberá comunicarse con la Administración.");
            else
            {
                if (Convert.ToBoolean(DR["OK"]))
                {
                    var UOW = Utils.GetUnitOfWork();
                    Delete(UOW, new DeleteRequest() { EntityId = request.ID });
                    UOW.Commit();
                }
                else
                    throw new ValidationError(DR["NOMBRE"] + ": el turno " + DR["FECHA"] + " " + DR["TURNO"] + "\n\nYa no es posible cancelar la reserva porque la anticipación mínima es de 1 minuto antes.");
            }
            return "Se ha eliminado su reserva.";
        }
    }
    
    public class IdRequest : ServiceRequest
    {
       public int ID { get; set; }
    }
    public class BookingListRequest : ServiceRequest
    {
        public int ID { get; set; }
        public int Resolution { get; set; }
    }
    public class BookingTakeRequest : ServiceRequest
    {
        public Int16 resourceId { get; set; }
        public string resourceName { get; set; }
        public string bookingDate { get; set; }
        public Int16 turnStart { get; set; }
        public string turnName { get; set; }
        public Int16 turnDuration { get; set; }
        public Int16 turnType { get; set; }
        public Int16 extraNeighborUnit { get; set; }
        public string comment { get; set; }
    }
}
