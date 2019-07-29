
namespace Barrios.Contenidos {

    @Serenity.Decorators.registerClass()
    export class ComisionesIntegrantesGrid extends Common.GridEditorBase<ComisionesIntegrantesRow> {
        protected getColumnsKey() { return 'Contenidos.ComisionesIntegrantes'; }
        protected getDialogType() { return ComisionesIntegrantesDialog; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}