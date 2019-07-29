
namespace Barrios.Contenidos {

    @Serenity.Decorators.registerClass()
    export class LineaTiempoDialog extends Serenity.EntityDialog<LineaTiempoRow, any> {
        protected getFormKey() { return LineaTiempoForm.formKey; }
        protected getIdProperty() { return LineaTiempoRow.idProperty; }
        protected getLocalTextPrefix() { return LineaTiempoRow.localTextPrefix; }
        protected getNameProperty() { return LineaTiempoRow.nameProperty; }
        protected getService() { return LineaTiempoService.baseUrl; }

        protected form = new LineaTiempoForm(this.idPrefix);
        constructor(container: JQuery) {
            super(container);
            CategoriasDialog.typeCategory = 2;
        }
    }
}