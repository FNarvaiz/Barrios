namespace Barrios.Default {
    export interface ReservasRecursosForm {
        Nombre: Serenity.StringEditor;
        AppHoldId: Serenity.IntegerEditor;
        Tipo: Serenity.LookupEditor;
        Apertura: Serenity.LookupEditor;
        Cierre: Serenity.LookupEditor;
        Resolucion: Serenity.LookupEditor;
        AmountToReserve: Serenity.IntegerEditor;
        AmountForDays: Serenity.IntegerEditor;
        NeedComment: Serenity.BooleanEditor;
        Desde: Serenity.IntegerEditor;
        Hasta: Serenity.IntegerEditor;
        Description: Serenity.TextAreaEditor;
        Emails: Serenity.TextAreaEditor;
        MailBody: Serenity.HtmlContentEditor;
        TypeList: ReservasTiposGrid;
        Dias: Serenity.StringEditor;
        Lunes: Serenity.BooleanEditor;
        Martes: Serenity.BooleanEditor;
        Miercoles: Serenity.BooleanEditor;
        Jueves: Serenity.BooleanEditor;
        Viernes: Serenity.BooleanEditor;
        Sabado: Serenity.BooleanEditor;
        Domingo: Serenity.BooleanEditor;
        Feriados: Serenity.BooleanEditor;
        SpecialTurnList: ReservasTurnosEspecialesGrid;
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
                var w3 = s.BooleanEditor;
                var w4 = s.TextAreaEditor;
                var w5 = s.HtmlContentEditor;
                var w6 = ReservasTiposGrid;
                var w7 = ReservasTurnosEspecialesGrid;
                var w8 = s.CheckLookupEditor;
                var w9 = s.ImageUploadEditor;

                Q.initFormType(ReservasRecursosForm, [
                    'Nombre', w0,
                    'AppHoldId', w1,
                    'Tipo', w2,
                    'Apertura', w2,
                    'Cierre', w2,
                    'Resolucion', w2,
                    'AmountToReserve', w1,
                    'AmountForDays', w1,
                    'NeedComment', w3,
                    'Desde', w1,
                    'Hasta', w1,
                    'Description', w4,
                    'Emails', w4,
                    'MailBody', w5,
                    'TypeList', w6,
                    'Dias', w0,
                    'Lunes', w3,
                    'Martes', w3,
                    'Miercoles', w3,
                    'Jueves', w3,
                    'Viernes', w3,
                    'Sabado', w3,
                    'Domingo', w3,
                    'Feriados', w3,
                    'SpecialTurnList', w7,
                    'NeigborhoodList', w8,
                    'Regulation', w9
                ]);
            }
        }
    }
}

