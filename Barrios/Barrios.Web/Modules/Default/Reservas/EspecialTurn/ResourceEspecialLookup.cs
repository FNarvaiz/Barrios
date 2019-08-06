
using Barrios.Default.Endpoints;
using Barrios.Default.Entities;
using Barrios.Modules.Common.Utils;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Web;
using System;
using System.Collections.Generic;

namespace Barrios.Modules.Barrios.Default
{
    [LookupScript("Reservas.ResourceEspecialLookup")]
    public class ResourceEspecialLookup : RowLookupScript<ReservasRecursosRow>
    {
        public ResourceEspecialLookup()
        {
            IdField = ReservasRecursosRow.Fields.Id.PropertyName;
            TextField = ReservasRecursosRow.Fields.Nombre.PropertyName;
        }
        
        protected override void PrepareQuery(SqlQuery query)
        {
            base.PrepareQuery(query);
            query.Where(new Criteria(ReservasRecursosRow.Fields.BarrioId) == CurrentNeigborhood.Get().Id.ToString() &&
                new Criteria(ReservasRecursosRow.Fields.Resolucion) == 0);
        }
    
        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}