
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
        

        
        [Width(80)]
        public DateTime Fecha { get; set; }
        [Width(200)]
        public String IdRecursoNombre { get; set; }
        [Width(50)]
        public String Hora { get; set; }
        [Width(80)]
        public String  Tipo { get; set; }
        public String Observaciones { get; set; }
        [Width(70)]
        public String IdVecinoUsername2 { get; set; }
        public DateTime DateInsert { get; set; }
        [Hidden]
        public Int16 IdRecurso { get; set; }
        [DisplayName("Conf")]
        public Boolean Confirmada { get; set; }
        [DisplayName("ID"), Width(40), AlignRight]
        public Int32 Id { get; set; }
    }
}