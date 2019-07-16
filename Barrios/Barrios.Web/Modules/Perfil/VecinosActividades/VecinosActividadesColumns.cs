
namespace Barrios.Perfil.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Perfil.VecinosActividades")]
    [BasedOnRow(typeof(Entities.VecinosActividadesRow), CheckNames = true)]
    public class VecinosActividadesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public DateTime Fecha { get; set; }
        [EditLink]
        public String Actividad { get; set; }
        public String ActividadDetalles { get; set; }
        public String Ip { get; set; }
    }
}