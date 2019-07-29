using Barrios.Contenidos.Entities;
using Barrios.Contenidos.Repositories;
using Barrios.Modules.Common.Utils;
using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Services;
using Serenity.Web;
using System;
using System.Collections.Generic;

namespace Barrios.Modules.Contenidos.Categorias
{
    [LookupScript("Category.TimeLineCategoryLookup")]
    public class TimeLineCategoryLookup : RowLookupScript<CategoriasRow>
    {
        public TimeLineCategoryLookup()
        {
            IdField = CategoriasRow.Fields.Id.PropertyName;
            TextField = CategoriasRow.Fields.Nombre.PropertyName;
        }
        protected override void PrepareQuery(SqlQuery query)
        {
            base.PrepareQuery(query);
            query.Where(new Criteria(CategoriasRow.Fields.Type) == "2" && new Criteria(CategoriasRow.Fields.Mostrar)=="1");
        }
        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}