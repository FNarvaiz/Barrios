
namespace Barrios.Perfil.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Perfil.VecinosEventosConcurrentes")]
    [BasedOnRow(typeof(Entities.VecinosEventosConcurrentesRow), CheckNames = true)]
    public class VecinosEventosConcurrentesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"),Hidden, AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String Nombre { get; set; }
    }
}