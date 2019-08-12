namespace Barrios.Settings {
    export interface SubbarriosForm {
        Nombre: Serenity.StringEditor;
    }

    export class SubbarriosForm extends Serenity.PrefixedContext {
        static formKey = 'Settings.Subbarrios';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SubbarriosForm.init)  {
                SubbarriosForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(SubbarriosForm, [
                    'Nombre', w0
                ]);
            }
        }
    }
}

