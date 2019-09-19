
namespace Barrios.Default {
    @Serenity.Decorators.registerClass()
    export class EspecialBookingDialog extends Serenity.EntityDialog<ReservasRow, any> {
        protected getFormKey() { return EspecialTurnForm.formKey; }
        protected getIdProperty() { return ReservasRow.idProperty; }
        protected getLocalTextPrefix() { return ReservasRow.localTextPrefix; }
        protected getNameProperty() { return ReservasRow.nameProperty; }
        protected getService() { return ReservasService.baseUrl; }
        public send = false;
        public turn = null;
        public form = new EspecialTurnForm(this.idPrefix);
        constructor(container: JQuery) {
            super(container);
            this.set_dialogTitle("Solicitud de turno");

            this.form.IdRecurso.change((e)=>{
                if (this.form.IdRecurso.selectedItem != null) {

                }
            });
            this.form.IdTurnosEspeciales.change((e)=>{
                if(this.form.IdTurnosEspeciales.selectedItem !=null){
                    this.form.Inicio.value=( this.form.IdTurnosEspeciales.selectedItem as ReservasTurnosEspecialesRow).Inicio.toString();
                    this.form.Duracion.value=( this.form.IdTurnosEspeciales.selectedItem as ReservasTurnosEspecialesRow).Duracion;
                }
            });
            this.form.Fecha.set_minDate(new Date());
            this.form.Fecha.set_maxDate(new Date(new Date().getTime() + (90 * 24 * 60 * 60 * 1000)));
        }
        protected getToolbarButtons() {
            return [{
                title: 'Enviar Solicitud',
                cssClass: 'add-button',
                onClick: () => {
                    if (this.validateForm()) {
                        this.send = true;
                        this.turn = this.form.IdTurnosEspeciales.selectedItem as ReservasTurnosEspecialesRow;
                        this.dialogClose();
                    }
                }
            }];
        }
    }
}