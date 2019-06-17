namespace Barrios.Default {
    export interface ReservasTiposForm {
        Id: Serenity.IntegerEditor;
        Nombre: Serenity.StringEditor;
        Duracion: Serenity.IntegerEditor;
        Vigente: Serenity.BooleanEditor;
        RequiereVecino2: Serenity.BooleanEditor;
    }

    export class ReservasTiposForm extends Serenity.PrefixedContext {
        static formKey = 'Default.ReservasTipos';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ReservasTiposForm.init)  {
                ReservasTiposForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.BooleanEditor;

                Q.initFormType(ReservasTiposForm, [
                    'Id', w0,
                    'Nombre', w1,
                    'Duracion', w0,
                    'Vigente', w2,
                    'RequiereVecino2', w2
                ]);
            }
        }
    }
}

