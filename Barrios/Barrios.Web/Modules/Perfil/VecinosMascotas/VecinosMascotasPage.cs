
namespace Barrios.Perfil.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("VecinosMascotas"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.VecinosMascotasRow))]
    public class VecinosMascotasController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Perfil/VecinosMascotas/VecinosMascotasIndex.cshtml");
        }
    }
}