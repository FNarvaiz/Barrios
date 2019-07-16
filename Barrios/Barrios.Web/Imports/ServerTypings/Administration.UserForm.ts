namespace Barrios.Administration {
    export interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Unit: Serenity.IntegerEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
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
                var w2 = s.EmailEditor;
                var w3 = s.ImageUploadEditor;
                var w4 = s.PasswordEditor;
                var w5 = s.CheckLookupEditor;

                Q.initFormType(UserForm, [
                    'Username', w0,
                    'DisplayName', w0,
                    'Unit', w1,
                    'Email', w2,
                    'UserImage', w3,
                    'Password', w4,
                    'PasswordConfirm', w4,
                    'Source', w0,
                    'ClientIdList', w5
                ]);
            }
        }
    }
}

