namespace Barrios.Modules.Common.Utils {
    export interface EmailRequest extends Serenity.ServiceRequest {
        ID?: string;
        Mails?: string;
        Message?: string;
        Subject?: string;
        IsHTML?: boolean;
    }
}

