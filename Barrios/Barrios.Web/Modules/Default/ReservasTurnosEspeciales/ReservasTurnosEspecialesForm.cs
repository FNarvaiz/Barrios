
namespace Barrios.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.ReservasTurnosEspeciales")]
    [BasedOnRow(typeof(Entities.ReservasTurnosEspecialesRow), CheckNames = true)]
    public class ReservasTurnosEspecialesForm
    {
        public Int16 Id { get; set; }
        public Int16 Inicio { get; set; }
        public Int16 Duracion { get; set; }
        public String Nombre { get; set; }
        public String Dias { get; set; }
    }
}