namespace Barrios.Contenidos {
    export interface NewsRow {
        Id?: number;
        Nombre?: string;
        Vigente?: boolean;
        Descripcion?: string;
        UserInsert?: number;
        UserUpdate?: number;
        DateUpdate?: string;
        DateInsert?: string;
        Imagen?: string;
        BarrioId?: number;
    }

    export namespace NewsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Nombre';
        export const localTextPrefix = 'Contenidos.News';

        export declare const enum Fields {
            Id = "Id",
            Nombre = "Nombre",
            Vigente = "Vigente",
            Descripcion = "Descripcion",
            UserInsert = "UserInsert",
            UserUpdate = "UserUpdate",
            DateUpdate = "DateUpdate",
            DateInsert = "DateInsert",
            Imagen = "Imagen",
            BarrioId = "BarrioId"
        }
    }
}

