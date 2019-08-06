namespace Barrios.Default {
    export interface BookingTakeRequest extends Serenity.ServiceRequest {
        resourceId?: number;
        resourceName?: string;
        bookingDate?: string;
        turnStart?: number;
        turnName?: string;
        turnDuration?: number;
        turnType?: number;
        extraNeighborUnit?: number;
        comment?: string;
    }
}

