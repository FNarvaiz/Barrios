
namespace Barrios.Contenidos {

    @Serenity.Decorators.registerClass()
    export class EncuestasDialog extends Serenity.EntityDialog<EncuestasRow, any> {
        protected getFormKey() { return EncuestasForm.formKey; }
        protected getIdProperty() { return EncuestasRow.idProperty; }
        protected getLocalTextPrefix() { return EncuestasRow.localTextPrefix; }
        protected getNameProperty() { return EncuestasRow.nameProperty; }
        protected getService() { return EncuestasService.baseUrl; }

        protected form = new EncuestasForm(this.idPrefix);

    }
}