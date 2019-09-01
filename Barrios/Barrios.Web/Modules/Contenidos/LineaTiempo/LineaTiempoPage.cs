﻿
namespace Barrios.Contenidos.Pages
{
    using Barrios.Modules.Common.Utils;
    using Serenity;
    using Serenity.Services;
    using Serenity.Web;
    using System.Collections.Generic;
    using System.Web.Mvc;

    [RoutePrefix("LineaTiempo"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.LineaTiempoRow))]
    public class LineaTiempoController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Contenidos/LineaTiempo/LineaTiempoIndex.cshtml");
        }
        public ActionResult TimeLineView()
        {
            ListRequest request = new ListRequest() {
                Sort = new SortBy[1],
                IncludeColumns = new HashSet<string>() {
                   "PeriodoFecha","Nombre","CategoryName","ContenidoTexto","ArchivoFilename"
            } } ;
            request.Sort[0]=new SortBy() { Field = "PeriodoFecha", Descending = true };
           
            List<Entities.LineaTiempoRow> list = new Barrios.Contenidos.Endpoints.LineaTiempoController().List(Utils.GetConnection(), request).Entities;

            return View("~/Modules/Views/TimeLine/TimeLineIndex.cshtml", list);
        }
        public ActionResult RegulationsView()
        {
            ListRequest request = new ListRequest()
            {
                Sort = new SortBy[1],
                IncludeColumns = new HashSet<string>() {
                   "PeriodoFecha","Nombre","CategoryName","ContenidoTexto","ArchivoFilename"
                }
            };
            request.Sort[0] = new SortBy() { Field = "PeriodoFecha", Descending = true };
            request.EqualityFilter = new Dictionary<string, object>();
            request.EqualityFilter[Entities.LineaTiempoRow.Fields.IdCategoria.Name] = 264;
            List<Entities.LineaTiempoRow> list = new Barrios.Contenidos.Endpoints.LineaTiempoController().List(Utils.GetConnection(), request).Entities;

            return View("~/Modules/Views/TimeLine/Regulations.cshtml", list);
        }
    }
}