﻿
namespace Barrios.Contenidos.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Contenidos"), TableName("[dbo].[COMISIONES_INTEGRANTES]")]
    [DisplayName("Comisiones Integrantes"), InstanceName("Comisiones Integrantes")]
    [ReadPermission("User:Comisiones")]
    [ModifyPermission("User:Comisiones")]
    public sealed class ComisionesIntegrantesRow : Row, IIdRow, INameRow
    {

        [DisplayName("Id Comision"), Column("ID_COMISION"), PrimaryKey, ForeignKey("[dbo].[COMISIONES]", "ID"), LeftJoin("jIdComision"), TextualField("IdComisionNombre")]
        public Int16? IdComision
        {
            get { return Fields.IdComision[this]; }
            set { Fields.IdComision[this] = value; }
        }

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



        [DisplayName("Id Comision Nombre"), Expression("jIdComision.[NOMBRE]")]
        public String IdComisionNombre
        {
            get { return Fields.IdComisionNombre[this]; }
            set { Fields.IdComisionNombre[this] = value; }
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
            get { return Fields.IdComision; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Nombre; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ComisionesIntegrantesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int16Field IdComision;

            public Int16Field Id;

            public StringField Nombre;

            public Int32Field UserInsert;

            public DateTimeField DateInsert;

            public Int32Field UserUpdate;

            public DateTimeField DateUpdate;



            public StringField IdComisionNombre;
            
            public StringField UserInsertUsername;
            

            public StringField UserUpdateUsername;
            

		}
    }
}
