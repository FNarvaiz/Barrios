/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Barrios.Administration {

    @Serenity.Decorators.registerClass()
    export class BarriosGrid extends Serenity.EntityGrid<BarriosRow, any> {
        protected getColumnsKey() { return 'Administration.Barrios'; }
        protected getDialogType() { return BarriosDialog; }
        protected getIdProperty() { return BarriosRow.idProperty; }
        protected getLocalTextPrefix() { return BarriosRow.localTextPrefix; }
        protected getService() { return BarriosService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}