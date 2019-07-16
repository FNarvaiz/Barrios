
namespace Barrios.Default {

    @Serenity.Decorators.registerClass()
    export class ReservasTurnosEspecialesGrid extends Common.GridEditorBase<ReservasTurnosEspecialesRow> {
        protected getColumnsKey() { return 'Default.ReservasTurnosEspeciales'; }
        protected getDialogType() { return ReservasTurnosEspecialesDialog; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}