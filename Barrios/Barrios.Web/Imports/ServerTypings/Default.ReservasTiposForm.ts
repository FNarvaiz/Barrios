namespace Barrios.Default {
    export interface ReservasTiposForm {
        Nombre: Serenity.StringEditor;
        Duracion: Serenity.TimeEditor;
        RequiereVecino2: Serenity.BooleanEditor;
        Vigente: Serenity.BooleanEditor;
    }

    export class ReservasTiposForm extends Serenity.PrefixedContext {
        static formKey = 'Default.ReservasTipos';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ReservasTiposForm.init)  {
                ReservasTiposForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TimeEditor;
                var w2 = s.BooleanEditor;

                Q.initFormType(ReservasTiposForm, [
                    'Nombre', w0,
                    'Duracion', w1,
                    'RequiereVecino2', w2,
                    'Vigente', w2
                ]);
            }
        }
    }
}

