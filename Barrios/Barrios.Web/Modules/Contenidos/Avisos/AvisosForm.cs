
namespace Barrios.Contenidos.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Contenidos.Avisos")]
    [BasedOnRow(typeof(Entities.AvisosRow), CheckNames = true)]
    public class AvisosForm
    {
        public String Nombre { get; set; }
        public Int16 IdCategoria { get; set; }
        public DateTime Caducidad { get; set; }
        public Boolean Vigente { get; set; }
        public String Descripcion { get; set; }
        public String Imagen { get; set; }
        public Int32 UserInsert { get; set; }
        public Int32 UserUpdate { get; set; }
        public DateTime DateUpdate { get; set; }
        public DateTime DateInsert { get; set; }
    }
}