using Serenity.Navigation;
using MyPages = Barrios.Perfil.Pages;
[assembly: NavigationMenu(int.MaxValue, "Administration/Información de Vecinos", icon: "fa-user")]

[assembly: NavigationLink(int.MaxValue, "Administration/Información de Vecinos/Eventos", typeof(MyPages.VecinosEventosController), icon: "fa-map-marker")]
[assembly: NavigationLink(int.MaxValue, "Administration/Información de Vecinos/Visitantes Frecuentes", typeof(MyPages.VecinosVisitantesFrecuentesController), icon: "fa-users")]
[assembly: NavigationLink(int.MaxValue, "Administration/Información de Vecinos/Mascotas", typeof(MyPages.VecinosMascotasController), icon: "fa-home")]

[assembly: NavigationLink(int.MaxValue, "Perfil", typeof(MyPages.VecinosEventosController), action: "Personal", icon: "fa-user")]
//[assembly: NavigationLink(int.MaxValue, "Perfil/Vecinos Actividades", typeof(MyPages.VecinosActividadesController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Perfil/Eventos", typeof(MyPages.VecinosEventosController),action: "Personal", icon: "fa-map-marker")]
//[assembly: NavigationLink(int.MaxValue, "Perfil/Vecinos Eventos Concurrentes", typeof(MyPages.VecinosEventosConcurrentesController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Perfil/Mascotas", typeof(MyPages.VecinosMascotasController), icon: "fa-home")]
//[assembly: NavigationLink(int.MaxValue, "Perfil/Visitantes Frecuentes", typeof(MyPages.VecinosVisitantesFrecuentesController), action: "VisitantesFrecuentes", icon: "fa-users")]