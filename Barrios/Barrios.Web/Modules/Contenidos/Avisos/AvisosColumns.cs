
namespace Barrios.Contenidos.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Contenidos.Avisos")]
    [BasedOnRow(typeof(Entities.AvisosRow), CheckNames = true)]
    public class AvisosColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String Nombre { get; set; }
        public String CategoryName { get; set; }
        public DateTime Caducidad { get; set; }
        public Boolean Vigente { get; set; }
        public String Descripcion { get; set; }
        public String Imagen { get; set; }
        public DateTime DateInsert { get; set; }
        public String UserInsertUsername { get; set; }
        public DateTime DateUpdate { get; set; }
        public String UserUpdateUsername { get; set; }
    }
}