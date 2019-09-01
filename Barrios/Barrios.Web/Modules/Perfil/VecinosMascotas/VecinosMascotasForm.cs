
namespace Barrios.Perfil.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Perfil.VecinosMascotas")]
    [BasedOnRow(typeof(Entities.VecinosMascotasRow), CheckNames = true)]
    public class VecinosMascotasForm
    {
        public String Nombre { get; set; }
        public Int16 IdTipo { get; set; }
        public String Raza { get; set; }
        public String Foto { get; set; }
        public String Vacunas { get; set; }
        
    }
}