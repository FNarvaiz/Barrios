
namespace Barrios.Default {

    @Serenity.Decorators.registerClass()
    export class ReservasTiposGrid extends Serenity.EntityGrid<ReservasTiposRow, any> {
        protected getColumnsKey() { return 'Default.ReservasTipos'; }
        protected getDialogType() { return ReservasTiposDialog; }
        protected getIdProperty() { return ReservasTiposRow.idProperty; }
        protected getLocalTextPrefix() { return ReservasTiposRow.localTextPrefix; }
        protected getService() { return ReservasTiposService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}