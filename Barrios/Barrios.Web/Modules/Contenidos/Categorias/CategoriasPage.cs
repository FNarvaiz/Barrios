
namespace Barrios.Contenidos.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Contenidos/Categorias"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CategoriasRow))]
    public class CategoriasController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Contenidos/Categorias/CategoriasIndex.cshtml");
        }
    }
}