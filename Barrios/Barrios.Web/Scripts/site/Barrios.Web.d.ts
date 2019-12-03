/// <reference types="jquery" />
/// <reference types="jqueryui" />
declare namespace Barrios.Administration {
}
declare namespace Barrios.Administration {
    interface BarriosForm {
        Nombre: Serenity.StringEditor;
        ShortDisplayName: Serenity.StringEditor;
        LargeDisplayName: Serenity.StringEditor;
        Mail: Serenity.EmailEditor;
        PasswordMail: Serenity.StringEditor;
        Logo: Serenity.ImageUploadEditor;
        Url: Serenity.StringEditor;
        TelefonOs: Serenity.StringEditor;
        CantDiasReservables: Serenity.IntegerEditor;
        Direccion: Serenity.StringEditor;
        UseSubBarrios: Serenity.BooleanEditor;
        Emails: Serenity.TextAreaEditor;
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
        Mail?: string;
        LargeDisplayName?: string;
        ShortDisplayName?: string;
        Logo?: string;
        Emails?: string;
        Url?: string;
        TelefonOs?: string;
        Direccion?: string;
        PasswordMail?: string;
        CantDiasReservables?: number;
        IsActive?: boolean;
        UseSubBarrios?: boolean;
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
            Mail = "Mail",
            LargeDisplayName = "LargeDisplayName",
            ShortDisplayName = "ShortDisplayName",
            Logo = "Logo",
            Emails = "Emails",
            Url = "Url",
            TelefonOs = "TelefonOs",
            Direccion = "Direccion",
            PasswordMail = "PasswordMail",
            CantDiasReservables = "CantDiasReservables",
            IsActive = "IsActive",
            UseSubBarrios = "UseSubBarrios"
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
        Unit: Serenity.IntegerEditor;
        subBarrioId: Serenity.LookupEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Email_Others: Serenity.TextAreaEditor;
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
        BarrioId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        Email_Others?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        subBarrioId?: number;
        Password?: string;
        PasswordConfirm?: string;
        ClientIdList?: number[];
        Unit?: string;
        HavePermisions?: number;
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
            BarrioId = "BarrioId",
            Username = "Username",
            Source = "Source",
            PasswordHash = "PasswordHash",
            PasswordSalt = "PasswordSalt",
            DisplayName = "DisplayName",
            Email = "Email",
            Email_Others = "Email_Others",
            UserImage = "UserImage",
            LastDirectoryUpdate = "LastDirectoryUpdate",
            IsActive = "IsActive",
            subBarrioId = "subBarrioId",
            Password = "Password",
            PasswordConfirm = "PasswordConfirm",
            ClientIdList = "ClientIdList",
            Unit = "Unit",
            HavePermisions = "HavePermisions",
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
        IdCategoria: Serenity.LookupEditor;
        Caducidad: Serenity.DateEditor;
        Vigente: Serenity.BooleanEditor;
        Descripcion: Serenity.StringEditor;
        Imagen: Serenity.ImageUploadEditor;
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
        BarrioId?: number;
        CategoryName?: string;
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
            BarrioId = "BarrioId",
            CategoryName = "CategoryName",
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
        Mails: Serenity.StringEditor;
        MembersList: ComisionesIntegrantesGrid;
        Habilitada: Serenity.BooleanEditor;
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
        Nombre: Serenity.StringEditor;
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
        UserInsertUsername?: string;
        UserUpdateUsername?: string;
    }
    namespace ComisionesIntegrantesRow {
        const idProperty = "Id";
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
            UserInsertUsername = "UserInsertUsername",
            UserUpdateUsername = "UserUpdateUsername"
        }
    }
}
declare namespace Barrios.Contenidos {
    interface ComisionesRow {
        Id?: number;
        Nombre?: string;
        Habilitada?: boolean;
        Mails?: string;
        UserInsert?: number;
        DateInsert?: string;
        UserUpdate?: number;
        DateUpdate?: string;
        BarrioId?: number;
        UserInsertUsername?: string;
        UserUpdateUsername?: string;
        BarrioNombre?: string;
        MembersList?: ComisionesIntegrantesRow[];
    }
    namespace ComisionesRow {
        const idProperty = "Id";
        const nameProperty = "Nombre";
        const localTextPrefix = "Contenidos.Comisiones";
        const enum Fields {
            Id = "Id",
            Nombre = "Nombre",
            Habilitada = "Habilitada",
            Mails = "Mails",
            UserInsert = "UserInsert",
            DateInsert = "DateInsert",
            UserUpdate = "UserUpdate",
            DateUpdate = "DateUpdate",
            BarrioId = "BarrioId",
            UserInsertUsername = "UserInsertUsername",
            UserUpdateUsername = "UserUpdateUsername",
            BarrioNombre = "BarrioNombre",
            MembersList = "MembersList"
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
        function SendMail(request: Modules.Common.Utils.EmailRequest, onSuccess?: (response: System.String) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListView(request: Serenity.ServiceRequest, onSuccess?: (response: System.Collections.Generic.List<ComisionesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Contenidos/Comisiones/Create",
            Update = "Contenidos/Comisiones/Update",
            Delete = "Contenidos/Comisiones/Delete",
            Retrieve = "Contenidos/Comisiones/Retrieve",
            List = "Contenidos/Comisiones/List",
            SendMail = "Contenidos/Comisiones/SendMail",
            ListView = "Contenidos/Comisiones/ListView"
        }
    }
}
declare namespace Barrios.Contenidos {
}
declare namespace Barrios.Contenidos {
    interface EncuestasForm {
        Nombre: Serenity.StringEditor;
        FechaAlta: Serenity.DateEditor;
        FechaBaja: Serenity.DateEditor;
        IdCategoria: Serenity.LookupEditor;
        Descripcion: Serenity.TextAreaEditor;
        Vigente: Serenity.BooleanEditor;
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
        CategoryName?: string;
        BarrioId?: number;
        UserInsertUsername?: string;
        UserUpdateUsername?: string;
        Rating?: number;
        RatingCount?: number;
        ValoracionId?: number;
        Liked?: number;
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
            CategoryName = "CategoryName",
            BarrioId = "BarrioId",
            UserInsertUsername = "UserInsertUsername",
            UserUpdateUsername = "UserUpdateUsername",
            Rating = "Rating",
            RatingCount = "RatingCount",
            ValoracionId = "ValoracionId",
            Liked = "Liked"
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
        function ListRatings(request: Serenity.ServiceRequest, onSuccess?: (response: System.Collections.Generic.List<EncuestasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Rating(request: Modules.Common.Utils.RatingRequest, onSuccess?: (response: System.String) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function SeeMore(request: Serenity.RetrieveRequest, onSuccess?: (response: System.String) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Contenidos/Encuestas/Create",
            Update = "Contenidos/Encuestas/Update",
            Delete = "Contenidos/Encuestas/Delete",
            Retrieve = "Contenidos/Encuestas/Retrieve",
            List = "Contenidos/Encuestas/List",
            ListRatings = "Contenidos/Encuestas/ListRatings",
            Rating = "Contenidos/Encuestas/Rating",
            SeeMore = "Contenidos/Encuestas/SeeMore"
        }
    }
}
declare namespace Barrios.Contenidos {
}
declare namespace Barrios.Contenidos {
    interface EncuestasValoracionesForm {
        IdEncuesta: Serenity.IntegerEditor;
        Valoracion: Serenity.LookupEditor;
        Comentario: Serenity.TextAreaEditor;
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
        const nameProperty = "IdEncuestaNombre";
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
        IdCategoria: Serenity.LookupEditor;
        PeriodoFecha: Serenity.DateEditor;
        ContenidoTexto: Serenity.StringEditor;
        ArchivoFilename: Serenity.ImageUploadEditor;
        Aprobado: Serenity.BooleanEditor;
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
        Aprobado?: boolean;
        PeriodoFecha?: string;
        ContenidoTexto?: string;
        Userid?: number;
        IdCategoria?: number;
        BarrioId?: number;
        CategoryName?: string;
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
            Aprobado = "Aprobado",
            PeriodoFecha = "PeriodoFecha",
            ContenidoTexto = "ContenidoTexto",
            Userid = "Userid",
            IdCategoria = "IdCategoria",
            BarrioId = "BarrioId",
            CategoryName = "CategoryName",
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
        function SendMails(request: Modules.Common.Utils.IdRequest, onSuccess?: (response: System.String) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function SendMailsForSubNeigborhoob(request: MailsRequest, onSuccess?: (response: System.String) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Contenidos/LineaTiempo/Create",
            Update = "Contenidos/LineaTiempo/Update",
            Delete = "Contenidos/LineaTiempo/Delete",
            Retrieve = "Contenidos/LineaTiempo/Retrieve",
            List = "Contenidos/LineaTiempo/List",
            SendMails = "Contenidos/LineaTiempo/SendMails",
            SendMailsForSubNeigborhoob = "Contenidos/LineaTiempo/SendMailsForSubNeigborhoob"
        }
    }
}
declare namespace Barrios.Contenidos {
    interface MailsRequest extends Serenity.ServiceRequest {
        LineTimeId?: number;
        SubNeigborhoob?: string[];
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
        Domicilio: Serenity.StringEditor;
        Telefonos: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        Notas: Serenity.StringEditor;
        Vigente: Serenity.BooleanEditor;
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
        CategoryName?: string;
        BarrioId?: number;
        Rating?: number;
        RatingCount?: number;
        Liked?: number;
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
            CategoryName = "CategoryName",
            BarrioId = "BarrioId",
            Rating = "Rating",
            RatingCount = "RatingCount",
            Liked = "Liked",
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
        function ListRatings(request: Serenity.ServiceRequest, onSuccess?: (response: System.Collections.Generic.List<ProveedoresRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Rating(request: Modules.Common.Utils.RatingRequest, onSuccess?: (response: System.String) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Contenidos/Proveedores/Create",
            Update = "Contenidos/Proveedores/Update",
            Delete = "Contenidos/Proveedores/Delete",
            Retrieve = "Contenidos/Proveedores/Retrieve",
            List = "Contenidos/Proveedores/List",
            ListRatings = "Contenidos/Proveedores/ListRatings",
            Rating = "Contenidos/Proveedores/Rating"
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
    interface BookingListRequest extends Serenity.ServiceRequest {
        ID?: number;
        Resolution?: number;
    }
}
declare namespace Barrios.Default {
    interface BookingTakeRequest extends Serenity.ServiceRequest {
        resourceId?: number;
        resourceName?: string;
        bookingDate?: string;
        turnStart?: number;
        turnName?: string;
        turnDuration?: number;
        turnType?: number;
        extraNeighborUnit?: number;
        comment?: string;
    }
}
declare namespace Barrios.Default {
    interface EspecialTurnForm {
        Fecha: Serenity.DateEditor;
        IdRecurso: Serenity.LookupEditor;
        IdTurnosEspeciales: Serenity.LookupEditor;
        Inicio: Serenity.LookupEditor;
        Duracion: Serenity.IntegerEditor;
        Observaciones: Serenity.TextAreaEditor;
    }
    class EspecialTurnForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Barrios.Default {
}
declare namespace Barrios.Default {
    interface HolidaysForm {
        Reason: Serenity.StringEditor;
        Type: Serenity.RadioButtonEditor;
        Day: Serenity.DateEditor;
    }
    class HolidaysForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Barrios.Default {
    interface HolidaysRow {
        Id?: number;
        Reason?: string;
        Type?: TypeHolidays;
        Day?: string;
        ApiId?: string;
    }
    namespace HolidaysRow {
        const idProperty = "Id";
        const nameProperty = "Reason";
        const localTextPrefix = "Default.Holidays";
        const enum Fields {
            Id = "Id",
            Reason = "Reason",
            Type = "Type",
            Day = "Day",
            ApiId = "ApiId"
        }
    }
}
declare namespace Barrios.Default {
    namespace HolidaysService {
        const baseUrl = "Default/Holidays";
        function Create(request: Serenity.SaveRequest<HolidaysRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<HolidaysRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<HolidaysRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<HolidaysRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function UpdateFromAPI(request: IdRequest, onSuccess?: (response: System.String) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Holidays/Create",
            Update = "Default/Holidays/Update",
            Delete = "Default/Holidays/Delete",
            Retrieve = "Default/Holidays/Retrieve",
            List = "Default/Holidays/List",
            UpdateFromAPI = "Default/Holidays/UpdateFromAPI"
        }
    }
}
declare namespace Barrios.Default {
    interface IdRequest extends Serenity.ServiceRequest {
        ID?: number;
    }
}
declare namespace Barrios.Default {
}
declare namespace Barrios.Default {
    interface RecursosBarriosRow {
        RecursoId?: number;
        BarrioId?: number;
        BarrioNombre?: string;
    }
    namespace RecursosBarriosRow {
        const idProperty = "RecursoId";
        const localTextPrefix = "Default.RecursosBarrios";
        const enum Fields {
            RecursoId = "RecursoId",
            BarrioId = "BarrioId",
            BarrioNombre = "BarrioNombre"
        }
    }
}
declare namespace Barrios.Default {
}
declare namespace Barrios.Default {
    interface ReservasForm {
        Fecha: Serenity.DateEditor;
        IdVecino: Serenity.LookupEditor;
        IdRecurso: Serenity.LookupEditor;
        IdTipo: Serenity.LookupEditor;
        IdTurnosEspeciales: Serenity.LookupEditor;
        Inicio: Serenity.LookupEditor;
        Duracion: Serenity.IntegerEditor;
        Turno: Serenity.StringEditor;
        Observaciones: Serenity.TextAreaEditor;
        IdVecino2: Serenity.LookupEditor;
    }
    class ReservasForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Barrios.Default {
}
declare namespace Barrios.Default {
    interface ReservasRecursosForm {
        Nombre: Serenity.StringEditor;
        Tipo: Serenity.LookupEditor;
        Apertura: Serenity.LookupEditor;
        Cierre: Serenity.LookupEditor;
        Resolucion: Serenity.LookupEditor;
        Emails: Serenity.TextAreaEditor;
        MailBody: Serenity.TextAreaEditor;
        Description: Serenity.TextAreaEditor;
        TypeList: ReservasTiposGrid;
        SpecialTurnList: ReservasTurnosEspecialesGrid;
        NeigborhoodList: Serenity.CheckLookupEditor;
        Regulation: Serenity.ImageUploadEditor;
    }
    class ReservasRecursosForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Barrios.Default {
    interface ReservasRecursosRow {
        Id?: number;
        Nombre?: string;
        Regulation?: string;
        Emails?: string;
        MailBody?: string;
        Description?: string;
        Apertura?: number;
        Cierre?: number;
        Tipo?: number;
        Resolucion?: number;
        ClientIdList?: number[];
        NeigborhoodList?: number[];
        BarrioId?: number;
        TypeList?: ReservasTiposRow[];
        SpecialTurnList?: ReservasTurnosEspecialesRow[];
    }
    namespace ReservasRecursosRow {
        const idProperty = "Id";
        const nameProperty = "Nombre";
        const localTextPrefix = "Default.ReservasRecursos";
        const enum Fields {
            Id = "Id",
            Nombre = "Nombre",
            Regulation = "Regulation",
            Emails = "Emails",
            MailBody = "MailBody",
            Description = "Description",
            Apertura = "Apertura",
            Cierre = "Cierre",
            Tipo = "Tipo",
            Resolucion = "Resolucion",
            ClientIdList = "ClientIdList",
            NeigborhoodList = "NeigborhoodList",
            BarrioId = "BarrioId",
            TypeList = "TypeList",
            SpecialTurnList = "SpecialTurnList"
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
        function ListOfAllowedResources(request: Serenity.ServiceRequest, onSuccess?: (response: System.Collections.Generic.List<ReservasRecursosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/ReservasRecursos/Create",
            Update = "Default/ReservasRecursos/Update",
            Delete = "Default/ReservasRecursos/Delete",
            Retrieve = "Default/ReservasRecursos/Retrieve",
            List = "Default/ReservasRecursos/List",
            ListOfAllowedResources = "Default/ReservasRecursos/ListOfAllowedResources"
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
        BarrioId?: number;
        IdTurnosEspeciales?: number;
        Hora?: string;
        Turno?: string;
        Estado?: string;
        Finalizado?: boolean;
        Reservable?: boolean;
        Tipo?: string;
        TipoReservaHecha?: string;
        Estado_Turno?: string;
        Valido?: boolean;
        Required_Vecino?: boolean;
        IdVecinoUnidadExtra?: string;
        Dias?: string;
        IdRecursoNombre?: string;
        IdVecinoUsername?: string;
        IdVecinoUnidad?: string;
        IdVecinoUsername2?: string;
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
            BarrioId = "BarrioId",
            IdTurnosEspeciales = "IdTurnosEspeciales",
            Hora = "Hora",
            Turno = "Turno",
            Estado = "Estado",
            Finalizado = "Finalizado",
            Reservable = "Reservable",
            Tipo = "Tipo",
            TipoReservaHecha = "TipoReservaHecha",
            Estado_Turno = "Estado_Turno",
            Valido = "Valido",
            Required_Vecino = "Required_Vecino",
            IdVecinoUnidadExtra = "IdVecinoUnidadExtra",
            Dias = "Dias",
            IdRecursoNombre = "IdRecursoNombre",
            IdVecinoUsername = "IdVecinoUsername",
            IdVecinoUnidad = "IdVecinoUnidad",
            IdVecinoUsername2 = "IdVecinoUsername2"
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
        function renderBookingStatus(request: BookingListRequest, onSuccess?: (response: System.String) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function bookingsTake(request: BookingTakeRequest, onSuccess?: (response: System.String) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function SendRequest(request: BookingTakeRequest, onSuccess?: (response: System.String) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function bookingCancel(request: IdRequest, onSuccess?: (response: System.String) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Reservas/Create",
            Update = "Default/Reservas/Update",
            Delete = "Default/Reservas/Delete",
            Retrieve = "Default/Reservas/Retrieve",
            List = "Default/Reservas/List",
            renderBookingStatus = "Default/Reservas/renderBookingStatus",
            bookingsTake = "Default/Reservas/bookingsTake",
            SendRequest = "Default/Reservas/SendRequest",
            bookingCancel = "Default/Reservas/bookingCancel"
        }
    }
}
declare namespace Barrios.Default {
}
declare namespace Barrios.Default {
    interface ReservasTiposForm {
        Nombre: Serenity.StringEditor;
        Duracion: Serenity.TimeEditor;
        RequiereVecino2: Serenity.BooleanEditor;
        Vigente: Serenity.BooleanEditor;
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
        const idProperty = "Id";
        const nameProperty = "Nombre";
        const localTextPrefix = "Default.ReservasTipos";
        const lookupKey = "Reservas.ReservasTipos";
        function getLookup(): Q.Lookup<ReservasTiposRow>;
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
}
declare namespace Barrios.Default {
    interface ReservasTurnosEspecialesForm {
        Nombre: Serenity.StringEditor;
        Inicio: Serenity.LookupEditor;
        Duracion: Serenity.TimeEditor;
        Dias: Serenity.StringEditor;
        Lunes: Serenity.BooleanEditor;
        Martes: Serenity.BooleanEditor;
        Miercoles: Serenity.BooleanEditor;
        Jueves: Serenity.BooleanEditor;
        Viernes: Serenity.BooleanEditor;
        Sabado: Serenity.BooleanEditor;
        Domingo: Serenity.BooleanEditor;
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
        Lunes?: boolean;
        Martes?: boolean;
        Miercoles?: boolean;
        Jueves?: boolean;
        Viernes?: boolean;
        Sabado?: boolean;
        Domingo?: boolean;
    }
    namespace ReservasTurnosEspecialesRow {
        const idProperty = "Id";
        const nameProperty = "Nombre";
        const localTextPrefix = "Default.ReservasTurnosEspeciales";
        const lookupKey = "Reservas.ReservasTurnosEspeciales";
        function getLookup(): Q.Lookup<ReservasTurnosEspecialesRow>;
        const enum Fields {
            IdRecurso = "IdRecurso",
            Id = "Id",
            Inicio = "Inicio",
            Duracion = "Duracion",
            Nombre = "Nombre",
            Dias = "Dias",
            Lunes = "Lunes",
            Martes = "Martes",
            Miercoles = "Miercoles",
            Jueves = "Jueves",
            Viernes = "Viernes",
            Sabado = "Sabado",
            Domingo = "Domingo"
        }
    }
}
declare namespace Barrios.Default {
    class SubbarriosForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SubbarriosForm {
        Nombre: Serenity.StringEditor;
        BarrioId: Serenity.IntegerEditor;
    }
}
declare namespace Barrios.Default {
    interface SubbarriosRecursosRow {
        SubBarrioId?: number;
        RecursoId?: number;
        SubBarrioNombre?: string;
    }
    namespace SubbarriosRecursosRow {
        const idProperty = "SubBarrioId";
        const localTextPrefix = "Default.SubbarriosRecursos";
        const enum Fields {
            SubBarrioId = "SubBarrioId",
            RecursoId = "RecursoId",
            SubBarrioNombre = "SubBarrioNombre"
        }
    }
}
declare namespace Barrios.Default {
    interface SubbarriosRow {
        Id?: number;
        Nombre?: string;
        BarrioId?: number;
        BarrioNombre?: string;
        BarrioLogo?: string;
        BarrioUrl?: string;
        BarrioTelefonOs?: string;
        BarrioDireccion?: string;
        BarrioIsActive?: boolean;
        BarrioLargeDisplayName?: string;
        BarrioShortDisplayName?: string;
        BarrioMail?: string;
        BarrioPasswordMail?: string;
        BarrioCantDiasReservables?: number;
    }
    namespace SubbarriosRow {
        const idProperty = "Id";
        const nameProperty = "Nombre";
        const localTextPrefix = "Default.Subbarrios";
        namespace Fields {
            const Id: any;
            const Nombre: any;
            const BarrioId: any;
            const BarrioNombre: any;
            const BarrioLogo: any;
            const BarrioUrl: any;
            const BarrioTelefonOs: any;
            const BarrioDireccion: any;
            const BarrioIsActive: any;
            const BarrioLargeDisplayName: any;
            const BarrioShortDisplayName: any;
            const BarrioMail: any;
            const BarrioPasswordMail: any;
            const BarrioCantDiasReservables: any;
        }
    }
}
declare namespace Barrios.Default {
    interface TwoNeighborsForm {
        IdVecino2: Serenity.LookupEditor;
    }
    class TwoNeighborsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Barrios.Default {
    enum TypeHolidays {
        inamovible = 0,
        puente = 1,
        trasladable = 2
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
        Unit: Serenity.StringEditor;
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
        Unit?: string;
    }
}
declare namespace Barrios.Modules.Common.Utils {
    interface EmailRequest extends Serenity.ServiceRequest {
        ID?: string;
        Mails?: string;
        Message?: string;
        Subject?: string;
        IsHTML?: boolean;
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
declare namespace Barrios.Modules.Common.Utils {
    interface RatingRequest extends Serenity.ServiceRequest {
        ID?: number;
        Rating?: number;
        Note?: string;
    }
}
declare namespace Barrios.Perfil {
}
declare namespace Barrios.Perfil {
    interface VecinosActividadesForm {
        Fecha: Serenity.DateEditor;
        Actividad: Serenity.StringEditor;
        ActividadDetalles: Serenity.StringEditor;
    }
    class VecinosActividadesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Barrios.Perfil {
    interface VecinosActividadesRow {
        Id?: number;
        Fecha?: string;
        Actividad?: string;
        ActividadDetalles?: string;
        Ip?: string;
        Userid?: number;
    }
    namespace VecinosActividadesRow {
        const idProperty = "Id";
        const nameProperty = "Actividad";
        const localTextPrefix = "Perfil.VecinosActividades";
        const enum Fields {
            Id = "Id",
            Fecha = "Fecha",
            Actividad = "Actividad",
            ActividadDetalles = "ActividadDetalles",
            Ip = "Ip",
            Userid = "Userid"
        }
    }
}
declare namespace Barrios.Perfil {
    namespace VecinosActividadesService {
        const baseUrl = "Perfil/VecinosActividades";
        function Create(request: Serenity.SaveRequest<VecinosActividadesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<VecinosActividadesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VecinosActividadesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VecinosActividadesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Perfil/VecinosActividades/Create",
            Update = "Perfil/VecinosActividades/Update",
            Delete = "Perfil/VecinosActividades/Delete",
            Retrieve = "Perfil/VecinosActividades/Retrieve",
            List = "Perfil/VecinosActividades/List"
        }
    }
}
declare namespace Barrios.Perfil {
}
declare namespace Barrios.Perfil {
}
declare namespace Barrios.Perfil {
    interface VecinosEventosConcurrentesForm {
        Nombre: Serenity.StringEditor;
    }
    class VecinosEventosConcurrentesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Barrios.Perfil {
    interface VecinosEventosConcurrentesRow {
        Id?: number;
        IdEvento?: number;
        Nombre?: string;
        Userid?: number;
    }
    namespace VecinosEventosConcurrentesRow {
        const idProperty = "Id";
        const nameProperty = "Nombre";
        const localTextPrefix = "Perfil.VecinosEventosConcurrentes";
        const enum Fields {
            Id = "Id",
            IdEvento = "IdEvento",
            Nombre = "Nombre",
            Userid = "Userid"
        }
    }
}
declare namespace Barrios.Perfil {
    namespace VecinosEventosConcurrentesService {
        const baseUrl = "Perfil/VecinosEventosConcurrentes";
        function Create(request: Serenity.SaveRequest<VecinosEventosConcurrentesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<VecinosEventosConcurrentesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VecinosEventosConcurrentesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VecinosEventosConcurrentesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Perfil/VecinosEventosConcurrentes/Create",
            Update = "Perfil/VecinosEventosConcurrentes/Update",
            Delete = "Perfil/VecinosEventosConcurrentes/Delete",
            Retrieve = "Perfil/VecinosEventosConcurrentes/Retrieve",
            List = "Perfil/VecinosEventosConcurrentes/List"
        }
    }
}
declare namespace Barrios.Perfil {
    interface VecinosEventosForm {
        Fecha: Serenity.DateTimeEditor;
        Nombre: Serenity.StringEditor;
        Lugar: Serenity.StringEditor;
        ConcurrentesList: VecinosEventosConcurrentesGrid;
    }
    class VecinosEventosForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Barrios.Perfil {
    interface VecinosEventosRow {
        Id?: number;
        Nombre?: string;
        Fecha?: string;
        Lugar?: string;
        Userid?: number;
        BarrioId?: number;
        UseridUsername?: string;
        ConcurrentesList?: VecinosEventosConcurrentesRow[];
    }
    namespace VecinosEventosRow {
        const idProperty = "Id";
        const nameProperty = "Nombre";
        const localTextPrefix = "Perfil.VecinosEventos";
        const enum Fields {
            Id = "Id",
            Nombre = "Nombre",
            Fecha = "Fecha",
            Lugar = "Lugar",
            Userid = "Userid",
            BarrioId = "BarrioId",
            UseridUsername = "UseridUsername",
            ConcurrentesList = "ConcurrentesList"
        }
    }
}
declare namespace Barrios.Perfil {
    namespace VecinosEventosService {
        const baseUrl = "Perfil/VecinosEventos";
        function Create(request: Serenity.SaveRequest<VecinosEventosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<VecinosEventosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VecinosEventosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VecinosEventosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Perfil/VecinosEventos/Create",
            Update = "Perfil/VecinosEventos/Update",
            Delete = "Perfil/VecinosEventos/Delete",
            Retrieve = "Perfil/VecinosEventos/Retrieve",
            List = "Perfil/VecinosEventos/List"
        }
    }
}
declare namespace Barrios.Perfil {
}
declare namespace Barrios.Perfil {
    interface VecinosMascotasForm {
        Nombre: Serenity.StringEditor;
        IdTipo: Serenity.LookupEditor;
        Raza: Serenity.StringEditor;
        Foto: Serenity.ImageUploadEditor;
        Vacunas: Serenity.ImageUploadEditor;
    }
    class VecinosMascotasForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Barrios.Perfil {
    interface VecinosMascotasRow {
        Id?: number;
        Nombre?: string;
        IdTipo?: number;
        Raza?: string;
        Foto?: string;
        Userid?: number;
        BarrioId?: number;
        Vacunas?: string;
        UseridUsername?: string;
        UseridUnit?: string;
    }
    namespace VecinosMascotasRow {
        const idProperty = "Id";
        const nameProperty = "Nombre";
        const localTextPrefix = "Perfil.VecinosMascotas";
        const enum Fields {
            Id = "Id",
            Nombre = "Nombre",
            IdTipo = "IdTipo",
            Raza = "Raza",
            Foto = "Foto",
            Userid = "Userid",
            BarrioId = "BarrioId",
            Vacunas = "Vacunas",
            UseridUsername = "UseridUsername",
            UseridUnit = "UseridUnit"
        }
    }
}
declare namespace Barrios.Perfil {
    namespace VecinosMascotasService {
        const baseUrl = "Perfil/VecinosMascotas";
        function Create(request: Serenity.SaveRequest<VecinosMascotasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<VecinosMascotasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VecinosMascotasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VecinosMascotasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Perfil/VecinosMascotas/Create",
            Update = "Perfil/VecinosMascotas/Update",
            Delete = "Perfil/VecinosMascotas/Delete",
            Retrieve = "Perfil/VecinosMascotas/Retrieve",
            List = "Perfil/VecinosMascotas/List"
        }
    }
}
declare namespace Barrios.Perfil {
}
declare namespace Barrios.Perfil {
    interface VecinosVisitantesFrecuentesForm {
        Nombre: Serenity.StringEditor;
        Dni: Serenity.StringEditor;
        Vehiculo: Serenity.StringEditor;
        Tipo: Serenity.StringEditor;
    }
    class VecinosVisitantesFrecuentesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Barrios.Perfil {
    interface VecinosVisitantesFrecuentesRow {
        Id?: number;
        Nombre?: string;
        Dni?: string;
        Vehiculo?: string;
        Tipo?: string;
        Userid?: number;
        BarrioId?: number;
        UseridUsername?: string;
    }
    namespace VecinosVisitantesFrecuentesRow {
        const idProperty = "Id";
        const nameProperty = "Nombre";
        const localTextPrefix = "Perfil.VecinosVisitantesFrecuentes";
        const enum Fields {
            Id = "Id",
            Nombre = "Nombre",
            Dni = "Dni",
            Vehiculo = "Vehiculo",
            Tipo = "Tipo",
            Userid = "Userid",
            BarrioId = "BarrioId",
            UseridUsername = "UseridUsername"
        }
    }
}
declare namespace Barrios.Perfil {
    namespace VecinosVisitantesFrecuentesService {
        const baseUrl = "Perfil/VecinosVisitantesFrecuentes";
        function Create(request: Serenity.SaveRequest<VecinosVisitantesFrecuentesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<VecinosVisitantesFrecuentesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VecinosVisitantesFrecuentesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VecinosVisitantesFrecuentesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Perfil/VecinosVisitantesFrecuentes/Create",
            Update = "Perfil/VecinosVisitantesFrecuentes/Update",
            Delete = "Perfil/VecinosVisitantesFrecuentes/Delete",
            Retrieve = "Perfil/VecinosVisitantesFrecuentes/Retrieve",
            List = "Perfil/VecinosVisitantesFrecuentes/List"
        }
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
declare namespace Barrios.Settings {
}
declare namespace Barrios.Settings {
    interface SubbarriosForm {
        Nombre: Serenity.StringEditor;
    }
    class SubbarriosForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Barrios.Settings {
    interface SubbarriosRow {
        Id?: number;
        Nombre?: string;
        BarrioId?: number;
    }
    namespace SubbarriosRow {
        const idProperty = "Id";
        const nameProperty = "Nombre";
        const localTextPrefix = "Settings.Subbarrios";
        const lookupKey = "Settings.Subbarrios";
        function getLookup(): Q.Lookup<SubbarriosRow>;
        const enum Fields {
            Id = "Id",
            Nombre = "Nombre",
            BarrioId = "BarrioId"
        }
    }
}
declare namespace Barrios.Settings {
    namespace SubbarriosService {
        const baseUrl = "Settings/Subbarrios";
        function Create(request: Serenity.SaveRequest<SubbarriosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SubbarriosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SubbarriosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SubbarriosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Settings/Subbarrios/Create",
            Update = "Settings/Subbarrios/Update",
            Delete = "Settings/Subbarrios/Delete",
            Retrieve = "Settings/Subbarrios/Retrieve",
            List = "Settings/Subbarrios/List"
        }
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
    import fld = UserRow.Fields;
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private neighbordhoobId;
        constructor(container: JQuery, neighbordhoobId: any);
        protected getDefaultSortBy(): fld[];
        protected getItemCssClass(item: UserRow, index: number): string;
        protected onViewSubmit(): boolean;
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
declare namespace Barrios.Common {
    class BulkactionInAnyGrid extends Common.BulkServiceAction {
        TableName: string;
        IsShared: boolean;
        protected getParallelRequests(): number;
        protected getBatchSize(): number;
    }
}
declare namespace Barrios {
    class DetailGridBase<TItem> extends Serenity.EntityGrid<TItem, EntityGridOptions> {
        private _masterItemID;
        private _masterStringID;
        protected onMasterIdChanged(masterItemID: number): void;
        protected onMasterStringIdChanged(masterStringID: string): void;
        masterItemID: number;
        masterStringID: string;
        protected getMasterFieldName(): string;
        protected getGridCanLoad(): boolean;
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
    abstract class MasterGridBase<TItem> extends Serenity.EntityGrid<TItem, EntityGridOptions> {
        protected grid: Slick.Grid;
        protected rowSelection: Serenity.GridRowSelectionMixin;
        onItemClicked: (item: TItem) => void;
        onItemSelected: (item: TItem) => void;
        onItemsSelected: (item: TItem[]) => void;
        constructor(container: JQuery, options?: EntityGridOptions);
        private isMultiSelectEnabled;
        protected getGridIconClass(): string;
        protected createToolbarExtensions(): void;
        protected getColumns(): Slick.Column[];
        resetCheckedAndRefresh(): void;
        getSelectedKeys(): string[];
        getSelectedItems(): TItem[];
        getSelectedItem(): TItem;
        getMasterGridRowType(): TItem;
        protected getSlickOptions(): Slick.GridOptions;
        protected createSlickGrid(): Slick.Grid;
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        destroy(): void;
        protected getButtons(): Serenity.ToolButton[];
    }
    interface EntityGridOptions {
        enableRowSelection: boolean;
        selectionMode: 'none' | 'single' | 'multiple';
        bulkdeletePermissionKey: string;
        TableName: string;
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
        constructor(container: JQuery);
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
        static typeCategory: number;
        constructor(container: JQuery);
        protected beforeLoadEntity(entity: CategoriasRow): void;
        protected afterLoadEntity(): void;
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
    class ComisionesIntegrantesDialog extends Common.GridEditorDialog<ComisionesIntegrantesRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: ComisionesIntegrantesForm;
    }
}
declare namespace Barrios.Contenidos {
    class ComisionesIntegrantesGrid extends Common.GridEditorBase<ComisionesIntegrantesRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ComisionesIntegrantesDialog;
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
        constructor(container: JQuery);
    }
}
declare namespace Barrios.Contenidos {
    class EncuestasGrid extends MasterGridBase<EncuestasRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EncuestasDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, detailGrid: EncuestasValoracionesGrid);
    }
}
declare namespace Barrios.Contenidos {
    class EncuestasValoracionesDialog extends Serenity.EntityDialog<EncuestasValoracionesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        saveSucces: any;
        SetSurveyId(id: any): void;
        protected form: EncuestasValoracionesForm;
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected constructor();
        protected onSaveSuccess(response: any): void;
    }
}
declare namespace Barrios.Contenidos {
    class EncuestasValoracionesGrid extends DetailGridBase<EncuestasValoracionesRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EncuestasValoracionesDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getMasterFieldName(): string;
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
        constructor(container: JQuery);
    }
}
declare namespace Barrios.Contenidos {
    class LineaTiempoGrid extends Serenity.EntityGrid<LineaTiempoRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LineaTiempoDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        objId: any;
        protected pastTarget: any;
        protected odd: any;
        protected UseSubBarrios: any;
        constructor(container: JQuery, UseSubBarrios: boolean);
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        protected getButtons(): Serenity.ToolButton[];
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
        constructor(container: JQuery);
    }
}
declare namespace Barrios.Contenidos {
    class ProveedoresGrid extends MasterGridBase<ProveedoresRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProveedoresDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, detailGrid: EncuestasValoracionesGrid);
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
    class ProveedoresValoracionesGrid extends DetailGridBase<ProveedoresValoracionesRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProveedoresValoracionesDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getMasterFieldName(): string;
        protected createSlickGrid(): Slick.Grid;
    }
}
declare namespace Barrios.Default {
    class HolidaysDialog extends Serenity.EntityDialog<HolidaysRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: HolidaysForm;
    }
}
declare namespace Barrios.Default {
    class HolidaysGrid extends Serenity.EntityGrid<HolidaysRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof HolidaysDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
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
        constructor(container: JQuery);
        protected afterLoadEntity(): void;
        private UpdateTurnsComboBox;
    }
}
declare namespace Barrios.Default {
    class ReservasGrid extends Serenity.EntityGrid<ReservasRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ReservasDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected _CurrentRequest: any;
        constructor(container: JQuery);
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace Barrios.Default {
    class EspecialBookingDialog extends Serenity.EntityDialog<ReservasRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        send: boolean;
        turn: any;
        form: EspecialTurnForm;
        private turnList;
        constructor(container: JQuery);
        private UpdateTurnsComboBox;
        protected getToolbarButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
    }
}
declare namespace Barrios.Default {
    class TwoNeighborsDialog extends Serenity.EntityDialog<ReservasRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        vecinoId: any;
        protected form: TwoNeighborsForm;
        constructor(container: JQuery);
        protected getToolbarButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
    }
}
declare namespace Barrios.Modules.Default {
    class HorariosFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
        checkTime(i: any): any;
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
    class ReservasTiposDialog extends Common.GridEditorDialog<ReservasTiposRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: ReservasTiposForm;
    }
}
declare namespace Barrios.Default {
    class ReservasTiposGrid extends Common.GridEditorBase<ReservasTiposRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ReservasTiposDialog;
        constructor(container: JQuery);
    }
}
declare namespace Barrios.Modules.Default.ReservasTurnosEspeciales {
    /**
     * Our select editor with hardcoded values.
     *
     * When you define a new editor type, make sure you build
     * and transform templates for it to be available
     * in server side forms, e.g. [HardCodedValuesEditor]
     */
    class DayNamesEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery);
    }
}
declare namespace Barrios.Default {
    class ReservasTurnosEspecialesDialog extends Common.GridEditorDialog<ReservasTurnosEspecialesRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        private days;
        protected form: ReservasTurnosEspecialesForm;
        constructor(container: JQuery);
        protected afterLoadEntity(): void;
        protected validateBeforeSave(): boolean;
    }
}
declare namespace Barrios.Default {
    class ReservasTurnosEspecialesGrid extends Common.GridEditorBase<ReservasTurnosEspecialesRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ReservasTurnosEspecialesDialog;
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
declare namespace Barrios.Perfil {
    class VecinosActividadesDialog extends Serenity.EntityDialog<VecinosActividadesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: VecinosActividadesForm;
    }
}
declare namespace Barrios.Perfil {
    class VecinosActividadesGrid extends Serenity.EntityGrid<VecinosActividadesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof VecinosActividadesDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Barrios.Perfil {
    class VecinosEventosDialog extends Serenity.EntityDialog<VecinosEventosRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: VecinosEventosForm;
    }
}
declare namespace Barrios.Perfil {
    class VecinosEventosGrid extends Serenity.EntityGrid<VecinosEventosRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof VecinosEventosDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private userId;
        private showExpiredTerminated;
        constructor(container: JQuery, userId?: any);
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
        protected createSlickGrid(): Slick.Grid;
        protected onViewSubmit(): boolean;
    }
}
declare namespace Barrios.Perfil {
    class VecinosEventosConcurrentesDialog extends Common.GridEditorDialog<VecinosEventosConcurrentesRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: VecinosEventosConcurrentesForm;
    }
}
declare namespace Barrios.Perfil {
    class VecinosEventosConcurrentesGrid extends Common.GridEditorBase<VecinosEventosConcurrentesRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof VecinosEventosConcurrentesDialog;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace Barrios.Perfil {
    class VecinosMascotasDialog extends Serenity.EntityDialog<VecinosMascotasRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: VecinosMascotasForm;
    }
}
declare namespace Barrios.Perfil {
    class VecinosMascotasGrid extends Serenity.EntityGrid<VecinosMascotasRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof VecinosMascotasDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private userId;
        constructor(container: JQuery, userId?: any);
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace Barrios.Perfil {
    class VecinosVisitantesFrecuentesDialog extends Serenity.EntityDialog<VecinosVisitantesFrecuentesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: VecinosVisitantesFrecuentesForm;
    }
}
declare namespace Barrios.Perfil {
    class VecinosVisitantesFrecuentesGrid extends Serenity.EntityGrid<VecinosVisitantesFrecuentesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof VecinosVisitantesFrecuentesDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private userId;
        constructor(container: JQuery, userId?: any);
        protected createSlickGrid(): Slick.Grid;
        protected onViewSubmit(): boolean;
    }
}
declare namespace Barrios.Perfil {
    class FrequentVisitorsSelectDialog extends Serenity.TemplatedDialog<any> {
        GetSave(): boolean;
        GetNames(): string[];
        grid: FrequentVisitorsSelectGrid;
        protected ncpdpHdId: any;
        constructor(container: JQuery);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected onDialogOpen(): void;
        protected arrange(): void;
        protected getTemplate(): string;
    }
}
declare namespace Barrios.Perfil {
    class FrequentVisitorsSelectGrid extends Serenity.EntityGrid<VecinosVisitantesFrecuentesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof VecinosVisitantesFrecuentesDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected showExpiredTerminated: any;
        rowSelection: Serenity.GridRowSelectionMixin;
        private closeVar;
        save: boolean;
        constructor(container: JQuery, close: any);
        protected getButtons(): {
            title: string;
            cssClass: string;
            onClick: (e: any) => void;
            separator: boolean;
        }[];
        protected createToolbarExtensions(): void;
        protected getColumns(): Slick.Column[];
        protected usePager(): boolean;
    }
}
declare namespace Barrios.Settings {
    class SubbarriosDialog extends Serenity.EntityDialog<SubbarriosRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: SubbarriosForm;
    }
}
declare namespace Barrios.Settings {
    class SubbarriosGrid extends Serenity.EntityGrid<SubbarriosRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SubbarriosDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Barrios.Settings {
    class SubbarriosSelectDialog extends Serenity.TemplatedDialog<any> {
        GetSave(): boolean;
        GetKeys(): string[];
        protected getDialogOptions(): JQueryUI.DialogOptions;
        grid: SubbarriosSelectGrid;
        protected ncpdpHdId: any;
        constructor(container: JQuery);
        protected onDialogOpen(): void;
        protected arrange(): void;
        protected getTemplate(): string;
    }
}
declare namespace Barrios.Settings {
    class SubbarriosSelectGrid extends Serenity.EntityGrid<SubbarriosRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SubbarriosDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected showExpiredTerminated: any;
        rowSelection: Serenity.GridRowSelectionMixin;
        private closeVar;
        save: boolean;
        constructor(container: JQuery, close: any);
        protected getButtons(): {
            title: string;
            cssClass: string;
            onClick: (e: any) => void;
            separator: boolean;
        }[];
        protected createToolbarExtensions(): void;
        protected getColumns(): Slick.Column[];
        protected usePager(): boolean;
    }
}
declare namespace Barrios.Settings {
    class TestDialog extends Serenity.TemplatedDialog<any> {
        protected getDialogOptions(): JQueryUI.DialogOptions;
        constructor(container: JQuery);
        protected onDialogOpen(): void;
        protected arrange(): void;
        protected getTemplate(): string;
    }
}
declare namespace Barrios.Default {
    class MyBookingsGrid extends Serenity.EntityGrid<ReservasRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ReservasDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private showExpiredTerminated;
        private userId;
        refreshTable: any;
        constructor(container: JQuery, id: number);
        protected getButtons(): any[];
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
        protected getColumns(): Slick.Column[];
        protected onViewSubmit(): boolean;
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace Dashboard {
    class Booking {
        _resource: JQuery;
        _table: any;
        _grid: Barrios.Default.MyBookingsGrid;
        _itemForRefresh: JQuery;
        constructor(resource: JQuery, items: JQuery, table: JQuery, grid: Barrios.Default.MyBookingsGrid);
        selectItem(item: JQuery): void;
        refresh(): void;
        bookingsTake(element: any, resourceId: number, date: string, start: number, type: number, neighbour: boolean): void;
        sendBookingsTake(resourceId: number, date: string, start: number, type: number, neighbour: number): void;
        showEspecialTurnDialog(): void;
        SendBookinRequest(date: any, resourceId: any, resourceName: any, turnName: any, turnDuration: any, turnStart: any, turnTypeId: any, comment?: string): void;
        moveDisplay(HideColumn: any, ShowColumn: any): void;
    }
}
