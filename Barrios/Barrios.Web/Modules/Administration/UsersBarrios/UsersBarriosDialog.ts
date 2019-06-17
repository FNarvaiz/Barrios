
namespace Barrios.Administration {

    @Serenity.Decorators.registerClass()
    export class UsersBarriosDialog extends Serenity.EntityDialog<UsersBarriosRow, any> {
        protected getFormKey() { return UsersBarriosForm.formKey; }
        protected getIdProperty() { return UsersBarriosRow.idProperty; }
        protected getLocalTextPrefix() { return UsersBarriosRow.localTextPrefix; }
        protected getService() { return UsersBarriosService.baseUrl; }

        protected form = new UsersBarriosForm(this.idPrefix);

    }
}