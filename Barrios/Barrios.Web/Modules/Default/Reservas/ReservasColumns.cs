
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

    [ColumnsScript("Default.Reservas")]
    [BasedOnRow(typeof(Entities.ReservasRow), CheckNames = true)]
    public class ReservasColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink, QuickFilter()]
        public DateTime Fecha { get; set; }
        [Width(50)]
        public String IdVecinoUnidad { get; set; }
        public String IdVecinoUsername { get; set; }

        public String IdRecursoNombre { get; set; }
        [Width(50)]
        public String Hora { get; set; }
        [Width(70),HorariosFormatter]
        public Int16 Duracion { get; set; }
        [Width(100)]
        public String Tipo { get; set; }
        public DateTime FechaFin { get; set; }
        public String Observaciones { get; set; }
        [DisplayName("Conf")]
        public Boolean Confirmada { get; set; }
        public DateTime DateInsert { get; set; }
        public Int32 UserInsert { get; set; }
        [Hidden,DisplayName("Id Recurso")]
        public Int16 IdRecurso { get; set; }
        [QuickFilter, Hidden, DisplayName("Id Vecino")]
        public Int32 IdVecino { get; set; }
        [QuickFilter, Hidden, DisplayName("Id Vecino2")]
        public Int32 IdVecino2 { get; set; }
    }
}