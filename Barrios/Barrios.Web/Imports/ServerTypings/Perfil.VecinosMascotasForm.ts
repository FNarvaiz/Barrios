namespace Barrios.Perfil {
    export interface VecinosMascotasForm {
        Nombre: Serenity.StringEditor;
        IdTipo: Serenity.LookupEditor;
        Raza: Serenity.StringEditor;
        Foto: Serenity.ImageUploadEditor;
        Vacunas: Serenity.ImageUploadEditor;
    }

    export class VecinosMascotasForm extends Serenity.PrefixedContext {
        static formKey = 'Perfil.VecinosMascotas';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!VecinosMascotasForm.init)  {
                VecinosMascotasForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.ImageUploadEditor;

                Q.initFormType(VecinosMascotasForm, [
                    'Nombre', w0,
                    'IdTipo', w1,
                    'Raza', w0,
                    'Foto', w2,
                    'Vacunas', w2
                ]);
            }
        }
    }
}

