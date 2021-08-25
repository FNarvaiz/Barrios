using Serenity.Navigation;
using MyPages = Barrios.Contenidos.Pages;

[assembly: NavigationMenu(int.MaxValue, "Administration/Contenidos", icon: "fa-list")]
[assembly: NavigationLink(int.MaxValue, "Administration/Contenidos/Avisos", typeof(MyPages.AvisosController), icon: "fa-picture-o",Permission = "Contenidos:Avisos")]
[assembly: NavigationLink(int.MaxValue, "Administration/Contenidos/Categorias", typeof(MyPages.CategoriasController), icon: "fa-pencil", Permission = "Contenidos:Categorias")]
[assembly: NavigationLink(int.MaxValue, "Administration/Contenidos/Comisiones", typeof(MyPages.ComisionesController), icon: "fa-newspaper-o", Permission = "Contenidos:Comisiones")]
[assembly: NavigationLink(int.MaxValue, "Administration/Contenidos/Encuestas", typeof(MyPages.EncuestasController), icon: "fa-comment-o", Permission = "Contenidos:Encuestas")]
[assembly: NavigationLink(6, "Encuestas", typeof(MyPages.EncuestasController), action: "SurveysView", icon: "fa-comment-o")]
[assembly: NavigationLink(int.MaxValue, "Administration/Contenidos/Históricos", typeof(MyPages.LineaTiempoController), icon: "fa-file", Permission = "Contenidos:LineaDeTiempo")]
[assembly: NavigationLink(int.MaxValue, "Administration/Contenidos/Proveedores", typeof(MyPages.ProveedoresController), icon: "fa-truck", Permission = "Contenidos:Proveedores")]
[assembly: NavigationLink(4, "Institucional", typeof(MyPages.ComisionesController),action:"CommissionsView", icon: "fa-newspaper-o")]
[assembly: NavigationLink(7, "Proveedores", typeof(MyPages.ProveedoresController),action: "ProviderView", icon: "fa-truck")]
[assembly: NavigationLink(3, "Comunicados", typeof(MyPages.LineaTiempoController),action:"TimeLineView", icon: "fa-file")]
[assembly: NavigationLink(5, "Reglamento", typeof(MyPages.LineaTiempoController), action: "RegulationsView", icon: "fa-bank")]
[assembly: NavigationLink(1, "Novedades", typeof(MyPages.NewsController), action: "NoticesView", icon: "fa-picture-o")]
[assembly: NavigationLink(8, "Buscar lote", typeof(MyPages.NewsController), action: "LocationView", icon: "fa-location-arrow", Permission = "User:BuscarLote")]
[assembly: NavigationLink(int.MaxValue, "Administration/Contenidos/Novedades", typeof(MyPages.NewsController), icon: null)]
