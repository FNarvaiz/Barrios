
namespace Barrios.Default {

    @Serenity.Decorators.registerClass()
    export class ReservasTiposDialog extends Serenity.EntityDialog<ReservasTiposRow, any> {
        protected getFormKey() { return ReservasTiposForm.formKey; }
        protected getIdProperty() { return ReservasTiposRow.idProperty; }
        protected getLocalTextPrefix() { return ReservasTiposRow.localTextPrefix; }
        protected getNameProperty() { return ReservasTiposRow.nameProperty; }
        protected getService() { return ReservasTiposService.baseUrl; }

        protected form = new ReservasTiposForm(this.idPrefix);

    }
}