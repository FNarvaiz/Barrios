using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Barrios.Modules.Default.ReservasTurnosEspeciales
{
    public partial class DayNamesEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Barrios.Modules.Default.ReservasTurnosEspeciales.DayNamesEditor";

        public DayNamesEditorAttribute()
            : base(Key)
        {
        }
    }
}

