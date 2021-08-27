﻿
namespace Barrios.Administration.Repositories
{
    using Barrios.Administration.Entities;
    using Barrios.Modules.Common.Utils;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using Serenity.Web.Providers;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.Configuration;
    using System.Data;
    using System.Web.Security;
    using MyRow = Entities.UserRow;
    using System.Linq;
    using Barrios.Contenidos;
    using UserPreferenceRow = Common.Entities.UserPreferenceRow;
    using Barrios.Contenidos.Entities;

    public partial class UserRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }
        public static readonly bool isPublicDemo;

        static UserRepository()
        {
            isPublicDemo = ConfigurationManager.AppSettings["IsPublicDemo"] == "1";
        }

        public static void CheckPublicDemo(int? userID)
        {
            if (userID == 1 && isPublicDemo)
                throw new ValidationException("Sorry, but no changes are allowed in public demo on ADMIN user!");
        }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Update);
        }
        public bool IsOnlyUserInThisNeigbordhoob(int userId)
        {
            using (var conn = Utils.GetConnection())
                return conn.Query<int>($" SELECT  count(*) FROM [Users-Barrios] where userid={userId}").Single()==1;            
        }
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
          /*  new SqlDelete(UsersBarriosRow.Fields.TableName)
                  .Where(UsersBarriosRow.Fields.UserId == Convert.ToInt32(request.EntityId))
                  .Execute(uow.Connection, ExpectedRows.Ignore);
            return new DeleteResponse();*/
            return new MyDeleteHandler().Process(uow, request);
        }

        internal bool isThisNeigborhood( string UsernameBD, string username="", short? id=null)
        {
            if (id != null && username != "")
                UsernameBD = GetMail(username, id);
            return (UsernameBD != "");
        }
        internal void DeleteOnlyThisNeigborhood(DeleteRequest request)
        {
            Utils.InsertOrUpdateString($"delete [users-barrios] where userid={request.EntityId} and barrioId={CurrentNeigborhood.Get().Id}");
        }
        internal string GetMail(string username, short? id)
        {
            DataTable DT = Utils.GetRequestString(" SELECT  U.Username , UB.owner," +
              "  case when UB.Limitdate is not null  and UB.Limitdate>GETDATE() then 1 else 0 end as inquilino, " +
              "  U.isActive, U.InsertDate " +
              "  FROM [Users] U " +
              "  inner join [Users-Barrios] UB " +
              "  on UB.UserId = U.UserId " +
              $"  where UB.BarrioId = {id} and (Username = {username.ToSql()} or DisplayName = {username.ToSql()} or Email = {username.ToSql()})");

            if (DT.Rows.Count == 0)
                return "";
            if (!Convert.ToBoolean(DT.Rows[0][1]) && !Convert.ToBoolean(DT.Rows[0][2]))
                throw new ValidationError("AuthenticationError", "Error de login:\nEste usuario aun no tiene permisos de acceso.\nLa administración se los otorgará a la brevedad. Aguarde 72hs. Gracias"); 
           else if (!Convert.ToBoolean(DT.Rows[0][3]))
                throw new ValidationError("AuthenticationError", "Error de login:\nEste usuario no se encuentra activo");
            return Convert.ToString(DT.Rows[0][0]);
        }
        public UndeleteResponse Undelete(IUnitOfWork uow, UndeleteRequest request)
        {
            return new MyUndeleteHandler().Process(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {

            return new MyRetrieveHandler().Process(connection, request);
        }
        public UsersBarriosRow GetUserBarrios(int userId, int barrioId)
        {
            using (var conn = Utils.GetConnection())
                return conn.Query<UsersBarriosRow>($" SELECT  * FROM [Users-Barrios] where BarrioId = {barrioId} and userid={userId}").Single();
        }
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler().Process(connection, request);
        }

        public static string ValidateDisplayName(IDbConnection connection, string displayName, Int32? existingUserId)
        {
            displayName = displayName.TrimToNull();

            if (displayName == null)
                throw DataValidation.RequiredError(fld.DisplayName.Name, fld.DisplayName.Title);

            return displayName;
        }

        public static string ValidatePassword(string username, string password, bool isNewUser)
        {
            password = password.TrimToNull();

            if (password == null ||
                password.Length < 5)
                throw new ValidationError("PasswordLength", "Password",
                    String.Format(Texts.Validation.MinRequiredPasswordLength, 5));

            return password;
        }

        private class MySaveHandler : SaveRequestHandler<MyRow>
        {
            private string password;

            public static MyRow GetUser(IDbConnection connection, BaseCriteria filter)
            {
                var row = new MyRow();
                if (new SqlQuery().From(row)
                    .Select(
                        fld.UserId,
                        fld.Username,
                        fld.DisplayName,
                        fld.PasswordHash,
                        fld.PasswordSalt,
                        fld.IsActive)
                    .Where(filter)
                    .GetFirst(connection))
                {
                    return row;
                }

                return null;
            }

            protected override void GetEditableFields(HashSet<Field> editable)
            {
                base.GetEditableFields(editable);

                if (!Authorization.HasPermission(Administration.PermissionKeys.Security))
                {
                    editable.Remove(fld.Source);
                    editable.Remove(fld.IsActive);
                }
            }

            private static bool IsInvariantLetter(Char c)
            {
                return (c >= 'A' && c <= 'Z') ||
                    (c >= 'a' && c <= 'z');
            }

            private static bool IsDigit(Char c)
            {
                return (c >= '0' && c <= '9');
            }

            private static bool IsValidEmailChar(Char c)
            {
                return IsInvariantLetter(c) ||
                    IsDigit(c) ||
                    c == '.' ||
                    c == '_' ||
                    c == '-' ||
                    c == '@';
            }

            public static bool IsValidUsername(string name)
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

            public static string ValidateUsername(IDbConnection connection, string username, Int32? existingUserId)
            {
                username = username.TrimToNull();

                if (username == null)
                    throw DataValidation.RequiredError(fld.Username.Name, fld.Username.Title);

                if (!IsValidUsername(username))
                    throw new ValidationError("InvalidUsername", "Username",
                        "Usernames should start with letters, only contain letters and numbers!");

                var existing = GetUser(connection,
                    new Criteria(fld.Username) == username |
                    new Criteria(fld.Username) == username.Replace('I', 'İ'));

                //if (existing != null && existingUserId != existing.UserId)
                //    throw new ValidationError("UniqueViolation", "Username",
                //        "A user with same name exists. Please choose another!");

                return username;
            }
            protected override void ValidateRequest()
            {
                base.ValidateRequest();

                if (IsUpdate)
                {
                    CheckPublicDemo(Row.UserId);

                    if (Row.IsAssigned(fld.Password) && !Row.Password.IsEmptyOrNull())
                        password = Row.Password = ValidatePassword(Old.Username, Row.Password, false);

                    if (Row.Username != Old.Username)
                        Row.Username = MySaveHandler.ValidateUsername(this.Connection, Row.Username, Old.UserId.Value);

                    if (Row.DisplayName != Old.DisplayName)
                        Row.DisplayName = ValidateDisplayName(this.Connection, Row.DisplayName, Old.UserId.Value);
                }

                if (IsCreate)
                {
                    this.Row.Username = ValidateUsername(this.Connection, this.Row.Username, null);
                    this.Row.DisplayName = ValidateDisplayName(this.Connection, this.Row.DisplayName, null);
                    password = ValidatePassword(Row.Username, Row.Password, true);
                }
            }

            protected override void SetInternalFields()
            {
                base.SetInternalFields();

                if (IsCreate)
                {
                    Row.Source = "site";
                    Row.IsActive = Row.IsActive ?? 1;
                }

                if (IsCreate || !Row.Password.IsEmptyOrNull())
                {
                    string salt = null;
                    Row.PasswordHash = GenerateHash(password, ref salt);
                    Row.PasswordSalt = salt;
                }
            }
            protected override void BeforeSave()
            {
                base.BeforeSave();
                if(IsUpdate)
                    new SqlDelete(UsersBarriosRow.Fields.TableName)
                        .Where(UsersBarriosRow.Fields.UserId == Row.UserId.Value && UsersBarriosRow.Fields.BarrioId == CurrentNeigborhood.Get().Id.Value)
                        .Execute(Connection, ExpectedRows.Ignore);
            }
            protected override void AfterSave()
            {
                base.AfterSave();
                var sqlUpdate = new SqlUpdate(UsersBarriosRow.Fields.TableName)
                    .Set("Note", Row.Note)
                    .Set("Units", Row.Units)
                    .Set("SubBarrioId", Row.SubBarrioId)
                    .Set("LimitDate", Row.LimitDate)
                    .Set("Owner", Row.Owner)
                    .Where(UsersBarriosRow.Fields.UserId == Row.UserId.Value && UsersBarriosRow.Fields.BarrioId == CurrentNeigborhood.Get().Id.Value);
                //if (Row.Note == null)
                //    sqlUpdate.SetNull(Row.Note);
                //else
                //    sqlUpdate.Set("Note", Row.Note);
                sqlUpdate.Execute(Connection, ExpectedRows.Ignore);
                BatchGenerationUpdater.OnCommit(this.UnitOfWork, fld.GenerationKey);
            }
        }

        public static string CalculateHash(string password, string salt)
        {
            return SiteMembershipProvider.ComputeSHA512(password + salt);
        }

        public static string GenerateHash(string password, ref string salt)
        {
            salt = salt ?? Membership.GeneratePassword(5, 1);
            return CalculateHash(password, salt);
        }
        public static UserRow GetNewUser(int id)
        {
            DataRow DR = Utils.GetRequestString($"select email,UB.units,DisplayName,UB.SubBarrioId from users U inner join [Users-Barrios] UB  on U.UserId=UB.UserId  WHERE  UB.BarrioId={CurrentNeigborhood.Get().Id} and  UB.UserId=" + id).Rows[0];
            return new MyRow { UserId = id, Email = DR[0].ToString(), Units = DR[1].ToString(), DisplayName = DR[2].ToString(), SubBarrioId = (short?)DR[3] };

        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow>
        {
            protected override void ValidateRequest()
            {
                base.ValidateRequest();

                CheckPublicDemo(Row.UserId);
            }

            protected override void OnBeforeDelete()
            {
                base.OnBeforeDelete();
                new SqlDelete(Default.Entities.ReservasRow.Fields.TableName)
                   .Where(Default.Entities.ReservasRow.Fields.IdVecino == Row.UserId.Value || Default.Entities.ReservasRow.Fields.IdVecino2 == Row.UserId.Value)
                   .Execute(Connection, ExpectedRows.Ignore);
                
                new SqlDelete(UsersBarriosRow.Fields.TableName)
                   .Where(UsersBarriosRow.Fields.UserId == Row.UserId.Value)
                   .Execute(Connection, ExpectedRows.Ignore);

                new SqlDelete(UserPreferenceRow.Fields.TableName)
                    .Where(UserPreferenceRow.Fields.UserId == Row.UserId.Value)
                    .Execute(Connection, ExpectedRows.Ignore);

                new SqlDelete(Entities.UserRoleRow.Fields.TableName)
                    .Where(Entities.UserRoleRow.Fields.UserId == Row.UserId.Value)
                    .Execute(Connection, ExpectedRows.Ignore);

                new SqlDelete(Entities.UserPermissionRow.Fields.TableName)
                    .Where(Entities.UserPermissionRow.Fields.UserId == Row.UserId.Value)
                    .Execute(Connection, ExpectedRows.Ignore);

                new SqlDelete(Perfil.Entities.VecinosMascotasRow.Fields.TableName)
                    .Where(Perfil.Entities.VecinosMascotasRow.Fields.Userid == Row.UserId.Value)
                    .Execute(Connection, ExpectedRows.Ignore);

                new SqlDelete(Perfil.Entities.VecinosActividadesRow.Fields.TableName)
                    .Where(Perfil.Entities.VecinosActividadesRow.Fields.Userid == Row.UserId.Value)
                    .Execute(Connection, ExpectedRows.Ignore);

                new SqlDelete(Perfil.Entities.VecinosVisitantesFrecuentesRow.Fields.TableName)
                    .Where(Perfil.Entities.VecinosVisitantesFrecuentesRow.Fields.Userid == Row.UserId.Value)
                    .Execute(Connection, ExpectedRows.Ignore);

                new SqlDelete(Perfil.Entities.VecinosEventosRow.Fields.TableName)
                    .Where(Perfil.Entities.VecinosEventosRow.Fields.Userid == Row.UserId.Value)
                    .Execute(Connection, ExpectedRows.Ignore);

                new SqlDelete(Perfil.Entities.VecinosEventosConcurrentesRow.Fields.TableName)
                    .Where(Perfil.Entities.VecinosEventosConcurrentesRow.Fields.Userid == Row.UserId.Value)
                    .Execute(Connection, ExpectedRows.Ignore);
            }
        }

        private class MyUndeleteHandler : UndeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> {
            
        }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}
