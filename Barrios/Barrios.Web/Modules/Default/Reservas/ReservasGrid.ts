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
        constructor(container: JQuery) {

            super(container);
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
           
            return buttons;
        }
        
    }
}