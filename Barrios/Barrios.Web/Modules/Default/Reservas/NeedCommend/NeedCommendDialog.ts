
namespace Barrios.Default {
    @Serenity.Decorators.registerClass()
    export class NeedCommendDialog extends Serenity.EntityDialog<ReservasRow, any> {
        protected getFormKey() { return NeedCommendForm.formKey; }
        protected getIdProperty() { return ReservasRow.idProperty; }
        protected getLocalTextPrefix() { return ReservasRow.localTextPrefix; }
        protected getNameProperty() { return ReservasRow.nameProperty; }
        protected getService() { return ReservasService.baseUrl; }
        public commend=null;
        protected form = new NeedCommendForm(this.idPrefix);
        constructor(container: JQuery) {
            super(container);
            this.set_dialogTitle("Algo que comentar sobre la reserva");
            
        }
        protected getDialogOptions() {
            var opt = super.getDialogOptions();
            opt.width = 400;
            return opt;
        }
        protected getToolbarButtons() {
            return [{
                title: 'Reservar',
                cssClass: 'add-button',
                onClick: () => {
                    if (this.validateForm()) {
                        this.commend = this.form.Observaciones.value;
                        this.dialogClose();
                    }
                }
            }];
        }
    }
}