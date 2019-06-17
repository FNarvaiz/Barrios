
namespace Barrios.Administration {

    @Serenity.Decorators.registerClass()
    export class UsersBarriosGrid extends Serenity.EntityGrid<UsersBarriosRow, any> {
        protected getColumnsKey() { return 'Administration.UsersBarrios'; }
        protected getDialogType() { return UsersBarriosDialog; }
        protected getIdProperty() { return UsersBarriosRow.idProperty; }
        protected getLocalTextPrefix() { return UsersBarriosRow.localTextPrefix; }
        protected getService() { return UsersBarriosService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}