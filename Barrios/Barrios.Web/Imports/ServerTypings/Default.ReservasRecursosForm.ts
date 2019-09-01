namespace Barrios.Default {
    export interface ReservasRecursosForm {
        Nombre: Serenity.StringEditor;
        Tipo: Serenity.LookupEditor;
        Apertura: Serenity.LookupEditor;
        Cierre: Serenity.LookupEditor;
        Resolucion: Serenity.LookupEditor;
        Emails: Serenity.TextAreaEditor;
        TypeList: ReservasTiposGrid;
        SpecialTurnList: ReservasTurnosEspecialesGrid;
        NeigborhoodList: Serenity.CheckLookupEditor;
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
                var w5 = s.CheckLookupEditor;

                Q.initFormType(ReservasRecursosForm, [
                    'Nombre', w0,
                    'Tipo', w1,
                    'Apertura', w1,
                    'Cierre', w1,
                    'Resolucion', w1,
                    'Emails', w2,
                    'TypeList', w3,
                    'SpecialTurnList', w4,
                    'NeigborhoodList', w5
                ]);
            }
        }
    }
}

