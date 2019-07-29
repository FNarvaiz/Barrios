
namespace Barrios.Contenidos.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Contenidos.ComisionesIntegrantes")]
    [BasedOnRow(typeof(Entities.ComisionesIntegrantesRow), CheckNames = true)]
    public class ComisionesIntegrantesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int16 Id { get; set; }
        [EditLink]
        public String Nombre { get; set; }
    }
}