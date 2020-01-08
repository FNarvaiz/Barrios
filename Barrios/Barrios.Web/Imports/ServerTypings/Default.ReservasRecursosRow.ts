namespace Barrios.Default {
    export interface ReservasRecursosRow {
        Id?: number;
        Nombre?: string;
        Regulation?: string;
        Emails?: string;
        MailBody?: string;
        Description?: string;
        Apertura?: number;
        Cierre?: number;
        Tipo?: number;
        Desde?: number;
        Hasta?: number;
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
            Regulation = "Regulation",
            Emails = "Emails",
            MailBody = "MailBody",
            Description = "Description",
            Apertura = "Apertura",
            Cierre = "Cierre",
            Tipo = "Tipo",
            Desde = "Desde",
            Hasta = "Hasta",
            Resolucion = "Resolucion",
            ClientIdList = "ClientIdList",
            NeigborhoodList = "NeigborhoodList",
            BarrioId = "BarrioId",
            TypeList = "TypeList",
            SpecialTurnList = "SpecialTurnList"
        }
    }
}

