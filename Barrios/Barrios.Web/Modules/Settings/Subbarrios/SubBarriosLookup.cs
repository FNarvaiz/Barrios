
using Barrios.Default.Entities;
using Barrios.Settings.Entities;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Web;

namespace Barrios.Modules.Settings
{
    [LookupScript("Settings.Subbarrios", Permission = "*")]
    public class SubBarriosLookup : RowLookupScript<SubbarriosRow>
    {
        public SubBarriosLookup()
        {
            IdField = SubbarriosRow.Fields.Id.PropertyName;
            TextField = SubbarriosRow.Fields.Nombre.PropertyName;
        }
        
        protected override void PrepareQuery(SqlQuery query)
        {
            base.PrepareQuery(query);
            query.Where(new Criteria(SubbarriosRow.Fields.BarrioId) == CurrentNeigborhood.Get().Id.ToString() );
        }
    
        protected override void ApplyOrder(SqlQuery query)
        {
            query.OrderBy(SubbarriosRow.Fields.Nombre.PropertyName, false);
        }
    }
}