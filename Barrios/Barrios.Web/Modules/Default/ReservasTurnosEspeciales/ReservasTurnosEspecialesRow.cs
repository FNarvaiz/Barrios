
namespace Barrios.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[RESERVAS_TURNOS_ESPECIALES]")]
    [DisplayName("Turnos Especiales"), InstanceName("Turno Especial")]
    [ReadPermission("User:Reservas")]
    [ModifyPermission("Reservas:TurnosEspeciales")]
    [LookupScript("Reservas.ReservasTurnosEspeciales", Expiration = 0)]
    public sealed class ReservasTurnosEspecialesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Recurso"), LookupInclude, Column("ID_RECURSO")]
        public Int16? IdRecurso
        {
            get { return Fields.IdRecurso[this]; }
            set { Fields.IdRecurso[this] = value; }
        }

        [DisplayName("Id"),Identity, Column("ID"), PrimaryKey]
        public Int16? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }
        [DisplayName("Nombre"),Required, Column("NOMBRE"), Size(100), QuickSearch]
        public String Nombre
        {
            get { return Fields.Nombre[this]; }
            set { Fields.Nombre[this] = value; }
        }

        [DisplayName("Inicio"), Required, LookupInclude, LookupEditor("ReservasRecursos.HorariosLookup"), Column("INICIO")]
        public Int16? Inicio
        {
            get { return Fields.Inicio[this]; }
            set { Fields.Inicio[this] = value; }
        }

        [DisplayName("Duración"), Required, LookupInclude, TimeEditor(EndHour = 15), Column("DURACION"), NotNull]
        public Int16? Duracion
        {
            get { return Fields.Duracion[this]; }
            set { Fields.Duracion[this] = value; }
        }
        [DisplayName("Días"), LookupInclude, Required, Column("DIAS"), Size(8)]
        public String Dias
        {
            get { return Fields.Dias[this]; }
            set { Fields.Dias[this] = value; }
        }
        [DisplayName("Lunes"),NotMapped]
        public Boolean? Lunes
        {
            get { return Fields.Lunes[this]; }
            set { Fields.Lunes[this] = value; }
        }
        [DisplayName("Martes"), NotMapped]
        public Boolean? Martes
        {
            get { return Fields.Martes[this]; }
            set { Fields.Martes[this] = value; }
        }
        [DisplayName("Miercoles"), NotMapped]
        public Boolean? Miercoles
        {
            get { return Fields.Miercoles[this]; }
            set { Fields.Miercoles[this] = value; }
        }
        [DisplayName("Jueves"), NotMapped]
        public Boolean? Jueves
        {
            get { return Fields.Jueves[this]; }
            set { Fields.Jueves[this] = value; }
        }
        [DisplayName("Viernes"), NotMapped]
        public Boolean? Viernes
        {
            get { return Fields.Viernes[this]; }
            set { Fields.Viernes[this] = value; }
        }
        [DisplayName("Sabado"), NotMapped]
        public Boolean? Sabado
        {
            get { return Fields.Sabado[this]; }
            set { Fields.Sabado[this] = value; }
        }
        [DisplayName("Domingo"), NotMapped]
        public Boolean? Domingo
        {
            get { return Fields.Domingo[this]; }
            set { Fields.Domingo[this] = value; }
        }
        [DisplayName("Feriados"), NotMapped]
        public Boolean? Feriados
        {
            get { return Fields.Feriados[this]; }
            set { Fields.Feriados[this] = value; }
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
            public BooleanField Lunes;
            public BooleanField Martes;
            public BooleanField Miercoles;
            public BooleanField Jueves;
            public BooleanField Viernes;
            public BooleanField Sabado;
            public BooleanField Domingo;
            public BooleanField Feriados;

        }
    }
}
