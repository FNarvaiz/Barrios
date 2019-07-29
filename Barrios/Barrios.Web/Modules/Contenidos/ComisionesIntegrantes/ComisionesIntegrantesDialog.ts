
namespace Barrios.Contenidos {

    @Serenity.Decorators.registerClass()
    export class ComisionesIntegrantesDialog extends Common.GridEditorDialog<ComisionesIntegrantesRow> {
        protected getFormKey() { return ComisionesIntegrantesForm.formKey; }
        protected getLocalTextPrefix() { return ComisionesIntegrantesRow.localTextPrefix; }

        protected form = new ComisionesIntegrantesForm(this.idPrefix);

    }
}