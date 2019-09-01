
namespace Barrios.Default {

    @Serenity.Decorators.registerClass()
    export class HolidaysGrid extends Serenity.EntityGrid<HolidaysRow, any> {
        protected getColumnsKey() { return 'Default.Holidays'; }
        protected getDialogType() { return HolidaysDialog; }
        protected getIdProperty() { return HolidaysRow.idProperty; }
        protected getLocalTextPrefix() { return HolidaysRow.localTextPrefix; }
        protected getService() { return HolidaysService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getButtons() {
            var buttons = super.getButtons();
            buttons.push({
                title: 'Actualizar desde la web',
                cssClass: 'send-button',
                onClick: () => {
                    HolidaysService.UpdateFromAPI({  }, (Response) => {
                        Q.notifySuccess(Response);
                        this.refresh();
                    });
                }
            });
            return buttons;
        }
    }
}