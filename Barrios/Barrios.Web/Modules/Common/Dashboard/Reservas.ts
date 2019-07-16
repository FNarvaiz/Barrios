/// <reference types="jqueryui" />
/// <reference types="toastr" />
/// <reference types="jquery" />
/// <reference types="jquery.validation" />
/// <reference path="../../../Imports/ServerTypings/Default.ReservasService.ts" />
namespace Dashboard {
     export class Booking {

         _resource: JQuery;
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
                 obj._table.html($.parseHTML(response));
             });
             this._resource.text(item.text());
         }
         public bookingsTake(element, resourceId: number, date: string, start: number, type: number, neighbour: boolean) {
             var table = this._table;
             //if (neighbour)
                 //Serenity.form
             Barrios.Default.ReservasService.bookingsTake({
                 resourceId: resourceId,
                 bookingDate: date,
                 turnStart: start,
                 turnType: type,
                 extraNeighborUnit: null
             }, (response) => {
                 table.html($.parseHTML(response));
             });
         }
        
    }
}