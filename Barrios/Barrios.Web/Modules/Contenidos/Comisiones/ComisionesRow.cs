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

    [ConnectionKey("Default"), Module("Contenidos"), TableName("[dbo].[COMISIONES]")]
    [DisplayName("Comisiones"), InstanceName("Comisiones")]
    [ReadPermission("User:Comisiones")]
    [ModifyPermission("User:Comisiones")]
    public sealed class ComisionesRow : Row, IIdRow, INameRow
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

        [DisplayName("Habilitada"), Column("HABILITADA"), NotNull]
        public Boolean? Habilitada
        {
            get { return Fields.Habilitada[this]; }
            set { Fields.Habilitada[this] = value; }
        }

        [DisplayName("Sigla"), Column("SIGLA"), Size(100), NotNull]
        public String Sigla
        {
            get { return Fields.Sigla[this]; }
            set { Fields.Sigla[this] = value; }
        }

        [DisplayName("Color"), Column("COLOR"), Size(100), NotNull]
        public String Color
        {
            get { return Fields.Color[this]; }
            set { Fields.Color[this] = value; }
        }

        [DisplayName("Mails"), Column("MAILS"), Size(200)]
        public String Mails
        {
            get { return Fields.Mails[this]; }
            set { Fields.Mails[this] = value; }
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

        [DisplayName("Barrio"), Column("barrioId"), ForeignKey("[dbo].[BARRIOS]", "ID"), LeftJoin("jBarrio"), TextualField("BarrioNombre")]
        public Int32? BarrioId
        {
            get { return Fields.BarrioId[this]; }
            set { Fields.BarrioId[this] = value; }
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


        [DisplayName("Barrio Nombre"), Expression("jBarrio.[Nombre]")]
        public String BarrioNombre
        {
            get { return Fields.BarrioNombre[this]; }
            set { Fields.BarrioNombre[this] = value; }
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

        public ComisionesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int16Field Id;

            public StringField Nombre;

            public BooleanField Habilitada;

            public StringField Sigla;

            public StringField Color;

            public StringField Mails;

            public Int32Field UserInsert;

            public DateTimeField DateInsert;

            public Int32Field UserUpdate;

            public DateTimeField DateUpdate;

            public Int32Field BarrioId;



            public StringField UserInsertUsername;
            


            public StringField UserUpdateUsername;
            


            public StringField BarrioNombre;
            

		}
    }
}
