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
             this.selectItem($(items[0]));
         }
         public selectItem(item: JQuery) {
             var obj = this;
             var parameters=item.attr("ID").split(",", 2);
             Barrios.Default.ReservasService.renderBookingStatus({
                 ID: parseInt(parameters[0]),
                 Resolution: parseInt(parameters[1])
             }
                 , (response) => {
                 obj._table.html($.parseHTML(response));
             });
             this._resource.text(item.text());
         }
         public bookingsTake(element, resourceId: number, date: string, start: number, type: number, neighbour: boolean) {
             
             if (neighbour) {
                 var dialog = new Barrios.Default.TwoNeighborsDialog(element);
                 dialog.element.on("dialogclose", () => {
                     if (dialog.vecinoId != null)
                         this.sendBookingsTake(resourceId, date, start, type, dialog.vecinoId);
                 });
                 dialog.dialogOpen();
             }
             else {
                 this.sendBookingsTake(resourceId, date, start, type, null);
             }
         }
         public sendBookingsTake(resourceId: number, date: string, start: number, type: number, neighbour: number) {
             var table = this._table;
             Barrios.Default.ReservasService.bookingsTake({
                 resourceId: resourceId,
                 bookingDate: date,
                 turnStart: start,
                 turnType: type,
                 extraNeighborUnit: neighbour
             }, (response) => {
                 table.html($.parseHTML(response));
             });
         }
         public  showEspecialTurnDialog() {
             var dialog = new Barrios.Default.EspecialBookingDialog($(""));
             dialog.element.on("dialogclose", () => {
                 if (dialog.send) {
                     this.SendBookinRequest(
                         dialog.form.Fecha.value,
                         dialog.form.IdRecurso.value,
                         dialog.form.IdRecurso.text,
                         dialog.turn.Nombre,
                         dialog.turn.Duracion,
                         dialog.turn.Inicio,
                         dialog.turn.Id,
                         dialog.form.Observaciones
                     );
                 }
             });
             dialog.dialogOpen();
         }
         public SendBookinRequest(date, resourceId, resourceName, turnName, turnDuration, turnStart, turnTypeId,comment="") {
             if (resourceName == "") {
                 resourceName = this._resource.text();
             }
             Barrios.Default.ReservasService.SendRequest({
                 bookingDate: date,
                 resourceId: resourceId,
                 resourceName: resourceName,
                 turnName: turnName,
                 turnDuration: turnDuration,
                 turnStart: turnStart,
                 turnType: turnTypeId,
                 comment: comment
             }, (response) => {
                 Q.notifySuccess(response);
             });
         }
       
         public moveDisplay(HideColumn, ShowColumn) {
             $('.' + HideColumn).hide();
             $('.' + ShowColumn).show();
         }
        
    }
}