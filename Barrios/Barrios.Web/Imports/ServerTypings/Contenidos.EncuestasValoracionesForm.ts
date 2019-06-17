namespace Barrios.Contenidos {
    export interface EncuestasValoracionesForm {
        IdEncuesta: Serenity.IntegerEditor;
        Fecha: Serenity.DateEditor;
        Valoracion: Serenity.IntegerEditor;
        Comentario: Serenity.StringEditor;
        Userid: Serenity.IntegerEditor;
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
                var w1 = s.DateEditor;
                var w2 = s.StringEditor;

                Q.initFormType(EncuestasValoracionesForm, [
                    'IdEncuesta', w0,
                    'Fecha', w1,
                    'Valoracion', w0,
                    'Comentario', w2,
                    'Userid', w0
                ]);
            }
        }
    }
}

