
namespace Barrios.Contenidos {

    @Serenity.Decorators.registerClass()
    export class ProveedoresGrid extends Serenity.EntityGrid<ProveedoresRow, any> {
        protected getColumnsKey() { return 'Contenidos.Proveedores'; }
        protected getDialogType() { return ProveedoresDialog; }
        protected getIdProperty() { return ProveedoresRow.idProperty; }
        protected getLocalTextPrefix() { return ProveedoresRow.localTextPrefix; }
        protected getService() { return ProveedoresService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}