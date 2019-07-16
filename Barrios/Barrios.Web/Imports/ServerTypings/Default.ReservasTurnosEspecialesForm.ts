namespace Barrios.Default {
    export interface ReservasTurnosEspecialesForm {
        Nombre: Serenity.StringEditor;
        Inicio: Serenity.LookupEditor;
        Duracion: Serenity.TimeEditor;
        Dias: Serenity.StringEditor;
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

                Q.initFormType(ReservasTurnosEspecialesForm, [
                    'Nombre', w0,
                    'Inicio', w1,
                    'Duracion', w2,
                    'Dias', w0
                ]);
            }
        }
    }
}

