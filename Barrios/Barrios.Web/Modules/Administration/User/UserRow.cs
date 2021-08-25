
namespace Barrios.Administration.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Administration"), TableName("Users")]
    [DisplayName("Users"), InstanceName("User")]
    [ReadPermission(PermissionKeys.Security)]
    [ModifyPermission(PermissionKeys.Security)]
    [LookupScript(Permission = "User:Reservas")]
    public sealed class UserRow : LoggingRow, IIdRow, INameRow, IIsActiveRow
    {
        [DisplayName("User Id"), Identity,ForeignKey("[dbo].[Users-barrios]", "UserId"), LeftJoin("jBarrio")]
        public Int32? UserId
        {
            get { return Fields.UserId[this]; }
            set { Fields.UserId[this] = value; }
        }
        [DisplayName("Barrio Id"), Expression("jBarrio.BarrioId")]
        public Int32? BarrioId
        {
            get { return Fields.BarrioId[this]; }
            set { Fields.BarrioId[this] = value; }
        }
        [DisplayName("Fecha limite de alquiler"), Expression("jBarrio.LimitDate")]
        public DateTime? LimitDate
        {
            get { return Fields.LimitDate[this]; }
            set { Fields.LimitDate[this] = value; }
        }
        
        [DisplayName("Username"), Size(100), NotNull, QuickSearch, LookupInclude]
        public String Username
        {
            get { return Fields.Username[this]; }
            set { Fields.Username[this] = value; }
        }
        [DisplayName("Roles"), Expression("STUFF((SELECT ',' + R.RoleName AS[text()] FROM[UserRoles] UR join[Roles] R ON UR.RoleId = R.RoleId where UR.UserId = T0.userid FOR XML PATH('')), 1, 1, NULL)")]
            //Expression(" (SELECT STRING_AGG(R.RoleName,',') FROM [Barrios].[dbo].[UserRoles] UR join[Roles] R ON UR.RoleId = R.RoleId where UR.UserId = T0.userid)")]
        public String Roles
        {
            get { return Fields.Roles[this]; }
            set { Fields.Roles[this] = value; }
        }

        [DisplayName("Source"), Size(4), NotNull, Insertable(false), Updatable(false), DefaultValue("site")]
        public String Source
        {
            get { return Fields.Source[this]; }
            set { Fields.Source[this] = value; }
        }

        [DisplayName("Password Hash"), Size(86), NotNull, Insertable(false), Updatable(false), MinSelectLevel(SelectLevel.Never)]
        public String PasswordHash
        {
            get { return Fields.PasswordHash[this]; }
            set { Fields.PasswordHash[this] = value; }
        }

        [DisplayName("Password Salt"), Size(10), NotNull, Insertable(false), Updatable(false), MinSelectLevel(SelectLevel.Never)]
        public String PasswordSalt
        {
            get { return Fields.PasswordSalt[this]; }
            set { Fields.PasswordSalt[this] = value; }
        }

        [DisplayName("Display Name"), Size(100), NotNull, LookupInclude]
        public String DisplayName
        {
            get { return Fields.DisplayName[this]; }
            set { Fields.DisplayName[this] = value; }
        }

        [DisplayName("Email"), Size(100)]
        public String Email
        {
            get { return Fields.Email[this]; }
            set { Fields.Email[this] = value; }
        }
        [DisplayName("Otros emails"), Size(200),Placeholder("Ingrese lo mails,1 por linea."),TextAreaEditor()]
        public String Email_Others
        {
            get { return Fields.Email_Others[this]; }
            set { Fields.Email_Others[this] = value; }
        }

        [DisplayName("User Image"), Size(100)]
        [ImageUploadEditor(FilenameFormat = "UserImage/~", CopyToHistory = true)]
        public String UserImage
        {
            get { return Fields.UserImage[this]; }
            set { Fields.UserImage[this] = value; }
        }

        [DisplayName("Password"), Size(50), NotMapped]
        public String Password
        {
            get { return Fields.Password[this]; }
            set { Fields.Password[this] = value; }
        }

        [NotNull, DisplayName("Activo"), Updatable(true)]
        public Int16? IsActive
        {
            get { return Fields.IsActive[this]; }
            set { Fields.IsActive[this] = value; }
        }
        [DisplayName("Propiertario"), Expression("jBarrio.Owner")]
        public Boolean? Owner
        {
            get { return Fields.Owner[this]; }
            set { Fields.Owner[this] = value; }
        }
        [DisplayName("Confirm Password"), Size(50), NotMapped]
        public String PasswordConfirm
        {
            get { return Fields.PasswordConfirm[this]; }
            set { Fields.PasswordConfirm[this] = value; }
        }
        [DisplayName("Unidad"),Expression( "jBarrio.Units")]
        public String Units
        {
            get { return Fields.Units[this]; }
            set { Fields.Units[this] = value; }
        }
        [DisplayName("Notas"),TextAreaEditor(),Expression("jBarrio.Note")]
        public String Note
        {
            get { return Fields.Note[this]; }
            set { Fields.Note[this] = value; }
        }
        [DisplayName("Telefono"),  Size(50)]
        public String Phone
        {
            get { return Fields.Phone[this]; }
            set { Fields.Phone[this] = value; }
        }
        [DisplayName("Sub Barrio"),Column("subBarrioId"), Size(50),LookupEditor("Settings.Subbarrios")]
        public short? subBarrioId
        {
            get { return Fields.subBarrioId[this]; }
            set { Fields.subBarrioId[this] = value; }
        }
        [DisplayName("Lista de barrios"), NotMapped]
        //[LookupEditor(typeof(ClientRow), Multiple = true)]
        [LinkingSetRelation(typeof(UsersBarriosRow), "UserID", "BarrioID")]
        public List<Int32> ClientIdList
        {
            get => Fields.ClientIdList[this];
            set => Fields.ClientIdList[this] = value;
        }
        [DisplayName("Last Directory Update"), Insertable(false), Updatable(false)]
        public DateTime? LastDirectoryUpdate
        {
            get { return Fields.LastDirectoryUpdate[this]; }
            set { Fields.LastDirectoryUpdate[this] = value; }
        }
        [DisplayName("ID de la app vieja")]
        public Int32? AppHoldId
        {
            get { return Fields.AppHoldId[this]; }
            set { Fields.AppHoldId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.UserId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Username; }
        }

        Int16Field IIsActiveRow.IsActiveField
        {
            get { return Fields.IsActive; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public UserRow()
            : base(Fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field UserId;
            public Int32Field BarrioId;
            
            public StringField Username;
            public StringField Source;
            public StringField PasswordHash;
            public StringField PasswordSalt;
            public StringField DisplayName;
            public StringField Email;
            public StringField Email_Others;
            public StringField Phone;
            public DateTimeField LimitDate;
            public BooleanField Owner;

            public Int32Field AppHoldId;
            public StringField UserImage;
            public DateTimeField LastDirectoryUpdate;
            public Int16Field IsActive;
            public Int16Field subBarrioId;
            public StringField Password;
            public StringField PasswordConfirm;
            public ListField<Int32> ClientIdList;
            public StringField Units;
            public StringField Note;
            public StringField Roles;
            
        }
    }
}