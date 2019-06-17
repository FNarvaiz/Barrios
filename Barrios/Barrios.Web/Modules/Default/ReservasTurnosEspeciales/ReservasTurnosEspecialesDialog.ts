
namespace Barrios.Default {

    @Serenity.Decorators.registerClass()
    export class ReservasTurnosEspecialesDialog extends Serenity.EntityDialog<ReservasTurnosEspecialesRow, any> {
        protected getFormKey() { return ReservasTurnosEspecialesForm.formKey; }
        protected getIdProperty() { return ReservasTurnosEspecialesRow.idProperty; }
        protected getLocalTextPrefix() { return ReservasTurnosEspecialesRow.localTextPrefix; }
        protected getNameProperty() { return ReservasTurnosEspecialesRow.nameProperty; }
        protected getService() { return ReservasTurnosEspecialesService.baseUrl; }

        protected form = new ReservasTurnosEspecialesForm(this.idPrefix);

    }
}