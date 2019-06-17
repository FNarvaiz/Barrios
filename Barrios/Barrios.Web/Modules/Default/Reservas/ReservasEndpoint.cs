
namespace Barrios.Default.Endpoints
{
    using Barrios.Common;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
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
            string html = "<tbody><tr>    <th> Fecha </th>    <th> Nombre </th >    <th> Boton </th ></tr>";
            foreach (var aux in new MyRepository().BookingList(connection, request.ID))
            {
                html= html+"<tr>" +
                    "    <td>" +
                    "        <div>" + aux.Fecha.Value.ToShortDateString() + " </div>" +
                    "</td>" +
                    "<td> " +
                    "<div class='btn-group-vertical'>" + aux.IdVecinoDisplayName + " </div> " +
                    "</td> " +
                    "<td>" +
                    " <div class='btn-group-vertical'>" +
                    " <button type = 'button' class='btn btn-default btn-flat'>" +
                    "<i class='fa fa-align-left'></i>" +
                    "</button> " +
                    "</div>    " +
                    "</td>" +
                    "</tr>"; 
                    };
            html = html + "</tbody>";



            return html;
        }
    }


    public class IdRequest{
       public int ID { get; set; }
    }
}
