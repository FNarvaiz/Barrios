
namespace Barrios.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.ReservasTipos")]
    [BasedOnRow(typeof(Entities.ReservasTiposRow), CheckNames = true)]
    public class ReservasTiposForm
    {
        public String Nombre { get; set; }
        public Int16 Duracion { get; set; }
        public Boolean RequiereVecino2 { get; set; }
        public Boolean Vigente { get; set; }
    }
}