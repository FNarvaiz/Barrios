namespace Barrios.Settings {
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.resizable()
    @Serenity.Decorators.maximizable()
    export class TestDialog extends Serenity.TemplatedDialog<any> {
       
        protected getDialogOptions() {
            var options = super.getDialogOptions();
            options.width = "300px";
            return options;
        }
        constructor(container: JQuery) {
            super(container);
            this.dialogTitle = "Seleccione los sub Barrios a enviar";
        }
        protected onDialogOpen() {
            super.onDialogOpen();
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