
namespace Barrios.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Reservas")]
    [BasedOnRow(typeof(Entities.ReservasRow), CheckNames = true)]
    public class ReservasForm
    {
        public DateTime Fecha { get; set; }
        public Int32 IdVecino { get; set; }
        public Int16 IdRecurso { get; set; }
        public Int32 IdTipo { get; set; }
        public Int32 IdTurnosEspeciales { get; set; }
        public Int16 Inicio { get; set; }
        [Hidden]
        public Int16 Duracion { get; set; }
        [Hidden]
        public String Turno { get; set; }
        public String Observaciones { get; set; }
        [Hidden]
        public Int32 IdVecino2 { get; set; }
    }
}