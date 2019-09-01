
namespace Barrios.Perfil.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("VecinosVisitantesFrecuentes"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.VecinosVisitantesFrecuentesRow))]
    public class VecinosVisitantesFrecuentesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Perfil/VecinosVisitantesFrecuentes/VecinosVisitantesFrecuentesIndex.cshtml");
        }
        public ActionResult VisitantesFrecuentes()
        {
            return View("~/Modules/Views/Perfil/VisitantesFrecuentes.cshtml");
        }
        
    }
}