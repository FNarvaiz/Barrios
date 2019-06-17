namespace Barrios.Contenidos {
    export interface CategoriasForm {
        Type: Serenity.LookupEditor;
        Nombre: Serenity.StringEditor;
        Mostrar: Serenity.BooleanEditor;
        Vigente: Serenity.BooleanEditor;
    }

    export class CategoriasForm extends Serenity.PrefixedContext {
        static formKey = 'Contenidos.Categorias';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CategoriasForm.init)  {
                CategoriasForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.BooleanEditor;

                Q.initFormType(CategoriasForm, [
                    'Type', w0,
                    'Nombre', w1,
                    'Mostrar', w2,
                    'Vigente', w2
                ]);
            }
        }
    }
}

