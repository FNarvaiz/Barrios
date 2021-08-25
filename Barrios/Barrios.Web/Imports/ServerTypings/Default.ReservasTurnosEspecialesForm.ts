namespace Barrios.Default {
    export interface ReservasTurnosEspecialesForm {
        Nombre: Serenity.StringEditor;
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

    export class ReservasTurnosEspecialesForm extends Serenity.PrefixedContext {
        static formKey = 'Default.ReservasTurnosEspeciales';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ReservasTurnosEspecialesForm.init)  {
                ReservasTurnosEspecialesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.TimeEditor;
                var w3 = s.BooleanEditor;

                Q.initFormType(ReservasTurnosEspecialesForm, [
                    'Nombre', w0,
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

