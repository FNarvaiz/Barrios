
namespace Barrios.Default {

    @Serenity.Decorators.registerClass()
    export class ReservasRecursosGrid extends Serenity.EntityGrid<ReservasRecursosRow, any> {
        protected getColumnsKey() { return 'Default.ReservasRecursos'; }
        protected getDialogType() { return ReservasRecursosDialog; }
        protected getIdProperty() { return ReservasRecursosRow.idProperty; }
        protected getLocalTextPrefix() { return ReservasRecursosRow.localTextPrefix; }
        protected getService() { return ReservasRecursosService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getButtons() {
            var buttons = super.getButtons();
            buttons.push({
                title: "Importar recursos",
                cssClass: "import-button",
                onClick: () => {
                    var dialog = new Common.ImportFileDialog((fileValue: string) => {
                        ReservasRecursosService.ImportFile({ FileName: fileValue }, (response) => {
                            Q.notifySuccess(response);
                            this.refresh();
                        });
                    });
                    dialog.dialogOpen();
                }
            });
            return buttons;
        }
    }

}