namespace Barrios.Contenidos {
    export interface LineaTiempoRow {
        Id?: number;
        Nombre?: string;
        ArchivoFilename?: string;
        Aprobado?: boolean;
        Mostrar?: boolean;
        PeriodoFecha?: string;
        ContenidoTexto?: string;
        Userid?: number;
        IdCategoria?: number;
        BarrioId?: number;
        CategoryName?: string;
        UseridUsername?: string;
    }

    export namespace LineaTiempoRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Nombre';
        export const localTextPrefix = 'Contenidos.LineaTiempo';

        export declare const enum Fields {
            Id = "Id",
            Nombre = "Nombre",
            ArchivoFilename = "ArchivoFilename",
            Aprobado = "Aprobado",
            Mostrar = "Mostrar",
            PeriodoFecha = "PeriodoFecha",
            ContenidoTexto = "ContenidoTexto",
            Userid = "Userid",
            IdCategoria = "IdCategoria",
            BarrioId = "BarrioId",
            CategoryName = "CategoryName",
            UseridUsername = "UseridUsername"
        }
    }
}

