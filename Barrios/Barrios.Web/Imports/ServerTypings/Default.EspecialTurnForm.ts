namespace Barrios.Default {
    export interface EspecialTurnForm {
        Fecha: Serenity.DateEditor;
        IdRecurso: Serenity.LookupEditor;
        IdTurnosEspeciales: Serenity.LookupEditor;
        Inicio: Serenity.LookupEditor;
        Duracion: Serenity.IntegerEditor;
        Observaciones: Serenity.TextAreaEditor;
    }

    export class EspecialTurnForm extends Serenity.PrefixedContext {
        static formKey = 'Default.EspecialTurn';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EspecialTurnForm.init)  {
                EspecialTurnForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.LookupEditor;
                var w2 = s.IntegerEditor;
                var w3 = s.TextAreaEditor;

                Q.initFormType(EspecialTurnForm, [
                    'Fecha', w0,
                    'IdRecurso', w1,
                    'IdTurnosEspeciales', w1,
                    'Inicio', w1,
                    'Duracion', w2,
                    'Observaciones', w3
                ]);
            }
        }
    }
}

