
namespace Barrios.Contenidos.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Contenidos.LineaTiempo")]
    [BasedOnRow(typeof(Entities.LineaTiempoRow), CheckNames = true)]
    public class LineaTiempoForm
    {
        public String Nombre { get; set; }
        [LookupEditor("Category.TimeLineCategoryLookup", InplaceAdd = true, DialogType = "Contenidos.CategoriasDialog")]
        public Int16 IdCategoria { get; set; }
        public DateTime PeriodoFecha { get; set; }
        public String ContenidoTexto { get; set; }
        public String ArchivoFilename { get; set; }
        public Boolean Aprobado { get; set; }
    }
}