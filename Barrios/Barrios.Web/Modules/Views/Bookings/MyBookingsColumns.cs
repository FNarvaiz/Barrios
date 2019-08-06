
namespace Barrios.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.MyBookings")]
    [BasedOnRow(typeof(Entities.ReservasRow), CheckNames = true)]
    public class MyBookingsColumns
    {
        [DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public DateTime Fecha { get; set; }
        [Width(150)]
        public String IdRecursoNombre { get; set; }
        [Width(150)]
        public String Hora { get; set; }
        [Width(150)]
        public String  Tipo { get; set; }
        public String Observaciones { get; set; }
        [Width(150)]
        public String IdVecinoUsername2 { get; set; }
        public DateTime DateInsert { get; set; }
        [Hidden]
        public Int16 IdRecurso { get; set; }
        
    }
}