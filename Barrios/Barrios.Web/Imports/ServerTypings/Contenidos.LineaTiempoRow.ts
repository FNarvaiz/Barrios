namespace Barrios.Contenidos {
    export interface LineaTiempoRow {
        Id?: number;
        Nombre?: string;
        ArchivoFilename?: string;
        ArchivoFilesize?: number;
        ArchivoContenttype?: string;
        ArchivoBinarydata?: number[];
        Aprobado?: boolean;
        Mes?: number;
        Anio?: number;
        Periodo?: string;
        PeriodoFecha?: string;
        ContenidoTexto?: string;
        Userid?: number;
        IdCategoria?: number;
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
            ArchivoFilesize = "ArchivoFilesize",
            ArchivoContenttype = "ArchivoContenttype",
            ArchivoBinarydata = "ArchivoBinarydata",
            Aprobado = "Aprobado",
            Mes = "Mes",
            Anio = "Anio",
            Periodo = "Periodo",
            PeriodoFecha = "PeriodoFecha",
            ContenidoTexto = "ContenidoTexto",
            Userid = "Userid",
            IdCategoria = "IdCategoria",
            UseridUsername = "UseridUsername"
        }
    }
}

