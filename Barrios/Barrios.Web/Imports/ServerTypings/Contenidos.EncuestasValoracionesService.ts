namespace Barrios.Contenidos {
    export namespace EncuestasValoracionesService {
        export const baseUrl = 'Contenidos/EncuestasValoraciones';

        export declare function Create(request: Serenity.SaveRequest<EncuestasValoracionesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<EncuestasValoracionesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EncuestasValoracionesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EncuestasValoracionesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Contenidos/EncuestasValoraciones/Create",
            Update = "Contenidos/EncuestasValoraciones/Update",
            Delete = "Contenidos/EncuestasValoraciones/Delete",
            Retrieve = "Contenidos/EncuestasValoraciones/Retrieve",
            List = "Contenidos/EncuestasValoraciones/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>EncuestasValoracionesService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

