namespace Barrios.Perfil {
    export class FrequentVisitorsSelectDialog extends Serenity.TemplatedDialog<any> {
        public GetSave() {
            return this.grid.save;
        }
        public GetNames() {
            var names: string[]=[];
            var keys = this.grid.rowSelection.getSelectedKeys();
            for (var x = 0; x < keys.length; x++)
                names.push(this.grid.getItems()[parseInt(keys[x]) - 1].Nombre);
            return names;
        }
        public grid: FrequentVisitorsSelectGrid;
        protected ncpdpHdId;
        constructor(container: JQuery) {
            super(container);
            this.dialogTitle = "Seleccione las personas";
        }
        protected getDialogOptions() {
            var options = super.getDialogOptions();
            options.width = "300px";
            return options;
        }
        protected onDialogOpen() {
            super.onDialogOpen();
            this.grid = new FrequentVisitorsSelectGrid($("#FVG"), () => { this.dialogClose(); });
            this.grid.init();
            this.grid.view.refresh();
        }
        protected arrange() {
            super.arrange();
        }
        protected getTemplate() {
            // you could also put this in a xxxDialog.Template.html file. it's here for simplicity.
            return "<div id='FVG' style='height: inherit;padding: 10px; '></div>";
        }
    }
}