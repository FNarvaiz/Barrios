﻿
namespace Barrios.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using Barrios.Modules.Default;

    [ColumnsScript("Default.ReservasTurnosEspeciales")]
    [BasedOnRow(typeof(Entities.ReservasTurnosEspecialesRow), CheckNames = true)]
    public class ReservasTurnosEspecialesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int16 Id { get; set; }
        [HorariosFormatter]
        public Int16 Inicio { get; set; }
        [HorariosFormatter]
        public Int16 Duracion { get; set; }
        [EditLink]
        public String Nombre { get; set; }
        public String Dias { get; set; }
    }
}