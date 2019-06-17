namespace Barrios.Default {
    export interface ReservasRecursosRow {
        BarrioId?: number;
        Id?: number;
        Nombre?: string;
        Apertura?: number;
        Cierre?: number;
        Resolucion?: number;
    }

    export namespace ReservasRecursosRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Nombre';
        export const localTextPrefix = 'Default.ReservasRecursos';

        export declare const enum Fields {
            BarrioId = "BarrioId",
            Id = "Id",
            Nombre = "Nombre",
            Apertura = "Apertura",
            Cierre = "Cierre",
            Resolucion = "Resolucion"
        }
    }
}

