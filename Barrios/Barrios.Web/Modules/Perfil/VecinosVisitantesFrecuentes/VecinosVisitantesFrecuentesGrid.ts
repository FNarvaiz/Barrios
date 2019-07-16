
namespace Barrios.Perfil {

    @Serenity.Decorators.registerClass()
    export class VecinosVisitantesFrecuentesGrid extends Serenity.EntityGrid<VecinosVisitantesFrecuentesRow, any> {
        protected getColumnsKey() { return 'Perfil.VecinosVisitantesFrecuentes'; }
        protected getDialogType() { return VecinosVisitantesFrecuentesDialog; }
        protected getIdProperty() { return VecinosVisitantesFrecuentesRow.idProperty; }
        protected getLocalTextPrefix() { return VecinosVisitantesFrecuentesRow.localTextPrefix; }
        protected getService() { return VecinosVisitantesFrecuentesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}