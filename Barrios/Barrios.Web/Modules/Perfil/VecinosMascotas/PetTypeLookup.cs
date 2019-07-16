using Barrios.Administration.Repositories;
using Barrios.Modules.Common.Utils;
using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Web;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
namespace Barrios.Modules.Perfil.VecinosMascotas
{
    [LookupScript("VecinosMascotas.PetTypeLookup")]
    public class PetTypeLookup : RowLookupScript<GenericComboBoxRow>
    {
        public PetTypeLookup()
        {
            IdField = GenericComboBoxRow.Fields.Id.PropertyName;
            TextField = GenericComboBoxRow.Fields.Name.PropertyName;
        }
        public List<GenericComboBoxRow> Items()
        {
            return new List<GenericComboBoxRow>()
            {new GenericComboBoxRow(0,"Perro"),
            new GenericComboBoxRow(1,"Gato"),
            new GenericComboBoxRow(2,"Otro")
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