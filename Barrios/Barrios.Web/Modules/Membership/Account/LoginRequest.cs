
namespace Barrios.Membership
{
    using Serenity.ComponentModel;
    using Serenity.Services;

    [FormScript("Membership.Login")]
    [BasedOnRow(typeof(Administration.Entities.UserRow))]
    public class LoginRequest : ServiceRequest
    {
        [Placeholder("Nombre de usuario")]
        public string Username { get; set; }
        [PasswordEditor, Placeholder("Contraseña"), Required(true)]
        public string Password { get; set; }
    }
}