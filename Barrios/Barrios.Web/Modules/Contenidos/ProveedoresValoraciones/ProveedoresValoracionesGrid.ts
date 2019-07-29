
namespace Barrios.Contenidos {

    import fld = ProveedoresValoracionesRow.Fields;
    @Serenity.Decorators.registerClass()
    export class ProveedoresValoracionesGrid extends DetailGridBase<ProveedoresValoracionesRow> {
        protected getColumnsKey() { return 'Contenidos.ProveedoresValoraciones'; }
        protected getDialogType() { return ProveedoresValoracionesDialog; }
        protected getIdProperty() { return ProveedoresValoracionesRow.idProperty; }
        protected getLocalTextPrefix() { return ProveedoresValoracionesRow.localTextPrefix; }
        protected getService() { return ProveedoresValoracionesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);

            this.setTitle("Valoraciones");
        }
        protected getMasterFieldName() {
            return "ID_PROVEEDOR";
        }
        protected createSlickGrid() {
            var grid = super.createSlickGrid();

            // need to register this plugin for grouping or you'll have errors
            grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());

            this.view.setSummaryOptions({
                aggregators: [
                    new Slick.Aggregators.Avg(fld.Valoracion)
                ]
            });

            return grid;
        }
    }
}