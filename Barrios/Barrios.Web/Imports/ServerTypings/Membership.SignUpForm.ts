namespace Barrios.Membership {
    export interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        subBarrioId: Serenity.LookupEditor;
        Unit: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        ConfirmEmail: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }

    export class SignUpForm extends Serenity.PrefixedContext {
        static formKey = 'Membership.SignUp';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SignUpForm.init)  {
                SignUpForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.EmailEditor;
                var w3 = s.PasswordEditor;

                Q.initFormType(SignUpForm, [
                    'DisplayName', w0,
                    'subBarrioId', w1,
                    'Unit', w0,
                    'Email', w2,
                    'ConfirmEmail', w2,
                    'Password', w3,
                    'ConfirmPassword', w3
                ]);
            }
        }
    }
}

