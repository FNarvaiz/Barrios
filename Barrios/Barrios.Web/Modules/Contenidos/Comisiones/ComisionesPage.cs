
namespace Barrios.Contenidos.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Contenidos/Comisiones"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ComisionesRow))]
    public class ComisionesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Contenidos/Comisiones/ComisionesIndex.cshtml");
        }
    }
}