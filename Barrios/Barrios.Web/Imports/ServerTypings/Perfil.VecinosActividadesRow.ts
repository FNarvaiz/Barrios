namespace Barrios.Perfil {
    export interface VecinosActividadesRow {
        Id?: number;
        Fecha?: string;
        Actividad?: string;
        ActividadDetalles?: string;
        Ip?: string;
        Userid?: number;
    }

    export namespace VecinosActividadesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Actividad';
        export const localTextPrefix = 'Perfil.VecinosActividades';

        export declare const enum Fields {
            Id = "Id",
            Fecha = "Fecha",
            Actividad = "Actividad",
            ActividadDetalles = "ActividadDetalles",
            Ip = "Ip",
            Userid = "Userid"
        }
    }
}

