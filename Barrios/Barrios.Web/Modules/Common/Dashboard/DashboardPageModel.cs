
using Barrios.Default.Entities;
using System.Collections.Generic;

namespace Barrios.Common
{
    public class DashboardPageModel
    {
        public int OpenOrders { get; set; }
        public int ClosedOrderPercent { get; set; }
        public int CustomerCount { get; set; }
        public int ProductCount { get; set; }
    }
    public class BookingModel
    {
        public List<ReservasRecursosRow> Recursos { get; set; }
        public List<ReservasRow> Bookings { get; set; }
        public int CustomerCount { get; set; }
        public int ProductCount { get; set; }
    }

}