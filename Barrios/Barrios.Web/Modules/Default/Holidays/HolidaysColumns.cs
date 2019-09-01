
namespace Barrios.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Holidays")]
    [BasedOnRow(typeof(Entities.HolidaysRow), CheckNames = true)]
    public class HolidaysColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String Reason { get; set; }
        public Int16 Type { get; set; }
        public DateTime Day { get; set; }
        public String ApiId { get; set; }
    }
}