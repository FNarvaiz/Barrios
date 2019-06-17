/// <reference types="jquery" />
/// <reference types="jqueryui" />
declare namespace Barrios.Administration {
}
declare namespace Barrios.Administration {
    interface BarriosForm {
        Nombre: Serenity.StringEditor;
        Logo: Serenity.ImageUploadEditor;
        Url: Serenity.StringEditor;
        TelefonOs: Serenity.StringEditor;
        Direccion: Serenity.StringEditor;
        IsActive: Serenity.BooleanEditor;
    }
    class BarriosForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Barrios.Administration {
    interface BarriosRow {
        Id?: number;
        Nombre?: string;
        Logo?: string;
        Url?: string;
        TelefonOs?: string;
        Direccion?: string;
        IsActive?: boolean;
    }
    namespace BarriosRow {
        const idProperty = "Id";
        const nameProperty = "Nombre";
        const localTextPrefix = "Administration.Barrios";
        const lookupKey = "Administration.Barrios";
        function getLookup(): Q.Lookup<BarriosRow>;
        const enum Fields {
            Id = "Id",
            Nombre = "Nombre",
            Logo = "Logo",
            Url = "Url",
            TelefonOs = "TelefonOs",
            Direccion = "Direccion",
            IsActive = "IsActive"
        }
    }
}
declare namespace Barrios.Administration {
    namespace BarriosService {
        const baseUrl = "Administration/Barrios";
        function Create(request: Serenity.SaveRequest<BarriosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BarriosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BarriosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BarriosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Barrios/Create",
            Update = "Administration/Barrios/Update",
            Delete = "Administration/Barrios/Delete",
            Retrieve = "Administration/Barrios/Retrieve",
            List = "Administration/Barrios/List"
        }
    }
}
declare namespace Barrios.Administration {
}
declare namespace Barrios.Administration {
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Barrios.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        const enum Fields {
            Id = "Id",
            LanguageId = "LanguageId",
            LanguageName = "LanguageName"
        }
    }
}
declare namespace Barrios.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Language/Create",
            Update = "Administration/Language/Update",
            Delete = "Administration/Language/Delete",
            Retrieve = "Administration/Language/Retrieve",
            List = "Administration/Language/List"
        }
    }
}
declare namespace Barrios.Administration {
}
declare namespace Barrios.Administration {
    interface RoleForm {
        RoleName: Serenity.StringEditor;
    }
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Barrios.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace Barrios.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace Barrios.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        const enum Fields {
            RolePermissionId = "RolePermissionId",
            RoleId = "RoleId",
            PermissionKey = "PermissionKey",
            RoleRoleName = "RoleRoleName"
        }
    }
}
declare namespace Barrios.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/RolePermission/Update",
            List = "Administration/RolePermission/List"
        }
    }
}
declare namespace Barrios.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace Barrios.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        const enum Fields {
            RoleId = "RoleId",
            RoleName = "RoleName"
        }
    }
}
declare namespace Barrios.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Role/Create",
            Update = "Administration/Role/Update",
            Delete = "Administration/Role/Delete",
            Retrieve = "Administration/Role/Retrieve",
            List = "Administration/Role/List"
        }
    }
}
declare namespace Barrios.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace Barrios.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace Barrios.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "Administration/Translation/List",
            Update = "Administration/Translation/Update"
        }
    }
}
declare namespace Barrios.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace Barrios.Administration {
}
declare namespace Barrios.Administration {
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
        ClientIdList: Serenity.CheckLookupEditor;
    }
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Barrios.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace Barrios.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        const enum Fields {
            UserPermissionId = "UserPermissionId",
            UserId = "UserId",
            PermissionKey = "PermissionKey",
            Granted = "Granted",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace Barrios.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserPermission/Update",
            List = "Administration/UserPermission/List",
            ListRolePermissions = "Administration/UserPermission/ListRolePermissions",
            ListPermissionKeys = "Administration/UserPermission/ListPermissionKeys"
        }
    }
}
declare namespace Barrios.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace Barrios.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace Barrios.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace Barrios.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        const enum Fields {
            UserRoleId = "UserRoleId",
            UserId = "UserId",
            RoleId = "RoleId",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace Barrios.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserRole/Update",
            List = "Administration/UserRole/List"
        }
    }
}
declare namespace Barrios.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace Barrios.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        ClientIdList?: number[];
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        function getLookup(): Q.Lookup<UserRow>;
        const enum Fields {
            UserId = "UserId",
            Username = "Username",
            Source = "Source",
            PasswordHash = "PasswordHash",
            PasswordSalt = "PasswordSalt",
            DisplayName = "DisplayName",
            Email = "Email",
            UserImage = "UserImage",
            LastDirectoryUpdate = "LastDirectoryUpdate",
            IsActive = "IsActive",
            Password = "Password",
            PasswordConfirm = "PasswordConfirm",
            ClientIdList = "ClientIdList",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Barrios.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/User/Create",
            Update = "Administration/User/Update",
            Delete = "Administration/User/Delete",
            Undelete = "Administration/User/Undelete",
            Retrieve = "Administration/User/Retrieve",
            List = "Administration/User/List"
        }
    }
}
declare namespace Barrios.Administration {
}
declare namespace Barrios.Administration {
    interface UsersBarriosForm {
        UserId: Serenity.IntegerEditor;
        BarrioId: Serenity.LookupEditor;
    }
    class UsersBarriosForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Barrios.Administration {
    interface UsersBarriosRow {
        UserId?: number;
        BarrioId?: number;
        UserUsername?: string;
        BarrioNombre?: string;
    }
    namespace UsersBarriosRow {
        const idProperty = "UserId";
        const localTextPrefix = "Administration.UsersBarrios";
        const enum Fields {
            UserId = "UserId",
            BarrioId = "BarrioId",
            UserUsername = "UserUsername",
            BarrioNombre = "BarrioNombre"
        }
    }
}
declare namespace Barrios.Common {
    interface UserPreferenceRetrieveRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
    }
}
declare namespace Barrios.Common {
    interface UserPreferenceRetrieveResponse extends Serenity.ServiceResponse {
        Value?: string;
    }
}
declare namespace Barrios.Common {
    interface UserPreferenceRow {
        UserPreferenceId?: number;
        UserId?: number;
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
    namespace UserPreferenceRow {
        const idProperty = "UserPreferenceId";
        const nameProperty = "Name";
        const localTextPrefix = "Common.UserPreference";
        const enum Fields {
            UserPreferenceId = "UserPreferenceId",
            UserId = "UserId",
            PreferenceType = "PreferenceType",
            Name = "Name",
            Value = "Value"
        }
    }
}
declare namespace Barrios.Common {
    namespace UserPreferenceService {
        const baseUrl = "Common/UserPreference";
        function Update(request: UserPreferenceUpdateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: UserPreferenceRetrieveRequest, onSuccess?: (response: UserPreferenceRetrieveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Common/UserPreference/Update",
            Retrieve = "Common/UserPreference/Retrieve"
        }
    }
}
declare namespace Barrios.Common {
    interface UserPreferenceUpdateRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
}
declare namespace Barrios.Contenidos {
}
declare namespace Barrios.Contenidos {
    interface AvisosForm {
        Nombre: Serenity.StringEditor;
        IdCategoria: Serenity.IntegerEditor;
        Caducidad: Serenity.DateEditor;
        Vigente: Serenity.BooleanEditor;
        Descripcion: Serenity.StringEditor;
        Imagen: Serenity.ImageUploadEditor;
        UserInsert: Serenity.IntegerEditor;
        UserUpdate: Serenity.IntegerEditor;
        DateUpdate: Serenity.DateEditor;
        DateInsert: Serenity.DateEditor;
    }
    class AvisosForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Barrios.Contenidos {
    interface AvisosRow {
        Id?: number;
        Nombre?: string;
        IdCategoria?: number;
        Caducidad?: string;
        Vigente?: boolean;
        Descripcion?: string;
        Imagen?: string;
        UserInsert?: number;
        UserUpdate?: number;
        DateUpdate?: string;
        DateInsert?: string;
        IdCategoriaNombre?: string;
        UserInsertUsername?: string;
        UserUpdateUsername?: string;
    }
    namespace AvisosRow {
        const idProperty = "Id";
        const nameProperty = "Nombre";
        const localTextPrefix = "Contenidos.Avisos";
        const enum Fields {
            Id = "Id",
            Nombre = "Nombre",
            IdCategoria = "IdCategoria",
            Caducidad = "Caducidad",
            Vigente = "Vigente",
            Descripcion = "Descripcion",
            Imagen = "Imagen",
            UserInsert = "UserInsert",
            UserUpdate = "UserUpdate",
            DateUpdate = "DateUpdate",
            DateInsert = "DateInsert",
            IdCategoriaNombre = "IdCategoriaNombre",
            UserInsertUsername = "UserInsertUsername",
            UserUpdateUsername = "UserUpdateUsername"
        }
    }
}
declare namespace Barrios.Contenidos {
    namespace AvisosService {
        const baseUrl = "Contenidos/Avisos";
        function Create(request: Serenity.SaveRequest<AvisosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AvisosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AvisosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AvisosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Contenidos/Avisos/Create",
            Update = "Contenidos/Avisos/Update",
            Delete = "Contenidos/Avisos/Delete",
            Retrieve = "Contenidos/Avisos/Retrieve",
            List = "Contenidos/Avisos/List"
        }
    }
}
declare namespace Barrios.Contenidos {
}
declare namespace Barrios.Contenidos {
    interface CategoriasForm {
        Type: Serenity.LookupEditor;
        Nombre: Serenity.StringEditor;
        Mostrar: Serenity.BooleanEditor;
        Vigente: Serenity.BooleanEditor;
    }
    class CategoriasForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Barrios.Contenidos {
    interface CategoriasRow {
        Id?: number;
        Nombre?: string;
        Vigente?: boolean;
        UserInsert?: number;
        DateInsert?: string;
        UserUpdate?: number;
        DateUpdate?: string;
        Type?: number;
        Mostrar?: boolean;
        TypeName?: string;
        UserInsertUsername?: string;
        UserUpdateUsername?: string;
    }
    namespace CategoriasRow {
        const idProperty = "Id";
        const nameProperty = "Nombre";
        const localTextPrefix = "Contenidos.Categorias";
        const lookupKey = "Contenidos.Categorias";
        function getLookup(): Q.Lookup<CategoriasRow>;
        const enum Fields {
            Id = "Id",
            Nombre = "Nombre",
            Vigente = "Vigente",
            UserInsert = "UserInsert",
            DateInsert = "DateInsert",
            UserUpdate = "UserUpdate",
            DateUpdate = "DateUpdate",
            Type = "Type",
            Mostrar = "Mostrar",
            TypeName = "TypeName",
            UserInsertUsername = "UserInsertUsername",
            UserUpdateUsername = "UserUpdateUsername"
        }
    }
}
declare namespace Barrios.Contenidos {
    namespace CategoriasService {
        const baseUrl = "Contenidos/Categorias";
        function Create(request: Serenity.SaveRequest<CategoriasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CategoriasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CategoriasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CategoriasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Contenidos/Categorias/Create",
            Update = "Contenidos/Categorias/Update",
            Delete = "Contenidos/Categorias/Delete",
            Retrieve = "Contenidos/Categorias/Retrieve",
            List = "Contenidos/Categorias/List"
        }
    }
}
declare namespace Barrios.Contenidos {
}
declare namespace Barrios.Contenidos {
    interface ComisionesForm {
        Nombre: Serenity.StringEditor;
        Habilitada: Serenity.BooleanEditor;
        Sigla: Serenity.StringEditor;
        Color: Serenity.StringEditor;
        Mails: Serenity.StringEditor;
        UserInsert: Serenity.IntegerEditor;
        DateInsert: Serenity.DateEditor;
        UserUpdate: Serenity.IntegerEditor;
        DateUpdate: Serenity.DateEditor;
        BarrioId: Serenity.IntegerEditor;
    }
    class ComisionesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Barrios.Contenidos {
}
declare namespace Barrios.Contenidos {
    interface ComisionesIntegrantesForm {
        Id: Serenity.IntegerEditor;
        Nombre: Serenity.StringEditor;
        UserInsert: Serenity.IntegerEditor;
        DateInsert: Serenity.DateEditor;
        UserUpdate: Serenity.IntegerEditor;
        DateUpdate: Serenity.DateEditor;
    }
    class ComisionesIntegrantesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Barrios.Contenidos {
    interface ComisionesIntegrantesRow {
        IdComision?: number;
        Id?: number;
        Nombre?: string;
        UserInsert?: number;
        DateInsert?: string;
        UserUpdate?: number;
        DateUpdate?: string;
        IdComisionNombre?: string;
        UserInsertUsername?: string;
        UserUpdateUsername?: string;
    }
    namespace ComisionesIntegrantesRow {
        const idProperty = "IdComision";
        const nameProperty = "Nombre";
        const localTextPrefix = "Contenidos.ComisionesIntegrantes";
        const enum Fields {
            IdComision = "IdComision",
            Id = "Id",
            Nombre = "Nombre",
            UserInsert = "UserInsert",
            DateInsert = "DateInsert",
            UserUpdate = "UserUpdate",
            DateUpdate = "DateUpdate",
            IdComisionNombre = "IdComisionNombre",
            UserInsertUsername = "UserInsertUsername",
            UserUpdateUsername = "UserUpdateUsername"
        }
    }
}
declare namespace Barrios.Contenidos {
    namespace ComisionesIntegrantesService {
        const baseUrl = "Contenidos/ComisionesIntegrantes";
        function Create(request: Serenity.SaveRequest<ComisionesIntegrantesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ComisionesIntegrantesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ComisionesIntegrantesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ComisionesIntegrantesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Contenidos/ComisionesIntegrantes/Create",
            Update = "Contenidos/ComisionesIntegrantes/Update",
            Delete = "Contenidos/ComisionesIntegrantes/Delete",
            Retrieve = "Contenidos/ComisionesIntegrantes/Retrieve",
            List = "Contenidos/ComisionesIntegrantes/List"
        }
    }
}
declare namespace Barrios.Contenidos {
    interface ComisionesRow {
        Id?: number;
        Nombre?: string;
        Habilitada?: boolean;
        Sigla?: string;
        Color?: string;
        Mails?: string;
        UserInsert?: number;
        DateInsert?: string;
        UserUpdate?: number;
        DateUpdate?: string;
        BarrioId?: number;
        UserInsertUsername?: string;
        UserUpdateUsername?: string;
        BarrioNombre?: string;
    }
    namespace ComisionesRow {
        const idProperty = "Id";
        const nameProperty = "Nombre";
        const localTextPrefix = "Contenidos.Comisiones";
        const enum Fields {
            Id = "Id",
            Nombre = "Nombre",
            Habilitada = "Habilitada",
            Sigla = "Sigla",
            Color = "Color",
            Mails = "Mails",
            UserInsert = "UserInsert",
            DateInsert = "DateInsert",
            UserUpdate = "UserUpdate",
            DateUpdate = "DateUpdate",
            BarrioId = "BarrioId",
            UserInsertUsername = "UserInsertUsername",
            UserUpdateUsername = "UserUpdateUsername",
            BarrioNombre = "BarrioNombre"
        }
    }
}
declare namespace Barrios.Contenidos {
    namespace ComisionesService {
        const baseUrl = "Contenidos/Comisiones";
        function Create(request: Serenity.SaveRequest<ComisionesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ComisionesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ComisionesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ComisionesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Contenidos/Comisiones/Create",
            Update = "Contenidos/Comisiones/Update",
            Delete = "Contenidos/Comisiones/Delete",
            Retrieve = "Contenidos/Comisiones/Retrieve",
            List = "Contenidos/Comisiones/List"
        }
    }
}
declare namespace Barrios.Contenidos {
}
declare namespace Barrios.Contenidos {
    interface EncuestasForm {
        Nombre: Serenity.StringEditor;
        IdCategoria: Serenity.IntegerEditor;
        FechaAlta: Serenity.DateEditor;
        FechaBaja: Serenity.DateEditor;
        Vigente: Serenity.BooleanEditor;
        Descripcion: Serenity.StringEditor;
        UserInsert: Serenity.IntegerEditor;
        DateInsert: Serenity.DateEditor;
        UserUpdate: Serenity.IntegerEditor;
        DateUpdate: Serenity.DateEditor;
    }
    class EncuestasForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Barrios.Contenidos {
    interface EncuestasRow {
        Id?: number;
        Nombre?: string;
        IdCategoria?: number;
        FechaAlta?: string;
        FechaBaja?: string;
        Vigente?: boolean;
        Descripcion?: string;
        UserInsert?: number;
        DateInsert?: string;
        UserUpdate?: number;
        DateUpdate?: string;
        UserInsertUsername?: string;
        UserUpdateUsername?: string;
    }
    namespace EncuestasRow {
        const idProperty = "Id";
        const nameProperty = "Nombre";
        const localTextPrefix = "Contenidos.Encuestas";
        const enum Fields {
            Id = "Id",
            Nombre = "Nombre",
            IdCategoria = "IdCategoria",
            FechaAlta = "FechaAlta",
            FechaBaja = "FechaBaja",
            Vigente = "Vigente",
            Descripcion = "Descripcion",
            UserInsert = "UserInsert",
            DateInsert = "DateInsert",
            UserUpdate = "UserUpdate",
            DateUpdate = "DateUpdate",
            UserInsertUsername = "UserInsertUsername",
            UserUpdateUsername = "UserUpdateUsername"
        }
    }
}
declare namespace Barrios.Contenidos {
    namespace EncuestasService {
        const baseUrl = "Contenidos/Encuestas";
        function Create(request: Serenity.SaveRequest<EncuestasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EncuestasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EncuestasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EncuestasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Contenidos/Encuestas/Create",
            Update = "Contenidos/Encuestas/Update",
            Delete = "Contenidos/Encuestas/Delete",
            Retrieve = "Contenidos/Encuestas/Retrieve",
            List = "Contenidos/Encuestas/List"
        }
    }
}
declare namespace Barrios.Contenidos {
}
declare namespace Barrios.Contenidos {
    interface EncuestasValoracionesForm {
        IdEncuesta: Serenity.IntegerEditor;
        Fecha: Serenity.DateEditor;
        Valoracion: Serenity.IntegerEditor;
        Comentario: Serenity.StringEditor;
        Userid: Serenity.IntegerEditor;
    }
    class EncuestasValoracionesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Barrios.Contenidos {
    interface EncuestasValoracionesRow {
        Id?: number;
        IdEncuesta?: number;
        Fecha?: string;
        Valoracion?: number;
        Comentario?: string;
        Userid?: number;
        IdEncuestaNombre?: string;
        UseridUsername?: string;
    }
    namespace EncuestasValoracionesRow {
        const idProperty = "Id";
        const nameProperty = "Comentario";
        const localTextPrefix = "Contenidos.EncuestasValoraciones";
        const enum Fields {
            Id = "Id",
            IdEncuesta = "IdEncuesta",
            Fecha = "Fecha",
            Valoracion = "Valoracion",
            Comentario = "Comentario",
            Userid = "Userid",
            IdEncuestaNombre = "IdEncuestaNombre",
            UseridUsername = "UseridUsername"
        }
    }
}
declare namespace Barrios.Contenidos {
    namespace EncuestasValoracionesService {
        const baseUrl = "Contenidos/EncuestasValoraciones";
        function Create(request: Serenity.SaveRequest<EncuestasValoracionesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EncuestasValoracionesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EncuestasValoracionesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EncuestasValoracionesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Contenidos/EncuestasValoraciones/Create",
            Update = "Contenidos/EncuestasValoraciones/Update",
            Delete = "Contenidos/EncuestasValoraciones/Delete",
            Retrieve = "Contenidos/EncuestasValoraciones/Retrieve",
            List = "Contenidos/EncuestasValoraciones/List"
        }
    }
}
declare namespace Barrios.Contenidos {
}
declare namespace Barrios.Contenidos {
    interface LineaTiempoForm {
        Nombre: Serenity.StringEditor;
        ArchivoFilename: Serenity.StringEditor;
        ArchivoFilesize: Serenity.IntegerEditor;
        ArchivoContenttype: Serenity.StringEditor;
        ArchivoBinarydata: Serenity.StringEditor;
        Aprobado: Serenity.BooleanEditor;
        Mes: Serenity.IntegerEditor;
        Anio: Serenity.IntegerEditor;
        Periodo: Serenity.StringEditor;
        PeriodoFecha: Serenity.DateEditor;
        ContenidoTexto: Serenity.StringEditor;
        Userid: Serenity.IntegerEditor;
        IdCategoria: Serenity.IntegerEditor;
    }
    class LineaTiempoForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Barrios.Contenidos {
    interface LineaTiempoRow {
        Id?: number;
        Nombre?: string;
        ArchivoFilename?: string;
        ArchivoFilesize?: number;
        ArchivoContenttype?: string;
        ArchivoBinarydata?: number[];
        Aprobado?: boolean;
        Mes?: number;
        Anio?: number;
        Periodo?: string;
        PeriodoFecha?: string;
        ContenidoTexto?: string;
        Userid?: number;
        IdCategoria?: number;
        UseridUsername?: string;
    }
    namespace LineaTiempoRow {
        const idProperty = "Id";
        const nameProperty = "Nombre";
        const localTextPrefix = "Contenidos.LineaTiempo";
        const enum Fields {
            Id = "Id",
            Nombre = "Nombre",
            ArchivoFilename = "ArchivoFilename",
            ArchivoFilesize = "ArchivoFilesize",
            ArchivoContenttype = "ArchivoContenttype",
            ArchivoBinarydata = "ArchivoBinarydata",
            Aprobado = "Aprobado",
            Mes = "Mes",
            Anio = "Anio",
            Periodo = "Periodo",
            PeriodoFecha = "PeriodoFecha",
            ContenidoTexto = "ContenidoTexto",
            Userid = "Userid",
            IdCategoria = "IdCategoria",
            UseridUsername = "UseridUsername"
        }
    }
}
declare namespace Barrios.Contenidos {
    namespace LineaTiempoService {
        const baseUrl = "Contenidos/LineaTiempo";
        function Create(request: Serenity.SaveRequest<LineaTiempoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LineaTiempoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LineaTiempoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LineaTiempoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Contenidos/LineaTiempo/Create",
            Update = "Contenidos/LineaTiempo/Update",
            Delete = "Contenidos/LineaTiempo/Delete",
            Retrieve = "Contenidos/LineaTiempo/Retrieve",
            List = "Contenidos/LineaTiempo/List"
        }
    }
}
declare namespace Barrios.Contenidos {
}
declare namespace Barrios.Contenidos {
    interface ProveedoresForm {
        Nombre: Serenity.StringEditor;
        IdCategoria: Serenity.LookupEditor;
        FechaAlta: Serenity.DateEditor;
        FechaBaja: Serenity.DateEditor;
        Vigente: Serenity.BooleanEditor;
        Domicilio: Serenity.StringEditor;
        Telefonos: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        Notas: Serenity.StringEditor;
        UserInsert: Serenity.IntegerEditor;
        DateInsert: Serenity.DateEditor;
        UserUpdate: Serenity.IntegerEditor;
        DateUpdate: Serenity.DateEditor;
    }
    class ProveedoresForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Barrios.Contenidos {
    interface ProveedoresRow {
        Id?: number;
        Nombre?: string;
        IdCategoria?: number;
        FechaAlta?: string;
        FechaBaja?: string;
        Vigente?: boolean;
        Domicilio?: string;
        Telefonos?: string;
        Email?: string;
        Notas?: string;
        UserInsert?: number;
        DateInsert?: string;
        UserUpdate?: number;
        DateUpdate?: string;
        UserInsertUsername?: string;
        UserUpdateUsername?: string;
    }
    namespace ProveedoresRow {
        const idProperty = "Id";
        const nameProperty = "Nombre";
        const localTextPrefix = "Contenidos.Proveedores";
        const enum Fields {
            Id = "Id",
            Nombre = "Nombre",
            IdCategoria = "IdCategoria",
            FechaAlta = "FechaAlta",
            FechaBaja = "FechaBaja",
            Vigente = "Vigente",
            Domicilio = "Domicilio",
            Telefonos = "Telefonos",
            Email = "Email",
            Notas = "Notas",
            UserInsert = "UserInsert",
            DateInsert = "DateInsert",
            UserUpdate = "UserUpdate",
            DateUpdate = "DateUpdate",
            UserInsertUsername = "UserInsertUsername",
            UserUpdateUsername = "UserUpdateUsername"
        }
    }
}
declare namespace Barrios.Contenidos {
    namespace ProveedoresService {
        const baseUrl = "Contenidos/Proveedores";
        function Create(request: Serenity.SaveRequest<ProveedoresRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProveedoresRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProveedoresRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProveedoresRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Contenidos/Proveedores/Create",
            Update = "Contenidos/Proveedores/Update",
            Delete = "Contenidos/Proveedores/Delete",
            Retrieve = "Contenidos/Proveedores/Retrieve",
            List = "Contenidos/Proveedores/List"
        }
    }
}
declare namespace Barrios.Contenidos {
}
declare namespace Barrios.Contenidos {
    interface ProveedoresValoracionesForm {
        IdProveedor: Serenity.IntegerEditor;
        Fecha: Serenity.DateEditor;
        Valoracion: Serenity.IntegerEditor;
        Userid: Serenity.IntegerEditor;
    }
    class ProveedoresValoracionesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Barrios.Contenidos {
    interface ProveedoresValoracionesRow {
        Id?: number;
        IdProveedor?: number;
        Fecha?: string;
        Valoracion?: number;
        Userid?: number;
        IdProveedorNombre?: string;
        UseridUsername?: string;
    }
    namespace ProveedoresValoracionesRow {
        const idProperty = "Id";
        const localTextPrefix = "Contenidos.ProveedoresValoraciones";
        const enum Fields {
            Id = "Id",
            IdProveedor = "IdProveedor",
            Fecha = "Fecha",
            Valoracion = "Valoracion",
            Userid = "Userid",
            IdProveedorNombre = "IdProveedorNombre",
            UseridUsername = "UseridUsername"
        }
    }
}
declare namespace Barrios.Contenidos {
    namespace ProveedoresValoracionesService {
        const baseUrl = "Contenidos/ProveedoresValoraciones";
        function Create(request: Serenity.SaveRequest<ProveedoresValoracionesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProveedoresValoracionesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProveedoresValoracionesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProveedoresValoracionesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Contenidos/ProveedoresValoraciones/Create",
            Update = "Contenidos/ProveedoresValoraciones/Update",
            Delete = "Contenidos/ProveedoresValoraciones/Delete",
            Retrieve = "Contenidos/ProveedoresValoraciones/Retrieve",
            List = "Contenidos/ProveedoresValoraciones/List"
        }
    }
}
declare namespace Barrios.Default {
    interface ReservasForm {
        IdRecurso: Serenity.IntegerEditor;
        IdResultado: Serenity.IntegerEditor;
        Fecha: Serenity.DateEditor;
        Inicio: Serenity.IntegerEditor;
        Duracion: Serenity.IntegerEditor;
        Observaciones: Serenity.StringEditor;
        IdVecino2: Serenity.IntegerEditor;
        IdTipo: Serenity.IntegerEditor;
        FechaFin: Serenity.DateEditor;
        IdVecino: Serenity.IntegerEditor;
        DateInsert: Serenity.DateEditor;
        UserInsert: Serenity.IntegerEditor;
    }
    class ReservasForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Barrios.Default {
    interface ReservasRecursosForm {
        Nombre: Serenity.StringEditor;
        Apertura: Serenity.IntegerEditor;
        Cierre: Serenity.IntegerEditor;
        Resolucion: Serenity.IntegerEditor;
    }
    class ReservasRecursosForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Barrios.Default {
    interface ReservasRecursosRow {
        BarrioId?: number;
        Id?: number;
        Nombre?: string;
        Apertura?: number;
        Cierre?: number;
        Resolucion?: number;
    }
    namespace ReservasRecursosRow {
        const idProperty = "Id";
        const nameProperty = "Nombre";
        const localTextPrefix = "Default.ReservasRecursos";
        const enum Fields {
            BarrioId = "BarrioId",
            Id = "Id",
            Nombre = "Nombre",
            Apertura = "Apertura",
            Cierre = "Cierre",
            Resolucion = "Resolucion"
        }
    }
}
declare namespace Barrios.Default {
    namespace ReservasRecursosService {
        const baseUrl = "Default/ReservasRecursos";
        function Create(request: Serenity.SaveRequest<ReservasRecursosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ReservasRecursosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ReservasRecursosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ReservasRecursosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/ReservasRecursos/Create",
            Update = "Default/ReservasRecursos/Update",
            Delete = "Default/ReservasRecursos/Delete",
            Retrieve = "Default/ReservasRecursos/Retrieve",
            List = "Default/ReservasRecursos/List"
        }
    }
}
declare namespace Barrios.Default {
    interface ReservasRow {
        Id?: number;
        IdRecurso?: number;
        IdResultado?: number;
        Fecha?: string;
        Inicio?: number;
        Duracion?: number;
        Observaciones?: string;
        IdVecino2?: number;
        IdTipo?: number;
        FechaFin?: string;
        IdVecino?: number;
        DateInsert?: string;
        UserInsert?: number;
        IdRecursoNombre?: string;
        IdRecursoApertura?: number;
        IdRecursoCierre?: number;
        IdRecursoResolucion?: number;
        IdVecinoUsername?: string;
        IdVecinoDisplayName?: string;
        IdVecinoEmail?: string;
        IdVecinoSource?: string;
        IdVecinoPasswordHash?: string;
        IdVecinoPasswordSalt?: string;
        IdVecinoLastDirectoryUpdate?: string;
        IdVecinoUserImage?: string;
        IdVecinoInsertDate?: string;
        IdVecinoInsertUserId?: number;
        IdVecinoUpdateDate?: string;
        IdVecinoUpdateUserId?: number;
        IdVecinoIsActive?: number;
        IdVecinoPhones?: string;
        IdVecinoNote?: string;
        IdVecinoLatestAccess?: string;
        IdVecinoUnidad?: string;
    }
    namespace ReservasRow {
        const idProperty = "Id";
        const nameProperty = "Observaciones";
        const localTextPrefix = "Default.Reservas";
        const enum Fields {
            Id = "Id",
            IdRecurso = "IdRecurso",
            IdResultado = "IdResultado",
            Fecha = "Fecha",
            Inicio = "Inicio",
            Duracion = "Duracion",
            Observaciones = "Observaciones",
            IdVecino2 = "IdVecino2",
            IdTipo = "IdTipo",
            FechaFin = "FechaFin",
            IdVecino = "IdVecino",
            DateInsert = "DateInsert",
            UserInsert = "UserInsert",
            IdRecursoNombre = "IdRecursoNombre",
            IdRecursoApertura = "IdRecursoApertura",
            IdRecursoCierre = "IdRecursoCierre",
            IdRecursoResolucion = "IdRecursoResolucion",
            IdVecinoUsername = "IdVecinoUsername",
            IdVecinoDisplayName = "IdVecinoDisplayName",
            IdVecinoEmail = "IdVecinoEmail",
            IdVecinoSource = "IdVecinoSource",
            IdVecinoPasswordHash = "IdVecinoPasswordHash",
            IdVecinoPasswordSalt = "IdVecinoPasswordSalt",
            IdVecinoLastDirectoryUpdate = "IdVecinoLastDirectoryUpdate",
            IdVecinoUserImage = "IdVecinoUserImage",
            IdVecinoInsertDate = "IdVecinoInsertDate",
            IdVecinoInsertUserId = "IdVecinoInsertUserId",
            IdVecinoUpdateDate = "IdVecinoUpdateDate",
            IdVecinoUpdateUserId = "IdVecinoUpdateUserId",
            IdVecinoIsActive = "IdVecinoIsActive",
            IdVecinoPhones = "IdVecinoPhones",
            IdVecinoNote = "IdVecinoNote",
            IdVecinoLatestAccess = "IdVecinoLatestAccess",
            IdVecinoUnidad = "IdVecinoUnidad"
        }
    }
}
declare namespace Barrios.Default {
    namespace ReservasService {
        const baseUrl = "Default/Reservas";
        function Create(request: Serenity.SaveRequest<ReservasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ReservasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ReservasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ReservasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Reservas/Create",
            Update = "Default/Reservas/Update",
            Delete = "Default/Reservas/Delete",
            Retrieve = "Default/Reservas/Retrieve",
            List = "Default/Reservas/List"
        }
    }
}
declare namespace Barrios.Default {
    interface ReservasTiposForm {
        Id: Serenity.IntegerEditor;
        Nombre: Serenity.StringEditor;
        Duracion: Serenity.IntegerEditor;
        Vigente: Serenity.BooleanEditor;
        RequiereVecino2: Serenity.BooleanEditor;
    }
    class ReservasTiposForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Barrios.Default {
    interface ReservasTiposRow {
        IdRecurso?: number;
        Id?: number;
        Nombre?: string;
        Duracion?: number;
        Vigente?: boolean;
        RequiereVecino2?: boolean;
    }
    namespace ReservasTiposRow {
        const idProperty = "IdRecurso";
        const nameProperty = "Nombre";
        const localTextPrefix = "Default.ReservasTipos";
        const enum Fields {
            IdRecurso = "IdRecurso",
            Id = "Id",
            Nombre = "Nombre",
            Duracion = "Duracion",
            Vigente = "Vigente",
            RequiereVecino2 = "RequiereVecino2"
        }
    }
}
declare namespace Barrios.Default {
    namespace ReservasTiposService {
        const baseUrl = "Default/ReservasTipos";
        function Create(request: Serenity.SaveRequest<ReservasTiposRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ReservasTiposRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ReservasTiposRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ReservasTiposRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/ReservasTipos/Create",
            Update = "Default/ReservasTipos/Update",
            Delete = "Default/ReservasTipos/Delete",
            Retrieve = "Default/ReservasTipos/Retrieve",
            List = "Default/ReservasTipos/List"
        }
    }
}
declare namespace Barrios.Default {
    interface ReservasTurnosEspecialesForm {
        Id: Serenity.IntegerEditor;
        Inicio: Serenity.IntegerEditor;
        Duracion: Serenity.IntegerEditor;
        Nombre: Serenity.StringEditor;
        Dias: Serenity.StringEditor;
    }
    class ReservasTurnosEspecialesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Barrios.Default {
    interface ReservasTurnosEspecialesRow {
        IdRecurso?: number;
        Id?: number;
        Inicio?: number;
        Duracion?: number;
        Nombre?: string;
        Dias?: string;
    }
    namespace ReservasTurnosEspecialesRow {
        const idProperty = "IdRecurso";
        const nameProperty = "Nombre";
        const localTextPrefix = "Default.ReservasTurnosEspeciales";
        const enum Fields {
            IdRecurso = "IdRecurso",
            Id = "Id",
            Inicio = "Inicio",
            Duracion = "Duracion",
            Nombre = "Nombre",
            Dias = "Dias"
        }
    }
}
declare namespace Barrios.Default {
    namespace ReservasTurnosEspecialesService {
        const baseUrl = "Default/ReservasTurnosEspeciales";
        function Create(request: Serenity.SaveRequest<ReservasTurnosEspecialesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ReservasTurnosEspecialesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ReservasTurnosEspecialesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ReservasTurnosEspecialesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/ReservasTurnosEspeciales/Create",
            Update = "Default/ReservasTurnosEspeciales/Update",
            Delete = "Default/ReservasTurnosEspeciales/Delete",
            Retrieve = "Default/ReservasTurnosEspeciales/Retrieve",
            List = "Default/ReservasTurnosEspeciales/List"
        }
    }
}
declare namespace Barrios {
    interface ExcelImportRequest extends Serenity.ServiceRequest {
        FileName?: string;
    }
}
declare namespace Barrios {
    interface ExcelImportResponse extends Serenity.ServiceResponse {
        Inserted?: number;
        Updated?: number;
        ErrorList?: string[];
    }
}
declare namespace Barrios {
    interface GetNextNumberRequest extends Serenity.ServiceRequest {
        Prefix?: string;
        Length?: number;
    }
}
declare namespace Barrios {
    interface GetNextNumberResponse extends Serenity.ServiceResponse {
        Number?: number;
        Serial?: string;
    }
}
declare namespace Barrios.Membership {
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Barrios.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace Barrios.Membership {
    interface ForgotPasswordForm {
        Email: Serenity.EmailEditor;
    }
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Barrios.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace Barrios.Membership {
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Barrios.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
    }
}
declare namespace Barrios.Membership {
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Barrios.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace Barrios.Membership {
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        ConfirmEmail: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Barrios.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace Barrios.Modules.Common.Utils {
    interface GenericComboBoxRow {
        Name?: string;
        Id?: number;
    }
    namespace GenericComboBoxRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Modules.Common.Utils.GenericComboBox";
        const enum Fields {
            Name = "Name",
            Id = "Id"
        }
    }
}
declare namespace Barrios.Modules.Common.Utils {
    interface IdRequest extends Serenity.ServiceRequest {
        Id?: number;
    }
}
declare namespace Barrios {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace Barrios.Texts {
}
declare namespace Barrios.Administration {
    class BarriosDialog extends Serenity.EntityDialog<BarriosRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: BarriosForm;
    }
}
declare namespace Barrios.Administration {
    class BarriosGrid extends Serenity.EntityGrid<BarriosRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BarriosDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Barrios.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace Barrios.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): LanguageRow.Fields[];
    }
}
declare namespace Barrios.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace Barrios.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): RoleRow.Fields[];
    }
}
declare namespace Barrios.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare namespace Barrios.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): PromiseLike<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace Barrios.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace Barrios.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): UserRow.Fields[];
    }
}
declare namespace Barrios.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace Barrios.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass;
        private roleOrImplicit;
        private getItemEffectiveClass;
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains;
        private getDescendants;
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey;
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys;
        value: UserPermissionRow[];
        private _rolePermissions;
        rolePermissions: string[];
        private _implicitPermissions;
        implicitPermissions: Q.Dictionary<string[]>;
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace Barrios.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace Barrios.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace Barrios.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare namespace Barrios.Administration {
    class UsersBarriosDialog extends Serenity.EntityDialog<UsersBarriosRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): any;
        protected form: UsersBarriosForm;
    }
}
declare namespace Barrios.Administration {
    class UsersBarriosGrid extends Serenity.EntityGrid<UsersBarriosRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UsersBarriosDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): any;
        constructor(container: JQuery);
    }
}
declare namespace Barrios.LanguageList {
    function getValue(): string[][];
}
declare namespace Barrios.ScriptInitialization {
}
declare namespace Barrios {
    class BasicProgressDialog extends Serenity.TemplatedDialog<any> {
        constructor();
        cancelled: boolean;
        max: number;
        value: number;
        title: string;
        cancelTitle: string;
        getDialogOptions(): JQueryUI.DialogOptions;
        initDialog(): void;
        getTemplate(): string;
    }
}
declare namespace Barrios.Common {
    class BulkServiceAction {
        protected keys: string[];
        protected queue: string[];
        protected queueIndex: number;
        protected progressDialog: BasicProgressDialog;
        protected pendingRequests: number;
        protected completedRequests: number;
        protected errorByKey: Q.Dictionary<Serenity.ServiceError>;
        private successCount;
        private errorCount;
        done: () => void;
        protected createProgressDialog(): void;
        protected getConfirmationFormat(): string;
        protected getConfirmationMessage(targetCount: any): string;
        protected confirm(targetCount: any, action: any): void;
        protected getNothingToProcessMessage(): string;
        protected nothingToProcess(): void;
        protected getParallelRequests(): number;
        protected getBatchSize(): number;
        protected startParallelExecution(): void;
        protected serviceCallCleanup(): void;
        protected executeForBatch(batch: string[]): void;
        protected executeNextBatch(): void;
        protected getAllHadErrorsFormat(): string;
        protected showAllHadErrors(): void;
        protected getSomeHadErrorsFormat(): string;
        protected showSomeHadErrors(): void;
        protected getAllSuccessFormat(): string;
        protected showAllSuccess(): void;
        protected showResults(): void;
        execute(keys: string[]): void;
        get_successCount(): any;
        set_successCount(value: number): void;
        get_errorCount(): any;
        set_errorCount(value: number): void;
    }
}
declare namespace Barrios.DialogUtils {
    function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
}
declare namespace Barrios.Common {
    class EnumSelectFormatter implements Slick.Formatter {
        constructor();
        format(ctx: Slick.FormatterContext): string;
        enumKey: string;
        allowClear: boolean;
        emptyItemText: string;
    }
}
declare namespace Barrios.Common {
    interface ExcelExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
    }
    namespace ExcelExportHelper {
        function createToolButton(options: ExcelExportOptions): Serenity.ToolButton;
    }
}
declare namespace Barrios.Common {
    class GridEditorBase<TEntity> extends Serenity.EntityGrid<TEntity, any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        protected getIdProperty(): string;
        protected nextId: number;
        constructor(container: JQuery);
        protected id(entity: TEntity): any;
        protected getNextId(): string;
        protected setNewId(entity: TEntity): void;
        protected save(opt: Serenity.ServiceOptions<any>, callback: (r: Serenity.ServiceResponse) => void): void;
        protected deleteEntity(id: number): boolean;
        protected validateEntity(row: TEntity, id: number): boolean;
        protected setEntities(items: TEntity[]): void;
        protected getNewEntity(): TEntity;
        protected getButtons(): Serenity.ToolButton[];
        protected editItem(entityOrId: any): void;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        value: TEntity[];
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected createQuickSearchInput(): void;
    }
}
declare namespace Barrios.Common {
    class GridEditorDialog<TEntity> extends Serenity.EntityDialog<TEntity, any> {
        protected getIdProperty(): string;
        onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void) => void;
        onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void) => void;
        destroy(): void;
        protected updateInterface(): void;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
    }
}
declare namespace Barrios {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    class StaticTextBlock extends Serenity.Widget<StaticTextBlockOptions> implements Serenity.ISetEditValue {
        private value;
        constructor(container: JQuery, options: StaticTextBlockOptions);
        private updateElementContent;
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        setEditValue(source: any, property: Serenity.PropertyItem): void;
    }
    interface StaticTextBlockOptions {
        text: string;
        isHtml: boolean;
        isLocalText: boolean;
        hideLabel: boolean;
    }
}
declare namespace Barrios.Common {
    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }
}
declare namespace Barrios.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace Barrios.Common {
    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
        protected getCurrentTheme(): string;
    }
}
declare var jsPDF: any;
declare namespace Barrios.Common {
    interface PdfExportOptions {
        grid: Serenity.DataGrid<any, any>;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
        reportTitle?: string;
        titleTop?: number;
        titleFontSize?: number;
        fileName?: string;
        pageNumbers?: boolean;
        columnTitles?: {
            [key: string]: string;
        };
        tableOptions?: jsPDF.AutoTableOptions;
        output?: string;
        autoPrint?: boolean;
        printDateTimeHeader?: boolean;
    }
    namespace PdfExportHelper {
        function exportToPdf(options: PdfExportOptions): void;
        function createToolButton(options: PdfExportOptions): Serenity.ToolButton;
    }
}
declare var jsPDF: any;
declare namespace Barrios.Common {
    class ReportDialog extends Serenity.TemplatedDialog<ReportDialogOptions> {
        private report;
        private propertyGrid;
        constructor(options: ReportDialogOptions);
        protected getDialogButtons(): any;
        protected createPropertyGrid(): void;
        protected loadReport(reportKey: string): void;
        protected updateInterface(): void;
        executeReport(target: string, ext: string, download: boolean): void;
        getToolbarButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
    }
    interface ReportDialogOptions {
        reportKey: string;
    }
}
declare namespace Barrios.Common {
    interface ReportExecuteOptions {
        reportKey: string;
        download?: boolean;
        extension?: 'pdf' | 'htm' | 'html' | 'xlsx' | 'docx';
        getParams?: () => any;
        params?: {
            [key: string]: any;
        };
        target?: string;
    }
    interface ReportButtonOptions extends ReportExecuteOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
    }
    namespace ReportHelper {
        function createToolButton(options: ReportButtonOptions): Serenity.ToolButton;
        function execute(options: ReportExecuteOptions): void;
    }
}
declare var jsPDF: any;
declare namespace Barrios.Common {
    class ReportPage extends Serenity.Widget<any> {
        private reportKey;
        private propertyItems;
        private propertyGrid;
        constructor(element: JQuery);
        protected updateMatchFlags(text: string): void;
        protected categoryClick(e: any): void;
        protected reportLinkClick(e: any): void;
    }
}
declare namespace Barrios.Common {
    class UserPreferenceStorage implements Serenity.SettingStorage {
        getItem(key: string): string;
        setItem(key: string, data: string): void;
    }
}
declare namespace Barrios.Contenidos {
    class AvisosDialog extends Serenity.EntityDialog<AvisosRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: AvisosForm;
    }
}
declare namespace Barrios.Contenidos {
    class AvisosGrid extends Serenity.EntityGrid<AvisosRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AvisosDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Barrios.Contenidos {
    class CategoriasDialog extends Serenity.EntityDialog<CategoriasRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CategoriasForm;
    }
}
declare namespace Barrios.Contenidos {
    class CategoriasGrid extends Serenity.EntityGrid<CategoriasRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CategoriasDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Barrios.Contenidos {
    class ComisionesDialog extends Serenity.EntityDialog<ComisionesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ComisionesForm;
    }
}
declare namespace Barrios.Contenidos {
    class ComisionesGrid extends Serenity.EntityGrid<ComisionesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ComisionesDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Barrios.Contenidos {
    class ComisionesIntegrantesDialog extends Serenity.EntityDialog<ComisionesIntegrantesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ComisionesIntegrantesForm;
    }
}
declare namespace Barrios.Contenidos {
    class ComisionesIntegrantesGrid extends Serenity.EntityGrid<ComisionesIntegrantesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ComisionesIntegrantesDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Barrios.Contenidos {
    class EncuestasDialog extends Serenity.EntityDialog<EncuestasRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: EncuestasForm;
    }
}
declare namespace Barrios.Contenidos {
    class EncuestasGrid extends Serenity.EntityGrid<EncuestasRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EncuestasDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Barrios.Contenidos {
    class EncuestasValoracionesDialog extends Serenity.EntityDialog<EncuestasValoracionesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: EncuestasValoracionesForm;
    }
}
declare namespace Barrios.Contenidos {
    class EncuestasValoracionesGrid extends Serenity.EntityGrid<EncuestasValoracionesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EncuestasValoracionesDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Barrios.Contenidos {
    class LineaTiempoDialog extends Serenity.EntityDialog<LineaTiempoRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LineaTiempoForm;
    }
}
declare namespace Barrios.Contenidos {
    class LineaTiempoGrid extends Serenity.EntityGrid<LineaTiempoRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LineaTiempoDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Barrios.Contenidos {
    class ProveedoresDialog extends Serenity.EntityDialog<ProveedoresRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ProveedoresForm;
    }
}
declare namespace Barrios.Contenidos {
    class ProveedoresGrid extends Serenity.EntityGrid<ProveedoresRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProveedoresDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Barrios.Contenidos {
    class ProveedoresValoracionesDialog extends Serenity.EntityDialog<ProveedoresValoracionesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: ProveedoresValoracionesForm;
    }
}
declare namespace Barrios.Contenidos {
    class ProveedoresValoracionesGrid extends Serenity.EntityGrid<ProveedoresValoracionesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProveedoresValoracionesDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Barrios.Default {
    class ReservasDialog extends Serenity.EntityDialog<ReservasRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ReservasForm;
    }
}
declare namespace Barrios.Default {
    class ReservasGrid extends Serenity.EntityGrid<ReservasRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ReservasDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Barrios.Default {
    class ReservasRecursosDialog extends Serenity.EntityDialog<ReservasRecursosRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ReservasRecursosForm;
    }
}
declare namespace Barrios.Default {
    class ReservasRecursosGrid extends Serenity.EntityGrid<ReservasRecursosRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ReservasRecursosDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Barrios.Default {
    class ReservasTiposDialog extends Serenity.EntityDialog<ReservasTiposRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ReservasTiposForm;
    }
}
declare namespace Barrios.Default {
    class ReservasTiposGrid extends Serenity.EntityGrid<ReservasTiposRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ReservasTiposDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Barrios.Default {
    class ReservasTurnosEspecialesDialog extends Serenity.EntityDialog<ReservasTurnosEspecialesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ReservasTurnosEspecialesForm;
    }
}
declare namespace Barrios.Default {
    class ReservasTurnosEspecialesGrid extends Serenity.EntityGrid<ReservasTurnosEspecialesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ReservasTurnosEspecialesDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Barrios.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace Barrios.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace Barrios.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace Barrios.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
