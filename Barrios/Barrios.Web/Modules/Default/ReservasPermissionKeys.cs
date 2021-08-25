
using Serenity.Extensibility;
using System.ComponentModel;

namespace Barrios.Default
{
    [NestedPermissionKeys]
    [DisplayName("Reservas")]
    public class ReservasPermissionKeys
    {
        [Description("Reservas")]
        public const string Reservas = "Reservas:admin";
        [Description("Link al Golf")]
        public const string Golf = "User:redirecGolf";
    }
}
