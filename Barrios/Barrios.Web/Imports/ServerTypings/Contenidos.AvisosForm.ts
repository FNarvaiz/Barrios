namespace Barrios.Contenidos {
    export interface AvisosForm {
        Nombre: Serenity.StringEditor;
        IdCategoria: Serenity.IntegerEditor;
        Caducidad: Serenity.DateEditor;
        Vigente: Serenity.BooleanEditor;
        Descripcion: Serenity.StringEditor;
        Imagen: Serenity.ImageUploadEditor;
        UserInsert: Serenity.IntegerEditor;
        UserUpdate: Serenity.IntegerEditor;
        DateUpdate: Serenity.DateEditor;
        DateInsert: Serenity.DateEditor;
    }

    export class AvisosForm extends Serenity.PrefixedContext {
        static formKey = 'Contenidos.Avisos';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AvisosForm.init)  {
                AvisosForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DateEditor;
                var w3 = s.BooleanEditor;
                var w4 = s.ImageUploadEditor;

                Q.initFormType(AvisosForm, [
                    'Nombre', w0,
                    'IdCategoria', w1,
                    'Caducidad', w2,
                    'Vigente', w3,
                    'Descripcion', w0,
                    'Imagen', w4,
                    'UserInsert', w1,
                    'UserUpdate', w1,
                    'DateUpdate', w2,
                    'DateInsert', w2
                ]);
            }
        }
    }
}

