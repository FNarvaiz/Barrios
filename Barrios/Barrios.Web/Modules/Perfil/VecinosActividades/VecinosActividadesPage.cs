
namespace Barrios.Perfil.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("VecinosActividades"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.VecinosActividadesRow))]
    public class VecinosActividadesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Perfil/VecinosActividades/VecinosActividadesIndex.cshtml");
        }
    }
}