
namespace Barrios.Contenidos.Entities
{
    using Barrios.Modules.Common.Utils;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Contenidos"), TableName("[dbo].[CATEGORIAS]")]
    [DisplayName("Categorias"), InstanceName("Categorias")]
    [ReadPermission("User:All")]
    [ModifyPermission("User:All")]
    [LookupScript("Contenidos.Categorias")]
    public sealed class CategoriasRow : Row, IIdRow, INameRow, IActivityClass
    {

        [DisplayName("Id"), Column("ID"), PrimaryKey]
        public Int16? Id
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

        [DisplayName("Vigente"), Column("VIGENTE"),DefaultValue(true), NotNull]
        public Boolean? Vigente
        {
            get { return Fields.Vigente[this]; }
            set { Fields.Vigente[this] = value; }
        }

        [DisplayName("User Insert"), NotNull, ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jUserInsert"), TextualField("UserInsertUsername")]
        public Int32? UserInsert
        {
            get { return Fields.UserInsert[this]; }
            set { Fields.UserInsert[this] = value; }
        }

        [DisplayName("Ingresado")]
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

        [DisplayName("Actualizado")]
        public DateTime? DateUpdate
        {
            get { return Fields.DateUpdate[this]; }
            set { Fields.DateUpdate[this] = value; }
        }

        [DisplayName("Tipo")]
        public Int32? Type
        {
            get { return Fields.Type[this]; }
            set { Fields.Type[this] = value; }
        }
        [DisplayName("Tipo"),NotMapped]
        public String TypeName
        {
            get { return Fields.TypeName[this]; }
            set { Fields.TypeName[this] = value; }
        }

        [DisplayName("Mostrar"),DefaultValue(true)]
        public Boolean? Mostrar
        {
            get { return Fields.Mostrar[this]; }
            set { Fields.Mostrar[this] = value; }
        }


        
        [DisplayName("Ingresado por"), Expression("jUserInsert.[Username]")]
        public String UserInsertUsername
        {
            get { return Fields.UserInsertUsername[this]; }
            set { Fields.UserInsertUsername[this] = value; }
        }


        [DisplayName("Actualizado por"), Expression("jUserUpdate.[Username]")]
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

        public CategoriasRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int16Field Id;

            public StringField Nombre;

            public BooleanField Vigente;

            public Int32Field UserInsert;

            public DateTimeField DateInsert;

            public Int32Field UserUpdate;

            public DateTimeField DateUpdate;

            public Int32Field Type;

            public BooleanField Mostrar;
            

            public StringField TypeName;

            public StringField UserInsertUsername;
            
            public StringField UserUpdateUsername;
            
		}
    }
}
