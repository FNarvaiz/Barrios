
namespace Barrios.Settings.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Settings/Subbarrios"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.SubbarriosRow))]
    public class SubbarriosController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Settings/Subbarrios/SubbarriosIndex.cshtml");
        }
    }
}