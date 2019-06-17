
namespace Barrios.Contenidos {

    @Serenity.Decorators.registerClass()
    export class CategoriasGrid extends Serenity.EntityGrid<CategoriasRow, any> {
        protected getColumnsKey() { return 'Contenidos.Categorias'; }
        protected getDialogType() { return CategoriasDialog; }
        protected getIdProperty() { return CategoriasRow.idProperty; }
        protected getLocalTextPrefix() { return CategoriasRow.localTextPrefix; }
        protected getService() { return CategoriasService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}