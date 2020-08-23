
namespace Barrios.Perfil {

    import fld = VecinosMascotasRow.Fields;
    @Serenity.Decorators.registerClass()
    export class VecinosMascotasGrid extends Serenity.EntityGrid<VecinosMascotasRow, any> {
        protected getColumnsKey() { return 'Perfil.VecinosMascotas'; }
        protected getDialogType() { return VecinosMascotasDialog; }
        protected getIdProperty() { return VecinosMascotasRow.idProperty; }
        protected getLocalTextPrefix() { return VecinosMascotasRow.localTextPrefix; }
        protected getService() { return VecinosMascotasService.baseUrl; }

        private userId;
        constructor(container: JQuery, userId = null) {

            this.userId = userId;
            super(container);
            if (this.userId != null)
                this.element.find(".quick-filters-bar").remove();


        }
        protected onViewSubmit() {
            if (!super.onViewSubmit()) {
                return false;
            }
            var request = this.view.params as Serenity.ListRequest;
            if (this.userId != null) {
                request.Criteria = Serenity.Criteria.and(
                    request.Criteria,
                    [[fld.Userid], '=', this.userId]
                );
            }
            return true;
        }
        protected getButtons() {
            var buttons = super.getButtons();
            if (this.userId == null) {
                buttons.push({
                    title: 'Reporte',
                    cssClass: 'export-pdf-button',
                    onClick: () => {
                        if (this.getItems().length > 0) {
                            Q.postToUrl({
                                url: "~/VecinosMascotas/PetReport",
                                params: {
                                    requestString: $.toJSON( this.view.params)
                                },
                                target: "_blank"
                            });
                        }
                        else
                            Q.notifyInfo("No se encuentran registros");
                    }
                });
                buttons.push({
                    title: "Importar",
                    cssClass: "import-button",
                    onClick: () => {
                        var dialog = new Common.ImportFileDialog((fileValue: string) => {
                            VecinosMascotasService.ImportFile({ FileName: fileValue }, (response) => {
                                Q.notifySuccess(response);
                                this.refresh();
                            });
                        });
                        dialog.dialogOpen();
                    }
                });
            }

            return buttons;
        }
    }
}