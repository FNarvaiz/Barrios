
namespace Barrios.Perfil {

    @Serenity.Decorators.registerClass()
    export class FrequentVisitorsSelectGrid extends Serenity.EntityGrid<VecinosVisitantesFrecuentesRow, any> {
        protected getColumnsKey() { return 'Perfil.VecinosVisitantesFrecuentes'; }
        protected getDialogType() { return VecinosVisitantesFrecuentesDialog; }
        protected getIdProperty() { return VecinosVisitantesFrecuentesRow.idProperty; }
        protected getLocalTextPrefix() { return VecinosVisitantesFrecuentesRow.localTextPrefix; }
        protected getService() { return VecinosVisitantesFrecuentesService.baseUrl; }
        protected showExpiredTerminated;
        public rowSelection: Serenity.GridRowSelectionMixin;
        private closeVar;
        public save = false;
        constructor(container: JQuery,  close) {
            super(container);
            this.titleDiv.remove();
            this.closeVar = close;
        }

        protected getButtons() {
            return [{
                title: 'Seleccionar',
                cssClass: 'approve-button',
                onClick: e => {
                    if (this.rowSelection.getSelectedKeys().length > 0) {
                        this.save = true;
                        this.closeVar();
                    }
                    else {
                        Q.notifyError("Seleccione alguno para agregar al evento.");
                    }
                },
                separator: true
            }];
        }
        protected createToolbarExtensions() {
            super.createToolbarExtensions();
            this.rowSelection = new Serenity.GridRowSelectionMixin(this);
        }
        protected getColumns() {
            var columns = super.getColumns();
            columns.splice(0, 0, Serenity.GridRowSelectionMixin.createSelectColumn(() => this.rowSelection));
            return columns;
        }
        protected usePager() {
            return false;
        }
       
    }
}