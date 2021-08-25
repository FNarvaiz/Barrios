
namespace Barrios.Common.Pages
{
    using Barrios.Default.Entities;
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
        [Authorize, HttpGet, Route("~/")]
        public ActionResult Index()
        {
            return Redirect(CurrentNeigborhood.Get().PageHome);

           // return View(MVC.Views.Common.Dashboard.DashboardIndex, new DashboardPageModel());
        }
        [Authorize, HttpGet, Route("Reservas")]
        public ActionResult Booking()
        {
            try
            {
                
                if (Authorization.HasPermission("User:Reservas"))
                {
                    System.Data.IDbConnection connection = new SqlConnection(SqlConnections.GetConnectionString("Default").ConnectionString);

                    // ListRequest request = new ListRequest() { Sort = new SortBy[2] };
                    // Utils.AddNeigborhoodFilter(request);
                    // request.Criteria = (new Criteria(ReservasRecursosRow.Fields.SubBarrioID).IsNull() || new Criteria(ReservasRecursosRow.Fields.SubBarrioID).In("1"));
                    // request.Sort[0] = new SortBy() { Field = "Resolucion", Descending = true };
                    // request.Sort[1] = new SortBy() { Field = "Nombre", Descending = false };
                    BookingModel obj = new BookingModel()
                    {
                        Recursos = new ReservasRecursosRepository().ListOfAllowedResources(connection)
                    };
                    return View(MVC.Views.Bookings.Booking, obj);
                }
                else
                    throw new Exception();
            }
            catch 
            {
                if (Authorization.HasPermission("User:Comisiones"))
                    return View(MVC.Views.Errors.Locked);
                else
                    return View(MVC.Views.Errors.AccessDenied);
            }
        }
    }
}
