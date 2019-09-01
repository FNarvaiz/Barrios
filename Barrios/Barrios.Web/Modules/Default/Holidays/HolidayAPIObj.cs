using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Barrios.Modules.Default.Holidays
{
    public class HolidayAPIObj
    {
        public string motivo { get; set; }
        public string tipo { get; set; }
        public Int16 dia { get; set; }
        public Int16 mes { get; set; }
        public string id { get; set; }
    }
}