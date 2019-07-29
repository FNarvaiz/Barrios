
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
        public String Mails { get; set; }
        public Boolean Habilitada { get; set; }
    }
}