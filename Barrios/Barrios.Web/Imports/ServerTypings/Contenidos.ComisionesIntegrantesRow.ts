namespace Barrios.Contenidos {
    export interface ComisionesIntegrantesRow {
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

    export namespace ComisionesIntegrantesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Nombre';
        export const localTextPrefix = 'Contenidos.ComisionesIntegrantes';

        export declare const enum Fields {
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

