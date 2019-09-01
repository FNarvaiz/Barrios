/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
namespace Barrios.Administration {
    @Serenity.Decorators.registerClass()
    export class BarriosGrid extends Common.GridEditorBase<BarriosRow> {
        protected getColumnsKey() { return 'Administration.Barrios'; }
        protected getDialogType() { return BarriosDialog; }
        protected getLocalTextPrefix() { return BarriosRow.localTextPrefix; }
        constructor(container: JQuery) {
            super(container);
        }
    }
}

/*namespace Barrios.Administration {

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
}*/