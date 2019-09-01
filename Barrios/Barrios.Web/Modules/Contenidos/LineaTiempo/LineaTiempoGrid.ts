
namespace Barrios.Contenidos {

    @Serenity.Decorators.registerClass()
    export class LineaTiempoGrid extends Serenity.EntityGrid<LineaTiempoRow, any> {
        protected getColumnsKey() { return 'Contenidos.LineaTiempo'; }
        protected getDialogType() { return LineaTiempoDialog; }
        protected getIdProperty() { return LineaTiempoRow.idProperty; }
        protected getLocalTextPrefix() { return LineaTiempoRow.localTextPrefix; }
        protected getService() { return LineaTiempoService.baseUrl; }
        public objId;
        protected pastTarget;
        protected odd;
        protected UseSubBarrios;
        constructor(container: JQuery, UseSubBarrios: boolean) {
            super(container);
            this.UseSubBarrios = UseSubBarrios;
        }
        protected onClick(e: JQueryEventObject, row: number, cell: number) {
            super.onClick(e, row, cell);
            if (e.isDefaultPrevented())
                return;
            var target = $(e.target);
            if (this.pastTarget != target) {
                if (this.pastTarget) {
                    this.pastTarget.parent().removeClass('slickgrid-row-selected');
                    if (this.odd)
                        this.pastTarget.parent().addClass('odd');
                }
                if (target.parent().hasClass('odd')) {
                    target.parent().removeClass('odd');
                    this.odd = true;
                }
                else
                    this.odd = false;
                target.parent().addClass('slickgrid-row-selected');
                this.pastTarget = target;
            }
            var item = this.itemAt(row);
            this.objId = item.Id;

            var target = $(e.target);
            if (target.parent().hasClass('inline-action'))
                target = target.parent();
            
        }
        protected getButtons() {
            var buttons = super.getButtons();
            buttons.push({
                title: 'Enviar mails',
                cssClass: 'send-button',
                onClick: () => {
                    if (this.objId != undefined) {
                        LineaTiempoService.SendMails({ Id:this.objId }, (Response) => {
                            Q.notifySuccess(Response);
                        });
                    }
                    else
                        Q.notifyInfo("Seleccione una nota de la grilla");
                }
            });
            if (this.UseSubBarrios) {
                buttons.push({
                    title: 'Enviar por subBarrio',
                    cssClass: 'send-button',
                    onClick: () => {
                        if (this.objId != undefined) {
                            var dialog = new Barrios.Settings.SubbarriosSelectDialog(this.element);
                            dialog.element.on("dialogclose", () => {
                                if (dialog.GetSave()) {
                                    LineaTiempoService.SendMailsForSubNeigborhoob({ LineTimeId: this.objId, SubNeigborhoob: dialog.GetKeys() }, (Response) => {
                                        Q.notifySuccess(Response);
                                    });
                                }
                            });
                            dialog.dialogOpen();
                        }
                        else
                            Q.notifyInfo("Seleccione una nota de la grilla");
                    }
                });
            }
            return buttons;
        }
    }
}