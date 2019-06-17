
namespace Barrios.Contenidos {

    @Serenity.Decorators.registerClass()
    export class ComisionesIntegrantesDialog extends Serenity.EntityDialog<ComisionesIntegrantesRow, any> {
        protected getFormKey() { return ComisionesIntegrantesForm.formKey; }
        protected getIdProperty() { return ComisionesIntegrantesRow.idProperty; }
        protected getLocalTextPrefix() { return ComisionesIntegrantesRow.localTextPrefix; }
        protected getNameProperty() { return ComisionesIntegrantesRow.nameProperty; }
        protected getService() { return ComisionesIntegrantesService.baseUrl; }

        protected form = new ComisionesIntegrantesForm(this.idPrefix);

    }
}