namespace Barrios.Default {
    export interface BookingListRequest extends Serenity.ServiceRequest {
        ID?: number;
        Resolution?: number;
        NeedComment?: boolean;
    }
}

