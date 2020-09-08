
namespace Barrios.Contenidos.Endpoints
{
    using Barrios.Administration.Endpoints;
    using Barrios.Administration.Entities;
    using Barrios.Administration.Repositories;
    using Barrios.Modules.Common.ImportFile;
    using Barrios.Modules.Common.Utils;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using Serenity.Web;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.IO;
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
        private void Sending(MyRow timeLineObj, List<MailAddress> mails)
        {
            Common.EmailHelper.Send(timeLineObj.Nombre, timeLineObj.ContenidoTexto, "",
                                CurrentNeigborhood.Get().LargeDisplayName,
                                CurrentNeigborhood.Get().Mail, mails, timeLineObj.ArchivoFilename);
            mails.Clear();
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
                        if (mails.Count > 90)
                            Sending(timeLineObj, mails);
                        if(!aux.Email.IsEmptyOrNull())
                            mails.Add(new MailAddress(aux.Email, aux.DisplayName));
                        if (!aux.Email_Others.IsEmptyOrNull())
                        {
                            foreach (var mailOther in aux.Email_Others.Split('\n'))
                                if(!mailOther.Trim().IsEmptyOrNull())
                                    mails.Add(new MailAddress(mailOther.Trim(), aux.DisplayName));
                        }
                    }
                    if(mails.Count>0)
                        Sending(timeLineObj, mails);
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
            using (var connection2 = Utils.GetConnection())
            {
                MyRow timeLineObj = Retrieve(connection2, new RetrieveRequest() { EntityId = request.Id }).Entity;
                ListRequest userRequest = new ListRequest() { EqualityFilter = new Dictionary<string, object>() };
                userRequest.EqualityFilter["BarrioId"] = CurrentNeigborhood.Get().Id;
                List<UserRow> users = new UserRepository().List(connection2, userRequest).Entities;
                return Send(users, timeLineObj);
            }
        }

        [HttpPost]
        public string SendMailsForSubNeigborhoob(IDbConnection connection, MailsRequest request)
        {
            using (var connection2 = Utils.GetConnection())
            {
                MyRow timeLineObj = Retrieve(connection2, new RetrieveRequest() { EntityId = request.LineTimeId }).Entity;
                ListRequest userRequest = new ListRequest() { EqualityFilter = new Dictionary<string, object>() };
                userRequest.EqualityFilter["BarrioId"] = CurrentNeigborhood.Get().Id;
                userRequest.Criteria = new Criteria("subBarrioId").In<string>(request.SubNeigborhoob);
                List<UserRow> users = new UserRepository().List(connection2, userRequest).Entities;
                return Send(users, timeLineObj);
            }
        }
        [HttpPost]
        public string ImportFile(IDbConnection connection, ImportFileRequest request)
        {
            Int16 errors = 0;
            Int16 success = 0;
            List<UserRow> users = new UserController().List(connection, new ListRequest()).Entities;

            using (StreamReader sr = new StreamReader(UploadHelper.DbFilePath(request.FileName)))
            {

                Int16[] category = new Int16[] { 257, 260, 261, 262, 263, 265 };
                string line;
                Random random = new Random();
                while (sr.Peek() >= 0)
                {

                    line = sr.ReadLine();

                    try
                    {
                        string[] lineSplit = line.Split(',');
                        var row = new MyRow()
                        {

                            IdCategoria = category[Convert.ToInt32(lineSplit[1]) - 1],
                            Nombre = lineSplit[2].ToString(),
                            Userid = 1,
                            BarrioId = CurrentNeigborhood.Current.Id,
                            PeriodoFecha = DateTime.FromBinary(Convert.ToInt64(lineSplit[5])),
                            ContenidoTexto = lineSplit[6].ToString().Replace('|', '\n').Replace( '^', ',')

                        };
                        if (lineSplit[4].ToString().Trim() != "")
                            row.ArchivoFilename = "TimeLineFiles/" + lineSplit[4].ToString().Trim();
                        
                        using (var connection2 = Utils.GetConnection())
                        {
                            using (var UOW = new UnitOfWork(connection2))
                            {
                                UOW.Connection.Insert<MyRow>(row);
                                UOW.Commit();
                                success++;
                            }
                        }
                    }
                    catch (Exception e)
                    {
                        errors++;
                        Log.Error("Error al cargar esta linea:" + line, e, typeof(LineaTiempoController));
                    }
                    // user
                }
            }
            return "Se cargaron correctamente " + success + ". Y hubo una candidad de " + errors + " con errores que no se cargaron";
        }
    }
    public class MailsRequest : ServiceRequest
    {
        public Int32 LineTimeId { get; set; }
        public string[] SubNeigborhoob { get; set; }
    }
}
