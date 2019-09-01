namespace Barrios.Default {
    export namespace HolidaysService {
        export const baseUrl = 'Default/Holidays';

        export declare function Create(request: Serenity.SaveRequest<HolidaysRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<HolidaysRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<HolidaysRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<HolidaysRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function UpdateFromAPI(request: IdRequest, onSuccess?: (response: System.String) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Default/Holidays/Create",
            Update = "Default/Holidays/Update",
            Delete = "Default/Holidays/Delete",
            Retrieve = "Default/Holidays/Retrieve",
            List = "Default/Holidays/List",
            UpdateFromAPI = "Default/Holidays/UpdateFromAPI"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'UpdateFromAPI'
        ].forEach(x => {
            (<any>HolidaysService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

