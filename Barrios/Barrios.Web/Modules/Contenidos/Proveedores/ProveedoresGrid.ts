
namespace Barrios.Contenidos {
    @Serenity.Decorators.registerClass()
    export class ProveedoresGrid extends MasterGridBase<ProveedoresRow> {
        protected getColumnsKey() { return 'Contenidos.Proveedores'; }
        protected getDialogType() { return ProveedoresDialog; }
        protected getIdProperty() { return ProveedoresRow.idProperty; }
        protected getLocalTextPrefix() { return ProveedoresRow.localTextPrefix; }
        protected getService() { return ProveedoresService.baseUrl; }

        constructor(container: JQuery, detailGrid: EncuestasValoracionesGrid) {
           
            super(container,
                {
                    selectionMode: "single",
                    enableRowSelection: true,
                    // bulkdeletePermissionKey: Q.text('Site.Permission.SalesTemplateBulkDelete'),
                    TableName: Q.text('Site.TableName.Encuestas')
                } as EntityGridOptions);
            this.onItemClicked = (item: ProveedoresRow) => {
                console.log(item);
                detailGrid.masterItemID = item.Id

            }

        }
        
    }
}