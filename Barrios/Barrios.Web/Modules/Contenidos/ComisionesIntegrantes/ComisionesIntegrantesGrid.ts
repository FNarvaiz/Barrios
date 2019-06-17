
namespace Barrios.Contenidos {

    @Serenity.Decorators.registerClass()
    export class ComisionesIntegrantesGrid extends Serenity.EntityGrid<ComisionesIntegrantesRow, any> {
        protected getColumnsKey() { return 'Contenidos.ComisionesIntegrantes'; }
        protected getDialogType() { return ComisionesIntegrantesDialog; }
        protected getIdProperty() { return ComisionesIntegrantesRow.idProperty; }
        protected getLocalTextPrefix() { return ComisionesIntegrantesRow.localTextPrefix; }
        protected getService() { return ComisionesIntegrantesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}