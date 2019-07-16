
namespace Barrios.Perfil {

    @Serenity.Decorators.registerClass()
    export class VecinosEventosDialog extends Serenity.EntityDialog<VecinosEventosRow, any> {
        protected getFormKey() { return VecinosEventosForm.formKey; }
        protected getIdProperty() { return VecinosEventosRow.idProperty; }
        protected getLocalTextPrefix() { return VecinosEventosRow.localTextPrefix; }
        protected getNameProperty() { return VecinosEventosRow.nameProperty; }
        protected getService() { return VecinosEventosService.baseUrl; }

        protected form = new VecinosEventosForm(this.idPrefix);

    }
}