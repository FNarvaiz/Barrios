
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
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String IdProveedorNombre { get; set; }
        public DateTime Fecha { get; set; }
        public Int16 Valoracion { get; set; }
        public String UseridUsername { get; set; }
    }
}