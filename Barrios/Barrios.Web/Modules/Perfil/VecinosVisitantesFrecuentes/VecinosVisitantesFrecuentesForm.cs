
namespace Barrios.Perfil.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Perfil.VecinosVisitantesFrecuentes")]
    [BasedOnRow(typeof(Entities.VecinosVisitantesFrecuentesRow), CheckNames = true)]
    public class VecinosVisitantesFrecuentesForm
    {
        public String Nombre { get; set; }
        public String Dni { get; set; }
        public String Vehiculo { get; set; }
        public String Tipo { get; set; }
    }
}