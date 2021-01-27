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
    [LookupScript("ReservasRecursos.ResourceTypeLookup")]
    public class ResourceTypeLookup : RowLookupScript<GenericComboBoxRow>
    {
        public ResourceTypeLookup()
        {
            IdField = GenericComboBoxRow.Fields.Id.PropertyName;
            TextField = GenericComboBoxRow.Fields.Name.PropertyName;
        }
        public List<GenericComboBoxRow> Items()
        {
            return new List<GenericComboBoxRow>()
            {new GenericComboBoxRow(1,"Automatica conciderando reservas de Tennis"),
            new GenericComboBoxRow(2,"Automatica conciderando reservas de Futboll"),
            new GenericComboBoxRow(3,"A pedido por mail"),
            new GenericComboBoxRow(4,"Automatica conciderando reservas de destape"),
            new GenericComboBoxRow(5,"Automatica conciderando reservas de Futboll Sintetico"),
            new GenericComboBoxRow(6,"Automatica conciderando reservas de Playon"),
            new GenericComboBoxRow(7,"Automatica conciderando reservas de Gimnasio"),
            new GenericComboBoxRow(8,"Automatica conciderando reservas de lavarropas"),
            new GenericComboBoxRow(9,"Automatica conciderando reservas de Sauna húmedo"),
            new GenericComboBoxRow(10,"Automatica conciderando reservas de Sauna Seco"),
            new GenericComboBoxRow(11,"Automatica conciderando reservas de Jacuzzi"),
            new GenericComboBoxRow(12,"Automatica conciderando reservas de Masajes")
            };
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