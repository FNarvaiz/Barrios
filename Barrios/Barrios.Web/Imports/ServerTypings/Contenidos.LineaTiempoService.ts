namespace Barrios.Contenidos {
    export namespace LineaTiempoService {
        export const baseUrl = 'Contenidos/LineaTiempo';

        export declare function Create(request: Serenity.SaveRequest<LineaTiempoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<LineaTiempoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LineaTiempoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LineaTiempoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function SendMails(request: Modules.Common.Utils.IdRequest, onSuccess?: (response: System.String) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function SendMailsForSubNeigborhoob(request: MailsRequest, onSuccess?: (response: System.String) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function ImportFile(request: Modules.Common.ImportFile.ImportFileRequest, onSuccess?: (response: System.String) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Contenidos/LineaTiempo/Create",
            Update = "Contenidos/LineaTiempo/Update",
            Delete = "Contenidos/LineaTiempo/Delete",
            Retrieve = "Contenidos/LineaTiempo/Retrieve",
            List = "Contenidos/LineaTiempo/List",
            SendMails = "Contenidos/LineaTiempo/SendMails",
            SendMailsForSubNeigborhoob = "Contenidos/LineaTiempo/SendMailsForSubNeigborhoob",
            ImportFile = "Contenidos/LineaTiempo/ImportFile"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'SendMails', 
            'SendMailsForSubNeigborhoob', 
            'ImportFile'
        ].forEach(x => {
            (<any>LineaTiempoService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

