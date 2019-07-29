namespace Barrios.Contenidos {
    export interface ProveedoresForm {
        Nombre: Serenity.StringEditor;
        IdCategoria: Serenity.LookupEditor;
        FechaAlta: Serenity.DateEditor;
        FechaBaja: Serenity.DateEditor;
        Domicilio: Serenity.StringEditor;
        Telefonos: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        Notas: Serenity.StringEditor;
        Vigente: Serenity.BooleanEditor;
    }

    export class ProveedoresForm extends Serenity.PrefixedContext {
        static formKey = 'Contenidos.Proveedores';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProveedoresForm.init)  {
                ProveedoresForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.DateEditor;
                var w3 = s.EmailEditor;
                var w4 = s.BooleanEditor;

                Q.initFormType(ProveedoresForm, [
                    'Nombre', w0,
                    'IdCategoria', w1,
                    'FechaAlta', w2,
                    'FechaBaja', w2,
                    'Domicilio', w0,
                    'Telefonos', w0,
                    'Email', w3,
                    'Notas', w0,
                    'Vigente', w4
                ]);
            }
        }
    }
}

