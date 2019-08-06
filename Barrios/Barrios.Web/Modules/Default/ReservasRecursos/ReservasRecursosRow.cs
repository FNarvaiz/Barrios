
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

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[RESERVAS_RECURSOS]")]
    [DisplayName("Reservas Recursos"), InstanceName("Reservas Recursos")]
    [ReadPermission("User:Reservas")]
    [ModifyPermission("Reservas:Recursos")]
    [LeftJoin("jType", "[dbo].[RESERVAS_TIPOS]", "jType.[ID_Recurso] = t0.[ID] ")]
    [LeftJoin("jTurns", "[dbo].[RESERVAS_TURNOS_ESPECIALES]", "jTurns.[ID_Recurso] = t0.[ID] ")]
    public sealed class ReservasRecursosRow : Row, IIdRow, INameRow
    {
        [DisplayName("Tipos de reserva"), MasterDetailRelation("ID_recurso", IncludeColumns = "*"), NotMapped]
        public List<ReservasTiposRow> TypeList
        {
            get => Fields.TypeList[this];
            set => Fields.TypeList[this] = value;
        }
        [DisplayName("Turnos especiales"), MasterDetailRelation("ID_recurso", IncludeColumns = "*"), NotMapped]
        public List<ReservasTurnosEspecialesRow> SpecialTurnList
        {
            get => Fields.SpecialTurnList[this];
            set => Fields.SpecialTurnList[this] = value;
        }
        [DisplayName("Id"), Identity, Column("ID"), PrimaryKey, ForeignKey("[dbo].[Recursos-Barrios]", "RecursoId"), LeftJoin("jBarrio")]
        public Int16? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }
        [DisplayName("Barrio"), Expression("jBarrio.[BarrioId]")]
        public Int16? BarrioId
        {
            get { return Fields.BarrioId[this]; }
            set { Fields.BarrioId[this] = value; }
        }
        [DisplayName("Nombre"), Column("NOMBRE"), Size(30), QuickSearch]
        public String Nombre
        {
            get { return Fields.Nombre[this]; }
            set { Fields.Nombre[this] = value; }
        }

        [DisplayName("Apertura"),LookupEditor("ReservasRecursos.HorariosLookup"), Column("APERTURA")]
        public Int16? Apertura
        {
            get { return Fields.Apertura[this]; }
            set { Fields.Apertura[this] = value; }
        }

        [DisplayName("Cierre"),  LookupEditor("ReservasRecursos.HorariosLookup"), Column("CIERRE")]
        public Int16? Cierre
        {
            get { return Fields.Cierre[this]; }
            set { Fields.Cierre[this] = value; }
        }
        [DisplayName("Modo de reserva"), LookupEditor("ReservasRecursos.ResourceTypeLookup"), Column("Tipo")]
        public Int16? Tipo
        {
            get { return Fields.Tipo[this]; }
            set { Fields.Tipo[this] = value; }
        }

        [DisplayName("Resolucion"),LookupInclude, LookupEditor("ReservasRecursos.IntervalosLookup"),  Required, Column("RESOLUCION")]
        public Int16? Resolucion
        {
            get { return Fields.Resolucion[this]; }
            set { Fields.Resolucion[this] = value; }
        }
        [DisplayName("Lista de barrios"), NotMapped]
        [LinkingSetRelation(typeof(RecursosBarriosRow), "RecursoId", "BarrioID")]
        public List<Int32> ClientIdList
        {
            get => Fields.ClientIdList[this];
            set => Fields.ClientIdList[this] = value;
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

        public ReservasRecursosRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int16Field Id;
            public StringField Nombre;
            public Int16Field Apertura;
            public Int16Field Cierre;
            public Int16Field Tipo;
            public Int16Field Resolucion;
            public ListField<Int32> ClientIdList;
            public Int16Field BarrioId;
            public ListField<ReservasTiposRow> TypeList;
            public ListField<ReservasTurnosEspecialesRow> SpecialTurnList;
        }
    }
}
