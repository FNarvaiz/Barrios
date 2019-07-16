
namespace Barrios.Default {

    @Serenity.Decorators.registerClass()
    export class ReservasRecursosGrid extends Serenity.EntityGrid<ReservasRecursosRow, any> {
        protected getColumnsKey() { return 'Default.ReservasRecursos'; }
        protected getDialogType() { return ReservasRecursosDialog; }
        protected getIdProperty() { return ReservasRecursosRow.idProperty; }
        protected getLocalTextPrefix() { return ReservasRecursosRow.localTextPrefix; }
        protected getService() { return ReservasRecursosService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }

}