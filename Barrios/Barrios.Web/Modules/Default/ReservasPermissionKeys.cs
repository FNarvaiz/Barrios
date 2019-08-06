
using Serenity.Extensibility;
using System.ComponentModel;

namespace Barrios.Default
{
    [NestedPermissionKeys]
    [DisplayName("Reservas")]
    public class ReservasPermissionKeys
    {
        [Description("Reservas, recursos, tipos de reservas y turnos especiales")]
        public const string Reservas = "Reservas:admin";
        
    }
}
