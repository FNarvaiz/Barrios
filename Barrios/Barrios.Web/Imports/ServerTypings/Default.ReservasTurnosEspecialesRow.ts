﻿namespace Barrios.Default {
    export interface ReservasTurnosEspecialesRow {
        IdRecurso?: number;
        Id?: number;
        Inicio?: number;
        Duracion?: number;
        Nombre?: string;
        Dias?: string;
        Lunes?: boolean;
        Martes?: boolean;
        Miercoles?: boolean;
        Jueves?: boolean;
        Viernes?: boolean;
        Sabado?: boolean;
        Domingo?: boolean;
    }

    export namespace ReservasTurnosEspecialesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Nombre';
        export const localTextPrefix = 'Default.ReservasTurnosEspeciales';
        export const lookupKey = 'Reservas.ReservasTurnosEspeciales';

        export function getLookup(): Q.Lookup<ReservasTurnosEspecialesRow> {
            return Q.getLookup<ReservasTurnosEspecialesRow>('Reservas.ReservasTurnosEspeciales');
        }

        export declare const enum Fields {
            IdRecurso = "IdRecurso",
            Id = "Id",
            Inicio = "Inicio",
            Duracion = "Duracion",
            Nombre = "Nombre",
            Dias = "Dias",
            Lunes = "Lunes",
            Martes = "Martes",
            Miercoles = "Miercoles",
            Jueves = "Jueves",
            Viernes = "Viernes",
            Sabado = "Sabado",
            Domingo = "Domingo"
        }
    }
}

