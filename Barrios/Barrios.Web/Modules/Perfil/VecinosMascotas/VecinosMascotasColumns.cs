
namespace Barrios.Perfil.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Perfil.VecinosMascotas")]
    [BasedOnRow(typeof(Entities.VecinosMascotasRow), CheckNames = true)]
    public class VecinosMascotasColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"),Hidden, AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String Nombre { get; set; }
        public Int16 IdTipo { get; set; }
        public String Raza { get; set; }
    }
}