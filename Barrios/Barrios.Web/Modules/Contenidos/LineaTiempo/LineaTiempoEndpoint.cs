
namespace Barrios.Contenidos.Endpoints
{
    using Barrios.Administration.Entities;
    using Barrios.Administration.Repositories;
    using Barrios.Modules.Common.Utils;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Net.Mail;
    using System.Web.Mvc;
    using MyRepository = Repositories.LineaTiempoRepository;
    using MyRow = Entities.LineaTiempoRow;

    [RoutePrefix("Services/Contenidos/LineaTiempo"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class LineaTiempoController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            request.Entity.Userid = Convert.ToInt32(Authorization.UserId);
            request.Entity.BarrioId = CurrentNeigborhood.Get().Id.Value;
            return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            request.Entity.Userid = Convert.ToInt32(Authorization.UserId);
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
        private string Send(List<UserRow> users, MyRow timeLineObj)
        {
            if (timeLineObj.Aprobado.Value)
            {
                if (users.Count > 0)
                {
                    List<MailAddress> mails = new List<MailAddress>();
                    foreach (var aux in users)
                    {
                        mails.Add(new MailAddress(aux.Email, aux.DisplayName));
                        if (!aux.Email_Others.IsEmptyOrNull())
                        {
                            foreach (var mailOther in aux.Email_Others.Split('\n'))
                                if(!mailOther.Trim().IsEmptyOrNull())
                                    mails.Add(new MailAddress(mailOther.Trim(), aux.DisplayName));
                        }
                    }
                    Common.EmailHelper.Send(timeLineObj.Nombre, timeLineObj.ContenidoTexto, "",
                        CurrentNeigborhood.Get().LargeDisplayName,
                        CurrentNeigborhood.Get().Mail, mails, timeLineObj.ArchivoFilename);
                    return "Se han enviado a los " + users.Count;
                }
                else
                    throw new Exception("No hay usuarios a los que mandar el correo.");
            }
            else
                throw new Exception("Se necesita aprobar antes de poder enviar el mail");
        }

        [HttpPost]
        public string SendMails(IDbConnection connection, IdRequest request)
        {
            connection = Utils.GetConnection();
            MyRow timeLineObj = Retrieve(connection, new RetrieveRequest() { EntityId = request.Id }).Entity;
            ListRequest userRequest = new ListRequest() { EqualityFilter = new Dictionary<string, object>() };
            userRequest.EqualityFilter["BarrioId"] = CurrentNeigborhood.Get().Id;
            List<UserRow> users = new UserRepository().List(connection, userRequest).Entities;
            return Send(users, timeLineObj);
        }

        [HttpPost]
        public string SendMailsForSubNeigborhoob(IDbConnection connection, MailsRequest request)
        {
            connection = Utils.GetConnection();
            MyRow timeLineObj = Retrieve(connection, new RetrieveRequest() { EntityId = request.LineTimeId }).Entity;
            ListRequest userRequest = new ListRequest() { EqualityFilter = new Dictionary<string, object>() };
            userRequest.EqualityFilter["BarrioId"] = CurrentNeigborhood.Get().Id;
            userRequest.Criteria = new Criteria("subBarrioId").In<string>( request.SubNeigborhoob);
            List<UserRow> users = new UserRepository().List(connection, userRequest).Entities;
            return Send(users, timeLineObj);
        }
    }
    public class MailsRequest : ServiceRequest
    {
        public Int32 LineTimeId { get; set; }
        public string[] SubNeigborhoob { get; set; }
    }
}
