﻿
namespace Barrios.Common.Pages
{
    using Barrios.Default.Repositories;
    using Barrios.Modules.Common.Utils;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data.SqlClient;
    using System.Web.Mvc;

    [RoutePrefix("Dashboard"), Route("{action=index}")]
    public class DashboardController : Controller
    {
        [Authorize, HttpGet, Route("~/Dashboard")]
        public ActionResult Index()
        {
            return View(MVC.Views.Common.Dashboard.DashboardIndex, new DashboardPageModel());
        }
        [Authorize, HttpGet, Route("~/")]
        public ActionResult Booking()
        {
            try
            {
                System.Data.IDbConnection connection = new SqlConnection(SqlConnections.GetConnectionString("Default").ConnectionString);
                ListRequest request = new ListRequest() { Sort = new SortBy[2] };
                Utils.AddNeigborhoodFilter(request);
                request.Sort[0] = new SortBy() { Field = "Resolucion", Descending = true };
                request.Sort[1] = new SortBy() { Field = "Nombre", Descending = false };
                BookingModel obj = new BookingModel()
                {
                    Recursos = new ReservasRecursosRepository().List(connection, request).Entities
                };
                return View(MVC.Views.Bookings.Booking, obj);
            }
            catch
            {
                return View(MVC.Views.Errors.AccessDenied);
            }
        }
    }
}
