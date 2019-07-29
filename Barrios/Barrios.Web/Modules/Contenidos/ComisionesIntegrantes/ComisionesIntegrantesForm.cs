
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
        public String Nombre { get; set; }
    }
}