
namespace Barrios.Contenidos.Pages
{
    using Barrios.Contenidos.Entities;
    using Barrios.Modules.Common.Utils;
    using Serenity;
    using Serenity.Services;
    using Serenity.Web;
    using System.Collections.Generic;
    using System.Web.Mvc;

    [RoutePrefix("News"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.NewsRow))]
    public class NewsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Contenidos/News/NewsIndex.cshtml");
        }
        public ActionResult NoticesView()
        {
            ListRequest request = new ListRequest()
            {
                Sort = new SortBy[1],
                IncludeColumns = new HashSet<string>() {
                   NewsRow.Fields.Id.Name, NewsRow.Fields.Nombre.Name, NewsRow.Fields.Imagen.Name,
                     NewsRow.Fields.Descripcion.Name
            },
                EqualityFilter = new Dictionary<string, object>()
            };
            request.EqualityFilter[NewsRow.Fields.Vigente.Name] = true;
            request.Sort[0] = new SortBy() { Field = NewsRow.Fields.Id.Name, Descending = true };
            using (var connection = Utils.GetConnection())
            {
                List<NewsRow> list = new Endpoints.NewsController().List(connection, request).Entities;

                return View(MVC.Views.News.NewsIndex, list);
            }
        }
        public ActionResult LocationView()
        {
            return View(MVC.Views.Location.LocationIndex, CurrentNeigborhood.Get());
        }
        
    }
}