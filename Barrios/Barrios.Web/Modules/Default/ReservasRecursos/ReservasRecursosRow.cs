
namespace Barrios.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[RESERVAS_RECURSOS]")]
    [DisplayName("Reservas Recursos"), InstanceName("Reservas Recursos")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class ReservasRecursosRow : Row, IIdRow, INameRow
    {
        [DisplayName("Barrio ID"), Expression("jBarrio.[barrioId]")]
        public Int32? BarrioId
        {
            get { return Fields.BarrioId[this]; }
            set { Fields.BarrioId[this] = value; }
        }

       
        [DisplayName("Id"), Column("ID"), PrimaryKey, ForeignKey("[dbo].[Recursos-Barrios]", "RecursoId"), LeftJoin("jBarrio")]
        public Int16? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Nombre"), Column("NOMBRE"), Size(30), QuickSearch]
        public String Nombre
        {
            get { return Fields.Nombre[this]; }
            set { Fields.Nombre[this] = value; }
        }

        [DisplayName("Apertura"), Column("APERTURA")]
        public Int16? Apertura
        {
            get { return Fields.Apertura[this]; }
            set { Fields.Apertura[this] = value; }
        }

        [DisplayName("Cierre"), Column("CIERRE")]
        public Int16? Cierre
        {
            get { return Fields.Cierre[this]; }
            set { Fields.Cierre[this] = value; }
        }

        [DisplayName("Resolucion"), Column("RESOLUCION")]
        public Int16? Resolucion
        {
            get { return Fields.Resolucion[this]; }
            set { Fields.Resolucion[this] = value; }
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
            public Int32Field BarrioId;
            public Int16Field Id;
            public StringField Nombre;
            public Int16Field Apertura;
            public Int16Field Cierre;
            public Int16Field Resolucion;
        }
    }
}
