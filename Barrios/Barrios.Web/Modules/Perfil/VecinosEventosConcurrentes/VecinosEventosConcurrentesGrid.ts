
namespace Barrios.Perfil {

    @Serenity.Decorators.registerClass()
    export class VecinosEventosConcurrentesGrid extends Common.GridEditorBase<VecinosEventosConcurrentesRow> {
        protected getColumnsKey() { return 'Perfil.VecinosEventosConcurrentes'; }
        protected getDialogType() { return VecinosEventosConcurrentesDialog; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getButtons() {
            var buttons = super.getButtons();
            buttons.push({
                title: 'Agregar desde frecuentes',
                cssClass: 'send-button',
                onClick: () => {
                    var items: VecinosEventosConcurrentesRow[]=[];
                    var grid = this;
                    var dialog = new Barrios.Perfil.FrequentVisitorsSelectDialog(this.element);
                    dialog.element.on("dialogclose", () => {
                        console.log(grid.getItems());
                        if (dialog.GetSave()) {
                            var count = grid.getItems().length + 1;
                            var obj: VecinosEventosConcurrentesRow;
                            dialog.GetNames().forEach((value, index) => {
                                obj = { Nombre: value };
                                (obj as any).__id ="`"+ count;
                                items.push(obj);
                                count++;
                            });
                            grid.getItems().forEach((value) => {
                                items.push(value);
                            });
                            console.log(items);
                            grid.setItems(items);
                        }
                    });
                    dialog.dialogOpen();
                }
            });
            return buttons;
        }
    }
}