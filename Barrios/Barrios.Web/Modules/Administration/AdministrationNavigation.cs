using Serenity.Navigation;
using MyPages = Barrios.Administration.Pages;
using Administration = Barrios.Administration.Pages;

[assembly: NavigationMenu(9000, "Administration", icon: "fa-desktop")]
[assembly: NavigationLink(9000, "Administration/Settings/Exceptions Log", url: "~/errorlog.axd", permission: Barrios.Administration.PermissionKeys.Security, icon: "fa-ban", Target = "_blank")]
[assembly: NavigationLink(9000, "Administration/Settings/Languages", typeof(Administration.LanguageController), icon: "fa-comments")]
[assembly: NavigationLink(9000, "Administration/Settings/Translations", typeof(Administration.TranslationController), icon: "fa-comment-o")]

[assembly: NavigationMenu(int.MaxValue, "Administration/Usuarios", icon: "fa-users")]
[assembly: NavigationLink(9000, "Administration/Usuarios/Roles", typeof(Administration.RoleController), icon: "fa-lock")]
[assembly: NavigationLink(9000, "Administration/Usuarios/User Management", typeof(Administration.UserController), icon: "fa-users")]
[assembly: NavigationLink(int.MaxValue, "Administration/Settings/Barrios", typeof(MyPages.BarriosController), icon: "fa-building")]