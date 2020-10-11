
namespace Barrios.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Reservas"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ReservasRow))]
    public class ReservasController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Reservas/ReservasIndex.cshtml");
        }
        public ActionResult MyBookings()
        {
            return View(MVC.Views.Bookings.MyBookingsIndex);
        }
    }
}