
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
    [DisplayName("Recursos"), InstanceName("Recurso")]
    [ReadPermission("User:Reservas")]
    [ModifyPermission("User:Reservas")]
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
        [DisplayName("Modo de reserva"),Required, LookupEditor("ReservasRecursos.ResourceTypeLookup"), Column("Tipo")]
        public Int16? Tipo
        {
            get { return Fields.Tipo[this]; }
            set { Fields.Tipo[this] = value; }
        }

        [DisplayName("Resolucion"),LookupInclude, LookupEditor("ReservasRecursos.IntervalosLookup"),NotNull,  Required, Column("RESOLUCION")]
        public Int16? Resolucion
        {
            get { return Fields.Resolucion[this]; }
            set { Fields.Resolucion[this] = value; }
        }
        [DisplayName("Hasta los siguientes"), LookupInclude,IntegerEditor(MaxValue =370,MinValue =0,AllowNegatives =false), Column("Hasta")]
        public Int16? Hasta
        {
            get { return Fields.Hasta[this]; }
            set { Fields.Hasta[this] = value; }
        }
        [DisplayName("A partir de los siguientes"), LookupInclude, IntegerEditor(MaxValue = 370, MinValue = 0, AllowNegatives = false), Column("Desde")]
        public Int16? Desde
        {
            get { return Fields.Desde[this]; }
            set { Fields.Desde[this] = value; }
        }
        [DisplayName("Emails"), Size(200), Placeholder("Ingrese los mails a donde se tiene que enviar la solicitud o reserva,(1 por linea)"), TextAreaEditor()]
        public String Emails
        {
            get { return Fields.Emails[this]; }
            set { Fields.Emails[this] = value; }
        }
        [DisplayName("Cuerpo del mensaje"),HtmlContentEditor(),  Size(6000), Placeholder("Texto que se enviará por mail al reservar. (Max 1000 caracteres)")]
        public String MailBody
        {
            get { return Fields.MailBody[this]; }
            set { Fields.MailBody[this] = value; }
        }
        [DisplayName("Descripción"), Size(1000), Placeholder("Texto que se muestra en la página de reservas. (Max 1000 caracteres)"), TextAreaEditor()]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }
        [DisplayName("Reglamento"),FileUploadEditor(FilenameFormat = "Barrios/Reglamento/~", CopyToHistory = true), Column("Regulation")]
        public String Regulation
        {
            get { return Fields.Regulation[this]; }
            set { Fields.Regulation[this] = value; }
        }
        [DisplayName("Lista de barrios"), NotMapped]
        [LinkingSetRelation(typeof(RecursosBarriosRow), "RecursoId", "BarrioID")]
        public List<Int32> ClientIdList
        {
            get => Fields.ClientIdList[this];
            set => Fields.ClientIdList[this] = value;
        }
        [DisplayName("ID de la app vieja")]
        public Int32? AppHoldId
        {
            get { return Fields.AppHoldId[this]; }
            set { Fields.AppHoldId[this] = value; }
        }
        [DisplayName("Reservables") , Placeholder("Cant de dias reservables por unidad"),Description("Cant de dias reservables por unidad")]
        public Int16? AmountToReserve
        {
            get { return Fields.AmountToReserve[this]; }
            set { Fields.AmountToReserve[this] = value; }
        }
        [DisplayName("Necesita Comentario")]
        public Boolean? NeedComment
        {
            get { return Fields.NeedComment[this]; }
            set { Fields.NeedComment[this] = value; }
        }
        [DisplayName("Reservar solo para"), NotMapped]
        [LinkingSetRelation(typeof(SubbarriosRecursosRow), "RecursoId", "SubBarrioId")]
        public List<Int16> NeigborhoodList
        {
            get => Fields.NeigborhoodList[this];
            set => Fields.NeigborhoodList[this] = value;
        }
        [DisplayName("Días"), LookupInclude, Required,DefaultValue("01234567"), Column("DIAS"), Size(8)]
        public String Dias
        {
            get { return Fields.Dias[this]; }
            set { Fields.Dias[this] = value; }
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
            public StringField Regulation;
            public StringField Emails;
            public StringField MailBody;
            public StringField Description;
            public Int16Field Apertura;
            public Int16Field Cierre;
            public Int16Field Tipo;
            public Int16Field Desde;
            public Int16Field Hasta;
            public Int16Field Resolucion;
            public Int16Field AmountToReserve;
            public Int32Field AppHoldId;
            public ListField<Int32> ClientIdList;
            public ListField<Int16> NeigborhoodList;
            public Int16Field BarrioId;
            public ListField<ReservasTiposRow> TypeList;
            public ListField<ReservasTurnosEspecialesRow> SpecialTurnList;
            public BooleanField NeedComment;
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
