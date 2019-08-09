using Serenity.Navigation;
using MyPages = Barrios.Perfil.Pages;
[assembly: NavigationMenu(int.MaxValue, "Perfil", icon: "fa-user")]
//[assembly: NavigationLink(int.MaxValue, "Perfil/Vecinos Actividades", typeof(MyPages.VecinosActividadesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Perfil/Eventos", typeof(MyPages.VecinosEventosController), icon: "fa-map-marker")]
//[assembly: NavigationLink(int.MaxValue, "Perfil/Vecinos Eventos Concurrentes", typeof(MyPages.VecinosEventosConcurrentesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Perfil/Mascotas", typeof(MyPages.VecinosMascotasController), icon: "fa-home")]
[assembly: NavigationLink(int.MaxValue, "Perfil/Visitantes Frecuentes", typeof(MyPages.VecinosVisitantesFrecuentesController), icon: "fa-users")]