
namespace Barrios.Contenidos.Endpoints
{
    using Barrios.Modules.Common.Utils;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using System.Web.Mvc;
    using MyRepository = Repositories.AvisosRepository;
    using MyRow = Entities.AvisosRow;

    [RoutePrefix("Services/Contenidos/Avisos"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class AvisosController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {

            request.Entity.DateInsert = DateTime.Now;

            request.Entity.UserInsert = Convert.ToInt32(Authorization.UserId);
            request.Entity.BarrioId = CurrentNeigborhood.Get().Id.Value;
            return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            request.Entity.DateUpdate = DateTime.Now;
            request.Entity.UserUpdate = Convert.ToInt32( Authorization.UserId);
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
    }
}
