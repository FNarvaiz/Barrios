
namespace Barrios.Contenidos.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Contenidos.EncuestasValoraciones")]
    [BasedOnRow(typeof(Entities.EncuestasValoracionesRow), CheckNames = true)]
    public class EncuestasValoracionesColumns
    {
        [DisplayName("Usuario")]
        public String UseridUsername { get; set; }
        public Int16 Valoracion { get; set; }
        public String Comentario { get; set; }
        public DateTime Fecha { get; set; }
    }
}