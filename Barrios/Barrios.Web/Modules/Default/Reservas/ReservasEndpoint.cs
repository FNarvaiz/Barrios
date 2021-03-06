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
    using Barrios.Administration.Entities;
    using Barrios.Default.Repositories;

    [RoutePrefix("Services/Default/Reservas"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class ReservasController : ServiceEndpoint
    {
        private void IdTurnsEspecialToIdType(MyRow obj)
        {
            using (var connection = Utils.GetConnection())
            {
                ReservasRecursosRow resource = connection.Query<ReservasRecursosRow>("select * from  "+ReservasRecursosRow.Fields.TableName+" where "+ ReservasRecursosRow.Fields.Id.Name+" = "+obj.IdRecurso ).SingleOrDefault();
                if (resource.Resolucion == 0)
                    obj.IdTipo = obj.IdTurnosEspeciales;
            }
        }
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            IdTurnsEspecialToIdType(request.Entity);
            Utils.RegisterUserActivity(request.Entity, true);
            request.Entity.BarrioId = CurrentNeigborhood.Get().Id;
            if (request.Entity.Confirmada == null)
                request.Entity.Confirmada = true;
            var response= new MyRepository().Create(uow, request);
            uow.OnCommit += () =>
            {
                if(request.Entity.Confirmada.Value)
                    SendBookingTakeMail(null,request.Entity);
            };
            return response;
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            
            Utils.RegisterUserActivity(request.Entity, false);
            IdTurnsEspecialToIdType(request.Entity);
            uow.OnCommit += () =>
            {
                SendBookingTakeMail(null, request.Entity);
            };
            return new MyRepository().Update(uow, request);
        }
        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public string ConfirmReservation(IDbConnection connection, IdRequest request)
        {

            new MyRepository().ConfirmReservation(request.ID);
            MyRow row = Retrieve(connection, new RetrieveRequest() { EntityId = request.ID }).Entity;
            SendBookingTakeMail(null, row);
            return "Se confirmo correctamente";
        }

        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            SendBookingCancelMail(request);
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
            SendBookingTakeMail(request);
            using (var connection2 = Utils.GetConnection())
                return renderBookingStatus(connection2, new BookingListRequest() { ID = request.resourceId,Resolution=10 });
        }
        //[HttpPost]
        //public string ConfirmReservation(IDbConnection connection, IdRequest request)
        //{
        //    Update()
        //}
        [HttpPost]
        public string SendRequest(IDbConnection connection, BookingTakeRequest request)
        {
            DateTime date = DateTime.ParseExact(request.bookingDate, "yyyyMMdd",
                                  CultureInfo.InvariantCulture);
            UserRow user = Utils.GetUser(Convert.ToInt32(Authorization.UserId));
            MyRow obj=null;
            using (var connection2= Utils.GetConnection())
                obj = connection2.Query<MyRow>("SELECT * from RESERVAS WHERE ID_recurso="+request.resourceId+  " and id_vecino="+ user.UserId + " and fecha> GETDATE() ").SingleOrDefault();
            if (obj != null) {
                throw new Exception("Ya tiene una reserva "+ ( obj.Confirmada.Value ? "confirmada" : "pendiente")+" para el día "+ obj.Fecha.Value.ToLongDateString());
            }
            else
            {
                bool ok = Convert.ToBoolean(Utils.GetRequestString("SELECT CAST(CASE WHEN DATEDIFF(D, (SELECT TOP 1 FECHA FROM HOY), " + date.ToSql() + ") <= 180 AND DATEDIFF(D, (SELECT TOP 1 FECHA FROM HOY), " + date.ToSql() + ") > 9 THEN 1 ELSE 0 END AS BIT)").Rows[0][0]);
                if (ok)
                {
                    string status = Utils.GetRequestString("SELECT dbo.ESTADO_TURNO_RESERVA(" + request.resourceId + ", " + date.ToSql() + ", " + request.turnStart + ", " + request.turnDuration + ")").Rows[0][0].ToString();

                    if (status.ToUpper() == "DISPONIBLE")
                    {
                        obj = EmailHelper.GetReservaRowForBody(request, user, date, request.resourceName);
                        string emails = Utils.GetRequestString("SELECT emails FROM [RESERVAS_RECURSOS] WHERE id=" + request.resourceId).Rows[0][0].ToString();
                        emails = EmailHelper.GetRenderMails(emails, user);

                        var message = TemplateHelper.RenderTemplate(
                           MVC.Views.Default.Reservas.Mail.BookingEmail, new MailBody()
                           {
                               Reserva = obj,
                               Body = "La Administración se pondrá en contacto para confirmar la reserva.",
                               Title = "Solicitud de reserva",
                               BeforeTable = ""
                           });
                        obj.Confirmada = false;
                        obj.IdVecino = user.UserId;
                        using (var connection3 = Utils.GetUnitOfWork())
                        {
                            Create(connection3, new SaveRequest<MyRow>() { Entity = obj });
                            connection3.Commit();
                        }
                        EmailHelper.Send("Solicitud reserva " + request.resourceName + " Enviada", message, emails, CurrentNeigborhood.Get().LargeDisplayName, CurrentNeigborhood.Get().Mail);
                        using (var connection2 = Utils.GetConnection())
                            return renderBookingStatus(connection2, new BookingListRequest() { ID = request.resourceId, Resolution = 0 });
                    }
                    else
                    {
                        throw new Exception("El turno indicado no se encuentra disponible.");
                    }
                }
                else
                {
                    throw new Exception("Las reservas del " + request.resourceName + " deben solicitarse con una anticipación minima de 10 dias y máxima de 6 meses.");
                }
            }
        }
        [HttpPost]
        public string bookingCancel(IDbConnection connection, IdRequest request)
        {
            if (ValidateForDelete(request.ID))
            {
                var UOW = Utils.GetUnitOfWork();
                Delete(UOW, new DeleteRequest() { EntityId = request.ID });
                UOW.Commit();
            }
            return "Se ha eliminado su reserva.";
        }
        private bool ValidateForDelete(int? id)
        {
            using (var connection1 = Utils.GetConnection())
            {
                MyRow row = Retrieve(connection1, new RetrieveRequest() { EntityId = id }).Entity;
                using (var connection2 = Utils.GetConnection())
                {
                    ReservasRecursosRow resource = connection2.Query<ReservasRecursosRow>("SELECT * FROM [RESERVAS_RECURSOS] WHERE id=" + row.IdRecurso).SingleOrDefault();
                    if (resource.Resolucion == 0)
                    {
                        if (row.Fecha < DateTime.Today.AddDays(10))
                            throw new Exception("No puede cancelar su reserva con menos de 10 dias de anticipación. Comuniquese con admnistración.");
                    }
                    else
                    {
                        DataRow DR = Utils.GetRequestString("SELECT RR.NOMBRE,RR.RESOLUCION,R.ID_RECURSO,R.FECHA, dbo.HOUR_TO_STR(INICIO) AS TURNO, " +
                     "CAST(CASE WHEN DATEDIFF(MINUTE, GETDATE(), dbo.FECHA_INICIO_TURNO(FECHA, INICIO)) >= 1 THEN 1 ELSE 0 END AS BIT) AS OK " +
                     "FROM RESERVAS R INNER JOIN [RESERVAS_RECURSOS] RR ON R.ID_RECURSO=RR.ID WHERE R.ID=" + id).Rows[0];
                        if (!Convert.ToBoolean(DR["OK"]))
                            throw new ValidationError(DR["NOMBRE"] + ": el turno " + DR["FECHA"] + " " + DR["TURNO"] + "\n\nYa no es posible cancelar la reserva porque la anticipación mínima es de 1 minuto antes.");
                    }
                }
                return true;
            } 
         }
        #region SEND MAILS
        private void SendBookingCancelMail(DeleteRequest request)
        {
            using (var connection1 = Utils.GetConnection())
            {
                MyRow row = Retrieve(connection1, new RetrieveRequest() { EntityId = request.EntityId }).Entity;
                ReservasRecursosRow resource;
                using (var connection2 = Utils.GetConnection())
                    resource = connection2.Query<ReservasRecursosRow>("SELECT * FROM [RESERVAS_RECURSOS] WHERE id=" + row.IdRecurso).SingleOrDefault();

                if (resource.Resolucion == 0)
                {
                    UserRow user = Utils.GetUser(row.IdVecino);
                    UserRow user2 = Utils.GetUser(row.IdVecino2);
                    string emails = EmailHelper.GetRenderMails(resource.Emails, user, user2);
                    row.Turno = row.Tipo;
                    row.IdVecinoUnidad = user.Unit;
                    var message = TemplateHelper.RenderTemplate(MVC.Views.Default.Reservas.Mail.BookingEmail, new MailBody()
                    {
                        Reserva = row,
                        Body = "",
                        Title = "Reserva cancelada",
                        BeforeTable = "A partir de este correo.Queda cancelada su reserva."
                    });
                    EmailHelper.Send($"Reserva {resource.Nombre} cancelada", message, emails, CurrentNeigborhood.Get().LargeDisplayName, CurrentNeigborhood.Get().Mail, null, resource.Regulation);
                }
            }
        }
        private void SendBookingTakeMail(BookingTakeRequest request = null, MyRow row = null)
        {
            int resourceID = (request == null) ? row.IdRecurso.Value : request.resourceId;
            ReservasRecursosRow resource;
            using (var connection = Utils.GetConnection())
                resource = connection.Query<ReservasRecursosRow>("SELECT * FROM [RESERVAS_RECURSOS] WHERE id=" + resourceID).SingleOrDefault();
            
            if (!resource.Emails.IsEmptyOrNull() || resource.Resolucion == 0)
            {
                UserRow user;
                if (row == null)
                {
                    user = Utils.GetUser(Convert.ToInt32(Authorization.UserId));
                    DateTime date = DateTime.ParseExact(request.bookingDate, "yyyyMMdd",
                                      CultureInfo.InvariantCulture);
                    row = EmailHelper.GetReservaRowForBody(request, user, date, resource.Nombre);
                }
                else
                {
                    user = Utils.GetUser(row.IdVecino);
                    row.Hora = row.Inicio.Value.MinutesToString();
                    row.IdVecinoUnidad = user.Unit;
                    row.IdVecinoUsername = user.DisplayName;
                    row.IdRecursoNombre = resource.Nombre;
                    if (row.Turno == null && row.Tipo != null)
                        row.Turno = row.Tipo;
                }
                if (row.Turno == null)
                    using (var connection = Utils.GetConnection())
                        row.Turno = new ReservasTiposRepository().Retrieve(connection, new RetrieveRequest() { EntityId = row.IdTipo }).Entity.Nombre;
                
                string emails = EmailHelper.GetRenderMails(resource.Emails, user, Utils.GetUser(row.IdVecino2));
                var message = TemplateHelper.RenderTemplate(MVC.Views.Default.Reservas.Mail.BookingEmail, new MailBody()
                {
                    Reserva = row,
                    Body = resource.MailBody,
                    Title = "Reserva realizada",
                    BeforeTable = ""
                });

                EmailHelper.Send($"Reserva {resource.Nombre} realizada", message, emails, CurrentNeigborhood.Get().LargeDisplayName, CurrentNeigborhood.Get().Mail, null, resource.Regulation);
            }
        }
        #endregion


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
