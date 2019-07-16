namespace Barrios.Perfil {
    export interface VecinosEventosForm {
        Fecha: Serenity.DateEditor;
        Nombre: Serenity.StringEditor;
        Lugar: Serenity.StringEditor;
        ConcurrentesList: Serenity.StringEditor;
    }

    export class VecinosEventosForm extends Serenity.PrefixedContext {
        static formKey = 'Perfil.VecinosEventos';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!VecinosEventosForm.init)  {
                VecinosEventosForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.StringEditor;

                Q.initFormType(VecinosEventosForm, [
                    'Fecha', w0,
                    'Nombre', w1,
                    'Lugar', w1,
                    'ConcurrentesList', w1
                ]);
            }
        }
    }
}

