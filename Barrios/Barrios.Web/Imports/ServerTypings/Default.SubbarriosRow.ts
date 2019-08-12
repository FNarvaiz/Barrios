
namespace Barrios.Default {
    export interface SubbarriosRow {
        Id?: number;
        Nombre?: string;
        BarrioId?: number;
        BarrioNombre?: string;
        BarrioLogo?: string;
        BarrioUrl?: string;
        BarrioTelefonOs?: string;
        BarrioDireccion?: string;
        BarrioIsActive?: boolean;
        BarrioLargeDisplayName?: string;
        BarrioShortDisplayName?: string;
        BarrioMail?: string;
        BarrioPasswordMail?: string;
        BarrioCantDiasReservables?: number;
    }

    export namespace SubbarriosRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Nombre';
        export const localTextPrefix = 'Default.Subbarrios';

        export namespace Fields {
            export declare const Id;
            export declare const Nombre;
            export declare const BarrioId;
            export declare const BarrioNombre;
            export declare const BarrioLogo;
            export declare const BarrioUrl;
            export declare const BarrioTelefonOs;
            export declare const BarrioDireccion;
            export declare const BarrioIsActive;
            export declare const BarrioLargeDisplayName;
            export declare const BarrioShortDisplayName;
            export declare const BarrioMail;
            export declare const BarrioPasswordMail;
            export declare const BarrioCantDiasReservables;
        }

        [
            'Id',
            'Nombre',
            'BarrioId',
            'BarrioNombre',
            'BarrioLogo',
            'BarrioUrl',
            'BarrioTelefonOs',
            'BarrioDireccion',
            'BarrioIsActive',
            'BarrioLargeDisplayName',
            'BarrioShortDisplayName',
            'BarrioMail',
            'BarrioPasswordMail',
            'BarrioCantDiasReservables'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}