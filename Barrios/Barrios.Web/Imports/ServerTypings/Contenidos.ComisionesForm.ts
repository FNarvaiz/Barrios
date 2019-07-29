namespace Barrios.Contenidos {
    export interface ComisionesForm {
        Nombre: Serenity.StringEditor;
        Mails: Serenity.StringEditor;
        MembersList: ComisionesIntegrantesGrid;
        Habilitada: Serenity.BooleanEditor;
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
                var w1 = ComisionesIntegrantesGrid;
                var w2 = s.BooleanEditor;

                Q.initFormType(ComisionesForm, [
                    'Nombre', w0,
                    'Mails', w0,
                    'MembersList', w1,
                    'Habilitada', w2
                ]);
            }
        }
    }
}

