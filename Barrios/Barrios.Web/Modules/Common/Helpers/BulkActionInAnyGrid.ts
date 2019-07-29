/// <reference path="../../../Modules/Common/Helpers/BulkServiceAction.ts"/>
namespace Barrios.Common {
    export class BulkactionInAnyGrid extends Common.BulkServiceAction {
        public TableName: string;
        public IsShared: boolean = false;
        protected getParallelRequests() {
            return 2;
        }
        protected getBatchSize() {
            return 100;
        }
       /* protected executeForBatch(batch) {
            if (this.IsShared) {
                TaskService.BulkAction(
                    {
                        IdList: batch.map(x => (x)),
                        TableName: this.TableName
                    },
                    response => {
                        this.set_successCount(this.get_successCount() + response.deleted),
                            this.set_errorCount(this.get_errorCount() + response.errorcount);
                    },
                    {
                        blockUI: false,
                        onError: response => this.set_errorCount(this.get_errorCount() + batch.length),
                        onCleanup: () => this.serviceCallCleanup()
                    });
            } else {
                TaskService.BulkActioninClientDB(
                    {
                        IdList: batch.map(x => (x)),
                        TableName: this.TableName
                    },
                    response => {
                        this.set_successCount(this.get_successCount() + response.deleted),
                            this.set_errorCount(this.get_errorCount() + response.errorcount);
                    },
                    {
                        blockUI: false,
                        onError: response => this.set_errorCount(this.get_errorCount() + batch.length),
                        onCleanup: () => this.serviceCallCleanup()
                    });
            }
        }*/
    }
}