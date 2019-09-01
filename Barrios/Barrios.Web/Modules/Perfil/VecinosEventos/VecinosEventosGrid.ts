
namespace Barrios.Perfil {
    import fld = VecinosEventosRow.Fields;
    @Serenity.Decorators.registerClass()
    export class VecinosEventosGrid extends Serenity.EntityGrid<VecinosEventosRow, any> {
        protected getColumnsKey() { return 'Perfil.VecinosEventos'; }
        protected getDialogType() { return VecinosEventosDialog; }
        protected getIdProperty() { return VecinosEventosRow.idProperty; }
        protected getLocalTextPrefix() { return VecinosEventosRow.localTextPrefix; }
        protected getService() { return VecinosEventosService.baseUrl; }
        private userId;
        private showExpiredTerminated = true;
        constructor(container: JQuery, userId = null) {
            this.userId = userId;
            super(container);
            if (this.userId != null) 
                this.findQuickFilter(Serenity.LookupEditor, fld.Userid).element.parent().remove();
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
        protected createSlickGrid() {
            var grid = super.createSlickGrid();
            if (this.userId != null) 
                grid.setColumns(grid.getColumns().filter(function (column) {
                    return (column.field != fld.UseridUsername && column.visible === true);
                }));
            return grid;
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
            if (this.showExpiredTerminated) {
                var today = new Date();
                request.Criteria = Serenity.Criteria.and(request.Criteria,
                    [[fld.Fecha], '>', today.toISOString().substring(0, 10).replace(/-/g, '')]
                );
            }
            return true;
        }

    }
}