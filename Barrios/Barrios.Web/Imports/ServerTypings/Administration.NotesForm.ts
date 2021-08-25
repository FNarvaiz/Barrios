namespace Barrios.Administration {
    export interface NotesForm {
        DestinationUserId: Serenity.LookupEditor;
        Message: Serenity.StringEditor;
        ShowUser: Serenity.BooleanEditor;
    }

    export class NotesForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.Notes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!NotesForm.init)  {
                NotesForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.BooleanEditor;

                Q.initFormType(NotesForm, [
                    'DestinationUserId', w0,
                    'Message', w1,
                    'ShowUser', w2
                ]);
            }
        }
    }
}

