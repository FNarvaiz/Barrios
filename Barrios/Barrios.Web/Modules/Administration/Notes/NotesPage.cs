
namespace Barrios.Administration.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Administration/Notes"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.NotesRow))]
    public class NotesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Administration/Notes/NotesIndex.cshtml");
        }
    }
}