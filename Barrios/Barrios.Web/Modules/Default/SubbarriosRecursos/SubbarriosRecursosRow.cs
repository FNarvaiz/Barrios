
namespace Barrios.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[SUBBARRIOS_RECURSOS]")]
    [DisplayName("Subbarrios Recursos"), InstanceName("Subbarrios Recursos")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class SubbarriosRecursosRow : Row, IIdRow
    {
        [DisplayName("Sub Barrio"), Column("subBarrioId"), PrimaryKey, ForeignKey("[dbo].[SUBBARRIOS]", "Id"), LeftJoin("jSubBarrio"), TextualField("SubBarrioNombre")]
        public Int16? SubBarrioId
        {
            get { return Fields.SubBarrioId[this]; }
            set { Fields.SubBarrioId[this] = value; }
        }

        [DisplayName("Recurso"), Column("recursoId"), PrimaryKey, ForeignKey("[dbo].[RESERVAS_RECURSOS]", "ID"), LeftJoin("jRecurso"), TextualField("RecursoNombre")]
        public Int16? RecursoId
        {
            get { return Fields.RecursoId[this]; }
            set { Fields.RecursoId[this] = value; }
        }

        [DisplayName("Sub Barrio Nombre"), Expression("jSubBarrio.[Nombre]")]
        public String SubBarrioNombre
        {
            get { return Fields.SubBarrioNombre[this]; }
            set { Fields.SubBarrioNombre[this] = value; }
        }
        

        IIdField IIdRow.IdField
        {
            get { return Fields.SubBarrioId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SubbarriosRecursosRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int16Field SubBarrioId;
            public Int16Field RecursoId;

            public StringField SubBarrioNombre;
        }
    }
}
