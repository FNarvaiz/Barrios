namespace Barrios.Contenidos {
    export interface NewsForm {
        Nombre: Serenity.StringEditor;
        Descripcion: Serenity.HtmlContentEditor;
        Imagen: Serenity.ImageUploadEditor;
        Vigente: Serenity.BooleanEditor;
    }

    export class NewsForm extends Serenity.PrefixedContext {
        static formKey = 'Contenidos.News';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!NewsForm.init)  {
                NewsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.HtmlContentEditor;
                var w2 = s.ImageUploadEditor;
                var w3 = s.BooleanEditor;

                Q.initFormType(NewsForm, [
                    'Nombre', w0,
                    'Descripcion', w1,
                    'Imagen', w2,
                    'Vigente', w3
                ]);
            }
        }
    }
}

