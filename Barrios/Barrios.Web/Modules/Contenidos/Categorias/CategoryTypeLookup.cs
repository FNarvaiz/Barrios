using Barrios.Modules.Common.Utils;
using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Web;
using System;
using System.Collections.Generic;

namespace Barrios.Modules.Contenidos.Categorias
{
    [LookupScript("Category.TypeLookup")]
    public class CategoryTypeLookup : RowLookupScript<GenericComboBoxRow>
    {
        public CategoryTypeLookup()
        {
            IdField = GenericComboBoxRow.Fields.Id.PropertyName;
            TextField = GenericComboBoxRow.Fields.Name.PropertyName;
        }
        public List<GenericComboBoxRow> Items()
        {
            return new List<GenericComboBoxRow>(){
                new GenericComboBoxRow(0,"Avisos"),
                new GenericComboBoxRow(1,"Encuestas"),
                new GenericComboBoxRow(2,"Linea de tiempo"),
                new GenericComboBoxRow(3,"Proveedores")};
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