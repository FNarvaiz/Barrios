
namespace Barrios.Contenidos {

    @Serenity.Decorators.registerClass()
    export class ProveedoresDialog extends Serenity.EntityDialog<ProveedoresRow, any> {
        protected getFormKey() { return ProveedoresForm.formKey; }
        protected getIdProperty() { return ProveedoresRow.idProperty; }
        protected getLocalTextPrefix() { return ProveedoresRow.localTextPrefix; }
        protected getNameProperty() { return ProveedoresRow.nameProperty; }
        protected getService() { return ProveedoresService.baseUrl; }

        protected form = new ProveedoresForm(this.idPrefix);

    }
}