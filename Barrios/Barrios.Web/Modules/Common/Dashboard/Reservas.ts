/// <reference types="jqueryui" />
/// <reference types="toastr" />
/// <reference types="jquery" />
/// <reference types="jquery.validation" />
/// <reference path="../../../Imports/ServerTypings/Default.ReservasService.ts" />
namespace Dashboard {
     export class Booking {

         _resource;
         _table;
         constructor(resource: JQuery, items: JQuery, table: JQuery) {
             this._resource = resource;
             var obj = this;
             this._table = table;
             items.click(function () { obj.selectItem($(this)) });
         }
         public selectItem(item: JQuery) {
             
             var obj = this;
             Barrios.Default.ReservasService.renderBookingStatus({ Id: item.attr("ID") }, (response) => {
                 console.log(response);
                 obj._table.html($.parseHTML(response));
             });
             this._resource.text(item.text());
         }
         public bookingsTake(element, resourceId: Number, date: string, start: number, type: number, neighbour: boolean) {
             console.log(element);
         }
        
    }
}