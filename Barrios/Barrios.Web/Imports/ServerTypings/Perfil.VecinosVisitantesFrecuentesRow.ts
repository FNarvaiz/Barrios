namespace Barrios.Perfil {
    export interface VecinosVisitantesFrecuentesRow {
        Id?: number;
        Nombre?: string;
        Dni?: string;
        Vehiculo?: string;
        Tipo?: string;
        Userid?: number;
        BarrioId?: number;
        UseridUsername?: string;
    }

    export namespace VecinosVisitantesFrecuentesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Nombre';
        export const localTextPrefix = 'Perfil.VecinosVisitantesFrecuentes';

        export declare const enum Fields {
            Id = "Id",
            Nombre = "Nombre",
            Dni = "Dni",
            Vehiculo = "Vehiculo",
            Tipo = "Tipo",
            Userid = "Userid",
            BarrioId = "BarrioId",
            UseridUsername = "UseridUsername"
        }
    }
}

