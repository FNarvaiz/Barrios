
using System.Collections.Generic;
using Barrios.Settings.Entities;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Web;

namespace Barrios.Modules.Barrios.Default
{
   
    [LookupScript("Settings.PageHomeLookup")]
    public class PageHomeLookup : RowLookupScript<PageHomeRow>
    {
        public PageHomeLookup()
        {
            IdField = PageHomeRow.Fields.Path.PropertyName;
            TextField = PageHomeRow.Fields.Name.PropertyName;
        }
        public List<PageHomeRow> Items()
        {
            var List= new List<PageHomeRow>()
            {
                new PageHomeRow("Novedades","News/NoticesView" ),
                new PageHomeRow("Avisos","Contenidos/Avisos/NoticesView" ),
                new PageHomeRow("Reservas","Dashboard/Reservas" ),
                new PageHomeRow("Mailing","LineaTiempo/TimeLineView" ),
                new PageHomeRow("Institucional","Comisiones/CommissionsView" ),
                new PageHomeRow("Reglamentos","LineaTiempo/RegulationsView" ),
                new PageHomeRow("Encuestas","Encuestas/SurveysView" ),
                new PageHomeRow("Proveedores","Proveedores/ProviderView" ),
                new PageHomeRow("Mis Reservas","Default/Reservas/MyBookings" ),
                new PageHomeRow("Mi perfil","VecinosEventos/Personal" )

            };
            return List;
        }

        protected override List<PageHomeRow> GetItems()
        {
            return Items();
        }
        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}