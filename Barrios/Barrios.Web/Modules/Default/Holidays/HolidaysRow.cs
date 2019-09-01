
namespace Barrios.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[HOLIDAYS]")]
    [DisplayName("Feriados"), InstanceName("Feriado")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class HolidaysRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Motivo"), Size(100), NotNull, QuickSearch]
        public String Reason
        {
            get { return Fields.Reason[this]; }
            set { Fields.Reason[this] = value; }
        }

        [DisplayName("Tipo"), BooleanEditor, NotNull,DefaultValue(TypeHolidays.inamovible)]
        public TypeHolidays? Type
        {
            get { return (TypeHolidays?)Fields.Type[this]; }
            set { Fields.Type[this] = (Int16?) value; }
        }

        [DisplayName("Dia"),SortOrder(1,true), NotNull]
        public DateTime? Day
        {
            get { return Fields.Day[this]; }
            set { Fields.Day[this] = value; }
        }

        [DisplayName("Api Id"), Size(100)]
        public String ApiId
        {
            get { return Fields.ApiId[this]; }
            set { Fields.ApiId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Reason; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public HolidaysRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Reason;
            public Int16Field Type;
            public DateTimeField Day;
            public StringField ApiId;
        }
    }
}
