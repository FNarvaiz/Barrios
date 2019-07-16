
namespace Barrios.Perfil {

    @Serenity.Decorators.registerClass()
    export class VecinosEventosGrid extends Serenity.EntityGrid<VecinosEventosRow, any> {
        protected getColumnsKey() { return 'Perfil.VecinosEventos'; }
        protected getDialogType() { return VecinosEventosDialog; }
        protected getIdProperty() { return VecinosEventosRow.idProperty; }
        protected getLocalTextPrefix() { return VecinosEventosRow.localTextPrefix; }
        protected getService() { return VecinosEventosService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}