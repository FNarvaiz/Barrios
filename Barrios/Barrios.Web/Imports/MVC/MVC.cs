using System;

namespace MVC
{
    public static class Views
    {
        public static class Administration
        {
            public static class Barrios
            {
                public const string BarriosIndex = "~/Modules/Administration/Barrios/BarriosIndex.cshtml";
            }

            public static class Language
            {
                public const string LanguageIndex = "~/Modules/Administration/Language/LanguageIndex.cshtml";
            }

            public static class Role
            {
                public const string RoleIndex = "~/Modules/Administration/Role/RoleIndex.cshtml";
            }

            public static class Translation
            {
                public const string TranslationIndex = "~/Modules/Administration/Translation/TranslationIndex.cshtml";
            }

            public static class User
            {
                public const string UserIndex = "~/Modules/Administration/User/UserIndex.cshtml";
            }
        }

        public static class Bookings
        {
            public const string Booking = "~/Modules/Views/Bookings/Booking.cshtml";
        }

        public static class Commissions
        {
            public const string CommissionsIndex = "~/Modules/Views/Commissions/CommissionsIndex.cshtml";
        }

        public static class Common
        {
            public static class Dashboard
            {
                public const string DashboardIndex = "~/Modules/Common/Dashboard/DashboardIndex.cshtml";
                public const string DashboardIndex2 = "~/Modules/Common/Dashboard/DashboardIndex2.cshtml";
            }

            public static class Reporting
            {
                public const string ReportPage = "~/Modules/Common/Reporting/ReportPage.cshtml";
            }

        }

        public static class Contenidos
        {
            public static class Avisos
            {
                public const string AvisosIndex = "~/Modules/Contenidos/Avisos/AvisosIndex.cshtml";
            }

            public static class Categorias
            {
                public const string CategoriasIndex = "~/Modules/Contenidos/Categorias/CategoriasIndex.cshtml";
            }

            public static class Comisiones
            {
                public const string ComisionesIndex = "~/Modules/Contenidos/Comisiones/ComisionesIndex.cshtml";
            }

            public static class Encuestas
            {
                public const string EncuestasIndex = "~/Modules/Contenidos/Encuestas/EncuestasIndex.cshtml";
            }

            public static class EncuestasValoraciones
            {
                public const string EncuestasValoracionesIndex = "~/Modules/Contenidos/EncuestasValoraciones/EncuestasValoracionesIndex.cshtml";
            }

            public static class LineaTiempo
            {
                public const string LineaTiempoIndex = "~/Modules/Contenidos/LineaTiempo/LineaTiempoIndex.cshtml";
            }

            public static class Proveedores
            {
                public const string ProveedoresIndex = "~/Modules/Contenidos/Proveedores/ProveedoresIndex.cshtml";
            }

        }

        public static class Default
        {
            public static class Holidays
            {
                public const string HolidaysIndex = "~/Modules/Default/Holidays/HolidaysIndex.cshtml";
            }

            public static class Reservas
            {
                public const string BookingRequestEmail = "~/Modules/Default/Reservas/BookingRequestEmail.cshtml";
                public const string BookingTakeEmail = "~/Modules/Default/Reservas/BookingTakeEmail.cshtml";
                public static class Reports
                {
                    public const string BookingReport = "~/Modules/Default/Reservas/Reports/BookingReport.cshtml";
                }
                public const string ReservasIndex = "~/Modules/Default/Reservas/ReservasIndex.cshtml";
            }

            public static class ReservasRecursos
            {
                public const string ReservasRecursosIndex = "~/Modules/Default/ReservasRecursos/ReservasRecursosIndex.cshtml";
            }
        }

        public static class Errors
        {
            public const string AccessDenied = "~/Views/Errors/AccessDenied.cshtml";
            public const string ValidationError = "~/Views/Errors/ValidationError.cshtml";
        }

        public static class Membership
        {
            public static class Account
            {
                public const string AccountLogin = "~/Modules/Membership/Account/AccountLogin.cshtml";
                public const string AccountLogin_AdminLTE = "~/Modules/Membership/Account/AccountLogin.AdminLTE.cshtml";
                public static class ChangePassword
                {
                    public const string AccountChangePassword = "~/Modules/Membership/Account/ChangePassword/AccountChangePassword.cshtml";
                }

                public static class ForgotPassword
                {
                    public const string AccountForgotPassword = "~/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.cshtml";
                    public const string AccountForgotPassword_AdminLTE = "~/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.AdminLTE.cshtml";
                }

                public static class ResetPassword
                {
                    public const string AccountResetPassword = "~/Modules/Membership/Account/ResetPassword/AccountResetPassword.cshtml";
                    public const string AccountResetPassword_AdminLTE = "~/Modules/Membership/Account/ResetPassword/AccountResetPassword.AdminLTE.cshtml";
                    public const string AccountResetPasswordEmail = "~/Modules/Membership/Account/ResetPassword/AccountResetPasswordEmail.cshtml";
                }

                public static class SignUp
                {
                    public const string AccountActivateEmail = "~/Modules/Membership/Account/SignUp/AccountActivateEmail.cshtml";
                    public const string AccountSignUp = "~/Modules/Membership/Account/SignUp/AccountSignUp.cshtml";
                    public const string AccountSignUp_AdminLTE = "~/Modules/Membership/Account/SignUp/AccountSignUp.AdminLTE.cshtml";
                    public const string NewUserActivatedEmail = "~/Modules/Membership/Account/SignUp/NewUserActivatedEmail.cshtml";
                }
            }
        }

        public static class Perfil
        {
            public const string PersonalEventos = "~/Modules/Views/Perfil/PersonalEventos.cshtml";
            public static class VecinosActividades
            {
                public const string VecinosActividadesIndex = "~/Modules/Perfil/VecinosActividades/VecinosActividadesIndex.cshtml";
            }

            public static class VecinosEventos
            {
                public const string VecinosEventosIndex = "~/Modules/Perfil/VecinosEventos/VecinosEventosIndex.cshtml";
            }

            public static class VecinosMascotas
            {
                public const string VecinosMascotasIndex = "~/Modules/Perfil/VecinosMascotas/VecinosMascotasIndex.cshtml";
            }

            public static class VecinosVisitantesFrecuentes
            {
                public const string VecinosVisitantesFrecuentesIndex = "~/Modules/Perfil/VecinosVisitantesFrecuentes/VecinosVisitantesFrecuentesIndex.cshtml";
            }
            public const string VisitantesFrecuentes = "~/Modules/Views/Perfil/VisitantesFrecuentes.cshtml";
        }

        public static class Providers
        {
            public const string ProvidersIndex = "~/Modules/Views/Providers/ProvidersIndex.cshtml";
        }

        public static class Settings
        {
            public static class Subbarrios
            {
                public const string SubbarriosIndex = "~/Modules/Settings/Subbarrios/SubbarriosIndex.cshtml";
            }
        }

        public static class Shared
        {
            public const string _Layout = "~/Views/Shared/_Layout.cshtml";
            public const string _LayoutHead = "~/Views/Shared/_LayoutHead.cshtml";
            public const string _LayoutNoNavigation = "~/Views/Shared/_LayoutNoNavigation.cshtml";
            public const string _LayoutSlim = "~/Views/Shared/_LayoutSlim.cshtml";
            public const string _LayoutSlimHead = "~/Views/Shared/_LayoutSlimHead.cshtml";
            public const string Error = "~/Views/Shared/Error.cshtml";
            public const string LeftNavigation = "~/Views/Shared/LeftNavigation.cshtml";
        }

        public static class Surveys
        {
            public const string SurveysIndex = "~/Modules/Views/Surveys/SurveysIndex.cshtml";
        }

        public static class TimeLine
        {
            public const string Regulations = "~/Modules/Views/TimeLine/Regulations.cshtml";
            public const string TimeLineIndex = "~/Modules/Views/TimeLine/TimeLineIndex.cshtml";
        }
    }
}

