
namespace Barrios.Contenidos {

    @Serenity.Decorators.registerClass()
    export class ProveedoresValoracionesGrid extends Serenity.EntityGrid<ProveedoresValoracionesRow, any> {
        protected getColumnsKey() { return 'Contenidos.ProveedoresValoraciones'; }
        protected getDialogType() { return ProveedoresValoracionesDialog; }
        protected getIdProperty() { return ProveedoresValoracionesRow.idProperty; }
        protected getLocalTextPrefix() { return ProveedoresValoracionesRow.localTextPrefix; }
        protected getService() { return ProveedoresValoracionesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}