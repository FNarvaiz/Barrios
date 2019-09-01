
namespace Barrios.Default {
    import fld = ReservasRow.Fields;
    @Serenity.Decorators.registerClass()
    export class MyBookingsGrid extends Serenity.EntityGrid<ReservasRow, any> {
        protected getColumnsKey() { return 'Default.MyBookings'; }
        protected getDialogType() { return ReservasDialog; }
        protected getIdProperty() { return ReservasRow.idProperty; }
        protected getLocalTextPrefix() { return ReservasRow.localTextPrefix; }
        protected getService() { return ReservasService.baseUrl; }
        private showExpiredTerminated = true;
        private userId;
        public refreshTable;
        constructor(container: JQuery,id :number) {
            super(container);
            this.userId = id;
            this.setTitle("Mis reservas");
            this.element.find('.s-QuickSearchBar').remove();
            var filterDate = this.tryFindQuickFilter(Serenity.BooleanEditor, fld.Fecha);
            this.element.find(".select2-search").remove();
            if (filterDate)
                filterDate.value = true; 
        }
        protected getButtons() {
            return [];
        }
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[] {
            // get quick filter list from base class, e.g. columns
            let filters = super.getQuickFilters();
            filters.push({
                field: fld.Fecha,
                type: Serenity.BooleanEditor,
                title: 'Ocultar terminadas',
                handler: h => {
                    this.showExpiredTerminated = !!h.value;
                }
            });
            return filters;
        }
        protected getColumns() {
            var columns = super.getColumns();
            // Canequita delete column 
            columns.splice(1, 0,
                {
                    field: "DeleteRow",
                    name: "",
                    format: ctx => {
                        return "<a class='inline-action delete-row' title='delete'><i class='fa fa-trash-o text-red'></i></a>";
                    },
                    width: 54,
                    minWidth: 24,
                    maxWidth: 24,
                    visible: true
                });
            return columns;
        }
        protected onViewSubmit() {
            if (!super.onViewSubmit()) {
                return false;
            }
            var request = this.view.params as Serenity.ListRequest;
            request.Criteria = Serenity.Criteria.or(
                [['Id_Vecino'], '=', this.userId],
                [['Id_Vecino_2'], '=', this.userId]
            );
            if (this.showExpiredTerminated) {
                var today = new Date();
                request.Criteria = Serenity.Criteria.and(request.Criteria,
                    [['Fecha'], '>', today.toISOString().substring(0, 10).replace(/-/g, '')]
                );
            }
            return true;
        }
        protected onClick(e: JQueryEventObject, row: number, cell: number) {
            super.onClick(e, row, cell);
            if (e.isDefaultPrevented())
                return;

            var target = $(e.target);
            if (target.parent().hasClass('inline-action')) {
                target = target.parent();
            }
            var o = this;
            var item = this.itemAt(row);
            // Canequita delete function 
            console.log(target);
            console.log(item);
            if (target.hasClass('delete-row')) {

                console.log("entro")
                e.preventDefault();
                Q.confirm('¿Quiere cancelar la reserva?', () => {
                    ReservasService.bookingCancel({ ID: (item as ReservasRow).Id }, (response) => {
                        Q.notifySuccess(response);
                        o.refresh();
                        o.refreshTable();
                    });
                });
            }
        }
    }
}
