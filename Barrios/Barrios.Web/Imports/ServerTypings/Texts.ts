namespace Barrios.Texts {

    declare namespace Db {

        namespace Administration {

            namespace Barrios {
                export const CantDiasReservables: string;
                export const Direccion: string;
                export const Id: string;
                export const IsActive: string;
                export const LargeDisplayName: string;
                export const Logo: string;
                export const Mail: string;
                export const Nombre: string;
                export const PasswordMail: string;
                export const ShortDisplayName: string;
                export const TelefonOs: string;
                export const Url: string;
                export const UseSubBarrios: string;
            }

            namespace Language {
                export const Id: string;
                export const LanguageId: string;
                export const LanguageName: string;
            }

            namespace Role {
                export const RoleId: string;
                export const RoleName: string;
            }

            namespace RolePermission {
                export const PermissionKey: string;
                export const RoleId: string;
                export const RolePermissionId: string;
                export const RoleRoleName: string;
            }

            namespace Translation {
                export const CustomText: string;
                export const EntityPlural: string;
                export const Key: string;
                export const OverrideConfirmation: string;
                export const SaveChangesButton: string;
                export const SourceLanguage: string;
                export const SourceText: string;
                export const TargetLanguage: string;
                export const TargetText: string;
            }

            namespace User {
                export const BarrioId: string;
                export const ClientIdList: string;
                export const DisplayName: string;
                export const Email: string;
                export const Email_Others: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const LastDirectoryUpdate: string;
                export const Password: string;
                export const PasswordConfirm: string;
                export const PasswordHash: string;
                export const PasswordSalt: string;
                export const Source: string;
                export const Unit: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UserId: string;
                export const UserImage: string;
                export const Username: string;
                export const subBarrioId: string;
            }

            namespace UserPermission {
                export const Granted: string;
                export const PermissionKey: string;
                export const User: string;
                export const UserId: string;
                export const UserPermissionId: string;
                export const Username: string;
            }

            namespace UserRole {
                export const RoleId: string;
                export const User: string;
                export const UserId: string;
                export const UserRoleId: string;
                export const Username: string;
            }

            namespace UsersBarrios {
                export const BarrioId: string;
                export const BarrioNombre: string;
                export const UserId: string;
                export const UserUsername: string;
            }
        }

        namespace Common {

            namespace UserPreference {
                export const Name: string;
                export const PreferenceType: string;
                export const UserId: string;
                export const UserPreferenceId: string;
                export const Value: string;
            }
        }

        namespace Contenidos {

            namespace Avisos {
                export const BarrioId: string;
                export const Caducidad: string;
                export const CategoryName: string;
                export const DateInsert: string;
                export const DateUpdate: string;
                export const Descripcion: string;
                export const Id: string;
                export const IdCategoria: string;
                export const Imagen: string;
                export const Nombre: string;
                export const UserInsert: string;
                export const UserInsertUsername: string;
                export const UserUpdate: string;
                export const UserUpdateUsername: string;
                export const Vigente: string;
            }

            namespace Categorias {
                export const DateInsert: string;
                export const DateUpdate: string;
                export const Id: string;
                export const Mostrar: string;
                export const Nombre: string;
                export const Type: string;
                export const TypeName: string;
                export const UserInsert: string;
                export const UserInsertUsername: string;
                export const UserUpdate: string;
                export const UserUpdateUsername: string;
                export const Vigente: string;
            }

            namespace Comisiones {
                export const BarrioId: string;
                export const BarrioNombre: string;
                export const DateInsert: string;
                export const DateUpdate: string;
                export const Habilitada: string;
                export const Id: string;
                export const Mails: string;
                export const MembersList: string;
                export const Nombre: string;
                export const UserInsert: string;
                export const UserInsertUsername: string;
                export const UserUpdate: string;
                export const UserUpdateUsername: string;
            }

            namespace ComisionesIntegrantes {
                export const DateInsert: string;
                export const DateUpdate: string;
                export const Id: string;
                export const IdComision: string;
                export const Nombre: string;
                export const UserInsert: string;
                export const UserInsertUsername: string;
                export const UserUpdate: string;
                export const UserUpdateUsername: string;
            }

            namespace Encuestas {
                export const BarrioId: string;
                export const CategoryName: string;
                export const DateInsert: string;
                export const DateUpdate: string;
                export const Descripcion: string;
                export const FechaAlta: string;
                export const FechaBaja: string;
                export const Id: string;
                export const IdCategoria: string;
                export const Liked: string;
                export const Nombre: string;
                export const Rating: string;
                export const RatingCount: string;
                export const UserInsert: string;
                export const UserInsertUsername: string;
                export const UserUpdate: string;
                export const UserUpdateUsername: string;
                export const ValoracionId: string;
                export const Vigente: string;
            }

            namespace EncuestasValoraciones {
                export const Comentario: string;
                export const Fecha: string;
                export const Id: string;
                export const IdEncuesta: string;
                export const IdEncuestaNombre: string;
                export const Userid: string;
                export const UseridUsername: string;
                export const Valoracion: string;
            }

            namespace LineaTiempo {
                export const Aprobado: string;
                export const ArchivoFilename: string;
                export const BarrioId: string;
                export const CategoryName: string;
                export const ContenidoTexto: string;
                export const Id: string;
                export const IdCategoria: string;
                export const Nombre: string;
                export const PeriodoFecha: string;
                export const Userid: string;
                export const UseridUsername: string;
            }

            namespace Proveedores {
                export const BarrioId: string;
                export const CategoryName: string;
                export const DateInsert: string;
                export const DateUpdate: string;
                export const Domicilio: string;
                export const Email: string;
                export const FechaAlta: string;
                export const FechaBaja: string;
                export const Id: string;
                export const IdCategoria: string;
                export const Liked: string;
                export const Nombre: string;
                export const Notas: string;
                export const Rating: string;
                export const RatingCount: string;
                export const Telefonos: string;
                export const UserInsert: string;
                export const UserInsertUsername: string;
                export const UserUpdate: string;
                export const UserUpdateUsername: string;
                export const Vigente: string;
            }

            namespace ProveedoresValoraciones {
                export const Fecha: string;
                export const Id: string;
                export const IdProveedor: string;
                export const IdProveedorNombre: string;
                export const Userid: string;
                export const UseridUsername: string;
                export const Valoracion: string;
            }
        }

        namespace Default {

            namespace Holidays {
                export const ApiId: string;
                export const Day: string;
                export const Id: string;
                export const Reason: string;
                export const Type: string;
            }

            namespace RecursosBarrios {
                export const BarrioId: string;
                export const BarrioNombre: string;
                export const RecursoId: string;
            }

            namespace Reservas {
                export const BarrioId: string;
                export const DateInsert: string;
                export const Dias: string;
                export const Duracion: string;
                export const Estado: string;
                export const Estado_Turno: string;
                export const Fecha: string;
                export const FechaFin: string;
                export const Finalizado: string;
                export const Hora: string;
                export const Id: string;
                export const IdRecurso: string;
                export const IdRecursoNombre: string;
                export const IdResultado: string;
                export const IdTipo: string;
                export const IdTurnosEspeciales: string;
                export const IdVecino: string;
                export const IdVecino2: string;
                export const IdVecinoUnidad: string;
                export const IdVecinoUnidadExtra: string;
                export const IdVecinoUsername: string;
                export const IdVecinoUsername2: string;
                export const Inicio: string;
                export const Observaciones: string;
                export const Required_Vecino: string;
                export const Reservable: string;
                export const Tipo: string;
                export const TipoReservaHecha: string;
                export const Turno: string;
                export const UserInsert: string;
                export const Valido: string;
            }

            namespace ReservasRecursos {
                export const Apertura: string;
                export const BarrioId: string;
                export const Cierre: string;
                export const ClientIdList: string;
                export const Emails: string;
                export const Id: string;
                export const NeigborhoodList: string;
                export const Nombre: string;
                export const Resolucion: string;
                export const SpecialTurnList: string;
                export const Tipo: string;
                export const TypeList: string;
            }

            namespace ReservasTipos {
                export const Duracion: string;
                export const Id: string;
                export const IdRecurso: string;
                export const Nombre: string;
                export const RequiereVecino2: string;
                export const Vigente: string;
            }

            namespace ReservasTurnosEspeciales {
                export const Dias: string;
                export const Duracion: string;
                export const Id: string;
                export const IdRecurso: string;
                export const Inicio: string;
                export const Nombre: string;
            }

            namespace SubbarriosRecursos {
                export const RecursoId: string;
                export const SubBarrioId: string;
                export const SubBarrioNombre: string;
            }
        }

        namespace Modules {

            namespace Common {

                namespace Utils {

                    namespace GenericComboBox {
                        export const Id: string;
                        export const Name: string;
                    }
                }
            }
        }

        namespace Perfil {

            namespace VecinosActividades {
                export const Actividad: string;
                export const ActividadDetalles: string;
                export const Fecha: string;
                export const Id: string;
                export const Ip: string;
                export const Userid: string;
            }

            namespace VecinosEventos {
                export const BarrioId: string;
                export const ConcurrentesList: string;
                export const Fecha: string;
                export const Id: string;
                export const Lugar: string;
                export const Nombre: string;
                export const Userid: string;
                export const UseridUsername: string;
            }

            namespace VecinosEventosConcurrentes {
                export const Id: string;
                export const IdEvento: string;
                export const Nombre: string;
                export const Userid: string;
            }

            namespace VecinosMascotas {
                export const BarrioId: string;
                export const Foto: string;
                export const Id: string;
                export const IdTipo: string;
                export const Nombre: string;
                export const Raza: string;
                export const Userid: string;
                export const UseridUnit: string;
                export const UseridUsername: string;
                export const Vacunas: string;
            }

            namespace VecinosVisitantesFrecuentes {
                export const BarrioId: string;
                export const Dni: string;
                export const Id: string;
                export const Nombre: string;
                export const Tipo: string;
                export const Userid: string;
                export const UseridUsername: string;
                export const Vehiculo: string;
            }
        }

        namespace Settings {

            namespace Subbarrios {
                export const BarrioId: string;
                export const Id: string;
                export const Nombre: string;
            }
        }
    }

    declare namespace Forms {

        namespace Membership {

            namespace ChangePassword {
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace ForgotPassword {
                export const BackToLogin: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace Login {
                export const FacebookButton: string;
                export const ForgotPassword: string;
                export const FormTitle: string;
                export const GoogleButton: string;
                export const OR: string;
                export const RememberMe: string;
                export const SignInButton: string;
                export const SignUpButton: string;
            }

            namespace ResetPassword {
                export const BackToLogin: string;
                export const EmailSubject: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace SignUp {
                export const AcceptTerms: string;
                export const ActivateEmailSubject: string;
                export const ActivationCompleteMessage: string;
                export const BackToLogin: string;
                export const ConfirmEmail: string;
                export const ConfirmPassword: string;
                export const DisplayName: string;
                export const Email: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const Password: string;
                export const SubmitButton: string;
                export const Success: string;
            }
        }
    }

    declare namespace Site {

        namespace AccessDenied {
            export const ClickToChangeUser: string;
            export const ClickToLogin: string;
            export const LackPermissions: string;
            export const NotLoggedIn: string;
            export const PageTitle: string;
        }

        namespace BasicProgressDialog {
            export const CancelTitle: string;
            export const PleaseWait: string;
        }

        namespace BulkServiceAction {
            export const AllHadErrorsFormat: string;
            export const AllSuccessFormat: string;
            export const ConfirmationFormat: string;
            export const ErrorCount: string;
            export const NothingToProcess: string;
            export const SomeHadErrorsFormat: string;
            export const SuccessCount: string;
        }

        namespace Dashboard {
            export const ContentDescription: string;
        }

        namespace Layout {
            export const FooterCopyright: string;
            export const FooterInfo: string;
            export const FooterRights: string;
            export const GeneralSettings: string;
            export const Language: string;
            export const Theme: string;
            export const ThemeBlack: string;
            export const ThemeBlackLight: string;
            export const ThemeBlue: string;
            export const ThemeBlueLight: string;
            export const ThemeGreen: string;
            export const ThemeGreenLight: string;
            export const ThemePurple: string;
            export const ThemePurpleLight: string;
            export const ThemeRed: string;
            export const ThemeRedLight: string;
            export const ThemeYellow: string;
            export const ThemeYellowLight: string;
        }

        namespace RolePermissionDialog {
            export const DialogTitle: string;
            export const EditButton: string;
            export const SaveSuccess: string;
        }

        namespace UserDialog {
            export const EditPermissionsButton: string;
            export const EditRolesButton: string;
        }

        namespace UserPermissionDialog {
            export const DialogTitle: string;
            export const Grant: string;
            export const Permission: string;
            export const Revoke: string;
            export const SaveSuccess: string;
        }

        namespace UserRoleDialog {
            export const DialogTitle: string;
            export const SaveSuccess: string;
        }

        namespace ValidationError {
            export const Title: string;
        }
    }

    declare namespace Validation {
        export const AuthenticationError: string;
        export const CantFindUserWithEmail: string;
        export const CurrentPasswordMismatch: string;
        export const DeleteForeignKeyError: string;
        export const EmailConfirm: string;
        export const EmailInUse: string;
        export const InvalidActivateToken: string;
        export const InvalidResetToken: string;
        export const MinRequiredPasswordLength: string;
        export const SavePrimaryKeyError: string;
    }

    Barrios['Texts'] = Q.proxyTexts(Texts, '', {Db:{Administration:{Barrios:{CantDiasReservables:1,Direccion:1,Id:1,IsActive:1,LargeDisplayName:1,Logo:1,Mail:1,Nombre:1,PasswordMail:1,ShortDisplayName:1,TelefonOs:1,Url:1,UseSubBarrios:1},Language:{Id:1,LanguageId:1,LanguageName:1},Role:{RoleId:1,RoleName:1},RolePermission:{PermissionKey:1,RoleId:1,RolePermissionId:1,RoleRoleName:1},Translation:{CustomText:1,EntityPlural:1,Key:1,OverrideConfirmation:1,SaveChangesButton:1,SourceLanguage:1,SourceText:1,TargetLanguage:1,TargetText:1},User:{BarrioId:1,ClientIdList:1,DisplayName:1,Email:1,Email_Others:1,InsertDate:1,InsertUserId:1,IsActive:1,LastDirectoryUpdate:1,Password:1,PasswordConfirm:1,PasswordHash:1,PasswordSalt:1,Source:1,Unit:1,UpdateDate:1,UpdateUserId:1,UserId:1,UserImage:1,Username:1,subBarrioId:1},UserPermission:{Granted:1,PermissionKey:1,User:1,UserId:1,UserPermissionId:1,Username:1},UserRole:{RoleId:1,User:1,UserId:1,UserRoleId:1,Username:1},UsersBarrios:{BarrioId:1,BarrioNombre:1,UserId:1,UserUsername:1}},Common:{UserPreference:{Name:1,PreferenceType:1,UserId:1,UserPreferenceId:1,Value:1}},Contenidos:{Avisos:{BarrioId:1,Caducidad:1,CategoryName:1,DateInsert:1,DateUpdate:1,Descripcion:1,Id:1,IdCategoria:1,Imagen:1,Nombre:1,UserInsert:1,UserInsertUsername:1,UserUpdate:1,UserUpdateUsername:1,Vigente:1},Categorias:{DateInsert:1,DateUpdate:1,Id:1,Mostrar:1,Nombre:1,Type:1,TypeName:1,UserInsert:1,UserInsertUsername:1,UserUpdate:1,UserUpdateUsername:1,Vigente:1},Comisiones:{BarrioId:1,BarrioNombre:1,DateInsert:1,DateUpdate:1,Habilitada:1,Id:1,Mails:1,MembersList:1,Nombre:1,UserInsert:1,UserInsertUsername:1,UserUpdate:1,UserUpdateUsername:1},ComisionesIntegrantes:{DateInsert:1,DateUpdate:1,Id:1,IdComision:1,Nombre:1,UserInsert:1,UserInsertUsername:1,UserUpdate:1,UserUpdateUsername:1},Encuestas:{BarrioId:1,CategoryName:1,DateInsert:1,DateUpdate:1,Descripcion:1,FechaAlta:1,FechaBaja:1,Id:1,IdCategoria:1,Liked:1,Nombre:1,Rating:1,RatingCount:1,UserInsert:1,UserInsertUsername:1,UserUpdate:1,UserUpdateUsername:1,ValoracionId:1,Vigente:1},EncuestasValoraciones:{Comentario:1,Fecha:1,Id:1,IdEncuesta:1,IdEncuestaNombre:1,Userid:1,UseridUsername:1,Valoracion:1},LineaTiempo:{Aprobado:1,ArchivoFilename:1,BarrioId:1,CategoryName:1,ContenidoTexto:1,Id:1,IdCategoria:1,Nombre:1,PeriodoFecha:1,Userid:1,UseridUsername:1},Proveedores:{BarrioId:1,CategoryName:1,DateInsert:1,DateUpdate:1,Domicilio:1,Email:1,FechaAlta:1,FechaBaja:1,Id:1,IdCategoria:1,Liked:1,Nombre:1,Notas:1,Rating:1,RatingCount:1,Telefonos:1,UserInsert:1,UserInsertUsername:1,UserUpdate:1,UserUpdateUsername:1,Vigente:1},ProveedoresValoraciones:{Fecha:1,Id:1,IdProveedor:1,IdProveedorNombre:1,Userid:1,UseridUsername:1,Valoracion:1}},Default:{Holidays:{ApiId:1,Day:1,Id:1,Reason:1,Type:1},RecursosBarrios:{BarrioId:1,BarrioNombre:1,RecursoId:1},Reservas:{BarrioId:1,DateInsert:1,Dias:1,Duracion:1,Estado:1,Estado_Turno:1,Fecha:1,FechaFin:1,Finalizado:1,Hora:1,Id:1,IdRecurso:1,IdRecursoNombre:1,IdResultado:1,IdTipo:1,IdTurnosEspeciales:1,IdVecino:1,IdVecino2:1,IdVecinoUnidad:1,IdVecinoUnidadExtra:1,IdVecinoUsername:1,IdVecinoUsername2:1,Inicio:1,Observaciones:1,Required_Vecino:1,Reservable:1,Tipo:1,TipoReservaHecha:1,Turno:1,UserInsert:1,Valido:1},ReservasRecursos:{Apertura:1,BarrioId:1,Cierre:1,ClientIdList:1,Emails:1,Id:1,NeigborhoodList:1,Nombre:1,Resolucion:1,SpecialTurnList:1,Tipo:1,TypeList:1},ReservasTipos:{Duracion:1,Id:1,IdRecurso:1,Nombre:1,RequiereVecino2:1,Vigente:1},ReservasTurnosEspeciales:{Dias:1,Duracion:1,Id:1,IdRecurso:1,Inicio:1,Nombre:1},SubbarriosRecursos:{RecursoId:1,SubBarrioId:1,SubBarrioNombre:1}},Modules:{Common:{Utils:{GenericComboBox:{Id:1,Name:1}}}},Perfil:{VecinosActividades:{Actividad:1,ActividadDetalles:1,Fecha:1,Id:1,Ip:1,Userid:1},VecinosEventos:{BarrioId:1,ConcurrentesList:1,Fecha:1,Id:1,Lugar:1,Nombre:1,Userid:1,UseridUsername:1},VecinosEventosConcurrentes:{Id:1,IdEvento:1,Nombre:1,Userid:1},VecinosMascotas:{BarrioId:1,Foto:1,Id:1,IdTipo:1,Nombre:1,Raza:1,Userid:1,UseridUnit:1,UseridUsername:1,Vacunas:1},VecinosVisitantesFrecuentes:{BarrioId:1,Dni:1,Id:1,Nombre:1,Tipo:1,Userid:1,UseridUsername:1,Vehiculo:1}},Settings:{Subbarrios:{BarrioId:1,Id:1,Nombre:1}}},Forms:{Membership:{ChangePassword:{FormTitle:1,SubmitButton:1,Success:1},ForgotPassword:{BackToLogin:1,FormInfo:1,FormTitle:1,SubmitButton:1,Success:1},Login:{FacebookButton:1,ForgotPassword:1,FormTitle:1,GoogleButton:1,OR:1,RememberMe:1,SignInButton:1,SignUpButton:1},ResetPassword:{BackToLogin:1,EmailSubject:1,FormTitle:1,SubmitButton:1,Success:1},SignUp:{AcceptTerms:1,ActivateEmailSubject:1,ActivationCompleteMessage:1,BackToLogin:1,ConfirmEmail:1,ConfirmPassword:1,DisplayName:1,Email:1,FormInfo:1,FormTitle:1,Password:1,SubmitButton:1,Success:1}}},Site:{AccessDenied:{ClickToChangeUser:1,ClickToLogin:1,LackPermissions:1,NotLoggedIn:1,PageTitle:1},BasicProgressDialog:{CancelTitle:1,PleaseWait:1},BulkServiceAction:{AllHadErrorsFormat:1,AllSuccessFormat:1,ConfirmationFormat:1,ErrorCount:1,NothingToProcess:1,SomeHadErrorsFormat:1,SuccessCount:1},Dashboard:{ContentDescription:1},Layout:{FooterCopyright:1,FooterInfo:1,FooterRights:1,GeneralSettings:1,Language:1,Theme:1,ThemeBlack:1,ThemeBlackLight:1,ThemeBlue:1,ThemeBlueLight:1,ThemeGreen:1,ThemeGreenLight:1,ThemePurple:1,ThemePurpleLight:1,ThemeRed:1,ThemeRedLight:1,ThemeYellow:1,ThemeYellowLight:1},RolePermissionDialog:{DialogTitle:1,EditButton:1,SaveSuccess:1},UserDialog:{EditPermissionsButton:1,EditRolesButton:1},UserPermissionDialog:{DialogTitle:1,Grant:1,Permission:1,Revoke:1,SaveSuccess:1},UserRoleDialog:{DialogTitle:1,SaveSuccess:1},ValidationError:{Title:1}},Validation:{AuthenticationError:1,CantFindUserWithEmail:1,CurrentPasswordMismatch:1,DeleteForeignKeyError:1,EmailConfirm:1,EmailInUse:1,InvalidActivateToken:1,InvalidResetToken:1,MinRequiredPasswordLength:1,SavePrimaryKeyError:1}});
}

