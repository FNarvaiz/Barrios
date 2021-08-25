
namespace Barrios.Default {

    @Serenity.Decorators.registerClass()
    export class ReservasRecurrentesGrid extends Common.GridEditorBase<ReservasRecurrentesRow> {
        protected getColumnsKey() { return 'Default.ReservasRecurrentes'; }
        protected getDialogType() { return ReservasRecurrentesDialog; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}