
namespace Barrios.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.TwoNeighbors")]
    [BasedOnRow(typeof(Entities.ReservasRow), CheckNames = true)]
    public class TwoNeighborsForm
    {
        public Int32 IdVecino2 { get; set; }
    }
}