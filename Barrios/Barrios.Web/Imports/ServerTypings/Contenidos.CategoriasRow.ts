namespace Barrios.Contenidos {
    export interface CategoriasRow {
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

    export namespace CategoriasRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Nombre';
        export const localTextPrefix = 'Contenidos.Categorias';
        export const lookupKey = 'Contenidos.Categorias';

        export function getLookup(): Q.Lookup<CategoriasRow> {
            return Q.getLookup<CategoriasRow>('Contenidos.Categorias');
        }

        export declare const enum Fields {
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

