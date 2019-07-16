namespace Barrios.Default {
    export interface ReservasTiposRow {
        IdRecurso?: number;
        Id?: number;
        Nombre?: string;
        Duracion?: number;
        Vigente?: boolean;
        RequiereVecino2?: boolean;
    }

    export namespace ReservasTiposRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Nombre';
        export const localTextPrefix = 'Default.ReservasTipos';

        export declare const enum Fields {
            IdRecurso = "IdRecurso",
            Id = "Id",
            Nombre = "Nombre",
            Duracion = "Duracion",
            Vigente = "Vigente",
            RequiereVecino2 = "RequiereVecino2"
        }
    }
}

