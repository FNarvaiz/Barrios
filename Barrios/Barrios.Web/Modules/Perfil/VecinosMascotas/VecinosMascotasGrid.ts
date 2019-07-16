
namespace Barrios.Perfil {

    @Serenity.Decorators.registerClass()
    export class VecinosMascotasGrid extends Serenity.EntityGrid<VecinosMascotasRow, any> {
        protected getColumnsKey() { return 'Perfil.VecinosMascotas'; }
        protected getDialogType() { return VecinosMascotasDialog; }
        protected getIdProperty() { return VecinosMascotasRow.idProperty; }
        protected getLocalTextPrefix() { return VecinosMascotasRow.localTextPrefix; }
        protected getService() { return VecinosMascotasService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}