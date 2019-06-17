
namespace Barrios.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/ReservasRecursos"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ReservasRecursosRow))]
    public class ReservasRecursosController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/ReservasRecursos/ReservasRecursosIndex.cshtml");
        }
    }
}