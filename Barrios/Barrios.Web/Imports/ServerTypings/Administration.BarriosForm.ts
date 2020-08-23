namespace Barrios.Administration {
    export interface BarriosForm {
        Nombre: Serenity.StringEditor;
        ShortDisplayName: Serenity.StringEditor;
        LargeDisplayName: Serenity.StringEditor;
        Mail: Serenity.EmailEditor;
        PasswordMail: Serenity.StringEditor;
        Logo: Serenity.ImageUploadEditor;
        Url: Serenity.StringEditor;
        TelefonOs: Serenity.StringEditor;
        CantDiasReservables: Serenity.IntegerEditor;
        Direccion: Serenity.StringEditor;
        UseSubBarrios: Serenity.BooleanEditor;
        Emails: Serenity.TextAreaEditor;
        VerUserEnReservas: Serenity.BooleanEditor;
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
                var w1 = s.EmailEditor;
                var w2 = s.ImageUploadEditor;
                var w3 = s.IntegerEditor;
                var w4 = s.BooleanEditor;
                var w5 = s.TextAreaEditor;

                Q.initFormType(BarriosForm, [
                    'Nombre', w0,
                    'ShortDisplayName', w0,
                    'LargeDisplayName', w0,
                    'Mail', w1,
                    'PasswordMail', w0,
                    'Logo', w2,
                    'Url', w0,
                    'TelefonOs', w0,
                    'CantDiasReservables', w3,
                    'Direccion', w0,
                    'UseSubBarrios', w4,
                    'Emails', w5,
                    'VerUserEnReservas', w4,
                    'IsActive', w4
                ]);
            }
        }
    }
}

