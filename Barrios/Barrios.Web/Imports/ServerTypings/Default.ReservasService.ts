namespace Barrios.Default {
    export namespace ReservasService {
        export const baseUrl = 'Default/Reservas';

        export declare function Create(request: Serenity.SaveRequest<ReservasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ReservasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ReservasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ReservasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function renderBookingStatus(request: IdRequest, onSuccess?: (response: System.String) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Default/Reservas/Create",
            Update = "Default/Reservas/Update",
            Delete = "Default/Reservas/Delete",
            Retrieve = "Default/Reservas/Retrieve",
            List = "Default/Reservas/List",
            renderBookingStatus = "Default/Reservas/renderBookingStatus"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'renderBookingStatus'
        ].forEach(x => {
            (<any>ReservasService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

