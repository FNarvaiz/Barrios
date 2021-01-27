
namespace Barrios.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[RESERVAS_RECURRENTES]")]
    [DisplayName("Reservas Recurrentes"), InstanceName("Reservas Recurrentes")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class ReservasRecurrentesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Dias"), Size(8), NotNull ]
        public String Dias
        {
            get { return Fields.Dias[this]; }
            set { Fields.Dias[this] = value; }
        }

        [DisplayName("Description"), Size(150), NotNull]
        public String Observaciones
        {
            get { return Fields.Observaciones[this]; }
            set { Fields.Observaciones[this] = value; }
        }

        [DisplayName("Resource"), NotNull]
        public Int16? ResourceId
        {
            get { return Fields.ResourceId[this]; }
            set { Fields.ResourceId[this] = value; }
        }

        [DisplayName("Inicio"), LookupEditor("ReservasRecursos.HorariosLookup"), NotNull]
        public Int16? Inicio
        {
            get { return Fields.Inicio[this]; }
            set { Fields.Inicio[this] = value; }
        }

        [DisplayName("Duracion"), LookupInclude, TimeEditor(EndHour = 20), NotNull]
        public Int16? Duracion
        {
            get { return Fields.Duracion[this]; }
            set { Fields.Duracion[this] = value; }
        }
        [DisplayName("Lunes"), NotMapped]
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
            get { return Fields.Dias; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ReservasRecurrentesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Dias;
            public StringField Observaciones;
            public Int16Field ResourceId;
            public Int16Field Inicio;
            public Int16Field Duracion;


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
