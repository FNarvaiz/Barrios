
namespace Barrios.Perfil.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("VecinosEventos"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.VecinosEventosRow))]
    public class VecinosEventosController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Perfil/VecinosEventos/VecinosEventosIndex.cshtml");
        }
        public ActionResult Personal()
        {
            return View("~/Modules/Views/Perfil/PersonalEventos.cshtml");
        }
    }
}