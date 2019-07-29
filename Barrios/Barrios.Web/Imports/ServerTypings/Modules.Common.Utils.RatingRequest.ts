namespace Barrios.Modules.Common.Utils {
    export interface RatingRequest extends Serenity.ServiceRequest {
        ID?: number;
        Rating?: number;
        Note?: string;
    }
}

