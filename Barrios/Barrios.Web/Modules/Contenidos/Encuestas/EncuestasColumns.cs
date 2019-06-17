
namespace Barrios.Contenidos.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Contenidos.Encuestas")]
    [BasedOnRow(typeof(Entities.EncuestasRow), CheckNames = true)]
    public class EncuestasColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String Nombre { get; set; }
        public Int16 IdCategoria { get; set; }
        public DateTime FechaAlta { get; set; }
        public DateTime FechaBaja { get; set; }
        public Boolean Vigente { get; set; }
        public String Descripcion { get; set; }
        public String UserInsertUsername { get; set; }
        public DateTime DateInsert { get; set; }
        public String UserUpdateUsername { get; set; }
        public DateTime DateUpdate { get; set; }
    }
}