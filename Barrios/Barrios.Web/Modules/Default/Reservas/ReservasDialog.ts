
namespace Barrios.Default {

    @Serenity.Decorators.registerClass()
    export class ReservasDialog extends Serenity.EntityDialog<ReservasRow, any> {
        protected getFormKey() { return ReservasForm.formKey; }
        protected getIdProperty() { return ReservasRow.idProperty; }
        protected getLocalTextPrefix() { return ReservasRow.localTextPrefix; }
        protected getNameProperty() { return ReservasRow.nameProperty; }
        protected getService() { return ReservasService.baseUrl; }

        protected form = new ReservasForm(this.idPrefix);
        constructor(container: JQuery) {
            super(container);
            this.form.IdRecurso.change((e) => {
                if (this.form.IdRecurso.selectedItem != null) {
                    var obj = this.form.IdRecurso.selectedItem as ReservasRecursosRow;
                    if(( this.form.IdRecurso.selectedItem as ReservasRecursosRow).Resolucion==0){
                        this.form.IdTurnosEspeciales.getGridField().toggle(true);
                        this.form.IdTurnosEspeciales.element.addClass("required");
                        this.form.IdTipo.getGridField().toggle(false);
                        this.form.IdTipo.element.removeClass("required");
                        this.form.IdVecino2.getGridField().toggle(false);
                        this.form.IdVecino2.element.removeClass("required");
                        this.UpdateTurnsComboBox();
                    }
                    else{
                        this.form.IdTurnosEspeciales.getGridField().toggle(false);
                        this.form.IdTurnosEspeciales.element.removeClass("required");
                        this.form.IdTipo.getGridField().toggle(true);
                        this.form.IdTipo.element.addClass("required");
                    }
                }
            });
            this.form.IdTurnosEspeciales.change((e)=>{
                if (this.form.IdTurnosEspeciales.selectedItem != null) {
                    this.form.Turno.value = (this.form.IdTurnosEspeciales.selectedItem as ReservasTurnosEspecialesRow).Nombre;
                    this.form.Inicio.value=( this.form.IdTurnosEspeciales.selectedItem as ReservasTurnosEspecialesRow).Inicio.toString();
                    this.form.Duracion.value=( this.form.IdTurnosEspeciales.selectedItem as ReservasTurnosEspecialesRow).Duracion;
                }
            });
            this.form.Fecha.change(e => { this.UpdateTurnsComboBox(); });
            this.form.IdTipo.change((e)=>{
                if(this.form.IdTipo.selectedItem !=null){
                    if ((this.form.IdTipo.selectedItem as ReservasTiposRow).RequiereVecino2) {
                        this.form.IdVecino2.getGridField().toggle(true);
                        this.form.IdVecino2.element.addClass("required");
                    }
                    else {
                        this.form.IdVecino2.getGridField().toggle(false);
                        this.form.IdVecino2.element.removeClass("required");
                    }
                    this.form.Duracion.value=( this.form.IdTipo.selectedItem as ReservasTiposRow).Duracion;
                }
            });
        }
        protected afterLoadEntity(){
            super.afterLoadEntity();
            if (this.isEditMode() && this.entity.IdTipo!=null) {
                this.form.IdTurnosEspeciales.value = this.entity.IdTipo.toString();
            }
        }
        private UpdateTurnsComboBox() {
            if (this.form.Fecha.valueAsDate && this.form.IdRecurso.selectedItem && (this.form.IdRecurso.selectedItem as ReservasRecursosRow).Resolucion==0) {
                let dayOfWeek = this.form.Fecha.valueAsDate.getDay();
                
                this.form.IdTurnosEspeciales.items.forEach(e => {
                    var enable = false;
                    var dias = (e.source as ReservasTurnosEspecialesRow).Dias;
                    if (dias) {
                        if (dias.search(dayOfWeek.toString()) > 0 || dias.charAt(0) == dayOfWeek.toString())
                            enable=true;
                    }

                    if (enable) 
                        e.disabled = false;
                    else {
                        e.disabled = true;
                        if (e.source == this.form.IdTurnosEspeciales.selectedItem) {
                            this.form.IdTurnosEspeciales.value = null;
                            this.form.IdTurnosEspeciales.set_value("");
                        }
                    }
                });
            }
        }
    }
}