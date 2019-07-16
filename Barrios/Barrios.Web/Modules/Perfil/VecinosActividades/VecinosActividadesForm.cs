
namespace Barrios.Perfil.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Perfil.VecinosActividades")]
    [BasedOnRow(typeof(Entities.VecinosActividadesRow), CheckNames = true)]
    public class VecinosActividadesForm
    {
        public DateTime Fecha { get; set; }
        public String Actividad { get; set; }
        public String ActividadDetalles { get; set; }
    }
}