using Serenity.Navigation;
using MyPages = Barrios.Default.Pages;

[assembly: NavigationLink(1100, "Mis reservas", typeof(MyPages.ReservasController), icon: "fa-tachometer",action: "MyBookings")]
[assembly: NavigationMenu(int.MaxValue, "Administration/Reservas", icon: "fa-book")]
[assembly: NavigationLink(int.MaxValue, "Administration/Reservas/Reservas", typeof(MyPages.ReservasController), icon: "fa-calendar", Permission = "Reservas:admin")]
[assembly: NavigationLink(int.MaxValue, "Administration/Reservas/Recursos", typeof(MyPages.ReservasRecursosController), icon: "fa-building", Permission = "Reservas:admin")]
[assembly: NavigationLink(int.MaxValue, "Administration/Reservas/Feriados", typeof(MyPages.HolidaysController), icon: null)]

[assembly: NavigationLink(int.MaxValue, "Vecinos del golf", typeof(MyPages.ReservasController), icon: "fa-book", Permission = "User:redirecGolf", Target="blank",Url = "https://vecinosdelgolf.com.ar")]
//[assembly: NavigationLink(int.MaxValue, "Default/Reservas Recurrentes", typeof(MyPages.ReservasRecurrentesController), icon: null)]