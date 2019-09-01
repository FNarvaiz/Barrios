namespace Barrios.Default {
    export interface ReservasRecursosRow {
        Id?: number;
        Nombre?: string;
        Emails?: string;
        Apertura?: number;
        Cierre?: number;
        Tipo?: number;
        Resolucion?: number;
        ClientIdList?: number[];
        NeigborhoodList?: number[];
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
            Emails = "Emails",
            Apertura = "Apertura",
            Cierre = "Cierre",
            Tipo = "Tipo",
            Resolucion = "Resolucion",
            ClientIdList = "ClientIdList",
            NeigborhoodList = "NeigborhoodList",
            BarrioId = "BarrioId",
            TypeList = "TypeList",
            SpecialTurnList = "SpecialTurnList"
        }
    }
}

