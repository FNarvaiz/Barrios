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

            public static class UsersBarrios
            {
                public const string UsersBarriosIndex = "~/Modules/Administration/UsersBarrios/UsersBarriosIndex.cshtml";
            }

        }

        public static class Common
        {
            public static class Dashboard
            {
                public const string Booking = "~/Modules/Common/Dashboard/Booking.cshtml";
                public const string DashboardIndex = "~/Modules/Common/Dashboard/DashboardIndex.cshtml";
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

            public static class ComisionesIntegrantes
            {
                public const string ComisionesIntegrantesIndex = "~/Modules/Contenidos/ComisionesIntegrantes/ComisionesIntegrantesIndex.cshtml";
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

            public static class ProveedoresValoraciones
            {
                public const string ProveedoresValoracionesIndex = "~/Modules/Contenidos/ProveedoresValoraciones/ProveedoresValoracionesIndex.cshtml";
            }

        }

        public static class Default
        {
            public static class Reservas
            {
                public const string ReservasIndex = "~/Modules/Default/Reservas/ReservasIndex.cshtml";
            }

            public static class ReservasRecursos
            {
                public const string ReservasRecursosIndex = "~/Modules/Default/ReservasRecursos/ReservasRecursosIndex.cshtml";
            }

            public static class ReservasTipos
            {
                public const string ReservasTiposIndex = "~/Modules/Default/ReservasTipos/ReservasTiposIndex.cshtml";
            }

            public static class ReservasTurnosEspeciales
            {
                public const string ReservasTurnosEspecialesIndex = "~/Modules/Default/ReservasTurnosEspeciales/ReservasTurnosEspecialesIndex.cshtml";
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
                }
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
    }
}

