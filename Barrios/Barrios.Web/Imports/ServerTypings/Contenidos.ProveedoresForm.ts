namespace Barrios.Contenidos {
    export interface ProveedoresForm {
        Nombre: Serenity.StringEditor;
        IdCategoria: Serenity.LookupEditor;
        FechaAlta: Serenity.DateEditor;
        FechaBaja: Serenity.DateEditor;
        Vigente: Serenity.BooleanEditor;
        Domicilio: Serenity.StringEditor;
        Telefonos: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        Notas: Serenity.StringEditor;
        UserInsert: Serenity.IntegerEditor;
        DateInsert: Serenity.DateEditor;
        UserUpdate: Serenity.IntegerEditor;
        DateUpdate: Serenity.DateEditor;
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
                var w3 = s.BooleanEditor;
                var w4 = s.IntegerEditor;

                Q.initFormType(ProveedoresForm, [
                    'Nombre', w0,
                    'IdCategoria', w1,
                    'FechaAlta', w2,
                    'FechaBaja', w2,
                    'Vigente', w3,
                    'Domicilio', w0,
                    'Telefonos', w0,
                    'Email', w0,
                    'Notas', w0,
                    'UserInsert', w4,
                    'DateInsert', w2,
                    'UserUpdate', w4,
                    'DateUpdate', w2
                ]);
            }
        }
    }
}

