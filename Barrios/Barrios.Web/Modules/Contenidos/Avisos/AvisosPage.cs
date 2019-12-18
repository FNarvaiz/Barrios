
namespace Barrios.Contenidos.Pages
{
    using Barrios.Contenidos.Entities;
    using Barrios.Modules.Common.Utils;
    using Serenity;
    using Serenity.Services;
    using Serenity.Web;
    using System.Collections.Generic;
    using System.Web.Mvc;

    [RoutePrefix("Contenidos/Avisos"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.AvisosRow))]
    public class AvisosController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Contenidos/Avisos/AvisosIndex.cshtml");
        }
        public ActionResult NoticesView()
        {
            ListRequest request = new ListRequest()
            {
                Sort = new SortBy[1],
                IncludeColumns = new HashSet<string>() {
                   AvisosRow.Fields.Id.Name, AvisosRow.Fields.Nombre.Name, AvisosRow.Fields.CategoryName.Name, AvisosRow.Fields.Imagen.Name,
                     AvisosRow.Fields.Descripcion.Name
            },
                EqualityFilter=new Dictionary<string, object>()
            };
            request.EqualityFilter[AvisosRow.Fields.Vigente.Name] = true;
            request.Sort[0] = new SortBy() { Field = AvisosRow.Fields.Id.Name, Descending = true };
            using (var connection = Utils.GetConnection())
            {
                List<Entities.AvisosRow> list = new Endpoints.AvisosController().List(connection, request).Entities;

                return View("~/Modules/Views/Notices/NoticesIndex.cshtml", list);
            }
        }
    }
}