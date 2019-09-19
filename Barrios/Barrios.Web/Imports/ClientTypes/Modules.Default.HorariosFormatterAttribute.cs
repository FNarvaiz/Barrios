using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Barrios.Modules.Default
{
    public partial class HorariosFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "Barrios.Modules.Default.HorariosFormatter";

        public HorariosFormatterAttribute()
            : base(Key)
        {
        }
    }
}

