namespace Barrios.Perfil {
    export interface VecinosVisitantesFrecuentesForm {
        Nombre: Serenity.StringEditor;
        Dni: Serenity.StringEditor;
        Vehiculo: Serenity.StringEditor;
        Tipo: Serenity.StringEditor;
    }

    export class VecinosVisitantesFrecuentesForm extends Serenity.PrefixedContext {
        static formKey = 'Perfil.VecinosVisitantesFrecuentes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!VecinosVisitantesFrecuentesForm.init)  {
                VecinosVisitantesFrecuentesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(VecinosVisitantesFrecuentesForm, [
                    'Nombre', w0,
                    'Dni', w0,
                    'Vehiculo', w0,
                    'Tipo', w0
                ]);
            }
        }
    }
}

