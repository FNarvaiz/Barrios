namespace Barrios.Administration {
    export interface BarriosForm {
        Nombre: Serenity.StringEditor;
        Logo: Serenity.ImageUploadEditor;
        Url: Serenity.StringEditor;
        TelefonOs: Serenity.StringEditor;
        Direccion: Serenity.StringEditor;
        IsActive: Serenity.BooleanEditor;
    }

    export class BarriosForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.Barrios';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!BarriosForm.init)  {
                BarriosForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.ImageUploadEditor;
                var w2 = s.BooleanEditor;

                Q.initFormType(BarriosForm, [
                    'Nombre', w0,
                    'Logo', w1,
                    'Url', w0,
                    'TelefonOs', w0,
                    'Direccion', w0,
                    'IsActive', w2
                ]);
            }
        }
    }
}

