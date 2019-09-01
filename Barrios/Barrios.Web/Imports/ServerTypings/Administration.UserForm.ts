namespace Barrios.Administration {
    export interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Unit: Serenity.IntegerEditor;
        subBarrioId: Serenity.LookupEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Email_Others: Serenity.TextAreaEditor;
        Source: Serenity.StringEditor;
        ClientIdList: Serenity.CheckLookupEditor;
    }

    export class UserForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.User';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!UserForm.init)  {
                UserForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.LookupEditor;
                var w3 = s.EmailEditor;
                var w4 = s.ImageUploadEditor;
                var w5 = s.PasswordEditor;
                var w6 = s.TextAreaEditor;
                var w7 = s.CheckLookupEditor;

                Q.initFormType(UserForm, [
                    'Username', w0,
                    'DisplayName', w0,
                    'Unit', w1,
                    'subBarrioId', w2,
                    'Email', w3,
                    'UserImage', w4,
                    'Password', w5,
                    'PasswordConfirm', w5,
                    'Email_Others', w6,
                    'Source', w0,
                    'ClientIdList', w7
                ]);
            }
        }
    }
}

