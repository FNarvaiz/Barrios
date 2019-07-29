namespace Barrios.Contenidos {
    export interface ComisionesIntegrantesForm {
        Nombre: Serenity.StringEditor;
    }

    export class ComisionesIntegrantesForm extends Serenity.PrefixedContext {
        static formKey = 'Contenidos.ComisionesIntegrantes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ComisionesIntegrantesForm.init)  {
                ComisionesIntegrantesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(ComisionesIntegrantesForm, [
                    'Nombre', w0
                ]);
            }
        }
    }
}

