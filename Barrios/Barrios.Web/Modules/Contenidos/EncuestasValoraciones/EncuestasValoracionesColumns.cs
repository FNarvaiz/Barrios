
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
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String IdEncuestaNombre { get; set; }
        public DateTime Fecha { get; set; }
        public Int16 Valoracion { get; set; }
        [EditLink]
        public String Comentario { get; set; }
        public String UseridUsername { get; set; }
    }
}