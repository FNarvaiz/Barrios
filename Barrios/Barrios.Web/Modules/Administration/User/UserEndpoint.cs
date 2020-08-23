

namespace Barrios.Administration.Endpoints
{
    using Barrios.Modules.Common.ImportFile;
    using Barrios.Modules.Common.Utils;
    using Entities;
    using Repositories;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Services;
    using Serenity.Web;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.IO;
    using System.Linq;
    using System.Web.Mvc;
    using MyRepository = Repositories.UserRepository;
    using MyRow = Entities.UserRow;

    [RoutePrefix("Services/Administration/User"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class UserController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            if (request.Entity.ClientIdList == null)
                request.Entity.ClientIdList = new List<int>();
            request.Entity.ClientIdList.Add(CurrentNeigborhood.Get().Id.Value);

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
            try
            {
                return new MyRepository().Delete(uow, request);
            }
            catch (Exception ex)
            {
                throw new Exception("El usuario tiene registros a su nombre. Si quiere puede darlo de baja destildando la casilla ACTIVO.",ex);
            }
        }

        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public UndeleteResponse Undelete(IUnitOfWork uow, UndeleteRequest request)
        {
            return new MyRepository().Undelete(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            var response= new MyRepository().Retrieve(connection, request);
            var neibord = new MyRepository().GetUserBarrios(Convert.ToInt32(request.EntityId), CurrentNeigborhood.Get().Id.Value);
            response.Entity.Note = neibord.Note;
            response.Entity.Units = neibord.Units;
            return response;
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyRepository().List(connection, request);
        }
        private UserRow GetUser(List<MyRow> list,int appholdId)
        {
            foreach (var aux in list)
                if (aux.AppHoldId == appholdId)
                    return aux;
            return null;
        }
        
        private bool IsInvariantLetter(Char c)
        {
            return (c >= 'A' && c <= 'Z') ||
                (c >= 'a' && c <= 'z');
        }
        private  bool IsDigit(Char c)
        {
            return (c >= '0' && c <= '9');
        }

        private  bool IsValidEmailChar(Char c)
        {
            return IsInvariantLetter(c) ||
                IsDigit(c) ||
                c == '.' ||
                c == '_' ||
                c == '-' ||
                c == '@';
        }
        public bool IsValidUsername(string name)
        {
            if (name == null ||
                name.Length < 0)
                return false;

            var c = name[0];
            if (!IsInvariantLetter(c))
                return false;

            for (var i = 1; i < name.Length - 1; i++)
            {
                c = name[i];
                if (!IsValidEmailChar(c))
                    return false;
            }

            return true;
        }
        private string GeneratePassword(string Password)
        {
            if (Password.Length < 5)
                Password = Password + CurrentNeigborhood.Current.ShortDisplayName;
            return Password;
        }
        public string ImportFile(IDbConnection connection, ImportFileRequest request)
        {

            Int16 errors = 0;
            Int16 success = 0;
            var requestList = new ListRequest()
            {
                EqualityFilter = new Dictionary<string, object>()
            };
            requestList.EqualityFilter.Add("barrioid", CurrentNeigborhood.Get().Id);
            List<MyRow>list= List(connection, requestList).Entities;
            RoleRow NeigborhoodRole = new RoleRepository().GetOrCreateNeigborhoodRole();
            List<int> usersId = new List<int>();
            string listErrors = "";
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
                        var user = GetUser(list, Convert.ToInt32(lineSplit[0]));
                        if (user==null)
                        {
                            if (lineSplit[3].Contains("@"))
                            {
                                user = new UserRow()
                                {
                                    AppHoldId = Convert.ToInt32(lineSplit[0]),
                                    Username = lineSplit[1],
                                    Units = lineSplit[2],
                                    Email = lineSplit[3],
                                    Phone = lineSplit[5],
                                    Note = lineSplit[6].ToString().Replace('|', '\n').Replace('^', ','),
                                    IsActive = 1
                                };
                                if (!IsValidUsername(user.Username))
                                    user.Username = user.Email.Split('@')[0];
                                if (Utils.GetRequestString("select userid from users where username='" + user.Username + "'").Rows.Count > 0)
                                    user.Username = user.Username + random.Next();
                                user.DisplayName = user.Username;
                                user.Password = GeneratePassword(lineSplit[4]);


                                using (var connection2 = Utils.GetConnection())
                                {
                                    using (var UOW = new UnitOfWork(connection2))
                                    {
                                        SaveRequest<MyRow> requestUser = new SaveRequest<MyRow>() { Entity = user };

                                        Create(UOW, requestUser);
                                        UOW.Commit();
                                        usersId.Add(requestUser.Entity.UserId.Value);
                                        var emailBody = TemplateHelper.RenderTemplate(
                                         MVC.Views.Administration.User.UpdatedPageEmail, user);



                                        Common.EmailHelper.Send("Actualización de página", emailBody, user.Email + "," + CurrentNeigborhood.Get().Mail, CurrentNeigborhood.Get().LargeDisplayName, CurrentNeigborhood.Get().Mail);

                                        success++;
                                    }
                                }
                            }
                            else
                            {
                                throw new Exception(line);
                            }
                        }
                        else
                        {

                            user.Password = GeneratePassword(lineSplit[4]);
                            user.Units = lineSplit[2];
                            var emailBody = TemplateHelper.RenderTemplate(
                                         MVC.Views.Administration.User.UpdatedPageEmail, user);
                            Common.EmailHelper.Send("Actualización de página", emailBody, user.Email + "," + CurrentNeigborhood.Get().Mail, CurrentNeigborhood.Get().LargeDisplayName, CurrentNeigborhood.Get().Mail);

                            success++;
                        }
                    }
                    catch (Exception e)
                    {
                        errors++;
                        listErrors = listErrors +e.Message+"  "+ line + "\n";
                        Log.Error("Error al cargar esta linea:"+line, e, typeof(UserController));
                    }
                   // user
                }
                using (var UOW = Utils.GetUnitOfWork())
                    new UserRoleRepository().InserRoleDefault(UOW, usersId, NeigborhoodRole.RoleId.Value);
            }
            return "Se cargaron correctamente "+success+". Y hubo una candidad de "+errors+" con errores que no se cargaron";
        }
       
        private static string[] permissionsUsedFromScript;

        /// <summary>
        /// This declares a dynamic script with key 'UserData' that will be available from client side.
        /// We don't cache it at dynamic script manager, because dynamic scripts are cached globally,
        /// similar to static variables, not per user.
        /// </summary>
        [NonAction, DataScript("UserData", CacheDuration = -1), ServiceAuthorize]
        public ScriptUserDefinition GetUserData()
        {
            var result = new ScriptUserDefinition();
            var user = Authorization.UserDefinition as UserDefinition;

            if (user == null)
            {
                result.Permissions = new Dictionary<string, bool>();
                return result;
            }

            result.Username = user.Username;
            result.DisplayName = user.DisplayName;
            result.IsAdmin = user.Username == "admin";

            result.Permissions = TwoLevelCache.GetLocalStoreOnly("ScriptUserPermissions:" + user.Id, TimeSpan.Zero,
                UserPermissionRow.Fields.GenerationKey, () =>
                {
                    var permissions = new Dictionary<string, bool>(StringComparer.OrdinalIgnoreCase);

                    if (permissionsUsedFromScript == null)
                    {
                        permissionsUsedFromScript = new UserPermissionRepository().ListPermissionKeys().Entities
                            .Where(permissionKey =>
                            {
                                // this sends permission information for all permission keys to client side.
                                // if you don't need all of them to be available from script, filter them here.
                                // this is recommended for security / performance reasons...
                                return true;
                            }).ToArray();
                    }

                    foreach (var permissionKey in permissionsUsedFromScript)
                    {
                        if (Authorization.HasPermission(permissionKey))
                            permissions[permissionKey] = true;
                    }

                    return permissions;
                });

            return result;
        }
    }
}
