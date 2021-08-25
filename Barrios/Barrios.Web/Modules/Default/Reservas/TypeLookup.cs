using Barrios.Modules.Common.Utils;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Web;
using System.Collections.Generic;

namespace Barrios.Modules.Barrios.Default
{
    [LookupScript("Reservas.TypeLookup")]
    public class TypeLookup : RowLookupScript<GenericComboBoxRow>
    {
        public TypeLookup()
        {
            IdField = GenericComboBoxRow.Fields.Id.PropertyName;
            TextField = GenericComboBoxRow.Fields.Name.PropertyName;
        }
        public List<GenericComboBoxRow> Items()
        {
            List< GenericComboBoxRow> list=  new List<GenericComboBoxRow>();
            return list;
        }
      

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}