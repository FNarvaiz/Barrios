namespace Barrios.Default {
    export interface ReservasRecursosRow {
        Id?: number;
        Nombre?: string;
        Apertura?: number;
        Cierre?: number;
        Resolucion?: number;
        ClientIdList?: number[];
        BarrioId?: number;
        TypeList?: ReservasTiposRow[];
        SpecialTurnList?: ReservasTurnosEspecialesRow[];
    }

    export namespace ReservasRecursosRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Nombre';
        export const localTextPrefix = 'Default.ReservasRecursos';

        export declare const enum Fields {
            Id = "Id",
            Nombre = "Nombre",
            Apertura = "Apertura",
            Cierre = "Cierre",
            Resolucion = "Resolucion",
            ClientIdList = "ClientIdList",
            BarrioId = "BarrioId",
            TypeList = "TypeList",
            SpecialTurnList = "SpecialTurnList"
        }
    }
}

