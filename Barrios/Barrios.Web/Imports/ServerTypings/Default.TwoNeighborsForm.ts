namespace Barrios.Default {
    export interface TwoNeighborsForm {
        IdVecino2: Serenity.LookupEditor;
    }

    export class TwoNeighborsForm extends Serenity.PrefixedContext {
        static formKey = 'Default.TwoNeighbors';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TwoNeighborsForm.init)  {
                TwoNeighborsForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;

                Q.initFormType(TwoNeighborsForm, [
                    'IdVecino2', w0
                ]);
            }
        }
    }
}

