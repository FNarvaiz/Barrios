using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;

namespace Barrios.Modules.Barrios.Default
{ 

   
    public sealed class PageHomeRow : Row, IIdRow, INameRow
    {
        
        public string Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }
        [DisplayName("Path"), Identity]
        public string Path
        {
            get { return Fields.Path[this]; }
            set { Fields.Path[this] = value; }
        }
        IIdField IIdRow.IdField
        {
            get { return Fields.Path; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PageHomeRow(string name, string path)
            : base(Fields)
        {
            this.Path = path;
            this.Name = name;
        }

        public PageHomeRow()
            : base(Fields)
        {
        }
        public class RowFields : RowFieldsBase
        {
            public StringField Name;
            public StringField Path; 
            
        }
    }
}
