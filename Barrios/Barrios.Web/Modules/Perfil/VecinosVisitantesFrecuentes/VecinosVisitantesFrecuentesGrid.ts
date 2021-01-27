
namespace Barrios.Perfil {
    import fld = VecinosVisitantesFrecuentesRow.Fields;
    @Serenity.Decorators.registerClass()
    export class VecinosVisitantesFrecuentesGrid extends Serenity.EntityGrid<VecinosVisitantesFrecuentesRow, any> {
        protected getColumnsKey() { return 'Perfil.VecinosVisitantesFrecuentes'; }
        protected getDialogType() { return VecinosVisitantesFrecuentesDialog; }
        protected getIdProperty() { return VecinosVisitantesFrecuentesRow.idProperty; }
        protected getLocalTextPrefix() { return VecinosVisitantesFrecuentesRow.localTextPrefix; }
        protected getService() { return VecinosVisitantesFrecuentesService.baseUrl; }
        private userId;
        constructor(container: JQuery, userId = null) {

            this.userId = userId;
            super(container);
            if (this.userId != null)
                this.element.find(".quick-filters-bar").remove();
           
            
        }
        protected createSlickGrid() {
            var grid = super.createSlickGrid();
            if (this.userId != null)
                grid.setColumns(grid.getColumns().filter(function (column) {
                    return (column.field != fld.UseridUsername && column.visible === true);
                }));
            return grid;
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
                                url: "~/Report/Render",
                                params: {
                                    key: "Visit.Report",
                                    ext: "pdf",
                                    print: 0,
                                    opt: $.toJSON({
                                        request: this.view.params
                                    })
                                },
                                target: "_blank"
                            });
                        }
                        else
                            Q.notifyInfo("No se encuentran registros");
                    }
                });
                //buttons.push({
                //    title: 'Reporte',
                //    cssClass: 'export-pdf-button',
                //    onClick: () => {
                //        if (this.getItems().length > 0) {
                //            Q.postToUrl({
                //                url: "~/VecinosVisitantesFrecuentes/VisitReport",
                //                params: {
                //                    requestString: $.toJSON(this.view.params)
                //                },
                //                target: "_blank"
                //            });
                //        }
                //        else
                //            Q.notifyInfo("No se encuentran registros");
                //    }
                //});
                buttons.push({
                    title: "Importar",
                    cssClass: "import-button",
                    onClick: () => {
                        var dialog = new Common.ImportFileDialog((fileValue: string) => {
                            VecinosVisitantesFrecuentesService.ImportFile({ FileName: fileValue }, (response) => {
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
    }
}