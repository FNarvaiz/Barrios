
namespace Barrios.Settings.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Settings"), TableName("[dbo].[SUBBARRIOS]")]
    [DisplayName("Subbarrios"), InstanceName("Subbarrios")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    
    public sealed class SubbarriosRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int16? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Nombre"), Size(50), NotNull, QuickSearch]
        public String Nombre
        {
            get { return Fields.Nombre[this]; }
            set { Fields.Nombre[this] = value; }
        }

        [DisplayName("Barrio"), Column("barrioId"), NotNull, ForeignKey("[dbo].[BARRIOS]", "ID"), LeftJoin("jBarrio"), TextualField("BarrioNombre")]
        public Int32? BarrioId
        {
            get { return Fields.BarrioId[this]; }
            set { Fields.BarrioId[this] = value; }
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

        public SubbarriosRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int16Field Id;
            public StringField Nombre;
            public Int32Field BarrioId;
            
        }
    }
}
