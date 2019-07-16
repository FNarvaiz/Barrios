namespace Barrios.Perfil {
    export interface VecinosActividadesForm {
        Fecha: Serenity.DateEditor;
        Actividad: Serenity.StringEditor;
        ActividadDetalles: Serenity.StringEditor;
    }

    export class VecinosActividadesForm extends Serenity.PrefixedContext {
        static formKey = 'Perfil.VecinosActividades';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!VecinosActividadesForm.init)  {
                VecinosActividadesForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.StringEditor;

                Q.initFormType(VecinosActividadesForm, [
                    'Fecha', w0,
                    'Actividad', w1,
                    'ActividadDetalles', w1
                ]);
            }
        }
    }
}

