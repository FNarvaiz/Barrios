
namespace Barrios.Contenidos.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Contenidos.Comisiones")]
    [BasedOnRow(typeof(Entities.ComisionesRow), CheckNames = true)]
    public class ComisionesForm
    {
        public String Nombre { get; set; }
        public Boolean Habilitada { get; set; }
        public String Sigla { get; set; }
        public String Color { get; set; }
        public String Mails { get; set; }
        public Int32 UserInsert { get; set; }
        public DateTime DateInsert { get; set; }
        public Int32 UserUpdate { get; set; }
        public DateTime DateUpdate { get; set; }
        public Int32 BarrioId { get; set; }
    }
}