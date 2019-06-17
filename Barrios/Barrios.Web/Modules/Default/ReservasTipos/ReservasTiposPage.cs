
namespace Barrios.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/ReservasTipos"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ReservasTiposRow))]
    public class ReservasTiposController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/ReservasTipos/ReservasTiposIndex.cshtml");
        }
    }
}