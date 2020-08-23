
namespace Barrios.Administration.Endpoints
{
    using Barrios.Modules.Administration.Barrios;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using Serenity.Web;
    using System;
    using System.Data;
    using System.Drawing;
    using System.Drawing.Imaging;
    using System.Web.Mvc;
    using MyRepository = Repositories.BarriosRepository;
    using MyRow = Entities.BarriosRow;

    [RoutePrefix("Services/Administration/Barrios"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class BarriosController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            SaveResponse response=new MyRepository().Create(uow, request);
            if (request.Entity.Logo != null)
            {
                string urlOriginal = UploadHelper.DbFilePath(request.Entity.Logo);
                ImageUploader.UpdateLogo(urlOriginal, request.Entity.ShortDisplayName);
            }
            return response;
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            SaveResponse obj= new MyRepository().Update(uow, request);
            if (request.Entity.Logo != null)
            {
                string urlOriginal = UploadHelper.DbFilePath(request.Entity.Logo);
                ImageUploader.UpdateLogo(urlOriginal, request.Entity.ShortDisplayName);
            }

            return obj;
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
    }
}
