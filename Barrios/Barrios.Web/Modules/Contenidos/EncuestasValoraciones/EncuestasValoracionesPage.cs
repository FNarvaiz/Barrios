
namespace Barrios.Contenidos.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("EncuestasValoraciones"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.EncuestasValoracionesRow))]
    public class EncuestasValoracionesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Contenidos/EncuestasValoraciones/EncuestasValoracionesIndex.cshtml");
        }
    }
}