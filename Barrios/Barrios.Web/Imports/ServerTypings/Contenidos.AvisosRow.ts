namespace Barrios.Contenidos {
    export interface AvisosRow {
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

    export namespace AvisosRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Nombre';
        export const localTextPrefix = 'Contenidos.Avisos';

        export declare const enum Fields {
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

