
namespace Barrios.Contenidos {

    @Serenity.Decorators.registerClass()
    export class LineaTiempoGrid extends Serenity.EntityGrid<LineaTiempoRow, any> {
        protected getColumnsKey() { return 'Contenidos.LineaTiempo'; }
        protected getDialogType() { return LineaTiempoDialog; }
        protected getIdProperty() { return LineaTiempoRow.idProperty; }
        protected getLocalTextPrefix() { return LineaTiempoRow.localTextPrefix; }
        protected getService() { return LineaTiempoService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}