
namespace Barrios.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.ReservasRecurrentes")]
    [BasedOnRow(typeof(Entities.ReservasRecurrentesRow), CheckNames = true)]
    public class ReservasRecurrentesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String Dias { get; set; }
        public String Observaciones { get; set; }
        public Int16 Inicio { get; set; }
        public Int16 Duracion { get; set; }
    }
}