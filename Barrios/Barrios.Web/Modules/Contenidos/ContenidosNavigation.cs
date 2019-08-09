using Serenity.Navigation;
using MyPages = Barrios.Contenidos.Pages;

[assembly: NavigationMenu(int.MaxValue, "Contenidos", icon: "fa-list")]
[assembly: NavigationLink(int.MaxValue, "Contenidos/Avisos", typeof(MyPages.AvisosController), icon: "fa-picture-o",Permission = "Contenidos:Avisos")]
[assembly: NavigationLink(int.MaxValue, "Contenidos/Categorias", typeof(MyPages.CategoriasController), icon: "fa-pencil", Permission = "Contenidos:Categorias")]
[assembly: NavigationLink(int.MaxValue, "Contenidos/Comisiones", typeof(MyPages.ComisionesController), icon: "fa-newspaper-o", Permission = "Contenidos:Comisiones")]
[assembly: NavigationLink(int.MaxValue, "Contenidos/Encuestas", typeof(MyPages.EncuestasController), icon: "fa-comment-o", Permission = "Contenidos:Encuestas")]
[assembly: NavigationLink(int.MaxValue, "Encuestas", typeof(MyPages.EncuestasController), action: "SurveysView", icon: "fa-comment-o")]
[assembly: NavigationLink(int.MaxValue, "Contenidos/Históricos", typeof(MyPages.LineaTiempoController), icon: "fa-file", Permission = "Contenidos:LineaDeTiempo")]
[assembly: NavigationLink(int.MaxValue, "Contenidos/Proveedores", typeof(MyPages.ProveedoresController), icon: "fa-truck", Permission = "Contenidos:Proveedores")]
[assembly: NavigationLink(int.MaxValue, "Quienes Somos", typeof(MyPages.ComisionesController),action:"CommissionsView", icon: "fa-newspaper-o")]
[assembly: NavigationLink(int.MaxValue, "Proveedores", typeof(MyPages.ProveedoresController),action: "ProviderView", icon: "fa-truck")]
[assembly: NavigationLink(int.MaxValue, "Histórico", typeof(MyPages.LineaTiempoController),action:"TimeLineView", icon: "fa-file")]
