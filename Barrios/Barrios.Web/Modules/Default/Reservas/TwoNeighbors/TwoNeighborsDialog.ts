
namespace Barrios.Default {
    @Serenity.Decorators.registerClass()
    export class TwoNeighborsDialog extends Serenity.EntityDialog<ReservasRow, any> {
        protected getFormKey() { return TwoNeighborsForm.formKey; }
        protected getIdProperty() { return ReservasRow.idProperty; }
        protected getLocalTextPrefix() { return ReservasRow.localTextPrefix; }
        protected getNameProperty() { return ReservasRow.nameProperty; }
        protected getService() { return ReservasService.baseUrl; }
        public vecinoId=null;
        protected form = new TwoNeighborsForm(this.idPrefix);
        constructor(container: JQuery) {
            super(container);
            this.set_dialogTitle("Seleccione el vecino");
            
        }
        protected getToolbarButtons() {
            return [{
                title: 'Selecctionar',
                cssClass: 'add-button',
                onClick: () => {
                    if (this.validateForm()) {
                        this.vecinoId = this.form.IdVecino2.value;
                        this.dialogClose();
                    }
                }
            }];
        }
    }
}