
namespace Barrios.Contenidos.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Contenidos.LineaTiempo")]
    [BasedOnRow(typeof(Entities.LineaTiempoRow), CheckNames = true)]
    public class LineaTiempoColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String Nombre { get; set; }
        public String CategoryName { get; set; }
        public DateTime PeriodoFecha { get; set; }
        public String ContenidoTexto { get; set; }
        public String ArchivoFilename { get; set; }
        public Boolean Mostrar { get; set; }
        public Boolean Aprobado { get; set; }
    }
}