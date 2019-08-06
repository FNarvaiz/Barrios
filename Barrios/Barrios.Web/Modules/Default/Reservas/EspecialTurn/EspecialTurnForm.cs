
namespace Barrios.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.EspecialTurn")]
    [BasedOnRow(typeof(Entities.ReservasRow), CheckNames = true)]
    public class EspecialTurnForm
    {

        public DateTime Fecha { get; set; }
        [LookupEditor("Reservas.ResourceEspecialLookup")]
        public Int16 IdRecurso { get; set; }
        public Int32 IdTurnosEspeciales { get; set; }
        [Hidden]
        public Int16 Inicio { get; set; }
        [Hidden]
        public Int16 Duracion { get; set; }
        public String Observaciones { get; set; }
    }
}