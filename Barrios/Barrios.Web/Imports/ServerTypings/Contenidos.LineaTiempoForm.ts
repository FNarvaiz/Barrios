namespace Barrios.Contenidos {
    export interface LineaTiempoForm {
        Nombre: Serenity.StringEditor;
        ArchivoFilename: Serenity.StringEditor;
        ArchivoFilesize: Serenity.IntegerEditor;
        ArchivoContenttype: Serenity.StringEditor;
        ArchivoBinarydata: Serenity.StringEditor;
        Aprobado: Serenity.BooleanEditor;
        Mes: Serenity.IntegerEditor;
        Anio: Serenity.IntegerEditor;
        Periodo: Serenity.StringEditor;
        PeriodoFecha: Serenity.DateEditor;
        ContenidoTexto: Serenity.StringEditor;
        Userid: Serenity.IntegerEditor;
        IdCategoria: Serenity.IntegerEditor;
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
                var w1 = s.IntegerEditor;
                var w2 = s.BooleanEditor;
                var w3 = s.DateEditor;

                Q.initFormType(LineaTiempoForm, [
                    'Nombre', w0,
                    'ArchivoFilename', w0,
                    'ArchivoFilesize', w1,
                    'ArchivoContenttype', w0,
                    'ArchivoBinarydata', w0,
                    'Aprobado', w2,
                    'Mes', w1,
                    'Anio', w1,
                    'Periodo', w0,
                    'PeriodoFecha', w3,
                    'ContenidoTexto', w0,
                    'Userid', w1,
                    'IdCategoria', w1
                ]);
            }
        }
    }
}

