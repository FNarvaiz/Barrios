using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Barrios.Administration
{
    public partial class BarriosGridAttribute : CustomEditorAttribute
    {
        public const string Key = "Barrios.Administration.BarriosGrid";

        public BarriosGridAttribute()
            : base(Key)
        {
        }
    }
}

