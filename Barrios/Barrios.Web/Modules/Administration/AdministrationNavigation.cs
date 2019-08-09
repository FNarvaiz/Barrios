﻿using Serenity.Navigation;
using MyPages = Barrios.Administration.Pages;
using Administration = Barrios.Administration.Pages;

[assembly: NavigationMenu(9000, "Administration", icon: "fa-desktop")]
[assembly: NavigationLink(9000, "Administration/Exceptions Log", url: "~/errorlog.axd", permission: Barrios.Administration.PermissionKeys.Security, icon: "fa-ban", Target = "_blank")]
[assembly: NavigationLink(9000, "Administration/Languages", typeof(Administration.LanguageController), icon: "fa-comments")]
[assembly: NavigationLink(9000, "Administration/Translations", typeof(Administration.TranslationController), icon: "fa-comment-o")]
[assembly: NavigationLink(9000, "Administration/Roles", typeof(Administration.RoleController), icon: "fa-lock")]
[assembly: NavigationLink(9000, "Administration/User Management", typeof(Administration.UserController), icon: "fa-users")]
[assembly: NavigationLink(int.MaxValue, "Administration/Barrios", typeof(MyPages.BarriosController), icon: "fa-building")]