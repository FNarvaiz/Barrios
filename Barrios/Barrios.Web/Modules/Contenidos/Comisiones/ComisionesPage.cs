
namespace Barrios.Contenidos.Pages
{
    using Barrios.Modules.Common.Utils;
    using Serenity;
    using Serenity.Web;
    using System.Collections.Generic;
    using System.Web.Mvc;

    [RoutePrefix("Contenidos/Comisiones"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ComisionesRow))]
    public class ComisionesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Contenidos/Comisiones/ComisionesIndex.cshtml");
        }
        public ActionResult CommissionsView()
        {
            List<Entities.ComisionesRow> list = new Barrios.Contenidos.Endpoints.ComisionesController().ListView(Utils.GetConnection());
            return View("~/Modules/Views/Commissions/CommissionsIndex.cshtml", list);
        }
    }
}