
namespace Barrios.Contenidos.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Contenidos.Proveedores")]
    [BasedOnRow(typeof(Entities.ProveedoresRow), CheckNames = true)]
    public class ProveedoresColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String Nombre { get; set; }
        public Decimal Rating { get; set; }
        [Hidden]
        public Int16 IdCategoria { get; set; }
        public String CategoryName { get; set; }
        public DateTime FechaAlta { get; set; }
        public DateTime FechaBaja { get; set; }
        
        public Boolean Vigente { get; set; }
        public String Domicilio { get; set; }
        public String Telefonos { get; set; }
        public String Email { get; set; }
        public String Notas { get; set; }
        public String UserInsertUsername { get; set; }
        public DateTime DateInsert { get; set; }
        public String UserUpdateUsername { get; set; }
        public DateTime DateUpdate { get; set; }
    }
}