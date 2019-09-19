
namespace Barrios.Perfil.Pages
{
    using Barrios.Modules.Common.Utils;
    using Barrios.Perfil.Entities;
    using Newtonsoft.Json;
    using Serenity;
    using Serenity.Services;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("VecinosMascotas"), Route("{action=index}")]
    [PageAuthorize(typeof(VecinosMascotasRow))]
    public class VecinosMascotasController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Perfil/VecinosMascotas/VecinosMascotasIndex.cshtml");
        }
        public ActionResult VisitantesMascotas()
        {
            return View("~/Modules/Views/Perfil/VisitantesMascotas.cshtml");
        }
        public ActionResult PetReport(string requestString)
        {
            ListRequest request= new ListRequest();
            request = (ListRequest)JsonConvert.DeserializeObject(requestString.TrimToNull() ?? "{}",
                request.GetType(), JsonSettings.Tolerant);
            request.IncludeColumns.Add(VecinosMascotasRow.Fields.UseridUnit.Name);
            request.IncludeColumns.Add(VecinosMascotasRow.Fields.UseridUsername.Name);
            request.IncludeColumns.Add(VecinosMascotasRow.Fields.Foto.Name);
            var response = new Endpoints.VecinosMascotasController().List(Utils.GetConnection(), request);
            return View(MVC.Views.Perfil.VecinosMascotas.Reports.PetReport, response);
        }
    }
}