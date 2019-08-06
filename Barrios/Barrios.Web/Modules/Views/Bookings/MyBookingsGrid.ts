
namespace Barrios.Default {
    import fld = ReservasRow.Fields;
    @Serenity.Decorators.registerClass()
    export class MyBookingsGrid extends Serenity.EntityGrid<ReservasRow, any> {
        protected getColumnsKey() { return 'Default.MyBookings'; }
        protected getDialogType() { return ReservasDialog; }
        protected getIdProperty() { return ReservasRow.idProperty; }
        protected getLocalTextPrefix() { return ReservasRow.localTextPrefix; }
        protected getService() { return ReservasService.baseUrl; }
        private showExpiredTerminated=true;
        constructor(container: JQuery) {
            super(container);
            this.setTitle("Mis reservas");
            this.element.find('.s-QuickSearchBar').remove();
            var filterDate = this.tryFindQuickFilter(Serenity.BooleanEditor, fld.Fecha);
            if (filterDate)
                filterDate.value = true;
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
        protected onViewSubmit() {
            // only continue if base class returns true (didn't cancel request)
            if (!super.onViewSubmit()) {
                return false;
            }

            // view object is the data source for grid (SlickRemoteView)
            // this is an EntityGrid so its Params object is a ListRequest
            var request = this.view.params as Serenity.ListRequest;
            // list request has a Criteria parameter
            // we AND criteria here to existing one because 
            // otherwise we might clear filter set by 
            // an edit filter dialog if any.
            if (this.showExpiredTerminated) {
                var today = new Date();
                request.Criteria = Serenity.Criteria.and(request.Criteria,
                    [['Fecha'], '>', today.toISOString().substring(0, 10).replace(/-/g, '')]);
            }
            return true;
        }
        protected getButtons() {
            return [];
        }
        
    }
}
