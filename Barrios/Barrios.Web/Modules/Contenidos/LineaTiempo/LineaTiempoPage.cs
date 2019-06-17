
namespace Barrios.Contenidos.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Contenidos/LineaTiempo"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.LineaTiempoRow))]
    public class LineaTiempoController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Contenidos/LineaTiempo/LineaTiempoIndex.cshtml");
        }
    }
}