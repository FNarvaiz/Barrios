
namespace Barrios.Perfil.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Perfil"), TableName("[dbo].[VECINOS_MASCOTAS]")]
    [DisplayName("Mascotas"), InstanceName("Mascotas")]
    [ReadPermission("Administration:Perfil")]
    [ModifyPermission("Administration:Perfil")]
    public sealed class VecinosMascotasRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("ID"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Nombre"), Column("NOMBRE"), Size(100), NotNull, QuickSearch]
        public String Nombre
        {
            get { return Fields.Nombre[this]; }
            set { Fields.Nombre[this] = value; }
        }

        [DisplayName("Tipo"), Required, Column("ID_TIPO"),LookupEditor("VecinosMascotas.PetTypeLookup"), NotNull]
        public Int16? IdTipo
        {
            get { return Fields.IdTipo[this]; }
            set { Fields.IdTipo[this] = value; }
        }

        [DisplayName("Raza"), Column("RAZA"), Size(100), NotNull]
        public String Raza
        {
            get { return Fields.Raza[this]; }
            set { Fields.Raza[this] = value; }
        }
        [DisplayName("Foto Binarydata"), ImageUploadEditor(FilenameFormat = "UserImage/~", CopyToHistory = true), Column("FOTO")]
        public String Foto
        {
            get { return Fields.Foto[this]; }
            set { Fields.Foto[this] = value; }
        }

        [DisplayName("Userid"), NotNull, ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jUserid"), TextualField("UseridUsername")]
        public Int32? Userid
        {
            get { return Fields.Userid[this]; }
            set { Fields.Userid[this] = value; }
        }

        [DisplayName("Userid Username"), Expression("jUserid.[Username]")]
        public String UseridUsername
        {
            get { return Fields.UseridUsername[this]; }
            set { Fields.UseridUsername[this] = value; }
        }

       

        [DisplayName("Userid Unit"), Expression("jUserid.[Unit]")]
        public String UseridUnit
        {
            get { return Fields.UseridUnit[this]; }
            set { Fields.UseridUnit[this] = value; }
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

        public VecinosMascotasRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Nombre;
            public Int16Field IdTipo;
            public StringField Raza;
            public StringField Foto;
            public Int32Field Userid;

            public StringField UseridUsername;
            public StringField UseridUnit;
        }
    }
}
