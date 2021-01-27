namespace Barrios.Default {
    export interface ReservasRecurrentesRow {
        Id?: number;
        Dias?: string;
        Observaciones?: string;
        ResourceId?: number;
        Inicio?: number;
        Duracion?: number;
        Lunes?: boolean;
        Martes?: boolean;
        Miercoles?: boolean;
        Jueves?: boolean;
        Viernes?: boolean;
        Sabado?: boolean;
        Domingo?: boolean;
        Feriados?: boolean;
    }

    export namespace ReservasRecurrentesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Dias';
        export const localTextPrefix = 'Default.ReservasRecurrentes';

        export declare const enum Fields {
            Id = "Id",
            Dias = "Dias",
            Observaciones = "Observaciones",
            ResourceId = "ResourceId",
            Inicio = "Inicio",
            Duracion = "Duracion",
            Lunes = "Lunes",
            Martes = "Martes",
            Miercoles = "Miercoles",
            Jueves = "Jueves",
            Viernes = "Viernes",
            Sabado = "Sabado",
            Domingo = "Domingo",
            Feriados = "Feriados"
        }
    }
}

