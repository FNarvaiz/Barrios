
namespace Barrios.Perfil {

    @Serenity.Decorators.registerClass()
    export class VecinosActividadesGrid extends Serenity.EntityGrid<VecinosActividadesRow, any> {
        protected getColumnsKey() { return 'Perfil.VecinosActividades'; }
        protected getDialogType() { return VecinosActividadesDialog; }
        protected getIdProperty() { return VecinosActividadesRow.idProperty; }
        protected getLocalTextPrefix() { return VecinosActividadesRow.localTextPrefix; }
        protected getService() { return VecinosActividadesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}