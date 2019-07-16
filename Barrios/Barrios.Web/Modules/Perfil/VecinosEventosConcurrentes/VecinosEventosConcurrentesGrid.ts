
namespace Barrios.Perfil {

    @Serenity.Decorators.registerClass()
    export class VecinosEventosConcurrentesGrid extends Common.GridEditorBase<VecinosEventosConcurrentesRow> {
        protected getColumnsKey() { return 'Perfil.VecinosEventosConcurrentes'; }
        protected getDialogType() { return VecinosEventosConcurrentesDialog; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}