
namespace Barrios.Administration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Administration.Barrios")]
    [BasedOnRow(typeof(Entities.BarriosRow), CheckNames = true)]
    public class BarriosForm
    {
        public String Nombre { get; set; }
        public String Logo { get; set; }
        public String Url { get; set; }
        public String TelefonOs { get; set; }
        public String Direccion { get; set; }
        public Boolean IsActive { get; set; }
    }
}