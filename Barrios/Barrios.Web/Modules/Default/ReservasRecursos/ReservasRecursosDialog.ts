
namespace Barrios.Default {

    @Serenity.Decorators.registerClass()
    export class ReservasRecursosDialog extends Serenity.EntityDialog<ReservasRecursosRow, any> {
        protected getFormKey() { return ReservasRecursosForm.formKey; }
        protected getIdProperty() { return ReservasRecursosRow.idProperty; }
        protected getLocalTextPrefix() { return ReservasRecursosRow.localTextPrefix; }
        protected getNameProperty() { return ReservasRecursosRow.nameProperty; }
        protected getService() { return ReservasRecursosService.baseUrl; }

        protected form = new ReservasRecursosForm(this.idPrefix);
        

        
        public dialogOpen() {
            this.element.addClass("s-Default-ReservasRecursosDialog");
            super.dialogOpen(true);
           
        }
    }
}