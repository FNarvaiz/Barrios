
namespace Barrios.Contenidos.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Contenidos.Comisiones")]
    [BasedOnRow(typeof(Entities.ComisionesRow), CheckNames = true)]
    public class ComisionesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int16 Id { get; set; }
        [EditLink]
        public String Nombre { get; set; }
        public Boolean Habilitada { get; set; }
        public String Sigla { get; set; }
        public String Color { get; set; }
        public String Mails { get; set; }
        public String UserInsertUsername { get; set; }
        public DateTime DateInsert { get; set; }
        public String UserUpdateUsername { get; set; }
        public DateTime DateUpdate { get; set; }
        public String BarrioNombre { get; set; }
    }
}