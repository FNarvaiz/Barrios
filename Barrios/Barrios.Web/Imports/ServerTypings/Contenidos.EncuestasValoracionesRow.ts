namespace Barrios.Contenidos {
    export interface EncuestasValoracionesRow {
        Id?: number;
        IdEncuesta?: number;
        Fecha?: string;
        Valoracion?: number;
        Comentario?: string;
        Userid?: number;
        IdEncuestaNombre?: string;
        UseridUsername?: string;
    }

    export namespace EncuestasValoracionesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Comentario';
        export const localTextPrefix = 'Contenidos.EncuestasValoraciones';

        export declare const enum Fields {
            Id = "Id",
            IdEncuesta = "IdEncuesta",
            Fecha = "Fecha",
            Valoracion = "Valoracion",
            Comentario = "Comentario",
            Userid = "Userid",
            IdEncuestaNombre = "IdEncuestaNombre",
            UseridUsername = "UseridUsername"
        }
    }
}

