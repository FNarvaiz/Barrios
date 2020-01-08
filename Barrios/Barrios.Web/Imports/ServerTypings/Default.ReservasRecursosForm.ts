namespace Barrios.Default {
    export interface ReservasRecursosForm {
        Nombre: Serenity.StringEditor;
        Tipo: Serenity.LookupEditor;
        Apertura: Serenity.LookupEditor;
        Cierre: Serenity.LookupEditor;
        Resolucion: Serenity.LookupEditor;
        Emails: Serenity.TextAreaEditor;
        MailBody: Serenity.TextAreaEditor;
        Description: Serenity.TextAreaEditor;
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
                var w1 = s.LookupEditor;
                var w2 = s.TextAreaEditor;
                var w3 = ReservasTiposGrid;
                var w4 = ReservasTurnosEspecialesGrid;
                var w5 = s.IntegerEditor;
                var w6 = s.CheckLookupEditor;
                var w7 = s.ImageUploadEditor;

                Q.initFormType(ReservasRecursosForm, [
                    'Nombre', w0,
                    'Tipo', w1,
                    'Apertura', w1,
                    'Cierre', w1,
                    'Resolucion', w1,
                    'Emails', w2,
                    'MailBody', w2,
                    'Description', w2,
                    'TypeList', w3,
                    'SpecialTurnList', w4,
                    'Desde', w5,
                    'Hasta', w5,
                    'NeigborhoodList', w6,
                    'Regulation', w7
                ]);
            }
        }
    }
}

