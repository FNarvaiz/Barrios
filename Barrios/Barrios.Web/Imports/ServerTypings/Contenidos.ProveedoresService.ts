namespace Barrios.Contenidos {
    export namespace ProveedoresService {
        export const baseUrl = 'Contenidos/Proveedores';

        export declare function Create(request: Serenity.SaveRequest<ProveedoresRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ProveedoresRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProveedoresRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProveedoresRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function ListRatings(request: Serenity.ServiceRequest, onSuccess?: (response: System.Collections.Generic.List<ProveedoresRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Rating(request: Modules.Common.Utils.RatingRequest, onSuccess?: (response: System.String) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Contenidos/Proveedores/Create",
            Update = "Contenidos/Proveedores/Update",
            Delete = "Contenidos/Proveedores/Delete",
            Retrieve = "Contenidos/Proveedores/Retrieve",
            List = "Contenidos/Proveedores/List",
            ListRatings = "Contenidos/Proveedores/ListRatings",
            Rating = "Contenidos/Proveedores/Rating"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'ListRatings', 
            'Rating'
        ].forEach(x => {
            (<any>ProveedoresService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

