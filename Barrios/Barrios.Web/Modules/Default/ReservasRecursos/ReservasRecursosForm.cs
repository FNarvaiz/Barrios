﻿
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
        public Int16 Tipo { get; set; }
        public Int16 Apertura { get; set; }
        public Int16 Cierre { get; set; }
        public Int16 Resolucion { get; set; }
        public String Emails { get; set; }
        public String MailBody { get; set; }
        public String Description { get; set; }
        [Tab("Tipos Reservas"), LabelWidth(0, UntilNext = true), DisplayName(""), ReservasTiposGrid]
        public List<ReservasTiposRow> TypeList { get; set; }
        [Tab("Turnos Especiales"),AllowHide(true), LabelWidth(0, UntilNext = true), DisplayName(""), ReservasTurnosEspecialesGrid]
        public List<ReservasTurnosEspecialesRow> SpecialTurnList { get; set; }
         [DisplayName(""),Placeholder("Cantidad de dias a partir de los que se puede reservar")]
        public Int16 Desde { get; set; }
        [DisplayName(""), Placeholder("Cantidad de dias hasta los que se puede reservar")]
        public Int16 Hasta { get; set; }
        [Tab("Sub Barrios"), DisplayName(""), LabelWidth(0, UntilNext = true),CheckLookupEditor("Settings.Subbarrios",HideSearch =true, ShowSelectAll = true, CheckedOnTop = true)]
        public List<Int32> NeigborhoodList { get; set; }
        [Tab("Reglamento"),DisplayName("")]
        public String Regulation { get; set; }
    }
}