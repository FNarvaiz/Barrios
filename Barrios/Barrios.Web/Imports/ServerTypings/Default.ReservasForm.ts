namespace Barrios.Default {
    export interface ReservasForm {
        Fecha: Serenity.DateEditor;
        IdVecino: Serenity.LookupEditor;
        IdRecurso: Serenity.LookupEditor;
        IdTipo: Serenity.LookupEditor;
        IdTurnosEspeciales: Serenity.LookupEditor;
        Inicio: Serenity.LookupEditor;
        Duracion: Serenity.IntegerEditor;
        Turno: Serenity.StringEditor;
        Observaciones: Serenity.TextAreaEditor;
        IdVecino2: Serenity.LookupEditor;
    }

    export class ReservasForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Reservas';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ReservasForm.init)  {
                ReservasForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.LookupEditor;
                var w2 = s.IntegerEditor;
                var w3 = s.StringEditor;
                var w4 = s.TextAreaEditor;

                Q.initFormType(ReservasForm, [
                    'Fecha', w0,
                    'IdVecino', w1,
                    'IdRecurso', w1,
                    'IdTipo', w1,
                    'IdTurnosEspeciales', w1,
                    'Inicio', w1,
                    'Duracion', w2,
                    'Turno', w3,
                    'Observaciones', w4,
                    'IdVecino2', w1
                ]);
            }
        }
    }
}

