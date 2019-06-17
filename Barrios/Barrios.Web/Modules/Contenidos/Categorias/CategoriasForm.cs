
namespace Barrios.Contenidos.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using Barrios.Modules.Contenidos.Categorias;

    [FormScript("Contenidos.Categorias")]
    [BasedOnRow(typeof(Entities.CategoriasRow), CheckNames = true)]
    public class CategoriasForm
    {
        [LookupEditor(typeof(CategoryTypeLookup))]
        public Int32 Type { get; set; }
        public String Nombre { get; set; }
        public Boolean Mostrar { get; set; }
        public Boolean Vigente { get; set; }
    }
}