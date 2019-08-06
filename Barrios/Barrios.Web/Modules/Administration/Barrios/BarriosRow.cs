
namespace Barrios.Administration.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Administration"), TableName("[dbo].[BARRIOS]")]
    [DisplayName("Barrios"), InstanceName("Barrios")]
    [ReadPermission("Administration:Barrios")]
    [ModifyPermission("Administration:Barrios")]
    [LookupScript("Administration.Barrios", Permission = "?")]
    public sealed class BarriosRow : Row, IIdRow, INameRow
    {

        [DisplayName("Id"), Column("ID"), Identity]
        public Int16? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Nombre"), Size(50),Required, NotNull, QuickSearch]
        public String Nombre
        {
            get { return Fields.Nombre[this]; }
            set { Fields.Nombre[this] = value; }
        }
        [DisplayName("Mail emisor"), Size(50), Required, NotNull, EmailEditor]
        public String Mail
        {
            get { return Fields.Mail[this]; }
            set { Fields.Mail[this] = value; }
        }
        [DisplayName("Password Mail"), Size(50), Required, NotNull]
        public String PasswordMail
        {
            get { return Fields.PasswordMail[this]; }
            set { Fields.PasswordMail[this] = value; }
        }
        [DisplayName("Nombre corto"),Placeholder("Se utiliza para la cabecera"), Size(50), Required, NotNull]
        public String ShortDisplayName
        {
            get { return Fields.ShortDisplayName[this]; }
            set { Fields.ShortDisplayName[this] = value; }
        }
        [DisplayName("Nombre largo"), Placeholder("Se utiliza para el login"), Size(100), Required, NotNull]
        public String LargeDisplayName
        {
            get { return Fields.LargeDisplayName[this]; }
            set { Fields.LargeDisplayName[this] = value; }
        }
        
        [DisplayName("Logo"), Column("LOGO"), Required, Size(50)]
        [ImageUploadEditor(FilenameFormat = "UserImage/~", CopyToHistory = true)]
        public String Logo
        {
            get { return Fields.Logo[this]; }
            set { Fields.Logo[this] = value; }
        }

        [DisplayName("Url"), Column("URL"), Required, Size(50), NotNull]
        public String Url
        {
            get { return Fields.Url[this]; }
            set { Fields.Url[this] = value; }
        }

        [DisplayName("Telefonos"), Column("Telefonos"), Size(100), NotNull]
        public String TelefonOs
        {
            get { return Fields.TelefonOs[this]; }
            set { Fields.TelefonOs[this] = value; }
        }

        [DisplayName("Dirección"), Column("Direccion"), Size(2000), NotNull]
        public String Direccion
        {
            get { return Fields.Direccion[this]; }
            set { Fields.Direccion[this] = value; }
        }

        [DisplayName("Activo"), NotNull]
        public Boolean? IsActive
        {
            get { return Fields.IsActive[this]; }
            set { Fields.IsActive[this] = value; }
        }
        [DisplayName("Cant dias reservables"), NotNull]
        public Int16? CantDiasReservables
        {
            get { return Fields.CantDiasReservables[this]; }
            set { Fields.CantDiasReservables[this] = value; }
        }


        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Nombre; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public BarriosRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int16Field Id;

            public StringField Nombre;
            public StringField Mail;
            public StringField LargeDisplayName;
            public StringField ShortDisplayName;
            public StringField Logo;

            public StringField Url;

            public StringField TelefonOs;

            public StringField Direccion;
            public StringField PasswordMail;
            public Int16Field CantDiasReservables;

            public BooleanField IsActive;


		}
    }
}
