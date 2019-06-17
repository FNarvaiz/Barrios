namespace Barrios.Contenidos {
    export interface ComisionesForm {
        Nombre: Serenity.StringEditor;
        Habilitada: Serenity.BooleanEditor;
        Sigla: Serenity.StringEditor;
        Color: Serenity.StringEditor;
        Mails: Serenity.StringEditor;
        UserInsert: Serenity.IntegerEditor;
        DateInsert: Serenity.DateEditor;
        UserUpdate: Serenity.IntegerEditor;
        DateUpdate: Serenity.DateEditor;
        BarrioId: Serenity.IntegerEditor;
    }

    export class ComisionesForm extends Serenity.PrefixedContext {
        static formKey = 'Contenidos.Comisiones';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ComisionesForm.init)  {
                ComisionesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.BooleanEditor;
                var w2 = s.IntegerEditor;
                var w3 = s.DateEditor;

                Q.initFormType(ComisionesForm, [
                    'Nombre', w0,
                    'Habilitada', w1,
                    'Sigla', w0,
                    'Color', w0,
                    'Mails', w0,
                    'UserInsert', w2,
                    'DateInsert', w3,
                    'UserUpdate', w2,
                    'DateUpdate', w3,
                    'BarrioId', w2
                ]);
            }
        }
    }
}

