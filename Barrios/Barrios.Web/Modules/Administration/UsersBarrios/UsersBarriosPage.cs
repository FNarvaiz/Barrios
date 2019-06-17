
namespace Barrios.Administration.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Administration/UsersBarrios"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.UsersBarriosRow))]
    public class UsersBarriosController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Administration/UsersBarrios/UsersBarriosIndex.cshtml");
        }
    }
}