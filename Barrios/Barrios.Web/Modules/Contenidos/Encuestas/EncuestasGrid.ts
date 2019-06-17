
namespace Barrios.Contenidos {

    @Serenity.Decorators.registerClass()
    export class EncuestasGrid extends Serenity.EntityGrid<EncuestasRow, any> {
        protected getColumnsKey() { return 'Contenidos.Encuestas'; }
        protected getDialogType() { return EncuestasDialog; }
        protected getIdProperty() { return EncuestasRow.idProperty; }
        protected getLocalTextPrefix() { return EncuestasRow.localTextPrefix; }
        protected getService() { return EncuestasService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}