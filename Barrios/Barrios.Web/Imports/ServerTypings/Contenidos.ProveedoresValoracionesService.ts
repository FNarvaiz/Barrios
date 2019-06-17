namespace Barrios.Contenidos {
    export namespace ProveedoresValoracionesService {
        export const baseUrl = 'Contenidos/ProveedoresValoraciones';

        export declare function Create(request: Serenity.SaveRequest<ProveedoresValoracionesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ProveedoresValoracionesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProveedoresValoracionesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProveedoresValoracionesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Contenidos/ProveedoresValoraciones/Create",
            Update = "Contenidos/ProveedoresValoraciones/Update",
            Delete = "Contenidos/ProveedoresValoraciones/Delete",
            Retrieve = "Contenidos/ProveedoresValoraciones/Retrieve",
            List = "Contenidos/ProveedoresValoraciones/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>ProveedoresValoracionesService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

