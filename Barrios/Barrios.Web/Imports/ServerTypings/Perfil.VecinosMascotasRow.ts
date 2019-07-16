﻿namespace Barrios.Perfil {
    export interface VecinosMascotasRow {
        Id?: number;
        Nombre?: string;
        IdTipo?: number;
        Raza?: string;
        Foto?: string;
        Userid?: number;
        UseridUsername?: string;
        UseridUnit?: string;
    }

    export namespace VecinosMascotasRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Nombre';
        export const localTextPrefix = 'Perfil.VecinosMascotas';

        export declare const enum Fields {
            Id = "Id",
            Nombre = "Nombre",
            IdTipo = "IdTipo",
            Raza = "Raza",
            Foto = "Foto",
            Userid = "Userid",
            UseridUsername = "UseridUsername",
            UseridUnit = "UseridUnit"
        }
    }
}
