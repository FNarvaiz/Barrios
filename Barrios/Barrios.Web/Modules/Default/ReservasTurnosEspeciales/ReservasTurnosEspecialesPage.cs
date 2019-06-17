
namespace Barrios.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/ReservasTurnosEspeciales"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ReservasTurnosEspecialesRow))]
    public class ReservasTurnosEspecialesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/ReservasTurnosEspeciales/ReservasTurnosEspecialesIndex.cshtml");
        }
    }
}