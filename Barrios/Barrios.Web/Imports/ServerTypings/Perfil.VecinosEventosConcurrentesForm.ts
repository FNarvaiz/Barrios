namespace Barrios.Perfil {
    export interface VecinosEventosConcurrentesForm {
        Nombre: Serenity.StringEditor;
    }

    export class VecinosEventosConcurrentesForm extends Serenity.PrefixedContext {
        static formKey = 'Perfil.VecinosEventosConcurrentes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!VecinosEventosConcurrentesForm.init)  {
                VecinosEventosConcurrentesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(VecinosEventosConcurrentesForm, [
                    'Nombre', w0
                ]);
            }
        }
    }
}

