
namespace Barrios.Default {

    @Serenity.Decorators.registerClass()
    export class HolidaysDialog extends Serenity.EntityDialog<HolidaysRow, any> {
        protected getFormKey() { return HolidaysForm.formKey; }
        protected getIdProperty() { return HolidaysRow.idProperty; }
        protected getLocalTextPrefix() { return HolidaysRow.localTextPrefix; }
        protected getNameProperty() { return HolidaysRow.nameProperty; }
        protected getService() { return HolidaysService.baseUrl; }

        protected form = new HolidaysForm(this.idPrefix);

    }
}