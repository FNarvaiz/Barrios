namespace Barrios.Contenidos {
    export interface EncuestasRow {
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
        Liked?: number;
    }

    export namespace EncuestasRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Nombre';
        export const localTextPrefix = 'Contenidos.Encuestas';

        export declare const enum Fields {
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
            Liked = "Liked"
        }
    }
}

