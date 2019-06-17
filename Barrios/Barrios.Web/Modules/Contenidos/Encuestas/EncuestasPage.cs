
namespace Barrios.Contenidos.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Contenidos/Encuestas"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.EncuestasRow))]
    public class EncuestasController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Contenidos/Encuestas/EncuestasIndex.cshtml");
        }
    }
}