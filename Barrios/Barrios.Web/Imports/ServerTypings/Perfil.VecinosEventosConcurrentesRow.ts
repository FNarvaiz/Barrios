namespace Barrios.Perfil {
    export interface VecinosEventosConcurrentesRow {
        Id?: number;
        IdEvento?: number;
        Nombre?: string;
        Userid?: number;
    }

    export namespace VecinosEventosConcurrentesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Nombre';
        export const localTextPrefix = 'Perfil.VecinosEventosConcurrentes';

        export declare const enum Fields {
            Id = "Id",
            IdEvento = "IdEvento",
            Nombre = "Nombre",
            Userid = "Userid"
        }
    }
}

