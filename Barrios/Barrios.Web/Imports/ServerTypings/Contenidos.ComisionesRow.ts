namespace Barrios.Contenidos {
    export interface ComisionesRow {
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

    export namespace ComisionesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Nombre';
        export const localTextPrefix = 'Contenidos.Comisiones';

        export declare const enum Fields {
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

