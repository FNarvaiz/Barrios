using Barrios.Administration.Repositories;
using Barrios.Modules.Common.Utils;
using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Web;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;

namespace Barrios.Modules.Barrios.Default
{
    [LookupScript("Reservas.StartLookup")]
    public class StartLookup : RowLookupScript<GenericComboBoxRow>
    {
        public StartLookup()
        {
            IdField = GenericComboBoxRow.Fields.Id.PropertyName;
            TextField = GenericComboBoxRow.Fields.Name.PropertyName;
        }
        protected override List<GenericComboBoxRow> GetItems()
        {
            List< GenericComboBoxRow> list=  new List<GenericComboBoxRow>() { new GenericComboBoxRow(1,"1") };
            return list;
        }
      

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}