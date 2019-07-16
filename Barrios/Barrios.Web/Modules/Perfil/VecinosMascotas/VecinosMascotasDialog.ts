
namespace Barrios.Perfil {

    @Serenity.Decorators.registerClass()
    export class VecinosMascotasDialog extends Serenity.EntityDialog<VecinosMascotasRow, any> {
        protected getFormKey() { return VecinosMascotasForm.formKey; }
        protected getIdProperty() { return VecinosMascotasRow.idProperty; }
        protected getLocalTextPrefix() { return VecinosMascotasRow.localTextPrefix; }
        protected getNameProperty() { return VecinosMascotasRow.nameProperty; }
        protected getService() { return VecinosMascotasService.baseUrl; }

        protected form = new VecinosMascotasForm(this.idPrefix);

    }
}