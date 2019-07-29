namespace Barrios.Contenidos {
    export interface ProveedoresRow {
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

    export namespace ProveedoresRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Nombre';
        export const localTextPrefix = 'Contenidos.Proveedores';

        export declare const enum Fields {
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

