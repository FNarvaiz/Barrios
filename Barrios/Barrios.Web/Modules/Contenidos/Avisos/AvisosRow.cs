
namespace Barrios.Contenidos.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Contenidos"), TableName("[dbo].[AVISOS]")]
    [DisplayName("Avisos"), InstanceName("Avisos")]
    [ReadPermission("User:Avisos")]
    [ModifyPermission("User:Avisos")]
    public sealed class AvisosRow : Row, IIdRow, INameRow
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

        [DisplayName("Id Categoria"), Column("ID_CATEGORIA"), NotNull, ForeignKey("[dbo].[CATEGORIAS]", "ID"), LeftJoin("jIdCategoria"), TextualField("IdCategoriaNombre")]
        public Int16? IdCategoria
        {
            get { return Fields.IdCategoria[this]; }
            set { Fields.IdCategoria[this] = value; }
        }

        [DisplayName("Caducidad"), Column("CADUCIDAD"), NotNull]
        public DateTime? Caducidad
        {
            get { return Fields.Caducidad[this]; }
            set { Fields.Caducidad[this] = value; }
        }

        [DisplayName("Vigente"), Column("VIGENTE"), NotNull]
        public Boolean? Vigente
        {
            get { return Fields.Vigente[this]; }
            set { Fields.Vigente[this] = value; }
        }

        [DisplayName("Descripcion"), Column("DESCRIPCION"), Size(1073741823)]
        public String Descripcion
        {
            get { return Fields.Descripcion[this]; }
            set { Fields.Descripcion[this] = value; }
        }

        [DisplayName("Imagen"), Column("Imagen"), Size(100)]
        [ImageUploadEditor(FilenameFormat = "AvisosImage/~", CopyToHistory = true)]
        public String Imagen
        {
            get { return Fields.Imagen[this]; }
            set { Fields.Imagen[this] = value; }
        }
        

        [DisplayName("User Insert"), NotNull, ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jUserInsert"), TextualField("UserInsertUsername")]
        public Int32? UserInsert
        {
            get { return Fields.UserInsert[this]; }
            set { Fields.UserInsert[this] = value; }
        }

        [DisplayName("User Update"), ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jUserUpdate"), TextualField("UserUpdateUsername")]
        public Int32? UserUpdate
        {
            get { return Fields.UserUpdate[this]; }
            set { Fields.UserUpdate[this] = value; }
        }

        [DisplayName("Date Update")]
        public DateTime? DateUpdate
        {
            get { return Fields.DateUpdate[this]; }
            set { Fields.DateUpdate[this] = value; }
        }

        [DisplayName("Date Insert"), NotNull]
        public DateTime? DateInsert
        {
            get { return Fields.DateInsert[this]; }
            set { Fields.DateInsert[this] = value; }
        }



        [DisplayName("Id Categoria Nombre"), Expression("jIdCategoria.[NOMBRE]")]
        public String IdCategoriaNombre
        {
            get { return Fields.IdCategoriaNombre[this]; }
            set { Fields.IdCategoriaNombre[this] = value; }
        }


        [DisplayName("User Insert Username"), Expression("jUserInsert.[Username]")]
        public String UserInsertUsername
        {
            get { return Fields.UserInsertUsername[this]; }
            set { Fields.UserInsertUsername[this] = value; }
        }


        [DisplayName("User Update Username"), Expression("jUserUpdate.[Username]")]
        public String UserUpdateUsername
        {
            get { return Fields.UserUpdateUsername[this]; }
            set { Fields.UserUpdateUsername[this] = value; }
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

        public AvisosRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int32Field Id;

            public StringField Nombre;

            public Int16Field IdCategoria;

            public DateTimeField Caducidad;

            public BooleanField Vigente;

            public StringField Descripcion;

            public StringField Imagen;

            public Int32Field UserInsert;

            public Int32Field UserUpdate;

            public DateTimeField DateUpdate;

            public DateTimeField DateInsert;



            public StringField IdCategoriaNombre;


            public StringField UserInsertUsername;

            public StringField UserUpdateUsername;

        }
    }
}
