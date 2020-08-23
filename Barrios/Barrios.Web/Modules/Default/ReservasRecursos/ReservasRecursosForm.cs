
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
        [Tab("Info"),Category("Detalles"), OneThirdWidth]
        public String Nombre { get; set; }
        [OneThirdWidth]
        public Int32 AppHoldId { get; set; }
        [OneThirdWidth]
        public Int16 Tipo { get; set; }
        [OneThirdWidth]
        public Int16 Apertura { get; set; }
        [OneThirdWidth]
        public Int16 Cierre { get; set; }
        [OneThirdWidth]
        public Int16 Resolucion { get; set; }
        [OneThirdWidth]
        public Int16 AmountToReserve { get; set; }
        [OneThirdWidth]
        public Boolean NeedComment { get; set; }
        [DisplayName("Desde"), OneThirdWidth, Placeholder("Cantidad de dias a partir de los que se puede reservar")]
        public Int16 Desde { get; set; }
        [DisplayName("Hasta"), OneThirdWidth, Placeholder("Cantidad de dias hasta los que se puede reservar")]
        public Int16 Hasta { get; set; }
        [Category("Página")]
        public String Description { get; set; }
        [Category("Correo")]
        [LabelWidth(130, UntilNext = true)]
        public String Emails { get; set; }
        [LabelWidth(70, UntilNext = true),AlignCenter()]
        public String MailBody { get; set; }

        [Tab("Tipos Reservas"), LabelWidth(0, UntilNext = true), DisplayName(""), ReservasTiposGrid]
        public List<ReservasTiposRow> TypeList { get; set; }
        [Tab("Turnos Especiales"),AllowHide(true), LabelWidth(0, UntilNext = true), DisplayName(""), ReservasTurnosEspecialesGrid]
        public List<ReservasTurnosEspecialesRow> SpecialTurnList { get; set; }
        
        [Tab("Sub Barrios"), DisplayName(""), LabelWidth(0, UntilNext = true),CheckLookupEditor("Settings.Subbarrios",HideSearch =true, ShowSelectAll = true, CheckedOnTop = true)]
        public List<Int32> NeigborhoodList { get; set; }
        [Tab("Reglamento"),DisplayName("")]
        public String Regulation { get; set; }
    }
}