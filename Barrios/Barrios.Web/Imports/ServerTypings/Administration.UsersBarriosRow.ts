namespace Barrios.Administration {
    export interface UsersBarriosRow {
        UserId?: number;
        BarrioId?: number;
        UserUsername?: string;
        BarrioNombre?: string;
    }

    export namespace UsersBarriosRow {
        export const idProperty = 'UserId';
        export const localTextPrefix = 'Administration.UsersBarrios';

        export declare const enum Fields {
            UserId = "UserId",
            BarrioId = "BarrioId",
            UserUsername = "UserUsername",
            BarrioNombre = "BarrioNombre"
        }
    }
}

