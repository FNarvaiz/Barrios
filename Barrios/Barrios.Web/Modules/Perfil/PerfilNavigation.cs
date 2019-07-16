using Serenity.Navigation;
using MyPages = Barrios.Perfil.Pages;

//[assembly: NavigationLink(int.MaxValue, "Perfil/Vecinos Actividades", typeof(MyPages.VecinosActividadesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Perfil/Eventos", typeof(MyPages.VecinosEventosController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Perfil/Vecinos Eventos Concurrentes", typeof(MyPages.VecinosEventosConcurrentesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Perfil/Mascotas", typeof(MyPages.VecinosMascotasController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Perfil/Visitantes Frecuentes", typeof(MyPages.VecinosVisitantesFrecuentesController), icon: null)]