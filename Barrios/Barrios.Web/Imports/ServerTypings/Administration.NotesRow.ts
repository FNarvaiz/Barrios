namespace Barrios.Administration {
    export interface NotesRow {
        Id?: number;
        Message?: string;
        DestinationUserId?: number;
        CreateUserId?: number;
        CreateDate?: string;
        UpdatetionUserId?: number;
        UpdateDate?: string;
        ShowUser?: boolean;
        DestinationUserUsername?: string;
        CreateUserUsername?: string;
        UpdatetionUserUsername?: string;
    }

    export namespace NotesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Message';
        export const localTextPrefix = 'Administration.Notes';

        export declare const enum Fields {
            Id = "Id",
            Message = "Message",
            DestinationUserId = "DestinationUserId",
            CreateUserId = "CreateUserId",
            CreateDate = "CreateDate",
            UpdatetionUserId = "UpdatetionUserId",
            UpdateDate = "UpdateDate",
            ShowUser = "ShowUser",
            DestinationUserUsername = "DestinationUserUsername",
            CreateUserUsername = "CreateUserUsername",
            UpdatetionUserUsername = "UpdatetionUserUsername"
        }
    }
}

