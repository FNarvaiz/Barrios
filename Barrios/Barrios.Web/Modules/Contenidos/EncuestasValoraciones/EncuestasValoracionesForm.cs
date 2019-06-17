﻿
namespace Barrios.Contenidos.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Contenidos.EncuestasValoraciones")]
    [BasedOnRow(typeof(Entities.EncuestasValoracionesRow), CheckNames = true)]
    public class EncuestasValoracionesForm
    {
        public Int32 IdEncuesta { get; set; }
        public DateTime Fecha { get; set; }
        public Int16 Valoracion { get; set; }
        public String Comentario { get; set; }
        public Int32 Userid { get; set; }
    }
}