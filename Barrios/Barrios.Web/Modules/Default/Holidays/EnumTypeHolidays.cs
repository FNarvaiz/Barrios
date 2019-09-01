using Serenity.ComponentModel;
using System.ComponentModel;
namespace Barrios.Default.Entities
{
    [EnumKey("Booking.TypeHolidays")]
    public enum TypeHolidays
    {
        [Description("Inamovible")]
        inamovible = 0,
        [Description("Puente")]
        puente = 1,
        [Description("Trasladable")]
        trasladable = 2
    }

}