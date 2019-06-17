
namespace Barrios.Contenidos.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Contenidos.Categorias")]
    [BasedOnRow(typeof(Entities.CategoriasRow), CheckNames = true)]
    public class CategoriasColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int16 Id { get; set; }
        [EditLink]
        public String Nombre { get; set; }
        public Boolean Vigente { get; set; }
        public String UserInsertUsername { get; set; }
        public DateTime DateInsert { get; set; }
        public String UserUpdateUsername { get; set; }
        public DateTime DateUpdate { get; set; }
        public String TypeName { get; set; }
        public Boolean Mostrar { get; set; }
    }
}