namespace Barrios.Perfil {
    export namespace VecinosMascotasService {
        export const baseUrl = 'Perfil/VecinosMascotas';

        export declare function Create(request: Serenity.SaveRequest<VecinosMascotasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<VecinosMascotasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VecinosMascotasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VecinosMascotasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function ImportFile(request: Modules.Common.ImportFile.ImportFileRequest, onSuccess?: (response: System.String) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Perfil/VecinosMascotas/Create",
            Update = "Perfil/VecinosMascotas/Update",
            Delete = "Perfil/VecinosMascotas/Delete",
            Retrieve = "Perfil/VecinosMascotas/Retrieve",
            List = "Perfil/VecinosMascotas/List",
            ImportFile = "Perfil/VecinosMascotas/ImportFile"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'ImportFile'
        ].forEach(x => {
            (<any>VecinosMascotasService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

