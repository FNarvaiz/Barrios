
namespace Barrios.Contenidos {

    @Serenity.Decorators.registerClass()
    export class EncuestasValoracionesDialog extends Serenity.EntityDialog<EncuestasValoracionesRow, any> {
        protected getFormKey() { return EncuestasValoracionesForm.formKey; }
        protected getIdProperty() { return EncuestasValoracionesRow.idProperty; }
        protected getLocalTextPrefix() { return EncuestasValoracionesRow.localTextPrefix; }
        protected getNameProperty() { return EncuestasValoracionesRow.nameProperty; }
        protected getService() { return EncuestasValoracionesService.baseUrl; }

        protected form = new EncuestasValoracionesForm(this.idPrefix);

    }
}