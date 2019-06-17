namespace Barrios.Default {
    export namespace ReservasTurnosEspecialesService {
        export const baseUrl = 'Default/ReservasTurnosEspeciales';

        export declare function Create(request: Serenity.SaveRequest<ReservasTurnosEspecialesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ReservasTurnosEspecialesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ReservasTurnosEspecialesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ReservasTurnosEspecialesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Default/ReservasTurnosEspeciales/Create",
            Update = "Default/ReservasTurnosEspeciales/Update",
            Delete = "Default/ReservasTurnosEspeciales/Delete",
            Retrieve = "Default/ReservasTurnosEspeciales/Retrieve",
            List = "Default/ReservasTurnosEspeciales/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>ReservasTurnosEspecialesService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

