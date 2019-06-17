
namespace Barrios.Contenidos {

    @Serenity.Decorators.registerClass()
    export class ComisionesGrid extends Serenity.EntityGrid<ComisionesRow, any> {
        protected getColumnsKey() { return 'Contenidos.Comisiones'; }
        protected getDialogType() { return ComisionesDialog; }
        protected getIdProperty() { return ComisionesRow.idProperty; }
        protected getLocalTextPrefix() { return ComisionesRow.localTextPrefix; }
        protected getService() { return ComisionesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}