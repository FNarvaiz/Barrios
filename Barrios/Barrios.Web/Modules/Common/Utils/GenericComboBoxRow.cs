using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;

namespace Barrios.Modules.Common.Utils
{
    public class GenericComboBoxRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public int? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }
        [DisplayName("Name")]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }
        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }
        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }
        public static readonly RowFields Fields = new RowFields().Init();
        public GenericComboBoxRow(int? id, string name)
            : base(Fields)
        {
            this.Id = id;
            this.Name = name;
        }
        public GenericComboBoxRow(string name)
            : base(Fields)
        {
            this.Name = name;
        }
        public GenericComboBoxRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField Name;
            public Int32Field Id;
        }
    }
}