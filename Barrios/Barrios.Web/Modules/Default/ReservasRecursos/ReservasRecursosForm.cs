
namespace Barrios.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.ReservasRecursos")]
    [BasedOnRow(typeof(Entities.ReservasRecursosRow), CheckNames = true)]
    public class ReservasRecursosForm
    {
        public String Nombre { get; set; }
        public Int16 Apertura { get; set; }
        public Int16 Cierre { get; set; }
        public Int16 Resolucion { get; set; }
    }
}