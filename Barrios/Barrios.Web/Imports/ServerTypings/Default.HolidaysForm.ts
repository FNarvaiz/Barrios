namespace Barrios.Default {
    export interface HolidaysForm {
        Reason: Serenity.StringEditor;
        Type: Serenity.RadioButtonEditor;
        Day: Serenity.DateEditor;
    }

    export class HolidaysForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Holidays';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!HolidaysForm.init)  {
                HolidaysForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.RadioButtonEditor;
                var w2 = s.DateEditor;

                Q.initFormType(HolidaysForm, [
                    'Reason', w0,
                    'Type', w1,
                    'Day', w2
                ]);
            }
        }
    }
}

