namespace Barrios.Administration {
    export interface UsersBarriosForm {
        UserId: Serenity.IntegerEditor;
        BarrioId: Serenity.LookupEditor;
    }

    export class UsersBarriosForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.UsersBarrios';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!UsersBarriosForm.init)  {
                UsersBarriosForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.LookupEditor;

                Q.initFormType(UsersBarriosForm, [
                    'UserId', w0,
                    'BarrioId', w1
                ]);
            }
        }
    }
}

