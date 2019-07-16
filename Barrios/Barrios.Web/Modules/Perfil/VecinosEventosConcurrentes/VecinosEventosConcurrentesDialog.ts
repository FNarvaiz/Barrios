
namespace Barrios.Perfil {

    @Serenity.Decorators.registerClass()
    export class VecinosEventosConcurrentesDialog extends Common.GridEditorDialog<VecinosEventosConcurrentesRow> {
        protected getFormKey() { return VecinosEventosConcurrentesForm.formKey; }
        protected getLocalTextPrefix() { return VecinosEventosConcurrentesRow.localTextPrefix; }

        protected form = new VecinosEventosConcurrentesForm(this.idPrefix);

    }
}