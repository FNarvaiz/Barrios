
namespace Barrios.Default {

    @Serenity.Decorators.registerClass()
    export class ReservasTurnosEspecialesDialog extends Common.GridEditorDialog<ReservasTurnosEspecialesRow> {
        protected getFormKey() { return ReservasTurnosEspecialesForm.formKey; }
        protected getLocalTextPrefix() { return ReservasTurnosEspecialesRow.localTextPrefix; }

        protected form = new ReservasTurnosEspecialesForm(this.idPrefix);

    }
}