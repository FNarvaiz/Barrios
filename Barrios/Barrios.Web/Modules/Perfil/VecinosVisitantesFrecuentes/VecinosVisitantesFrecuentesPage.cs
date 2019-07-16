
namespace Barrios.Perfil.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Perfil/VecinosVisitantesFrecuentes"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.VecinosVisitantesFrecuentesRow))]
    public class VecinosVisitantesFrecuentesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Perfil/VecinosVisitantesFrecuentes/VecinosVisitantesFrecuentesIndex.cshtml");
        }
    }
}