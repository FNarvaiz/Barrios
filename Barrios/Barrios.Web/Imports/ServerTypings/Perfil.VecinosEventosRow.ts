namespace Barrios.Perfil {
    export interface VecinosEventosRow {
        Id?: number;
        Nombre?: string;
        Fecha?: string;
        Lugar?: string;
        Userid?: number;
        UseridUsername?: string;
        ConcurrentesList?: VecinosEventosConcurrentesRow[];
    }

    export namespace VecinosEventosRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Nombre';
        export const localTextPrefix = 'Perfil.VecinosEventos';

        export declare const enum Fields {
            Id = "Id",
            Nombre = "Nombre",
            Fecha = "Fecha",
            Lugar = "Lugar",
            Userid = "Userid",
            UseridUsername = "UseridUsername",
            ConcurrentesList = "ConcurrentesList"
        }
    }
}

