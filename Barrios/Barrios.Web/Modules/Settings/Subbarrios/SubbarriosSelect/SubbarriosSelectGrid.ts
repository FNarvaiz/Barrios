
namespace Barrios.Settings {

    @Serenity.Decorators.registerClass()
    export class SubbarriosSelectGrid extends Serenity.EntityGrid<SubbarriosRow, any> {
        protected getColumnsKey() { return 'Settings.Subbarrios'; }
        protected getDialogType() { return SubbarriosDialog; }
        protected getIdProperty() { return SubbarriosRow.idProperty; }
        protected getLocalTextPrefix() { return SubbarriosRow.localTextPrefix; }
        protected getService() { return SubbarriosService.baseUrl; }
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
                title: 'Enviar mails',
                cssClass: 'approve-button',
                onClick: e => {
                    if (this.rowSelection.getSelectedKeys().length > 0) {
                        this.save = true;
                        this.closeVar();
                    }
                    else {
                        Q.notifyError("Seleccione alguno para enviar el correo.");
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