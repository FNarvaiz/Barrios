
namespace Barrios.Perfil {

    @Serenity.Decorators.registerClass()
    export class VecinosVisitantesFrecuentesDialog extends Serenity.EntityDialog<VecinosVisitantesFrecuentesRow, any> {
        protected getFormKey() { return VecinosVisitantesFrecuentesForm.formKey; }
        protected getIdProperty() { return VecinosVisitantesFrecuentesRow.idProperty; }
        protected getLocalTextPrefix() { return VecinosVisitantesFrecuentesRow.localTextPrefix; }
        protected getNameProperty() { return VecinosVisitantesFrecuentesRow.nameProperty; }
        protected getService() { return VecinosVisitantesFrecuentesService.baseUrl; }

        protected form = new VecinosVisitantesFrecuentesForm(this.idPrefix);

    }
}