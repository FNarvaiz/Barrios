namespace Barrios.Common {
    export interface ImportFileForm {
        FileName: Serenity.ImageUploadEditor;
    }

    export class ImportFileForm extends Serenity.PrefixedContext {
        static formKey = 'Common.ImportFile';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ImportFileForm.init)  {
                ImportFileForm.init = true;

                var s = Serenity;
                var w0 = s.ImageUploadEditor;

                Q.initFormType(ImportFileForm, [
                    'FileName', w0
                ]);
            }
        }
    }
}

