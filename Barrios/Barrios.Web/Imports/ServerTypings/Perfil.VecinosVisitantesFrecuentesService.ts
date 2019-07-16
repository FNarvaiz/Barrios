namespace Barrios.Perfil {
    export namespace VecinosVisitantesFrecuentesService {
        export const baseUrl = 'Perfil/VecinosVisitantesFrecuentes';

        export declare function Create(request: Serenity.SaveRequest<VecinosVisitantesFrecuentesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<VecinosVisitantesFrecuentesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VecinosVisitantesFrecuentesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VecinosVisitantesFrecuentesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Perfil/VecinosVisitantesFrecuentes/Create",
            Update = "Perfil/VecinosVisitantesFrecuentes/Update",
            Delete = "Perfil/VecinosVisitantesFrecuentes/Delete",
            Retrieve = "Perfil/VecinosVisitantesFrecuentes/Retrieve",
            List = "Perfil/VecinosVisitantesFrecuentes/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>VecinosVisitantesFrecuentesService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

