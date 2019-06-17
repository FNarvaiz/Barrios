namespace Barrios.Default {
    export interface ReservasForm {
        IdRecurso: Serenity.IntegerEditor;
        IdResultado: Serenity.IntegerEditor;
        Fecha: Serenity.DateEditor;
        Inicio: Serenity.IntegerEditor;
        Duracion: Serenity.IntegerEditor;
        Observaciones: Serenity.StringEditor;
        IdVecino2: Serenity.IntegerEditor;
        IdTipo: Serenity.IntegerEditor;
        FechaFin: Serenity.DateEditor;
        IdVecino: Serenity.IntegerEditor;
        DateInsert: Serenity.DateEditor;
        UserInsert: Serenity.IntegerEditor;
    }

    export class ReservasForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Reservas';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ReservasForm.init)  {
                ReservasForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.DateEditor;
                var w2 = s.StringEditor;

                Q.initFormType(ReservasForm, [
                    'IdRecurso', w0,
                    'IdResultado', w0,
                    'Fecha', w1,
                    'Inicio', w0,
                    'Duracion', w0,
                    'Observaciones', w2,
                    'IdVecino2', w0,
                    'IdTipo', w0,
                    'FechaFin', w1,
                    'IdVecino', w0,
                    'DateInsert', w1,
                    'UserInsert', w0
                ]);
            }
        }
    }
}

