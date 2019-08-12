
namespace Barrios.Settings {

    @Serenity.Decorators.registerClass()
    export class SubbarriosDialog extends Serenity.EntityDialog<SubbarriosRow, any> {
        protected getFormKey() { return SubbarriosForm.formKey; }
        protected getIdProperty() { return SubbarriosRow.idProperty; }
        protected getLocalTextPrefix() { return SubbarriosRow.localTextPrefix; }
        protected getNameProperty() { return SubbarriosRow.nameProperty; }
        protected getService() { return SubbarriosService.baseUrl; }

        protected form = new SubbarriosForm(this.idPrefix);

    }
}