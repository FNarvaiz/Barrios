namespace Barrios.Default {
    export interface ReservasTurnosEspecialesForm {
        Id: Serenity.IntegerEditor;
        Inicio: Serenity.IntegerEditor;
        Duracion: Serenity.IntegerEditor;
        Nombre: Serenity.StringEditor;
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
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;

                Q.initFormType(ReservasTurnosEspecialesForm, [
                    'Id', w0,
                    'Inicio', w0,
                    'Duracion', w0,
                    'Nombre', w1,
                    'Dias', w1
                ]);
            }
        }
    }
}

