
namespace Barrios.Default {

    @Serenity.Decorators.registerClass()
    export class ReservasTurnosEspecialesGrid extends Serenity.EntityGrid<ReservasTurnosEspecialesRow, any> {
        protected getColumnsKey() { return 'Default.ReservasTurnosEspeciales'; }
        protected getDialogType() { return ReservasTurnosEspecialesDialog; }
        protected getIdProperty() { return ReservasTurnosEspecialesRow.idProperty; }
        protected getLocalTextPrefix() { return ReservasTurnosEspecialesRow.localTextPrefix; }
        protected getService() { return ReservasTurnosEspecialesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}