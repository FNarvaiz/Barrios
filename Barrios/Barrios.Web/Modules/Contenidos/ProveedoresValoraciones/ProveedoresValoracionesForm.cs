
namespace Barrios.Contenidos.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Contenidos.ProveedoresValoraciones")]
    [BasedOnRow(typeof(Entities.ProveedoresValoracionesRow), CheckNames = true)]
    public class ProveedoresValoracionesForm
    {
        public Int32 IdProveedor { get; set; }
        public DateTime Fecha { get; set; }
        public Int16 Valoracion { get; set; }
        public Int32 Userid { get; set; }
    }
}