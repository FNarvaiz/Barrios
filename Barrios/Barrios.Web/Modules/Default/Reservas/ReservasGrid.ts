namespace Barrios.Default {

    @Serenity.Decorators.registerClass()
    export class ReservasGrid extends Serenity.EntityGrid<ReservasRow, any> {
        protected getColumnsKey() { return 'Default.Reservas'; }
        protected getDialogType() { return ReservasDialog; }
        protected getIdProperty() { return ReservasRow.idProperty; }
        protected getLocalTextPrefix() { return ReservasRow.localTextPrefix; }
        protected getService() { return ReservasService.baseUrl; }

        constructor(container: JQuery) {

            super(container);
        }

    }
}