
namespace Barrios.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using Barrios.Default.Entities;

    [FormScript("Default.Holidays")]
    [BasedOnRow(typeof(Entities.HolidaysRow), CheckNames = true)]
    public class HolidaysForm
    {
        public String Reason { get; set; }
        [RadioButtonEditor(typeof(TypeHolidays))]
        public int Type { get; set; }
        public DateTime Day { get; set; }
    }
}