namespace Barrios.Contenidos {
    export interface ProveedoresValoracionesForm {
        IdProveedor: Serenity.IntegerEditor;
        Fecha: Serenity.DateEditor;
        Valoracion: Serenity.IntegerEditor;
        Userid: Serenity.IntegerEditor;
    }

    export class ProveedoresValoracionesForm extends Serenity.PrefixedContext {
        static formKey = 'Contenidos.ProveedoresValoraciones';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProveedoresValoracionesForm.init)  {
                ProveedoresValoracionesForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.DateEditor;

                Q.initFormType(ProveedoresValoracionesForm, [
                    'IdProveedor', w0,
                    'Fecha', w1,
                    'Valoracion', w0,
                    'Userid', w0
                ]);
            }
        }
    }
}

