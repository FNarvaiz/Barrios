
namespace Barrios.Contenidos.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Contenidos.LineaTiempo")]
    [BasedOnRow(typeof(Entities.LineaTiempoRow), CheckNames = true)]
    public class LineaTiempoForm
    {
        public String Nombre { get; set; }
        public String ArchivoFilename { get; set; }
        public Int32 ArchivoFilesize { get; set; }
        public String ArchivoContenttype { get; set; }
        public Stream ArchivoBinarydata { get; set; }
        public Boolean Aprobado { get; set; }
        public Int16 Mes { get; set; }
        public Int16 Anio { get; set; }
        public String Periodo { get; set; }
        public DateTime PeriodoFecha { get; set; }
        public String ContenidoTexto { get; set; }
        public Int32 Userid { get; set; }
        public Int16 IdCategoria { get; set; }
    }
}