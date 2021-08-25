
namespace Barrios.Contenidos.Endpoints
{
    using Barrios.Modules.Common.Utils;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Web.Mvc;
    using MyRepository = Repositories.ComisionesRepository;
    using MyRow = Entities.ComisionesRow;

    [RoutePrefix("Services/Contenidos/Comisiones"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class ComisionesController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            request.Entity.DateInsert = DateTime.Now;
            request.Entity.BarrioId = CurrentNeigborhood.Get().Id;
            return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            request.Entity.DateUpdate = DateTime.Now;
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
            Utils.AddNeigborhoodFilter(request);
            return new MyRepository().List(connection, request);
        }
        [HttpPost]
        public string SendMail(IDbConnection connection, EmailRequest request)
        {
            Common.EmailHelper.Send("Consulta por página de comisiones de "+ Authorization.UserDefinition.Email, request.Message,request.Mails+","+ Authorization.UserDefinition.Email, CurrentNeigborhood.Get().LargeDisplayName, CurrentNeigborhood.Get().Mail);

            return "El mensaje se ha enviado correctamente, en breve le responderemos.";
        }
        public List<MyRow> ListView(IDbConnection connection)
        {
            return new MyRepository().ListView(connection, CurrentNeigborhood.Get().Id);
        }
    }

}
