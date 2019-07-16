
namespace Barrios.Default {

    @Serenity.Decorators.registerClass()
    export class ReservasTiposGrid extends Common.GridEditorBase<ReservasTiposRow> {
        protected getColumnsKey() { return 'Default.ReservasTipos'; }
        protected getDialogType() { return ReservasTiposDialog; }
       
        constructor(container: JQuery) {
            super(container);
        }
    }
}