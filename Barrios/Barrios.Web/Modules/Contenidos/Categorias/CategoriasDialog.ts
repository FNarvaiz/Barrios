
namespace Barrios.Contenidos {

    @Serenity.Decorators.registerClass()
    export class CategoriasDialog extends Serenity.EntityDialog<CategoriasRow, any> {
        protected getFormKey() { return CategoriasForm.formKey; }
        protected getIdProperty() { return CategoriasRow.idProperty; }
        protected getLocalTextPrefix() { return CategoriasRow.localTextPrefix; }
        protected getNameProperty() { return CategoriasRow.nameProperty; }
        protected getService() { return CategoriasService.baseUrl; }

        protected form = new CategoriasForm(this.idPrefix);

    }
}