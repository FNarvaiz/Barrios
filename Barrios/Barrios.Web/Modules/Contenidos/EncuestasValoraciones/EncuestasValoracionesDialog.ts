
namespace Barrios.Contenidos {

    @Serenity.Decorators.registerClass()
    export class EncuestasValoracionesDialog extends Serenity.EntityDialog<EncuestasValoracionesRow, any> {
        protected getFormKey() { return EncuestasValoracionesForm.formKey; }
        protected getIdProperty() { return EncuestasValoracionesRow.idProperty; }
        protected getLocalTextPrefix() { return EncuestasValoracionesRow.localTextPrefix; }
        protected getNameProperty() { return EncuestasValoracionesRow.nameProperty; }
        protected getService() { return EncuestasValoracionesService.baseUrl; }
        
        public saveSucces;
        public SetSurveyId(id) {
            console.log(id);
            this.form.IdEncuesta.value = id;
        }
        protected form = new EncuestasValoracionesForm(this.idPrefix);
        protected getDialogOptions() {
            var options = super.getDialogOptions();
            options.width = "400px";
            return options;
        }
        protected constructor() {
            super();
            this.applyChangesButton.remove();
            this.deleteButton.remove();
        }
        protected onSaveSuccess(response) {
            super.onSaveSuccess(response);
            this.saveSucces();
        }
        
    }
}