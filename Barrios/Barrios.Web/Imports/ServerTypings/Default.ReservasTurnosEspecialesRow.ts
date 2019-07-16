namespace Barrios.Default {
    export interface ReservasTurnosEspecialesRow {
        IdRecurso?: number;
        Id?: number;
        Inicio?: number;
        Duracion?: number;
        Nombre?: string;
        Dias?: string;
    }

    export namespace ReservasTurnosEspecialesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Nombre';
        export const localTextPrefix = 'Default.ReservasTurnosEspeciales';

        export declare const enum Fields {
            IdRecurso = "IdRecurso",
            Id = "Id",
            Inicio = "Inicio",
            Duracion = "Duracion",
            Nombre = "Nombre",
            Dias = "Dias"
        }
    }
}

