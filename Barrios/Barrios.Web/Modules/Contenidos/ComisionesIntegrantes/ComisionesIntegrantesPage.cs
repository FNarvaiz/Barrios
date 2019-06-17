
namespace Barrios.Contenidos.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Contenidos/ComisionesIntegrantes"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ComisionesIntegrantesRow))]
    public class ComisionesIntegrantesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Contenidos/ComisionesIntegrantes/ComisionesIntegrantesIndex.cshtml");
        }
    }
}