﻿
namespace Barrios.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[RESERVAS_TURNOS_ESPECIALES]")]
    [DisplayName("Reservas Turnos Especiales"), InstanceName("Reservas Turnos Especiales")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class ReservasTurnosEspecialesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Recurso"), Column("ID_RECURSO"), PrimaryKey]
        public Int16? IdRecurso
        {
            get { return Fields.IdRecurso[this]; }
            set { Fields.IdRecurso[this] = value; }
        }

        [DisplayName("Id"), Column("ID"), PrimaryKey]
        public Int16? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Inicio"), Column("INICIO")]
        public Int16? Inicio
        {
            get { return Fields.Inicio[this]; }
            set { Fields.Inicio[this] = value; }
        }

        [DisplayName("Duracion"), Column("DURACION"), NotNull]
        public Int16? Duracion
        {
            get { return Fields.Duracion[this]; }
            set { Fields.Duracion[this] = value; }
        }

        [DisplayName("Nombre"), Column("NOMBRE"), Size(100), QuickSearch]
        public String Nombre
        {
            get { return Fields.Nombre[this]; }
            set { Fields.Nombre[this] = value; }
        }

        [DisplayName("Dias"), Column("DIAS"), Size(8)]
        public String Dias
        {
            get { return Fields.Dias[this]; }
            set { Fields.Dias[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdRecurso; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Nombre; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ReservasTurnosEspecialesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int16Field IdRecurso;
            public Int16Field Id;
            public Int16Field Inicio;
            public Int16Field Duracion;
            public StringField Nombre;
            public StringField Dias;
        }
    }
}
