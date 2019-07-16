namespace Barrios.Perfil {
    export namespace VecinosEventosConcurrentesService {
        export const baseUrl = 'Perfil/VecinosEventosConcurrentes';

        export declare function Create(request: Serenity.SaveRequest<VecinosEventosConcurrentesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<VecinosEventosConcurrentesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VecinosEventosConcurrentesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VecinosEventosConcurrentesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Perfil/VecinosEventosConcurrentes/Create",
            Update = "Perfil/VecinosEventosConcurrentes/Update",
            Delete = "Perfil/VecinosEventosConcurrentes/Delete",
            Retrieve = "Perfil/VecinosEventosConcurrentes/Retrieve",
            List = "Perfil/VecinosEventosConcurrentes/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>VecinosEventosConcurrentesService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

