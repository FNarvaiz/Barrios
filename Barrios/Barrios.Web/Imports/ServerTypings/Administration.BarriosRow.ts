namespace Barrios.Administration {
    export interface BarriosRow {
        Id?: number;
        Nombre?: string;
        Logo?: string;
        Url?: string;
        TelefonOs?: string;
        Direccion?: string;
        IsActive?: boolean;
    }

    export namespace BarriosRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Nombre';
        export const localTextPrefix = 'Administration.Barrios';
        export const lookupKey = 'Administration.Barrios';

        export function getLookup(): Q.Lookup<BarriosRow> {
            return Q.getLookup<BarriosRow>('Administration.Barrios');
        }

        export declare const enum Fields {
            Id = "Id",
            Nombre = "Nombre",
            Logo = "Logo",
            Url = "Url",
            TelefonOs = "TelefonOs",
            Direccion = "Direccion",
            IsActive = "IsActive"
        }
    }
}

