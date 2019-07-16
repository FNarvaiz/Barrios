
namespace Barrios.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Recursos-Barrios]")]
    [DisplayName("Recursos Barrios"), InstanceName("Recursos Barrios")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class RecursosBarriosRow : Row, IIdRow
    {
        [DisplayName("Recurso"),  ForeignKey("[dbo].[RESERVAS_RECURSOS]", "ID"), LeftJoin("jRecurso"), TextualField("RecursoNombre")]
        public Int16? RecursoId
        {
            get { return Fields.RecursoId[this]; }
            set { Fields.RecursoId[this] = value; }
        }

        [DisplayName("Barrio"), NotNull, ForeignKey("[dbo].[BARRIOS]", "ID"), LeftJoin("jBarrio"), TextualField("BarrioNombre")]
        public Int32? BarrioId
        {
            get { return Fields.BarrioId[this]; }
            set { Fields.BarrioId[this] = value; }
        }

        [DisplayName("Barrio Nombre"), Expression("jBarrio.[Nombre]")]
        public String BarrioNombre
        {
            get { return Fields.BarrioNombre[this]; }
            set { Fields.BarrioNombre[this] = value; }
        }
        
        IIdField IIdRow.IdField
        {
            get { return Fields.RecursoId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public RecursosBarriosRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int16Field RecursoId;
            public Int32Field BarrioId;
            

            public StringField BarrioNombre;
        }
    }
}
