
namespace Barrios.Common {

    @Serenity.Decorators.registerClass()
    export class ImportFileDialog extends Serenity.PropertyDialog<any,any> {
        protected getFormKey() { return ImportFileForm.formKey; }
        public form: ImportFileForm;
        public methodRequest;
        constructor(sendRequest) {
            super();
            this.methodRequest = sendRequest;
            this.form = new ImportFileForm(this.idPrefix);
            $('.ui-dialog-buttonset button').removeClass();
            $('.ui-dialog-buttonset button').addClass('btn btn-primary');
        }
        protected getDialogTitle(): string {
            return "Importar archivo CSV";
        }
        protected getDialogButtons(): Serenity.DialogButton[] {
            return [
                {
                    text: 'Import',
                    click: () => {
                        if (!this.validateBeforeSave())
                            return;

                        if (this.form.FileName.value == null ||
                            Q.isEmptyOrNull(this.form.FileName.value.Filename)) {
                            Q.notifyError("Please select a file!");
                            return;
                        }

                        console.log(this.form.FileName);
                        this.methodRequest(this.form.FileName.value.Filename);
                    }
                },
                {
                    text: 'Cancel',
                    click: () => this.dialogClose()
                }
            ];
        }
    }
}