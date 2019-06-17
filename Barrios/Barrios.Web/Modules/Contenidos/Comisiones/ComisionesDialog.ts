
namespace Barrios.Contenidos {

    @Serenity.Decorators.registerClass()
    export class ComisionesDialog extends Serenity.EntityDialog<ComisionesRow, any> {
        protected getFormKey() { return ComisionesForm.formKey; }
        protected getIdProperty() { return ComisionesRow.idProperty; }
        protected getLocalTextPrefix() { return ComisionesRow.localTextPrefix; }
        protected getNameProperty() { return ComisionesRow.nameProperty; }
        protected getService() { return ComisionesService.baseUrl; }

        protected form = new ComisionesForm(this.idPrefix);

    }
}