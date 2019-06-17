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
    [LookupScript("Barrios.BarrioLookup")]
    public class BarrioLookup : RowLookupScript<GenericComboBoxRow>
    {
        public BarrioLookup()
        {
            IdField = GenericComboBoxRow.Fields.Id.PropertyName;
            TextField = GenericComboBoxRow.Fields.Name.PropertyName;
        }
        public List<GenericComboBoxRow> Items()
        {
            List< GenericComboBoxRow> list=  new List<GenericComboBoxRow>();
            System.Data.IDbConnection connection = new SqlConnection(SqlConnections.GetConnectionString("Default").ConnectionString);
            foreach (var obj in new BarriosRepository().List(connection,new Serenity.Services.ListRequest()).Entities)
                list.Add(new GenericComboBoxRow(obj.Id, obj.Nombre));
            return list;
        }


        protected override List<GenericComboBoxRow> GetItems()
        {
            return Items();
        }
        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}