
namespace Barrios.Settings.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Settings.Subbarrios")]
    [BasedOnRow(typeof(Entities.SubbarriosRow), CheckNames = true)]
    public class SubbarriosForm
    {
        public String Nombre { get; set; }
    }
}