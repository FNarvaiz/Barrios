namespace Barrios.Administration {
    export interface UserRow {
        UserId?: number;
        BarrioId?: number;
        SubBarrioId?: number;
        SubBarrioNombre?: string;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        Email_Others?: string;
        Phone?: string;
        LimitDate?: string;
        Owner?: boolean;
        AppHoldId?: number;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        ClientIdList?: number[];
        Units?: string;
        Note?: string;
        Roles?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace UserRow {
        export const idProperty = 'UserId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Username';
        export const localTextPrefix = 'Administration.User';
        export const lookupKey = 'Administration.User';

        export function getLookup(): Q.Lookup<UserRow> {
            return Q.getLookup<UserRow>('Administration.User');
        }

        export declare const enum Fields {
            UserId = "UserId",
            BarrioId = "BarrioId",
            SubBarrioId = "SubBarrioId",
            SubBarrioNombre = "SubBarrioNombre",
            Username = "Username",
            Source = "Source",
            PasswordHash = "PasswordHash",
            PasswordSalt = "PasswordSalt",
            DisplayName = "DisplayName",
            Email = "Email",
            Email_Others = "Email_Others",
            Phone = "Phone",
            LimitDate = "LimitDate",
            Owner = "Owner",
            AppHoldId = "AppHoldId",
            UserImage = "UserImage",
            LastDirectoryUpdate = "LastDirectoryUpdate",
            IsActive = "IsActive",
            Password = "Password",
            PasswordConfirm = "PasswordConfirm",
            ClientIdList = "ClientIdList",
            Units = "Units",
            Note = "Note",
            Roles = "Roles",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}

