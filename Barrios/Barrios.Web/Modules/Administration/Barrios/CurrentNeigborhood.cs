using Barrios.Administration.Entities;
using Barrios.Modules.Common.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Barrios
{
    public static class CurrentNeigborhood
    {
        static public BarriosRow Current;
        static public Boolean Local { get; set; }
        static public BarriosRow Get()
        {
            if (Current == null)
            {
                Current=Utils.GetBarrio(HttpContext.Current.Request.Url.ToString().ToLower());
                Local = Current.Url.Contains("localhost");
            }
            return Current;
        }

    }
}