using Serenity.Navigation;
using MyPages = Barrios.Contenidos.Pages;
[assembly: NavigationLink(int.MaxValue, "Contenidos/Avisos", typeof(MyPages.AvisosController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Contenidos/Categorias", typeof(MyPages.CategoriasController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Contenidos/Comisiones", typeof(MyPages.ComisionesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Contenidos/Encuestas", typeof(MyPages.EncuestasController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Encuestas", typeof(MyPages.EncuestasController), action: "SurveysView", icon: null)]
[assembly: NavigationLink(int.MaxValue, "Contenidos/Linea Tiempo", typeof(MyPages.LineaTiempoController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Contenidos/Proveedores", typeof(MyPages.ProveedoresController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Comisiones", typeof(MyPages.ComisionesController),action:"CommissionsView", icon: null)]
[assembly: NavigationLink(int.MaxValue, "Proveedores", typeof(MyPages.ProveedoresController),action: "ProviderView", icon: null)]
[assembly: NavigationLink(int.MaxValue, "Historico", typeof(MyPages.LineaTiempoController),action:"TimeLineView", icon: null)]
