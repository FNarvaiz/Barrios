namespace Barrios.Administration {
    export interface UsersBarriosRow {
        UserId?: number;
        SubBarrioId?: number;
        BarrioId?: number;
        Units?: string;
        Note?: string;
        LimitDate?: string;
        Owner?: boolean;
        UserUsername?: string;
        SubBarrioNombre?: string;
        BarrioNombre?: string;
    }

    export namespace UsersBarriosRow {
        export const idProperty = 'UserId';
        export const localTextPrefix = 'Administration.UsersBarrios';

        export declare const enum Fields {
            UserId = "UserId",
            SubBarrioId = "SubBarrioId",
            BarrioId = "BarrioId",
            Units = "Units",
            Note = "Note",
            LimitDate = "LimitDate",
            Owner = "Owner",
            UserUsername = "UserUsername",
            SubBarrioNombre = "SubBarrioNombre",
            BarrioNombre = "BarrioNombre"
        }
    }
}

