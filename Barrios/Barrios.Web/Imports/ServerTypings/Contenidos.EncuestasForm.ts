namespace Barrios.Contenidos {
    export interface EncuestasForm {
        Nombre: Serenity.StringEditor;
        FechaAlta: Serenity.DateEditor;
        FechaBaja: Serenity.DateEditor;
        IdCategoria: Serenity.LookupEditor;
        Descripcion: Serenity.TextAreaEditor;
        Vigente: Serenity.BooleanEditor;
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
                var w1 = s.DateEditor;
                var w2 = s.LookupEditor;
                var w3 = s.TextAreaEditor;
                var w4 = s.BooleanEditor;

                Q.initFormType(EncuestasForm, [
                    'Nombre', w0,
                    'FechaAlta', w1,
                    'FechaBaja', w1,
                    'IdCategoria', w2,
                    'Descripcion', w3,
                    'Vigente', w4
                ]);
            }
        }
    }
}

