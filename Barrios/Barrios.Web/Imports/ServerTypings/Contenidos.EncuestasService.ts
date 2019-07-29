namespace Barrios.Contenidos {
    export namespace EncuestasService {
        export const baseUrl = 'Contenidos/Encuestas';

        export declare function Create(request: Serenity.SaveRequest<EncuestasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<EncuestasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EncuestasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EncuestasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function ListRatings(request: Serenity.ServiceRequest, onSuccess?: (response: System.Collections.Generic.List<EncuestasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Rating(request: Modules.Common.Utils.RatingRequest, onSuccess?: (response: System.String) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function SeeMore(request: Serenity.RetrieveRequest, onSuccess?: (response: System.String) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Contenidos/Encuestas/Create",
            Update = "Contenidos/Encuestas/Update",
            Delete = "Contenidos/Encuestas/Delete",
            Retrieve = "Contenidos/Encuestas/Retrieve",
            List = "Contenidos/Encuestas/List",
            ListRatings = "Contenidos/Encuestas/ListRatings",
            Rating = "Contenidos/Encuestas/Rating",
            SeeMore = "Contenidos/Encuestas/SeeMore"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'ListRatings', 
            'Rating', 
            'SeeMore'
        ].forEach(x => {
            (<any>EncuestasService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

