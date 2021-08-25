namespace Barrios.Default {
    export namespace ReservasService {
        export const baseUrl = 'Default/Reservas';

        export declare function Create(request: Serenity.SaveRequest<ReservasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ReservasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function ConfirmReservation(request: IdRequest, onSuccess?: (response: System.String) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ReservasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ReservasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function ImportFile(request: Modules.Common.ImportFile.ImportFileRequest, onSuccess?: (response: System.String) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function renderBookingStatus(request: BookingListRequest, onSuccess?: (response: System.String) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function bookingsTake(request: BookingTakeRequest, onSuccess?: (response: System.String) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function SendRequest(request: BookingTakeRequest, onSuccess?: (response: System.String) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function bookingCancel(request: IdRequest, onSuccess?: (response: System.String) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Default/Reservas/Create",
            Update = "Default/Reservas/Update",
            ConfirmReservation = "Default/Reservas/ConfirmReservation",
            Delete = "Default/Reservas/Delete",
            Retrieve = "Default/Reservas/Retrieve",
            List = "Default/Reservas/List",
            ImportFile = "Default/Reservas/ImportFile",
            renderBookingStatus = "Default/Reservas/renderBookingStatus",
            bookingsTake = "Default/Reservas/bookingsTake",
            SendRequest = "Default/Reservas/SendRequest",
            bookingCancel = "Default/Reservas/bookingCancel"
        }

        [
            'Create', 
            'Update', 
            'ConfirmReservation', 
            'Delete', 
            'Retrieve', 
            'List', 
            'ImportFile', 
            'renderBookingStatus', 
            'bookingsTake', 
            'SendRequest', 
            'bookingCancel'
        ].forEach(x => {
            (<any>ReservasService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

