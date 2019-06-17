
namespace Barrios.Contenidos {

    @Serenity.Decorators.registerClass()
    export class ProveedoresValoracionesDialog extends Serenity.EntityDialog<ProveedoresValoracionesRow, any> {
        protected getFormKey() { return ProveedoresValoracionesForm.formKey; }
        protected getIdProperty() { return ProveedoresValoracionesRow.idProperty; }
        protected getLocalTextPrefix() { return ProveedoresValoracionesRow.localTextPrefix; }
        protected getService() { return ProveedoresValoracionesService.baseUrl; }

        protected form = new ProveedoresValoracionesForm(this.idPrefix);

    }
}