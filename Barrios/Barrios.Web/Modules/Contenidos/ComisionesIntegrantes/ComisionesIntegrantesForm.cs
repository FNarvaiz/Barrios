
namespace Barrios.Contenidos.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Contenidos.ComisionesIntegrantes")]
    [BasedOnRow(typeof(Entities.ComisionesIntegrantesRow), CheckNames = true)]
    public class ComisionesIntegrantesForm
    {
        public Int16 Id { get; set; }
        public String Nombre { get; set; }
        public Int32 UserInsert { get; set; }
        public DateTime DateInsert { get; set; }
        public Int32 UserUpdate { get; set; }
        public DateTime DateUpdate { get; set; }
    }
}