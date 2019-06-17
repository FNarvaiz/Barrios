
namespace Barrios.Common.Pages
{
    using Barrios.Default.Repositories;
    using Serenity;
    using Serenity.Data;
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
            System.Data.IDbConnection connection = new SqlConnection(SqlConnections.GetConnectionString("Default").ConnectionString);

            BookingModel obj = new BookingModel()
            {
                Recursos = new ReservasRecursosRepository().List(connection, new Serenity.Services.ListRequest()).Entities
            };
            return View(MVC.Views.Common.Dashboard.Booking, obj);
        }
    }
}
