
namespace Barrios.Default.Endpoints
{
    using Barrios.Common;
    using Barrios.Modules.Common.Utils;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Text;
    using System.Web.Mvc;
    using MyRepository = Repositories.ReservasRepository;
    using MyRow = Entities.ReservasRow;

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
            return new MyRepository().List(connection, request);
        }
       
        [HttpPost]
        public string renderBookingStatus(IDbConnection connection, IdRequest request)
        {
            var idUser = Convert.ToInt32(Serenity.Authorization.UserDefinition.Id);
            bool first = true;
            var rowClass = "class";
            var dateClass = "date";
            var oddRow = false;
            var firstTurn = true;
            var fecha = DateTime.Now.AddDays(-20);
            var turnAnterior = -2;
            bool vacanteEscrita=false;
            var indexDay = 0;
            var pastDay = DateTime.Now.AddDays(-10);
            StringBuilder html = new StringBuilder();
            html.Append("<tbody><tr><th></th>");
            MyRepository repo = new MyRepository();
            List<MyRow> list = repo.BookingList(connection, request.ID);
            List<DateTime> days = repo.DaysList(list);
            foreach (var aux in days)
                html.Append("<th> " + aux.Day + "/" + aux.Month + " </th>");
            html.Append("</tr>");
            foreach (var aux in list)
            {
                var date = aux.Fecha.Value;
                if (turnAnterior != aux.Inicio) {
                    if (!first) {
                        html.Append("</tr>");

                    }
                    html.Append("<tr><td>" + aux.Turno + "</td>");
                    fecha = aux.Fecha.Value;
                    pastDay = aux.Fecha.Value;
                    vacanteEscrita = false;
                    first = false;
                    firstTurn = true;
                    indexDay = 0;
                    turnAnterior = aux.Inicio.Value;
                }
                if (pastDay != date && !firstTurn) {
                    html.Append("</td>");
                    firstTurn = true;
                }
               /* while (days[indexDay] != date)
                {
                    html.Append("<td></td>");
                    indexDay++;
                    firstTurn = true;
                }*/
                if (firstTurn)
                {
                    html.Append("<td>");
                    firstTurn = false;
                }
                if (aux.Finalizado.Value) {
                    if (pastDay != date)
                        pastDay = date;
                }
                else
                {
                    if (aux.Reservable.Value)
                    {
                        if (1 == 1)// Condicionales segun el barrio
                        {
                            if (aux.Estado == "Disponible" && aux.Valido.Value)
                            {
                                html.Append("<button onclick='Booking.bookingsTake(this," + request.ID + ", \"" + date.ToString("yyyyMMdd") + "\"," +
                                    aux.Inicio + "," + aux.IdTipo + "," + aux.Required_Vecino.ToString().ToLower() + ")' " +
                                    "type = 'button' class='btn btn-success btn-flat'>" + aux.Tipo + "</button>");
                            }
                        }
                        else
                        {
                            html.Append("<button title = 'Bloqueado' type = 'button' class='btn btn-default btn-flat'><i class='fa fa-align-center'>No disponible</i></button>");
                        }
                    }
                    else if (aux.Estado == "Vacante")
                    {
                        if (!vacanteEscrita)
                        {
                            html.Append("<button  type = 'button' class='btn btn-default btn-flat'>Vacante</button>");
                            vacanteEscrita = true;
                        }
                    }
                    else if (aux.IdVecino == idUser)
                    {
                        
                            if (!aux.IdVecinoUnidadExtra.IsEmptyOrNull())
                                html.Append("<button  type = 'button' class='btn btn-default btn-flat'>" + aux.TipoReservaHecha + " con lote " + aux.IdVecinoUnidadExtra + "</button>");
                            else
                                html.Append("<button  type = 'button' class='btn btn-default btn-flat'>" + aux.TipoReservaHecha + " (reserva propia)</button>");
                        

                    }
                    else if (aux.IdVecino2 == idUser) {
                        if (turnAnterior != aux.Inicio)
                            html.Append("<button  type = 'button' class='btn btn-default btn-flat'>" + aux.TipoReservaHecha + " con lote " + aux.IdVecinoUnidad + "</button>");
                    }
                    else
                    {
                        if (turnAnterior != aux.Inicio)
                        {
                            if (!aux.IdVecinoUnidadExtra.IsEmptyOrNull())
                                html.Append("<button  type = 'button' class='btn btn-danger btn-flat'>" + aux.TipoReservaHecha + ": " + aux.IdVecinoUnidad + " y " + aux.IdVecinoUnidadExtra + "</button>");
                            else
                                html.Append("<button  type = 'button' class='btn btn-danger btn-flat'>" + aux.TipoReservaHecha + ": " + aux.IdVecinoUnidad + "</button>");
                        }
                    }
                }
                pastDay = date;
                turnAnterior = aux.Inicio.Value;
            }
            html.Append("</td></tr></tbody>");

            return html.ToString();
        }
        [HttpPost]
        public string bookingsTake(IDbConnection connection, BookingTakeRequest request)
        {
            new MyRepository().BookingTake(connection,request);
            return renderBookingStatus(Utils.GetConnection(), new IdRequest() { ID = request.resourceId });
        }
    }


    public class IdRequest : ServiceRequest
    {
       public int ID { get; set; }
    }
    public class BookingTakeRequest : ServiceRequest
    {
        public Int16 resourceId { get; set; }
        public string bookingDate { get; set; }
        public Int16 turnStart { get; set; }
        public Int16 turnType { get; set; }
        public Int16 extraNeighborUnit { get; set; }
    }
}
