﻿namespace Barrios.Administration {

    import fld = UserRow.Fields;
    @Serenity.Decorators.registerClass()
    export class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey() { return "Administration.User"; }
        protected getDialogType() { return UserDialog; }
        protected getIdProperty() { return UserRow.idProperty; }
        protected getIsActiveProperty() { return UserRow.isActiveProperty; }
        protected getLocalTextPrefix() { return UserRow.localTextPrefix; }
        protected getService() { return UserService.baseUrl; }
        private neighbordhoobId=null;
        constructor(container: JQuery,neighbordhoobId) {
            super(container);
            this.neighbordhoobId = neighbordhoobId;
            this.element.append("<div  class='description' > Leyenda: <div class='statusRed'>Sin Permisos</div>" +
                "<div class='statusGreen' > Administradores </div>" +
                "<div class='statusBlue'>Otros</div></div>");
        }

        protected getDefaultSortBy() {
            return [UserRow.Fields.Username];
        }
        protected getItemCssClass(item: UserRow, index: number): string {
            let klass: string = "";
            if (item.HavePermisions == 1)
                klass = "statusGreen";
            else if (item.HavePermisions==0)
                klass = "statusRed";
            else 
                klass = "statusBlue";
            return Q.trimToNull(klass);
        }
        protected onViewSubmit() {
            if (!super.onViewSubmit()) {
                return false;
            }
            var request = this.view.params as Serenity.ListRequest;
            if (this.neighbordhoobId != null) {
                request.Criteria = Serenity.Criteria.and(
                    request.Criteria,
                    [[fld.BarrioId], '=', this.neighbordhoobId]
                );
            }
            return true;
        }
    }
}