namespace Barrios.Settings {
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.resizable()
    @Serenity.Decorators.maximizable()
    export class SubbarriosSelectDialog extends Serenity.TemplatedDialog<any> {
        public GetSave() {
            return this.grid.save;
        }
        public GetKeys() {
            return this.grid.rowSelection.getSelectedKeys();
        }
        protected getDialogOptions() {
            var options = super.getDialogOptions();
            options.width = "300px";
            return options;
        }
        public grid: SubbarriosSelectGrid;
        protected ncpdpHdId;
        constructor(container: JQuery) {
            super(container);
            this.dialogTitle = "Seleccione los sub Barrios a enviar";
        }
        protected onDialogOpen() {
            super.onDialogOpen();
            this.grid = new SubbarriosSelectGrid($("#SG"), () => { this.dialogClose(); });
            this.grid.init();
            this.grid.view.refresh();
        }
        protected arrange() {
            super.arrange();
        }
        protected getTemplate() {
            // you could also put this in a xxxDialog.Template.html file. it's here for simplicity.
            return "<div id='SG' style='height: inherit;padding: 10px;'></div>";
        }
    }
}