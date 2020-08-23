
namespace Barrios.Perfil.Endpoints
{
    using Barrios.Administration.Endpoints;
    using Barrios.Administration.Entities;
    using Barrios.Modules.Common.ImportFile;
    using Barrios.Modules.Common.Utils;
    using Barrios.Modules.ImportFiles;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using Serenity.Web;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.IO;
    using System.Web.Mvc;
    using MyRepository = Repositories.VecinosMascotasRepository;
    using MyRow = Entities.VecinosMascotasRow;

    [RoutePrefix("Services/Perfil/VecinosMascotas"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class VecinosMascotasController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            request.Entity.Userid = Convert.ToInt32(Authorization.UserId);
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
        public string ImportFile(IDbConnection connection, ImportFileRequest request)
        {
            Int16 errors = 0;
            Int16 success = 0;
            List<UserRow> users = new UserController().List(connection, new ListRequest()).Entities;
           
            using (StreamReader sr = new StreamReader(UploadHelper.DbFilePath(request.FileName)))
            {

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
                            Userid = Convert.ToInt32(lineSplit[0]),
                            Nombre= lineSplit[1].ToString(),
                            IdTipo = Convert.ToInt16(lineSplit[2]),
                            Raza= lineSplit[3].ToString()
                           
                        };
                        if (lineSplit[5].ToString().Trim() != "")
                            row.Foto = "UserImage/Mascotas/Perfil/" + lineSplit[5].ToString().Trim();
                        row.Userid = ImportMethods.GetHoldUser(users, row.Userid).UserId;

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
                        Log.Error("Error al cargar esta linea:" + line, e, typeof(VecinosMascotasController));
                    }
                    // user
                }
            }
            return "Se cargaron correctamente " + success + ". Y hubo una candidad de " + errors + " con errores que no se cargaron";
        }
    }
}
