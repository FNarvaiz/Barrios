
namespace Barrios.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.ReservasTipos")]
    [BasedOnRow(typeof(Entities.ReservasTiposRow), CheckNames = true)]
    public class ReservasTiposColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int16 Id { get; set; }
        [EditLink]
        public String Nombre { get; set; }
        public Int16 Duracion { get; set; }
        public Boolean Vigente { get; set; }
        public Boolean RequiereVecino2 { get; set; }
    }
}