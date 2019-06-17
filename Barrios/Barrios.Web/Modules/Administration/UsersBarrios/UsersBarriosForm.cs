
namespace Barrios.Administration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using Barrios.Modules.Barrios.Barrio;

    [FormScript("Administration.UsersBarrios")]
    [BasedOnRow(typeof(Entities.UsersBarriosRow), CheckNames = true)]
    public class UsersBarriosForm
    {
        [Hidden]
        public Int32 UserId { get; set; }
        [LookupEditor(typeof(BarrioLookup))]
        public Int32 BarrioId { get; set; }
    }
}