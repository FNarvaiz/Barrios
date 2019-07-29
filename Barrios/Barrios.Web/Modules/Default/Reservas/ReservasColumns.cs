
namespace Barrios.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Reservas")]
    [BasedOnRow(typeof(Entities.ReservasRow), CheckNames = true)]
    public class ReservasColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public DateTime Fecha { get; set; }
        public String IdVecinoUsername { get; set; }
        public String IdRecursoNombre { get; set; }
        public Int16 Inicio { get; set; }
        public Int16 Duracion { get; set; }
        public Int32 IdTipo { get; set; }
        public DateTime FechaFin { get; set; }
        public String Observaciones { get; set; }
        public Int32 IdVecino2 { get; set; }
        public DateTime DateInsert { get; set; }
        public Int32 UserInsert { get; set; }
        [Hidden]
        public Int16 IdRecurso { get; set; }
        
    }
}