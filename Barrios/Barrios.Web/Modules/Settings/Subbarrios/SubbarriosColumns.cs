
namespace Barrios.Settings.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Settings.Subbarrios")]
    [BasedOnRow(typeof(Entities.SubbarriosRow), CheckNames = true)]
    public class SubbarriosColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int16 Id { get; set; }
        [EditLink]
        public String Nombre { get; set; }
    }
}