namespace Barrios.Administration {
    export interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Unit: Serenity.StringEditor;
        subBarrioId: Serenity.LookupEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Phone: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Email_Others: Serenity.TextAreaEditor;
        IsActive: Serenity.BooleanEditor;
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
                var w1 = s.LookupEditor;
                var w2 = s.EmailEditor;
                var w3 = s.ImageUploadEditor;
                var w4 = s.PasswordEditor;
                var w5 = s.TextAreaEditor;
                var w6 = s.BooleanEditor;
                var w7 = s.CheckLookupEditor;

                Q.initFormType(UserForm, [
                    'Username', w0,
                    'DisplayName', w0,
                    'Unit', w0,
                    'subBarrioId', w1,
                    'Email', w2,
                    'UserImage', w3,
                    'Phone', w0,
                    'Password', w4,
                    'PasswordConfirm', w4,
                    'Email_Others', w5,
                    'IsActive', w6,
                    'Source', w0,
                    'ClientIdList', w7
                ]);
            }
        }
    }
}

