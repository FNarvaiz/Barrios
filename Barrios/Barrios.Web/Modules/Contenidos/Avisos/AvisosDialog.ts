
namespace Barrios.Contenidos {

    @Serenity.Decorators.registerClass()
    export class AvisosDialog extends Serenity.EntityDialog<AvisosRow, any> {
        protected getFormKey() { return AvisosForm.formKey; }
        protected getIdProperty() { return AvisosRow.idProperty; }
        protected getLocalTextPrefix() { return AvisosRow.localTextPrefix; }
        protected getNameProperty() { return AvisosRow.nameProperty; }
        protected getService() { return AvisosService.baseUrl; }

        protected form = new AvisosForm(this.idPrefix);

    }
}