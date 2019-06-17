
namespace Barrios.Contenidos.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Contenidos/ProveedoresValoraciones"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ProveedoresValoracionesRow))]
    public class ProveedoresValoracionesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Contenidos/ProveedoresValoraciones/ProveedoresValoracionesIndex.cshtml");
        }
    }
}