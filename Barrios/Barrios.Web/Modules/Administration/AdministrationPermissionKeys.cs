
using Serenity.Extensibility;
using System.ComponentModel;

namespace Barrios.Administration
{
    [NestedPermissionKeys]
    [DisplayName("Administration")]
    public class PermissionKeys
    {
        [Description("Administrador de la pagina")]
        public const string AdminPage = "Administration:Page";

        [Description("User, Role Management and Permissions")]
        public const string Security = "Administration:Security";

        [Description("Languages and Translations")]
        public const string Translation = "Administration:Translation";

        [Description("Información de vecinos")]
        public const string Information = "Administration:Perfil";
        
    }
}
