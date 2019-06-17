namespace Barrios.Contenidos {
    export interface ProveedoresValoracionesRow {
        Id?: number;
        IdProveedor?: number;
        Fecha?: string;
        Valoracion?: number;
        Userid?: number;
        IdProveedorNombre?: string;
        UseridUsername?: string;
    }

    export namespace ProveedoresValoracionesRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Contenidos.ProveedoresValoraciones';

        export declare const enum Fields {
            Id = "Id",
            IdProveedor = "IdProveedor",
            Fecha = "Fecha",
            Valoracion = "Valoracion",
            Userid = "Userid",
            IdProveedorNombre = "IdProveedorNombre",
            UseridUsername = "UseridUsername"
        }
    }
}

