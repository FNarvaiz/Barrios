
namespace Barrios.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.ReservasRecurrentes")]
    [BasedOnRow(typeof(Entities.ReservasRecurrentesRow), CheckNames = true)]
    public class ReservasRecurrentesForm
    {
        public String Observaciones { get; set; }
        public Int16 Inicio { get; set; }
        public Int16 Duracion { get; set; }
        [Hidden]
        public String Dias { get; set; }
        [Category("Dias"), OneThirdWidth, LabelWidth(150)]
        public Boolean Lunes { get; set; }
        [OneThirdWidth, LabelWidth(150)]
        public Boolean Martes { get; set; }
        [OneThirdWidth, LabelWidth(150)]
        public Boolean Miercoles { get; set; }
        [OneThirdWidth, LabelWidth(150)]
        public Boolean Jueves { get; set; }
        [OneThirdWidth, LabelWidth(150)]
        public Boolean Viernes { get; set; }
        [OneThirdWidth, LabelWidth(150)]
        public Boolean Sabado { get; set; }
        [OneThirdWidth, LabelWidth(150)]
        public Boolean Domingo { get; set; }
        [OneThirdWidth, LabelWidth(150)]
        public Boolean Feriados { get; set; }
    }
}