namespace Barrios.Contenidos {
    export interface EncuestasValoracionesForm {
        IdEncuesta: Serenity.IntegerEditor;
        Valoracion: Serenity.LookupEditor;
        Comentario: Serenity.TextAreaEditor;
    }

    export class EncuestasValoracionesForm extends Serenity.PrefixedContext {
        static formKey = 'Contenidos.EncuestasValoraciones';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EncuestasValoracionesForm.init)  {
                EncuestasValoracionesForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.LookupEditor;
                var w2 = s.TextAreaEditor;

                Q.initFormType(EncuestasValoracionesForm, [
                    'IdEncuesta', w0,
                    'Valoracion', w1,
                    'Comentario', w2
                ]);
            }
        }
    }
}

