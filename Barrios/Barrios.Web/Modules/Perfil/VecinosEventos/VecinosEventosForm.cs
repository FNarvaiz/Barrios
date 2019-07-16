
namespace Barrios.Perfil.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using Barrios.Perfil.Entities;

    [FormScript("Perfil.VecinosEventos")]
    [BasedOnRow(typeof(Entities.VecinosEventosRow), CheckNames = true)]
    public class VecinosEventosForm
    {

        public DateTime Fecha { get; set; }
        public String Nombre { get; set; }
        public String Lugar { get; set; }
        [Category("Concurrentes"), LabelWidth(0, UntilNext = true), DisplayName(""), VecinosEventosConcurrentesGrid]
        public List<VecinosEventosConcurrentesRow> ConcurrentesList { get; set; }
    }
}