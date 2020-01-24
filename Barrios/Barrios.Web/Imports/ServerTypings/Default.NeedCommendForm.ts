namespace Barrios.Default {
    export interface NeedCommendForm {
        Observaciones: Serenity.TextAreaEditor;
    }

    export class NeedCommendForm extends Serenity.PrefixedContext {
        static formKey = 'Default.NeedCommend';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!NeedCommendForm.init)  {
                NeedCommendForm.init = true;

                var s = Serenity;
                var w0 = s.TextAreaEditor;

                Q.initFormType(NeedCommendForm, [
                    'Observaciones', w0
                ]);
            }
        }
    }
}

