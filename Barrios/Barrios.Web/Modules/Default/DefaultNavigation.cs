﻿using Serenity.Navigation;
using MyPages = Barrios.Default.Pages;

[assembly: NavigationMenu(int.MaxValue, "Administration/Reservas", icon: "fa-book")]
[assembly: NavigationLink(int.MaxValue, "Administration/Reservas/Reservas", typeof(MyPages.ReservasController), icon: "fa-calendar", Permission = "Reservas:admin")]
[assembly: NavigationLink(int.MaxValue, "Administration/Reservas/Recursos", typeof(MyPages.ReservasRecursosController), icon: "fa-building", Permission = "Reservas:admin")]
[assembly: NavigationLink(int.MaxValue, "Administration/Reservas/Feriados", typeof(MyPages.HolidaysController), icon: null)]