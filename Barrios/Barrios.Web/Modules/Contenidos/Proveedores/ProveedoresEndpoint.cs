
namespace Barrios.Contenidos.Endpoints
{
    using Barrios.Contenidos.Entities;
    using Barrios.Modules.Common.Utils;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Web.Mvc;
    using MyRepository = Repositories.ProveedoresRepository;
    using MyRow = Entities.ProveedoresRow;

    [RoutePrefix("Services/Contenidos/Proveedores"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class ProveedoresController : ServiceEndpoint
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
            request.Entity.BarrioId = CurrentNeigborhood.Get().Id.Value;
            request.Entity.UserUpdate = Convert.ToInt32(Authorization.UserId);
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
        public List<MyRow> ListRatings()
        {
            return new MyRepository().ListRatings(Utils.GetConnection(),CurrentNeigborhood.Get().Id,Authorization.UserId);
        }
        [HttpPost]
        public string Rating(IDbConnection connection, RatingRequest request)
        {
            ListRequest requestValoraciones = new ListRequest() { EqualityFilter = new Dictionary<string, object>() };
            requestValoraciones.EqualityFilter["Userid"] = Authorization.UserId;
            requestValoraciones.EqualityFilter["IdProveedor"] = request.ID;
            var controllerValoraciones = new ProveedoresValoracionesController();
            List<ProveedoresValoracionesRow> list= controllerValoraciones.List(connection, requestValoraciones).Entities;
            using (var uow = Utils.GetUnitOfWork()) { 
                if (list == null || list.Count == 0)
               
                    controllerValoraciones.Create(uow, new SaveRequest<ProveedoresValoracionesRow>()
                    {
                        Entity = new ProveedoresValoracionesRow()
                        {
                            Userid = Convert.ToInt32(Authorization.UserId),
                            IdProveedor = request.ID,
                            Valoracion = request.Rating,
                            Fecha = DateTime.Now
                        }
                    });
                else
                {
                    list[0].Valoracion = request.Rating;
                    list[0].Fecha = DateTime.Now;
                    controllerValoraciones.Update(uow, new SaveRequest<ProveedoresValoracionesRow>()
                    {
                        Entity = list[0],
                        EntityId= list[0].Id
                        

                    });
                }
                uow.Commit();
            }
            return "Se guardo su valoración sobre este proveedor";
        }
    }
}
