namespace Barrios.Default {
    export interface SubbarriosRecursosRow {
        SubBarrioId?: number;
        RecursoId?: number;
        SubBarrioNombre?: string;
    }

    export namespace SubbarriosRecursosRow {
        export const idProperty = 'SubBarrioId';
        export const localTextPrefix = 'Default.SubbarriosRecursos';

        export declare const enum Fields {
            SubBarrioId = "SubBarrioId",
            RecursoId = "RecursoId",
            SubBarrioNombre = "SubBarrioNombre"
        }
    }
}

