namespace Barrios.Default {
    export interface ReservasRecursosForm {
        Nombre: Serenity.StringEditor;
        Apertura: Serenity.IntegerEditor;
        Cierre: Serenity.IntegerEditor;
        Resolucion: Serenity.IntegerEditor;
    }

    export class ReservasRecursosForm extends Serenity.PrefixedContext {
        static formKey = 'Default.ReservasRecursos';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ReservasRecursosForm.init)  {
                ReservasRecursosForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;

                Q.initFormType(ReservasRecursosForm, [
                    'Nombre', w0,
                    'Apertura', w1,
                    'Cierre', w1,
                    'Resolucion', w1
                ]);
            }
        }
    }
}

