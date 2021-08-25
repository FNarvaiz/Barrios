namespace Barrios.Contenidos {
    export interface LineaTiempoForm {
        Nombre: Serenity.StringEditor;
        IdCategoria: Serenity.LookupEditor;
        PeriodoFecha: Serenity.DateEditor;
        ArchivoFilename: Serenity.ImageUploadEditor;
        ContenidoTexto: Serenity.HtmlContentEditor;
        Mostrar: Serenity.BooleanEditor;
        Aprobado: Serenity.BooleanEditor;
    }

    export class LineaTiempoForm extends Serenity.PrefixedContext {
        static formKey = 'Contenidos.LineaTiempo';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!LineaTiempoForm.init)  {
                LineaTiempoForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.DateEditor;
                var w3 = s.ImageUploadEditor;
                var w4 = s.HtmlContentEditor;
                var w5 = s.BooleanEditor;

                Q.initFormType(LineaTiempoForm, [
                    'Nombre', w0,
                    'IdCategoria', w1,
                    'PeriodoFecha', w2,
                    'ArchivoFilename', w3,
                    'ContenidoTexto', w4,
                    'Mostrar', w5,
                    'Aprobado', w5
                ]);
            }
        }
    }
}

