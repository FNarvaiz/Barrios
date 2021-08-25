
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
        [Tab("Info"), Category("Detalles"), OneThirdWidth]
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
        [OneThirdWidth,  IntegerEditor(AllowNegatives = false, MaxValue = 10, MinValue = 0)]
        public Int16 AmountToReserve { get; set; }
        [OneThirdWidth, IntegerEditor(AllowNegatives = false, MaxValue = 10, MinValue = 0)]
        public Int16 AmountForDays { get; set; }
        [OneThirdWidth]
        public Boolean NeedComment { get; set; }
        [DisplayName("Desde"), HalfWidth, Placeholder("Cantidad de dias a partir de los que se puede reservar")]
        public Int16 Desde { get; set; }
        [DisplayName("Hasta"), HalfWidth, Placeholder("Cantidad de dias hasta los que se puede reservar")]
        public Int16 Hasta { get; set; }
        [HalfWidth, Placeholder("Si pone 2 horas, siendo las 4:01pm, solo se podra reservar 5pm y 6pm."),Required]
        public Int32 LimitHour { get; set; }
        
        [Category("Página")]
        public String Description { get; set; }
        [Category("Correo")]
        [LabelWidth(130, UntilNext = true)]
        public String Emails { get; set; }
        [LabelWidth(70, UntilNext = true),AlignCenter()]
        public String MailBody { get; set; }

        [Tab("Tipos Reservas"), LabelWidth(0, UntilNext = true), DisplayName(""), ReservasTiposGrid]
        public List<ReservasTiposRow> TypeList { get; set; }
        [Hidden]
        public String Dias { get; set; }
        [Category("Dias"), OneThirdWidth, LabelWidth(150)]
        public Boolean Lunes { get; set; }
        [OneThirdWidth,LabelWidth(150)]
        public Boolean Martes { get; set; }
        [OneThirdWidth, LabelWidth(150)]
        public Boolean Miercoles { get; set; }
        [OneThirdWidth, LabelWidth(150)]
        public Boolean Jueves { get; set; }
        [OneThirdWidth, LabelWidth(150)]
        public Boolean Viernes { get; set; }
        [OneThirdWidth, LabelWidth(150)]
        public Boolean Sabado { get; set; }
        [OneThirdWidth, LabelWidth(150)]
        public Boolean Domingo { get; set; }
        [OneThirdWidth, LabelWidth(150)]
        public Boolean Feriados { get; set; }
        [Tab("Reservas Recurrentes"), AllowHide(true), LabelWidth(0, UntilNext = true), DisplayName(""), ReservasRecurrentesGrid]
        public List<ReservasRecurrentesRow> BookingRecurringList { get; set; }
        [Tab("Turnos Especiales"),AllowHide(true), LabelWidth(0, UntilNext = true), DisplayName(""), ReservasTurnosEspecialesGrid]
        public List<ReservasTurnosEspecialesRow> SpecialTurnList { get; set; }
        
        [Tab("Sub Barrios"), DisplayName(""), LabelWidth(0, UntilNext = true),CheckLookupEditor("Settings.Subbarrios",HideSearch =true, ShowSelectAll = true, CheckedOnTop = true)]
        public List<Int32> NeigborhoodList { get; set; }
        [Tab("Reglamento"),DisplayName("")]
        public String Regulation { get; set; }
    }
}