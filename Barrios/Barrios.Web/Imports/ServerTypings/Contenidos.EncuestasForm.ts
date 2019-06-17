namespace Barrios.Contenidos {
    export interface EncuestasForm {
        Nombre: Serenity.StringEditor;
        IdCategoria: Serenity.IntegerEditor;
        FechaAlta: Serenity.DateEditor;
        FechaBaja: Serenity.DateEditor;
        Vigente: Serenity.BooleanEditor;
        Descripcion: Serenity.StringEditor;
        UserInsert: Serenity.IntegerEditor;
        DateInsert: Serenity.DateEditor;
        UserUpdate: Serenity.IntegerEditor;
        DateUpdate: Serenity.DateEditor;
    }

    export class EncuestasForm extends Serenity.PrefixedContext {
        static formKey = 'Contenidos.Encuestas';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EncuestasForm.init)  {
                EncuestasForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DateEditor;
                var w3 = s.BooleanEditor;

                Q.initFormType(EncuestasForm, [
                    'Nombre', w0,
                    'IdCategoria', w1,
                    'FechaAlta', w2,
                    'FechaBaja', w2,
                    'Vigente', w3,
                    'Descripcion', w0,
                    'UserInsert', w1,
                    'DateInsert', w2,
                    'UserUpdate', w1,
                    'DateUpdate', w2
                ]);
            }
        }
    }
}

