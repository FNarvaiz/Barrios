using Serenity.Navigation;
using MyPages = Barrios.Settings.Pages;
[assembly: NavigationMenu(int.MaxValue, "Settings",icon: "fa-cog")]
[assembly: NavigationLink(int.MaxValue, "Settings/SubBarrios", typeof(MyPages.SubbarriosController), icon: "fa-home")]