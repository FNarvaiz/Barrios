namespace Barrios.Default {
    export interface ReservasRow {
        Id?: number;
        IdRecurso?: number;
        IdResultado?: number;
        Fecha?: string;
        Inicio?: number;
        Duracion?: number;
        Observaciones?: string;
        IdVecino2?: number;
        IdTipo?: number;
        FechaFin?: string;
        IdVecino?: number;
        DateInsert?: string;
        UserInsert?: number;
        BarrioId?: number;
        IdTurnosEspeciales?: number;
        Hora?: string;
        Confirmada?: boolean;
        DateUpdate?: string;
        UserUpdate?: number;
        SendMail?: boolean;
        Turno?: string;
        Estado?: string;
        Finalizado?: boolean;
        Reservable?: boolean;
        Tipo?: string;
        TipoReservaHecha?: string;
        Estado_Turno?: string;
        Valido?: boolean;
        Required_Vecino?: boolean;
        IdVecinoUnidadExtra?: string;
        Dias?: string;
        IdRecursoNombre?: string;
        IdVecinoUsername?: string;
        IdVecinoUnidad?: string;
        IdVecinoUsername2?: string;
    }

    export namespace ReservasRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Observaciones';
        export const localTextPrefix = 'Default.Reservas';

        export declare const enum Fields {
            Id = "Id",
            IdRecurso = "IdRecurso",
            IdResultado = "IdResultado",
            Fecha = "Fecha",
            Inicio = "Inicio",
            Duracion = "Duracion",
            Observaciones = "Observaciones",
            IdVecino2 = "IdVecino2",
            IdTipo = "IdTipo",
            FechaFin = "FechaFin",
            IdVecino = "IdVecino",
            DateInsert = "DateInsert",
            UserInsert = "UserInsert",
            BarrioId = "BarrioId",
            IdTurnosEspeciales = "IdTurnosEspeciales",
            Hora = "Hora",
            Confirmada = "Confirmada",
            DateUpdate = "DateUpdate",
            UserUpdate = "UserUpdate",
            SendMail = "SendMail",
            Turno = "Turno",
            Estado = "Estado",
            Finalizado = "Finalizado",
            Reservable = "Reservable",
            Tipo = "Tipo",
            TipoReservaHecha = "TipoReservaHecha",
            Estado_Turno = "Estado_Turno",
            Valido = "Valido",
            Required_Vecino = "Required_Vecino",
            IdVecinoUnidadExtra = "IdVecinoUnidadExtra",
            Dias = "Dias",
            IdRecursoNombre = "IdRecursoNombre",
            IdVecinoUsername = "IdVecinoUsername",
            IdVecinoUnidad = "IdVecinoUnidad",
            IdVecinoUsername2 = "IdVecinoUsername2"
        }
    }
}

