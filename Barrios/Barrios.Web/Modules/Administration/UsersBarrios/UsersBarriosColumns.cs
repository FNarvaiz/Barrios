
namespace Barrios.Administration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Administration.UsersBarrios")]
    [BasedOnRow(typeof(Entities.UsersBarriosRow), CheckNames = true)]
    public class UsersBarriosColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public String UserUsername { get; set; }
        public String BarrioNombre { get; set; }
    }
}