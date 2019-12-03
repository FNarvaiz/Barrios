
namespace Barrios.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using Barrios.Modules.Default.ReservasTurnosEspeciales;

    [FormScript("Default.ReservasTurnosEspeciales")]
    [BasedOnRow(typeof(Entities.ReservasTurnosEspecialesRow), CheckNames = true)]
    public class ReservasTurnosEspecialesForm
    {
        public String Nombre { get; set; }
        public Int16 Inicio { get; set; }
        public Int16 Duracion { get; set; }
        [Hidden]
        public String Dias { get; set; }
        
        [Category("Dias"), OneThirdWidth]
        public Boolean Lunes{ get; set; }
        [OneThirdWidth]
        public Boolean Martes{ get; set; }
        [OneThirdWidth]
        public Boolean Miercoles{ get; set; }
        [OneThirdWidth]
        public Boolean Jueves{ get; set; }
        [OneThirdWidth]
        public Boolean Viernes{ get; set; }
        [OneThirdWidth]
        public Boolean Sabado{ get; set; }
        [OneThirdWidth]
        public Boolean Domingo{ get; set; }
    }
}