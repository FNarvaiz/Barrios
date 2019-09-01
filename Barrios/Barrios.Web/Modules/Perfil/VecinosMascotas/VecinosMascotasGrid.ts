
namespace Barrios.Perfil {

    import fld = VecinosMascotasRow.Fields;
    @Serenity.Decorators.registerClass()
    export class VecinosMascotasGrid extends Serenity.EntityGrid<VecinosMascotasRow, any> {
        protected getColumnsKey() { return 'Perfil.VecinosMascotas'; }
        protected getDialogType() { return VecinosMascotasDialog; }
        protected getIdProperty() { return VecinosMascotasRow.idProperty; }
        protected getLocalTextPrefix() { return VecinosMascotasRow.localTextPrefix; }
        protected getService() { return VecinosMascotasService.baseUrl; }

        private userId;
        constructor(container: JQuery, userId = null) {
            super(container);
            this.userId = userId;
            if (this.userId != null)
                this.element.find(".quick-filters-bar").remove();


        }
        protected onViewSubmit() {
            if (!super.onViewSubmit()) {
                return false;
            }
            var request = this.view.params as Serenity.ListRequest;
            if (this.userId != null) {
                request.Criteria = Serenity.Criteria.and(
                    request.Criteria,
                    [[fld.Userid], '=', this.userId]
                );
            }
            return true;
        }
    }
}