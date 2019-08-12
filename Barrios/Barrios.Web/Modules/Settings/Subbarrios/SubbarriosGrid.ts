
namespace Barrios.Settings {

    @Serenity.Decorators.registerClass()
    export class SubbarriosGrid extends Serenity.EntityGrid<SubbarriosRow, any> {
        protected getColumnsKey() { return 'Settings.Subbarrios'; }
        protected getDialogType() { return SubbarriosDialog; }
        protected getIdProperty() { return SubbarriosRow.idProperty; }
        protected getLocalTextPrefix() { return SubbarriosRow.localTextPrefix; }
        protected getService() { return SubbarriosService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}