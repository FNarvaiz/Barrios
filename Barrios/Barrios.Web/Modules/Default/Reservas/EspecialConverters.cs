using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Barrios.Modules.Default.Reservas
{
    public static class EspecialConverters
    {
        static public string MinutesToString(this short number)
        {
            TimeSpan span = new TimeSpan(0, number, 0);
            return span.ToString(@"hh\:mm");
        }
        static public string MinutesToString(this TimeSpan span)
        {
            return span.ToString(@"hh\:mm");
        }
    }
}