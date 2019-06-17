
namespace Barrios.Contenidos {

    @Serenity.Decorators.registerClass()
    export class EncuestasValoracionesGrid extends Serenity.EntityGrid<EncuestasValoracionesRow, any> {
        protected getColumnsKey() { return 'Contenidos.EncuestasValoraciones'; }
        protected getDialogType() { return EncuestasValoracionesDialog; }
        protected getIdProperty() { return EncuestasValoracionesRow.idProperty; }
        protected getLocalTextPrefix() { return EncuestasValoracionesRow.localTextPrefix; }
        protected getService() { return EncuestasValoracionesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}