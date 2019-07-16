namespace Barrios.Default {
    export interface BookingTakeRequest extends Serenity.ServiceRequest {
        resourceId?: number;
        bookingDate?: string;
        turnStart?: number;
        turnType?: number;
        extraNeighborUnit?: number;
    }
}

