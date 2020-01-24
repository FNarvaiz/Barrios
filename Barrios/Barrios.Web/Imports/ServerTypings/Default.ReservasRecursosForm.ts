namespace Barrios.Default {
    export interface ReservasRecursosForm {
        Nombre: Serenity.StringEditor;
        AppHoldId: Serenity.IntegerEditor;
        Tipo: Serenity.LookupEditor;
        Apertura: Serenity.LookupEditor;
        Cierre: Serenity.LookupEditor;
        Resolucion: Serenity.LookupEditor;
        Emails: Serenity.TextAreaEditor;
        MailBody: Serenity.TextAreaEditor;
        Description: Serenity.TextAreaEditor;
        NeedComment: Serenity.BooleanEditor;
        TypeList: ReservasTiposGrid;
        SpecialTurnList: ReservasTurnosEspecialesGrid;
        Desde: Serenity.IntegerEditor;
        Hasta: Serenity.IntegerEditor;
        NeigborhoodList: Serenity.CheckLookupEditor;
        Regulation: Serenity.ImageUploadEditor;
    }

    export class ReservasRecursosForm extends Serenity.PrefixedContext {
        static formKey = 'Default.ReservasRecursos';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ReservasRecursosForm.init)  {
                ReservasRecursosForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.LookupEditor;
                var w3 = s.TextAreaEditor;
                var w4 = s.BooleanEditor;
                var w5 = ReservasTiposGrid;
                var w6 = ReservasTurnosEspecialesGrid;
                var w7 = s.CheckLookupEditor;
                var w8 = s.ImageUploadEditor;

                Q.initFormType(ReservasRecursosForm, [
                    'Nombre', w0,
                    'AppHoldId', w1,
                    'Tipo', w2,
                    'Apertura', w2,
                    'Cierre', w2,
                    'Resolucion', w2,
                    'Emails', w3,
                    'MailBody', w3,
                    'Description', w3,
                    'NeedComment', w4,
                    'TypeList', w5,
                    'SpecialTurnList', w6,
                    'Desde', w1,
                    'Hasta', w1,
                    'NeigborhoodList', w7,
                    'Regulation', w8
                ]);
            }
        }
    }
}

