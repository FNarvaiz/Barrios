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
        Turno?: string;
        Estado?: string;
        Finalizado?: boolean;
        Reservable?: boolean;
        Tipo?: string;
        Estado_Turno?: string;
        Valido?: boolean;
        Required_Vecino?: boolean;
        IdVecinoUnidadExtra?: string;
        IdRecursoNombre?: string;
        IdRecursoApertura?: number;
        IdRecursoCierre?: number;
        IdRecursoResolucion?: number;
        IdVecinoUsername?: string;
        IdVecinoDisplayName?: string;
        IdVecinoEmail?: string;
        IdVecinoSource?: string;
        IdVecinoPasswordHash?: string;
        IdVecinoPasswordSalt?: string;
        IdVecinoLastDirectoryUpdate?: string;
        IdVecinoUserImage?: string;
        IdVecinoInsertDate?: string;
        IdVecinoInsertUserId?: number;
        IdVecinoUpdateDate?: string;
        IdVecinoUpdateUserId?: number;
        IdVecinoIsActive?: number;
        IdVecinoPhones?: string;
        IdVecinoNote?: string;
        IdVecinoLatestAccess?: string;
        IdVecinoUnidad?: string;
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
            Turno = "Turno",
            Estado = "Estado",
            Finalizado = "Finalizado",
            Reservable = "Reservable",
            Tipo = "Tipo",
            Estado_Turno = "Estado_Turno",
            Valido = "Valido",
            Required_Vecino = "Required_Vecino",
            IdVecinoUnidadExtra = "IdVecinoUnidadExtra",
            IdRecursoNombre = "IdRecursoNombre",
            IdRecursoApertura = "IdRecursoApertura",
            IdRecursoCierre = "IdRecursoCierre",
            IdRecursoResolucion = "IdRecursoResolucion",
            IdVecinoUsername = "IdVecinoUsername",
            IdVecinoDisplayName = "IdVecinoDisplayName",
            IdVecinoEmail = "IdVecinoEmail",
            IdVecinoSource = "IdVecinoSource",
            IdVecinoPasswordHash = "IdVecinoPasswordHash",
            IdVecinoPasswordSalt = "IdVecinoPasswordSalt",
            IdVecinoLastDirectoryUpdate = "IdVecinoLastDirectoryUpdate",
            IdVecinoUserImage = "IdVecinoUserImage",
            IdVecinoInsertDate = "IdVecinoInsertDate",
            IdVecinoInsertUserId = "IdVecinoInsertUserId",
            IdVecinoUpdateDate = "IdVecinoUpdateDate",
            IdVecinoUpdateUserId = "IdVecinoUpdateUserId",
            IdVecinoIsActive = "IdVecinoIsActive",
            IdVecinoPhones = "IdVecinoPhones",
            IdVecinoNote = "IdVecinoNote",
            IdVecinoLatestAccess = "IdVecinoLatestAccess",
            IdVecinoUnidad = "IdVecinoUnidad"
        }
    }
}

