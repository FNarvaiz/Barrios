using Serenity.Navigation;
using MyPages = Barrios.Default.Pages;

[assembly: NavigationLink(int.MaxValue, "Default/Reservas", typeof(MyPages.ReservasController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Reservas Recursos", typeof(MyPages.ReservasRecursosController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Reservas Tipos", typeof(MyPages.ReservasTiposController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Reservas Turnos Especiales", typeof(MyPages.ReservasTurnosEspecialesController), icon: null)]