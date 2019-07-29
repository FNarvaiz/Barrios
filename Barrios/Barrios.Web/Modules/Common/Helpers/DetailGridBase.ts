namespace Barrios {
    export class DetailGridBase<TItem> extends Serenity.EntityGrid<TItem, EntityGridOptions> {
        private _masterItemID: number;
        private _masterStringID: string;
        protected onMasterIdChanged(masterItemID: number) { }
        protected onMasterStringIdChanged(masterStringID: string) { }
        get masterItemID() {
            return this._masterItemID;
        }
        set masterItemID(value: number) {
            console.log(value)
            if (this._masterItemID !== value) {
                this._masterItemID = value;
                this.onMasterIdChanged(this._masterItemID);
                this.setEquality(this.getMasterFieldName(), value);
                this.refresh();
            }
        }
        get masterStringID() {
            return this._masterStringID;
        }
        set masterStringID(value: string) {
            if (this._masterStringID !== value) {
                this._masterStringID = value;
                this.onMasterStringIdChanged(this._masterStringID);
                this.setEquality(this.getMasterFieldName(), value);
                this.refresh();
            }
        }
        protected getMasterFieldName() {
            return "";
        }
        //protected getSlickOptions(): Slick.GridOptions {
        //    var opt = super.getSlickOptions();
        //    opt.rowHeight = 28;
        //    return opt;
        //}
        protected getGridCanLoad() {
            return !isNaN(this.masterItemID) || this.masterStringID !== undefined;
        }
    }
}