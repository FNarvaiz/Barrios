
namespace Barrios.Contenidos {

    @Serenity.Decorators.registerClass()
    export class AvisosGrid extends Serenity.EntityGrid<AvisosRow, any> {
        protected getColumnsKey() { return 'Contenidos.Avisos'; }
        protected getDialogType() { return AvisosDialog; }
        protected getIdProperty() { return AvisosRow.idProperty; }
        protected getLocalTextPrefix() { return AvisosRow.localTextPrefix; }
        protected getService() { return AvisosService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}