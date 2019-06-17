namespace Barrios.Contenidos {
    export interface ComisionesIntegrantesRow {
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

    export namespace ComisionesIntegrantesRow {
        export const idProperty = 'IdComision';
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
            IdComisionNombre = "IdComisionNombre",
            UserInsertUsername = "UserInsertUsername",
            UserUpdateUsername = "UserUpdateUsername"
        }
    }
}

