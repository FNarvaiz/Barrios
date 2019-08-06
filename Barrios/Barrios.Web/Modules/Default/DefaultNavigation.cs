using Serenity.Navigation;
using MyPages = Barrios.Default.Pages;

[assembly: NavigationLink(int.MaxValue, "ABM Reservas/Reservas", typeof(MyPages.ReservasController), icon: null, Permission = "Reservas:admin")]
[assembly: NavigationLink(int.MaxValue, "ABM Reservas/Recursos", typeof(MyPages.ReservasRecursosController), icon: null, Permission = "Reservas:admin")]