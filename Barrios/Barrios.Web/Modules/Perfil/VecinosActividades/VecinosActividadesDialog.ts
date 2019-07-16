
namespace Barrios.Perfil {

    @Serenity.Decorators.registerClass()
    export class VecinosActividadesDialog extends Serenity.EntityDialog<VecinosActividadesRow, any> {
        protected getFormKey() { return VecinosActividadesForm.formKey; }
        protected getIdProperty() { return VecinosActividadesRow.idProperty; }
        protected getLocalTextPrefix() { return VecinosActividadesRow.localTextPrefix; }
        protected getNameProperty() { return VecinosActividadesRow.nameProperty; }
        protected getService() { return VecinosActividadesService.baseUrl; }

        protected form = new VecinosActividadesForm(this.idPrefix);

    }
}