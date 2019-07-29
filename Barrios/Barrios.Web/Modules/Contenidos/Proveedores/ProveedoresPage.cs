
namespace Barrios.Contenidos.Pages
{
    using Barrios.Modules.Common.Utils;
    using Serenity;
    using Serenity.Web;
    using System.Collections.Generic;
    using System.Web.Mvc;

    [RoutePrefix("Contenidos/Proveedores"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ProveedoresRow))]
    public class ProveedoresController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Contenidos/Proveedores/ProveedoresIndex.cshtml");
        }
        public ActionResult ProviderView()
        {
            List<Entities.ProveedoresRow> list = new Barrios.Contenidos.Endpoints.ProveedoresController().ListRatings();
            return View("~/Modules/Views/Providers/ProvidersIndex.cshtml",list);
        }
    }
}