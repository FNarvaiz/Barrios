
namespace Barrios.Administration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Administration.Notes")]
    [BasedOnRow(typeof(Entities.NotesRow), CheckNames = true)]
    public class NotesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String DestinationUserUsername { get; set; }
        public Boolean ShowUser { get; set; }
        public String Message { get; set; }

        public String CreateUserUsername { get; set; }
        public DateTime CreateDate { get; set; }
        public String UpdatetionUserUsername { get; set; }
        public DateTime UpdateDate { get; set; }
    }
}