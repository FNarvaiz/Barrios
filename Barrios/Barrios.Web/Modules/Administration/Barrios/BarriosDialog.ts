
namespace Barrios.Administration {

    @Serenity.Decorators.registerClass()
    export class BarriosDialog extends Serenity.EntityDialog<BarriosRow, any> {
        protected getFormKey() { return BarriosForm.formKey; }
        protected getIdProperty() { return BarriosRow.idProperty; }
        protected getLocalTextPrefix() { return BarriosRow.localTextPrefix; }
        protected getNameProperty() { return BarriosRow.nameProperty; }
        protected getService() { return BarriosService.baseUrl; }

        protected form = new BarriosForm(this.idPrefix);

    }
}