using Serenity.Navigation;
using MyPages = Barrios.Default.Pages;

[assembly: NavigationMenu(int.MaxValue, "Reservas", icon: "fa-book")]
[assembly: NavigationLink(int.MaxValue, "Reservas/Reservas", typeof(MyPages.ReservasController), icon: "fa-calendar", Permission = "Reservas:admin")]
[assembly: NavigationLink(int.MaxValue, "Reservas/Recursos", typeof(MyPages.ReservasRecursosController), icon: "fa-building", Permission = "Reservas:admin")]