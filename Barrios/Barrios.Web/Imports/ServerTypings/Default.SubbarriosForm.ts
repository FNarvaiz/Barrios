
namespace Barrios.Default {
    export class SubbarriosForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Subbarrios';
    }

    export interface SubbarriosForm {
        Nombre: Serenity.StringEditor;
        BarrioId: Serenity.IntegerEditor;
    }

    [,
        ['Nombre', () => Serenity.StringEditor],
        ['BarrioId', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(SubbarriosForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}