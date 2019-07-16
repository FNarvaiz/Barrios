namespace Barrios.Default {
    export interface RecursosBarriosRow {
        RecursoId?: number;
        BarrioId?: number;
        BarrioNombre?: string;
    }

    export namespace RecursosBarriosRow {
        export const idProperty = 'RecursoId';
        export const localTextPrefix = 'Default.RecursosBarrios';

        export declare const enum Fields {
            RecursoId = "RecursoId",
            BarrioId = "BarrioId",
            BarrioNombre = "BarrioNombre"
        }
    }
}

