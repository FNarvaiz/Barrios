namespace Barrios.Contenidos {
    export interface ComisionesIntegrantesForm {
        Id: Serenity.IntegerEditor;
        Nombre: Serenity.StringEditor;
        UserInsert: Serenity.IntegerEditor;
        DateInsert: Serenity.DateEditor;
        UserUpdate: Serenity.IntegerEditor;
        DateUpdate: Serenity.DateEditor;
    }

    export class ComisionesIntegrantesForm extends Serenity.PrefixedContext {
        static formKey = 'Contenidos.ComisionesIntegrantes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ComisionesIntegrantesForm.init)  {
                ComisionesIntegrantesForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateEditor;

                Q.initFormType(ComisionesIntegrantesForm, [
                    'Id', w0,
                    'Nombre', w1,
                    'UserInsert', w0,
                    'DateInsert', w2,
                    'UserUpdate', w0,
                    'DateUpdate', w2
                ]);
            }
        }
    }
}

