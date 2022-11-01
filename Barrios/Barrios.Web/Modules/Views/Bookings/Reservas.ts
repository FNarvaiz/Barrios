/// <reference types="jqueryui" />
/// <reference types="toastr" />
/// <reference types="jquery" />
/// <reference types="jquery.validation" />
/// <reference path="../../../Imports/ServerTypings/Default.ReservasService.ts" />
namespace Dashboard {
     export class Booking {

         _resource: JQuery;
         _table;
         _grid: Barrios.Default.MyBookingsGrid
         _itemForRefresh: JQuery;
         constructor(resource: JQuery, items: JQuery, table: JQuery, grid: Barrios.Default.MyBookingsGrid) {
             this._resource = resource;
             var obj = this;
             this._table = table;
             this._grid = grid;
             items.click(function () { obj.selectItem($(this)) });
             this.selectItem($(items[0]));
         }
         public selectItem(item: JQuery) {
             this._itemForRefresh = item;
             var obj = this;
             if (item != undefined && item.attr("ID") != undefined) {
                 var parameters = item.attr("ID").split(",", 2);
                 Barrios.Default.ReservasService.renderBookingStatus({
                     ID: parseInt(parameters[0]),
                     Resolution: parseInt(parameters[1])
                 }
                     , (response) => {
                         obj._table.html($.parseHTML(response));
                     });
                 this._resource.text(item.text());
             }
         }
         public refresh() {
             this.selectItem(this._itemForRefresh);
         }
         public bookingsTake(element, resourceId: number, date: string, start: number, type: number, neighbour: boolean, needCommend: boolean) {

             if (needCommend) {
                 this.openDialogComment(element, (coment) => {
                     this.bookingsTakeWithCommend(element, resourceId, date, start, type, neighbour, coment);
                 })
             }
             else {
                 this.bookingsTakeWithCommend(element, resourceId, date, start, type, neighbour,"");
             }
         }

         public bookingsTakeWithCommend(element, resourceId: number, date: string, start: number, type: number, neighbour: boolean,commend:string) {


             if (neighbour) {
                 var dialog = new Barrios.Default.TwoNeighborsDialog(element);
                 dialog.element.on("dialogclose", () => {
                     console.log(dialog.vecinoId)
                     if (dialog.vecinoId != null)
                         this.sendBookingsTake(resourceId, date, start, type, dialog.vecinoId, commend);
                 });
                 dialog.dialogOpen();


             }
             else {

                 this.sendBookingsTake(resourceId, date, start, type, null, commend);
             }
         }
         public openDialogComment(element ,functionNext) {
             var dialog = new Barrios.Default.NeedCommendDialog(element);
             dialog.element.on("dialogclose", () => {
                 functionNext(dialog.commend);
             });
             dialog.dialogOpen();
         }
         public sendBookingsTake(resourceId: number, date: string, start: number, type: number, neighbour: number, commend:string) {
             var table = this._table;
             Barrios.Default.ReservasService.bookingsTake({
                 resourceId: resourceId,
                 bookingDate: date,
                 turnStart: start,
                 turnType: type,
                 extraNeighborUnit: neighbour,
                 comment: commend
             }, (response) => {
                 table.html($.parseHTML(response));
                 this._grid.refresh();
             });
         }
         public  showEspecialTurnDialog() {
             var dialog = new Barrios.Default.EspecialBookingDialog($(""));
             dialog.element.on("dialogclose", () => {
                 if (dialog.send) {
                     this.sendRequest(
                         dialog.form.Fecha.value.replace("-", "").replace("-", ""),
                         dialog.form.IdRecurso.value,
                         dialog.form.IdRecurso.text,
                         dialog.turn.Nombre,
                         dialog.turn.Duracion,
                         dialog.turn.Inicio,
                         dialog.turn.Id,
                         dialog.form.Observaciones.value
                     );
                 }
             });
             dialog.dialogOpen();
         }
         public NextStepForBooking(date, resourceId, resourceName, turnName, turnDuration, turnStart, turnTypeId, needCommend, comment = "")
         {
             if (needCommend) {
                 this.openDialogComment(this, (coment) => {
                     this.sendRequest(date, resourceId, resourceName, turnName, turnDuration, turnStart, turnTypeId, coment);
                 })
             }
             else {
                 this.sendRequest(date, resourceId, resourceName, turnName, turnDuration, turnStart, turnTypeId);
             }
         }
         public SendBookinRequest(date, resourceId, resourceName, turnName, turnDuration, turnStart, turnTypeId, needCommend, comment = "", cant_reservas = 0) {
             console.log(cant_reservas)
             console.log(cant_reservas > 0)
             if (cant_reservas > 0) {
                 var reserva = " reseva pendiente";
                 if (cant_reservas > 1)
                     reserva = " resevas pendientes";
                 console.log("ACA ESTA ACTUALIZADO");
                 Q.confirm("Hay " + cant_reservas + reserva+" para este turno. Quiere solicitar una reserva igual?", () => {
                     this.NextStepForBooking(date, resourceId, resourceName, turnName, turnDuration, turnStart, turnTypeId, needCommend, comment);
                 });
             }
             else
                 this.NextStepForBooking(date, resourceId, resourceName, turnName, turnDuration, turnStart, turnTypeId, needCommend, comment);
             
         }
         public sendRequest(date, resourceId, resourceName, turnName, turnDuration, turnStart, turnTypeId,  comment = "") {
             if (resourceName == "") {
                 resourceName = this._resource.text();
             }
             var table = this._table;
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
                 Q.notifySuccess("Se ha enviado la solicitud correctamente");
                 table.html($.parseHTML(response));
                 this._grid.refresh();
             });
         }
       
         public moveDisplay(HideColumn, ShowColumn) {
             $('.' + HideColumn).hide();
             $('.' + ShowColumn).show();
         }
        
    }
}