
namespace Barrios.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using Barrios.Default.Entities;

    [FormScript("Default.ReservasRecursos")]
    [BasedOnRow(typeof(Entities.ReservasRecursosRow), CheckNames = true)]
    public class ReservasRecursosForm
    {
        [Tab("Info")]
        public String Nombre { get; set; }
        public Int16 Apertura { get; set; }
        public Int16 Cierre { get; set; }
        public Int16 Resolucion { get; set; }
        [Tab("Tipos Reservas"), LabelWidth(0, UntilNext = true), DisplayName(""), ReservasTiposGrid]
        public List<ReservasTiposRow> TypeList { get; set; }
        [CheckLookupEditor("Administration.Barrios", ShowSelectAll = true, CheckedOnTop = true),Hidden, DisplayName("Barrios incluidos")]
        public List<Int32> ClientIdList { get; set; }
        [Tab("Turnos Especiales"), LabelWidth(0, UntilNext = true), DisplayName(""), ReservasTurnosEspecialesGrid]
        public List<ReservasTurnosEspecialesRow> SpecialTurnList { get; set; }
    }
}