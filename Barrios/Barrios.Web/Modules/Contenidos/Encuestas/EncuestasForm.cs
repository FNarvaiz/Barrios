
namespace Barrios.Contenidos.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Contenidos.Encuestas")]
    [BasedOnRow(typeof(Entities.EncuestasRow), CheckNames = true)]
    public class EncuestasForm
    {
        public String Nombre { get; set; }
        public DateTime FechaAlta { get; set; }
        public DateTime FechaBaja { get; set; }
        [LookupEditor("Category.SurveysCategoryLookup", InplaceAdd = true, DialogType = "Contenidos.CategoriasDialog")]
        public Int16 IdCategoria { get; set; }
        public String Descripcion { get; set; }
        public Boolean Vigente { get; set; }
    }
}