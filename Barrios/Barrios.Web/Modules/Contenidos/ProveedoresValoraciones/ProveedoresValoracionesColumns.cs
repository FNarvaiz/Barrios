
namespace Barrios.Contenidos.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Contenidos.ProveedoresValoraciones")]
    [BasedOnRow(typeof(Entities.ProveedoresValoracionesRow), CheckNames = true)]
    public class ProveedoresValoracionesColumns
    {
        [DisplayName("Usuario")]
        public String UseridUsername { get; set; }
        public Int16 Valoracion { get; set; }
        public DateTime Fecha { get; set; }
    }
}