namespace Barrios.Default {
    import fld = ReservasRow.Fields;
    @Serenity.Decorators.registerClass()
    export class ReservasGrid extends Serenity.EntityGrid<ReservasRow, any> {
        protected getColumnsKey() { return 'Default.Reservas'; }
        protected getDialogType() { return ReservasDialog; }
        protected getIdProperty() { return ReservasRow.idProperty; }
        protected getLocalTextPrefix() { return ReservasRow.localTextPrefix; }
        protected getService() { return ReservasService.baseUrl; }
        protected _CurrentRequest;
        private item: ReservasRow;
        constructor(container: JQuery) {

            super(container,{
                selectionMode: 'single',
                enableRowSelection: true
            } as EntityGridOptions);
        }
        protected onClick(e: JQueryEventObject, row: number, cell: number): void {
            super.onClick(e, row, cell);
            this.item = this.itemAt(row);
            if(this.item && this.item.Confirmada==false){
                
            }
        }
        protected getSlickOptions(): Slick.GridOptions {
            var opt = super.getSlickOptions();
            opt.enableCellNavigation = true;
            opt.enableTextSelectionOnCells = true;
            opt.selectedCellCssClass = "slick-row-selected";
            return opt;
        }
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[] {
            // get quick filter list from base class, e.g. columns
            let filters = super.getQuickFilters();
            Q.first(filters, x => x.field == fld.Fecha).init = w => {
                let start = new Date();
                (w as Serenity.DateEditor).valueAsDate = start;
                let endDate = w.element.nextAll(".s-DateEditor").getWidget(Serenity.DateEditor);
               
                endDate.valueAsDate = new Date(start.getFullYear() + 1, start.getMonth(), start.getDate());
            };

            return filters;
        }
        protected getItemCssClass(item: ReservasRow, index: number): string {
            let klass: string = "";
            if (!item.Confirmada)
                klass = "statusRed";
                //klass = "statusGreen";
            //else 
            return Q.trimToNull(klass);
        }
        protected getButtons() {
            var buttons = super.getButtons();
            buttons.push({
                title: 'Reporte',
                cssClass: 'export-pdf-button',
                onClick: () => {
                    if (this.getItems().length > 0) {
                        Q.postToUrl({
                            url: "~/Report/Render",
                            params: {
                                key: "Booking.Report",
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
            buttons.push({
                title: 'Confirmar',
                cssClass: 'checkbox-yes-button',
                onClick: () => {
                    if (this.item && !this.item.Confirmada) {
                        ReservasService.ConfirmReservation({ID:this.item.Id
                        },(response)=>{
                            this.item=null;
                            this.refresh();
                        });
                    }
                    else
                        Q.notifyError("Seleccione alguna reserva para confirmar");
                }
            });
            buttons.push({
                title: "Importar reservas",
                cssClass: "import-button",
                onClick: () => {
                    var dialog = new Common.ImportFileDialog((fileValue: string) => {
                        ReservasService.ImportFile({ FileName: fileValue }, (response) => {
                            Q.confirm(response, () => { });
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