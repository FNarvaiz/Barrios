namespace Barrios.Contenidos {
    export namespace ComisionesService {
        export const baseUrl = 'Contenidos/Comisiones';

        export declare function Create(request: Serenity.SaveRequest<ComisionesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ComisionesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ComisionesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ComisionesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function SendMail(request: Modules.Common.Utils.EmailRequest, onSuccess?: (response: System.String) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function ListView(request: Serenity.ServiceRequest, onSuccess?: (response: System.Collections.Generic.List<ComisionesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Contenidos/Comisiones/Create",
            Update = "Contenidos/Comisiones/Update",
            Delete = "Contenidos/Comisiones/Delete",
            Retrieve = "Contenidos/Comisiones/Retrieve",
            List = "Contenidos/Comisiones/List",
            SendMail = "Contenidos/Comisiones/SendMail",
            ListView = "Contenidos/Comisiones/ListView"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'SendMail', 
            'ListView'
        ].forEach(x => {
            (<any>ComisionesService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

