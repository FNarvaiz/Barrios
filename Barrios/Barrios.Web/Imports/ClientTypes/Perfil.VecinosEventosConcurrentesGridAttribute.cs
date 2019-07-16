using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Barrios.Perfil
{
    public partial class VecinosEventosConcurrentesGridAttribute : CustomEditorAttribute
    {
        public const string Key = "Barrios.Perfil.VecinosEventosConcurrentesGrid";

        public VecinosEventosConcurrentesGridAttribute()
            : base(Key)
        {
        }
    }
}

