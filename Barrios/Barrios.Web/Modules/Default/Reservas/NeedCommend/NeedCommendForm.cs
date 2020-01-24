
namespace Barrios.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.NeedCommend")]
    [BasedOnRow(typeof(Entities.ReservasRow), CheckNames = true)]
    public class NeedCommendForm
    {
        [Required]
        public string Observaciones { get; set; }
    }
}