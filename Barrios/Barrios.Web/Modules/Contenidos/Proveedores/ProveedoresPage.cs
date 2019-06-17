
namespace Barrios.Contenidos.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Contenidos/Proveedores"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ProveedoresRow))]
    public class ProveedoresController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Contenidos/Proveedores/ProveedoresIndex.cshtml");
        }
    }
}