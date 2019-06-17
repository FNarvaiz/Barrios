namespace Barrios.Contenidos {
    export namespace ComisionesIntegrantesService {
        export const baseUrl = 'Contenidos/ComisionesIntegrantes';

        export declare function Create(request: Serenity.SaveRequest<ComisionesIntegrantesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ComisionesIntegrantesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ComisionesIntegrantesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ComisionesIntegrantesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Contenidos/ComisionesIntegrantes/Create",
            Update = "Contenidos/ComisionesIntegrantes/Update",
            Delete = "Contenidos/ComisionesIntegrantes/Delete",
            Retrieve = "Contenidos/ComisionesIntegrantes/Retrieve",
            List = "Contenidos/ComisionesIntegrantes/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>ComisionesIntegrantesService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

