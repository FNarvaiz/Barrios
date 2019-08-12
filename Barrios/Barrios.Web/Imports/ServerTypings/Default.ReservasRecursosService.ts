namespace Barrios.Default {
    export namespace ReservasRecursosService {
        export const baseUrl = 'Default/ReservasRecursos';

        export declare function Create(request: Serenity.SaveRequest<ReservasRecursosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ReservasRecursosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ReservasRecursosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ReservasRecursosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function ListOfAllowedResources(request: Serenity.ServiceRequest, onSuccess?: (response: System.Collections.Generic.List<ReservasRecursosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Default/ReservasRecursos/Create",
            Update = "Default/ReservasRecursos/Update",
            Delete = "Default/ReservasRecursos/Delete",
            Retrieve = "Default/ReservasRecursos/Retrieve",
            List = "Default/ReservasRecursos/List",
            ListOfAllowedResources = "Default/ReservasRecursos/ListOfAllowedResources"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'ListOfAllowedResources'
        ].forEach(x => {
            (<any>ReservasRecursosService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

