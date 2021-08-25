namespace Barrios.Administration {
    export interface BarriosForm {
        Nombre: Serenity.StringEditor;
        ShortDisplayName: Serenity.StringEditor;
        LargeDisplayName: Serenity.StringEditor;
        PageHome: Serenity.LookupEditor;
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
                var w1 = s.LookupEditor;
                var w2 = s.EmailEditor;
                var w3 = s.ImageUploadEditor;
                var w4 = s.IntegerEditor;
                var w5 = s.BooleanEditor;
                var w6 = s.TextAreaEditor;

                Q.initFormType(BarriosForm, [
                    'Nombre', w0,
                    'ShortDisplayName', w0,
                    'LargeDisplayName', w0,
                    'PageHome', w1,
                    'Mail', w2,
                    'PasswordMail', w0,
                    'Logo', w3,
                    'Url', w0,
                    'TelefonOs', w0,
                    'CantDiasReservables', w4,
                    'Direccion', w0,
                    'UseSubBarrios', w5,
                    'Emails', w6,
                    'VerUserEnReservas', w5,
                    'IsActive', w5
                ]);
            }
        }
    }
}

