using Serenity.Navigation;
using MyPages = Barrios.Settings.Pages;
[assembly: NavigationMenu(int.MaxValue, "Administration/Settings", icon: "fa-cog")]
[assembly: NavigationLink(int.MaxValue, "Administration/Settings/SubBarrios", typeof(MyPages.SubbarriosController), icon: "fa-home", Permission = "Configuración:SubBarrios")]