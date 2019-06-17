
namespace Barrios.Contenidos.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Contenidos"), TableName("[dbo].[PROVEEDORES]")]
    [DisplayName("Proveedores"), InstanceName("Proveedores")]
    [ReadPermission("User:Proveedores")]
    [ModifyPermission("User:Proveedores")]
    public sealed class ProveedoresRow : Row, IIdRow, INameRow
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

        [DisplayName("Id Categoria"), Column("ID_CATEGORIA"), LookupEditor(typeof(CategoriasRow),FilterField ="Type" ,AutoComplete =true,FilterValue=3), NotNull]
        public Int16? IdCategoria
        {
            get { return Fields.IdCategoria[this]; }
            set { Fields.IdCategoria[this] = value; }
        }

        [DisplayName("Fecha Alta"), Column("FECHA_ALTA"), NotNull]
        public DateTime? FechaAlta
        {
            get { return Fields.FechaAlta[this]; }
            set { Fields.FechaAlta[this] = value; }
        }

        [DisplayName("Fecha Baja"), Column("FECHA_BAJA")]
        public DateTime? FechaBaja
        {
            get { return Fields.FechaBaja[this]; }
            set { Fields.FechaBaja[this] = value; }
        }

        [DisplayName("Vigente"), Column("VIGENTE"), NotNull]
        public Boolean? Vigente
        {
            get { return Fields.Vigente[this]; }
            set { Fields.Vigente[this] = value; }
        }

        [DisplayName("Domicilio"), Column("DOMICILIO"), Size(100)]
        public String Domicilio
        {
            get { return Fields.Domicilio[this]; }
            set { Fields.Domicilio[this] = value; }
        }

        [DisplayName("Telefonos"), Column("TELEFONOS"), Size(100)]
        public String Telefonos
        {
            get { return Fields.Telefonos[this]; }
            set { Fields.Telefonos[this] = value; }
        }

        [DisplayName("Email"), Column("EMAIL"), Size(100)]
        public String Email
        {
            get { return Fields.Email[this]; }
            set { Fields.Email[this] = value; }
        }

        [DisplayName("Notas"), Column("NOTAS"), Size(1073741823)]
        public String Notas
        {
            get { return Fields.Notas[this]; }
            set { Fields.Notas[this] = value; }
        }

        [DisplayName("User Insert"), NotNull, ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jUserInsert"), TextualField("UserInsertUsername")]
        public Int32? UserInsert
        {
            get { return Fields.UserInsert[this]; }
            set { Fields.UserInsert[this] = value; }
        }

        [DisplayName("Date Insert")]
        public DateTime? DateInsert
        {
            get { return Fields.DateInsert[this]; }
            set { Fields.DateInsert[this] = value; }
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

        public ProveedoresRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int32Field Id;

            public StringField Nombre;

            public Int16Field IdCategoria;

            public DateTimeField FechaAlta;

            public DateTimeField FechaBaja;

            public BooleanField Vigente;

            public StringField Domicilio;

            public StringField Telefonos;

            public StringField Email;

            public StringField Notas;

            public Int32Field UserInsert;

            public DateTimeField DateInsert;

            public Int32Field UserUpdate;

            public DateTimeField DateUpdate;



            public StringField UserInsertUsername;

            public StringField UserUpdateUsername;


		}
    }
}
