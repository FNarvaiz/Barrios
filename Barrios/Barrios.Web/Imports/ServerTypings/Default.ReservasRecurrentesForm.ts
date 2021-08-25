namespace Barrios.Default {
    export interface ReservasRecurrentesForm {
        Observaciones: Serenity.StringEditor;
        Inicio: Serenity.LookupEditor;
        Duracion: Serenity.TimeEditor;
        Dias: Serenity.StringEditor;
        Lunes: Serenity.BooleanEditor;
        Martes: Serenity.BooleanEditor;
        Miercoles: Serenity.BooleanEditor;
        Jueves: Serenity.BooleanEditor;
        Viernes: Serenity.BooleanEditor;
        Sabado: Serenity.BooleanEditor;
        Domingo: Serenity.BooleanEditor;
        Feriados: Serenity.BooleanEditor;
    }

    export class ReservasRecurrentesForm extends Serenity.PrefixedContext {
        static formKey = 'Default.ReservasRecurrentes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ReservasRecurrentesForm.init)  {
                ReservasRecurrentesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.TimeEditor;
                var w3 = s.BooleanEditor;

                Q.initFormType(ReservasRecurrentesForm, [
                    'Observaciones', w0,
                    'Inicio', w1,
                    'Duracion', w2,
                    'Dias', w0,
                    'Lunes', w3,
                    'Martes', w3,
                    'Miercoles', w3,
                    'Jueves', w3,
                    'Viernes', w3,
                    'Sabado', w3,
                    'Domingo', w3,
                    'Feriados', w3
                ]);
            }
        }
    }
}

