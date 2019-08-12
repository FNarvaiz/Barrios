namespace Barrios.Settings {
    export interface SubbarriosRow {
        Id?: number;
        Nombre?: string;
        BarrioId?: number;
    }

    export namespace SubbarriosRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Nombre';
        export const localTextPrefix = 'Settings.Subbarrios';
        export const lookupKey = 'Settings.Subbarrios';

        export function getLookup(): Q.Lookup<SubbarriosRow> {
            return Q.getLookup<SubbarriosRow>('Settings.Subbarrios');
        }

        export declare const enum Fields {
            Id = "Id",
            Nombre = "Nombre",
            BarrioId = "BarrioId"
        }
    }
}

