
namespace Barrios {
    export abstract class MasterGridBase<TItem> extends Serenity.EntityGrid<TItem, EntityGridOptions> {
        protected grid: Slick.Grid;
        protected rowSelection: Serenity.GridRowSelectionMixin;
        onItemClicked: (item: TItem) => void;
        onItemSelected: (item: TItem) => void;
        onItemsSelected: (item: TItem[]) => void;
        constructor(container: JQuery, options?: EntityGridOptions) {
            super(container,
                options ||
                {
                    selectionMode: 'single',
                    enableRowSelection: true
                } as EntityGridOptions);
            this.toolbar.element.attr('style', 'border-bottom: 1px solid #e7e7e7;margin-bottom: 4px;');
            this.element.find('.title-text').prepend($(`<i class="${this.getGridIconClass()}"></i><span> </span>`));
        }
        private isMultiSelectEnabled(): boolean {
            return (this.options.enableRowSelection && this.options.selectionMode === 'multiple');
        }
        protected getGridIconClass() {
            return 'fa icon-screen-desktop';
        }
        protected createToolbarExtensions() {
            super.createToolbarExtensions();
            if (this.isMultiSelectEnabled()) {
                this.rowSelection = new Serenity.GridRowSelectionMixin(this);
            }
        }
        protected getColumns() {
            var columns = super.getColumns();
            if (this.isMultiSelectEnabled()) {
                columns.splice(0, 0, Serenity.GridRowSelectionMixin.createSelectColumn(() => this.rowSelection));
            }
            return columns;
        }
        public resetCheckedAndRefresh() {
            if (this.isMultiSelectEnabled() && this.rowSelection != null) {
                this.rowSelection.resetCheckedAndRefresh();
            }
        }

      /*  protected getPersistanceFlags(): Serenity.GridPersistanceFlags {
            return {
                columnVisibility: true,
                sortColumns: true,
                filterItems: false,
                quickFilters: false,
                quickFilterText: false,
                quickSearch: false,
                includeDeleted: true,
                columnWidths: false // dont persist column widths;
            }
        }*/
        public getSelectedKeys() {
            if (this.isMultiSelectEnabled() && this.rowSelection != null) {
                return this.rowSelection.getSelectedKeys();
            }
            return [] as string[];
        }
        public getSelectedItems(): TItem[] {
            let selectedKeys = this.getSelectedKeys();
            if (selectedKeys != null && selectedKeys.length > 0) {
                return selectedKeys.map(x => this.getView().getItemById(x));
            }
            return [] as TItem[];
        }
        public getSelectedItem(): TItem {
            let items = this.getSelectedItems();
            if (items != null && items.length > 0) {
                return items[0];
            }
            return null as TItem;
        }
        public getMasterGridRowType(): TItem {
            return null as TItem;
        }
        protected getSlickOptions(): Slick.GridOptions {
            var opt = super.getSlickOptions();
            opt.enableCellNavigation = true;
            opt.enableTextSelectionOnCells = true;
            opt.selectedCellCssClass = "slick-row-selected";
            return opt;
        }
        protected createSlickGrid(): Slick.Grid {
            this.grid = super.createSlickGrid();
            if (this.options.enableRowSelection) {
                this.grid.setSelectionModel(new Slick.RowSelectionModel());
            }
            this.grid.onSelectedRowsChanged.subscribe((p1, selecion: { grid: Slick.Grid, rows: number[] }) => {
                if (this.options.enableRowSelection) {
                    if (this.isMultiSelectEnabled() && this.rowSelection != null) {
                        let selectedKeys = this.getSelectedKeys();
                        if (this.onItemsSelected && selectedKeys != null && selectedKeys.length > 0) {
                            this.onItemsSelected(this.getSelectedItems());
                        }
                    } else if (this.onItemSelected && selecion.rows != null && selecion.rows.length > 0) {
                        this.onItemSelected(this.getView().getItemById(selecion.rows[0]));
                    }
                }
            });
            return this.grid;
        }
        protected onClick(e: JQueryEventObject, row: number, cell: number): void {
            super.onClick(e, row, cell);
            let item = this.itemAt(row);
            if (this.options.enableRowSelection && this.onItemClicked) {
                this.onItemClicked(item as TItem);
            }
        }
        public destroy() {
            // clear to avoid memory holes
            this.onItemClicked = null;
            this.onItemSelected = null;
            this.onItemsSelected = null;
            super.destroy();
        }
        protected getButtons(): Serenity.ToolButton[] {
            var buttons = super.getButtons();
            buttons.push({
                title: 'Delete',
                cssClass: 'delete-button',
                onClick: () => {
                    if (!this.onViewSubmit()) {
                        return;
                    }
                    if (Authorization.hasPermission(this.options.bulkdeletePermissionKey)) {
                        var action = new Common.BulkactionInAnyGrid();
                        action.TableName = this.options.TableName;
                        action.done = () => this.rowSelection.resetCheckedAndRefresh();
                        action.execute(this.rowSelection.getSelectedKeys());
                    } else
                        Q.alert(Q.text('Site.ErrorMessage.AuthorizationFailure'));
                }
            });
            return buttons;
        }
    }
    export interface EntityGridOptions {
        enableRowSelection: boolean;
        selectionMode: 'none' | 'single' | 'multiple';
        bulkdeletePermissionKey: string;
        TableName: string;
    }
}