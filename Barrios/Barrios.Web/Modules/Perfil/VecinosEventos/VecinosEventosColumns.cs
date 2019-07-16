
namespace Barrios.Perfil.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Perfil.VecinosEventos")]
    [BasedOnRow(typeof(Entities.VecinosEventosRow), CheckNames = true)]
    public class VecinosEventosColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"),Hidden, AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String Nombre { get; set; }
        public DateTime Fecha { get; set; }
        public String Lugar { get; set; }
       // public String UseridUsername { get; set; }
    }
}