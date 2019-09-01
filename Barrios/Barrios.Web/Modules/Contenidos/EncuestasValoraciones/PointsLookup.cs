using Barrios.Administration.Repositories;
using Barrios.Modules.Common.Utils;
using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Web;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;

namespace Barrios.Modules.Barrios.Barrio
{
    [LookupScript("SurveysAndProviders.PointsLookup")]
    public class PointsLookup : RowLookupScript<GenericComboBoxRow>
    {
        public PointsLookup()
        {
            IdField = GenericComboBoxRow.Fields.Id.PropertyName;
            TextField = GenericComboBoxRow.Fields.Name.PropertyName;
        }
      

        protected override List<GenericComboBoxRow> GetItems()
        {
            List<GenericComboBoxRow> list = new List<GenericComboBoxRow>();
            for (Int16 x = 1; x < 11; x++)
                list.Add(new GenericComboBoxRow(x, x.ToString()));
            return list;
        }
        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}