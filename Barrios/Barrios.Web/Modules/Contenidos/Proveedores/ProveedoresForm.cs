
namespace Barrios.Contenidos.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Contenidos.Proveedores")]
    [BasedOnRow(typeof(Entities.ProveedoresRow), CheckNames = true)]
    public class ProveedoresForm
    {
        public String Nombre { get; set; }
        public Int16 IdCategoria { get; set; }
        public DateTime FechaAlta { get; set; }
        public DateTime FechaBaja { get; set; }
        public String Domicilio { get; set; }
        public String Telefonos { get; set; }
        public String Email { get; set; }
        public String Notas { get; set; }
        public Boolean Vigente { get; set; }
    }
}