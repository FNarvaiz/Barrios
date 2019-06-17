
namespace Barrios.Administration.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Administration/Barrios"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.BarriosRow))]
    public class BarriosController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Administration/Barrios/BarriosIndex.cshtml");
        }
    }
}