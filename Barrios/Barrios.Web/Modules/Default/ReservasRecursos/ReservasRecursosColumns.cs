
namespace Barrios.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using Barrios.Modules.Default;

    [ColumnsScript("Default.ReservasRecursos")]
    [BasedOnRow(typeof(Entities.ReservasRecursosRow), CheckNames = true)]
    public class ReservasRecursosColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int16 Id { get; set; }
        [EditLink]
        public String Nombre { get; set; }
        [HorariosFormatter]
        public Int16 Apertura { get; set; }
        [HorariosFormatter]
        public Int16 Cierre { get; set; }
        public Int16 Resolucion { get; set; }
        public String Regulation { get; set; }
    }
}