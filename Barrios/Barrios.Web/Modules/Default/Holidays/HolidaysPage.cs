
namespace Barrios.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Holidays"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.HolidaysRow))]
    public class HolidaysController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Holidays/HolidaysIndex.cshtml");
        }
    }
}