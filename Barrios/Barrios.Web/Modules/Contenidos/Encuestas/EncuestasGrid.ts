
namespace Barrios.Contenidos {
    @Serenity.Decorators.registerClass()
    export class EncuestasGrid extends MasterGridBase<EncuestasRow> {
        protected getColumnsKey() { return 'Contenidos.Encuestas'; }
        protected getDialogType() { return EncuestasDialog; }
        protected getIdProperty() { return EncuestasRow.idProperty; }
        protected getLocalTextPrefix() { return EncuestasRow.localTextPrefix; }
        protected getService() { return EncuestasService.baseUrl; }

        constructor(container: JQuery, detailGrid: EncuestasValoracionesGrid) {
            super(container,
                {
                    selectionMode: "single",
                    enableRowSelection: true,
                   // bulkdeletePermissionKey: Q.text('Site.Permission.SalesTemplateBulkDelete'),
                    TableName: Q.text('Site.TableName.Encuestas')
                } as EntityGridOptions);
            this.onItemClicked = (item: EncuestasRow) => {
                console.log(item);
                detailGrid.masterItemID = item.Id
              
            }
        }
    }
}