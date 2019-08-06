namespace Barrios.Default {
    export interface ReservasRecursosForm {
        Nombre: Serenity.StringEditor;
        Tipo: Serenity.LookupEditor;
        Apertura: Serenity.LookupEditor;
        Cierre: Serenity.LookupEditor;
        Resolucion: Serenity.LookupEditor;
        TypeList: ReservasTiposGrid;
        ClientIdList: Serenity.CheckLookupEditor;
        SpecialTurnList: ReservasTurnosEspecialesGrid;
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
                var w3 = s.CheckLookupEditor;
                var w4 = ReservasTurnosEspecialesGrid;

                Q.initFormType(ReservasRecursosForm, [
                    'Nombre', w0,
                    'Tipo', w1,
                    'Apertura', w1,
                    'Cierre', w1,
                    'Resolucion', w1,
                    'TypeList', w2,
                    'ClientIdList', w3,
                    'SpecialTurnList', w4
                ]);
            }
        }
    }
}

