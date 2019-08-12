namespace Barrios.Default {
    export interface ReservasRecursosForm {
        Nombre: Serenity.StringEditor;
        Tipo: Serenity.LookupEditor;
        Apertura: Serenity.LookupEditor;
        Cierre: Serenity.LookupEditor;
        Resolucion: Serenity.LookupEditor;
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
                var w2 = ReservasTiposGrid;
                var w3 = ReservasTurnosEspecialesGrid;
                var w4 = s.CheckLookupEditor;

                Q.initFormType(ReservasRecursosForm, [
                    'Nombre', w0,
                    'Tipo', w1,
                    'Apertura', w1,
                    'Cierre', w1,
                    'Resolucion', w1,
                    'TypeList', w2,
                    'SpecialTurnList', w3,
                    'NeigborhoodList', w4
                ]);
            }
        }
    }
}

