
namespace Barrios.Default {

    @Serenity.Decorators.registerClass()
    export class ReservasTiposDialog extends Common.GridEditorDialog<ReservasTiposRow> {
        protected getFormKey() { return ReservasTiposForm.formKey; }
        protected getLocalTextPrefix() { return ReservasTiposRow.localTextPrefix; }

        protected form = new ReservasTiposForm(this.idPrefix);

    }
}