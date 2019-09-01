
namespace Barrios.Perfil.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Perfil.VecinosVisitantesFrecuentes")]
    [BasedOnRow(typeof(Entities.VecinosVisitantesFrecuentesRow), CheckNames = true)]
    public class VecinosVisitantesFrecuentesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), Hidden, AlignRight]
        public Int32 Id { get; set; }
        public String UseridUsername { get; set; }
        [EditLink]
        public String Nombre { get; set; }
        public String Dni { get; set; }
        public String Vehiculo { get; set; }
        public String Tipo { get; set; }
        [Hidden]
        public Int32 Userid { get; set; }
    }
}