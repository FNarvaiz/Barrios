namespace Barrios.Default {
    export interface HolidaysRow {
        Id?: number;
        Reason?: string;
        Type?: TypeHolidays;
        Day?: string;
        ApiId?: string;
    }

    export namespace HolidaysRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Reason';
        export const localTextPrefix = 'Default.Holidays';

        export declare const enum Fields {
            Id = "Id",
            Reason = "Reason",
            Type = "Type",
            Day = "Day",
            ApiId = "ApiId"
        }
    }
}

