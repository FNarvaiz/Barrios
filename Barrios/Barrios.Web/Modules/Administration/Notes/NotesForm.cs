
namespace Barrios.Administration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Administration.Notes")]
    [BasedOnRow(typeof(Entities.NotesRow), CheckNames = true)]
    public class NotesForm
    {

        public Int32 DestinationUserId { get; set; }
        public String Message { get; set; }
        public Boolean ShowUser { get; set; }
    }
}