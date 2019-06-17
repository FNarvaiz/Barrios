
namespace Barrios.Contenidos.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Contenidos/Avisos"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.AvisosRow))]
    public class AvisosController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Contenidos/Avisos/AvisosIndex.cshtml");
        }
    }
}