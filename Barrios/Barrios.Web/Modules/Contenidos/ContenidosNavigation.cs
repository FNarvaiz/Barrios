using Serenity.Navigation;
using MyPages = Barrios.Contenidos.Pages;
[assembly: NavigationLink(int.MaxValue, "Contenidos/Avisos", typeof(MyPages.AvisosController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Contenidos/Categorias", typeof(MyPages.CategoriasController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Contenidos/Comisiones", typeof(MyPages.ComisionesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Contenidos/Comisiones Integrantes", typeof(MyPages.ComisionesIntegrantesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Contenidos/Encuestas", typeof(MyPages.EncuestasController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Contenidos/Encuestas Valoraciones", typeof(MyPages.EncuestasValoracionesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Contenidos/Linea Tiempo", typeof(MyPages.LineaTiempoController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Contenidos/Proveedores", typeof(MyPages.ProveedoresController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Contenidos/Proveedores Valoraciones", typeof(MyPages.ProveedoresValoracionesController), icon: null)]