﻿
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
            this.form.IdRecurso.change((e)=>{
                if(this.form.IdRecurso.selectedItem !=null){
                    if(( this.form.IdRecurso.selectedItem as ReservasRecursosRow).Resolucion==0){
                        this.form.IdTurnosEspeciales.getGridField().toggle(true);
                        this.form.IdTipo.getGridField().toggle(false);
                        this.form.IdVecino2.getGridField().toggle(false);
                    }
                    else{
                        this.form.IdTurnosEspeciales.getGridField().toggle(false);
                        this.form.IdTipo.getGridField().toggle(true);
                    }
                }
            });
            this.form.IdTurnosEspeciales.change((e)=>{
                if(this.form.IdTurnosEspeciales.selectedItem !=null){
                    this.form.Inicio.value=( this.form.IdTurnosEspeciales.selectedItem as ReservasTurnosEspecialesRow).Inicio.toString();
                    this.form.Duracion.value=( this.form.IdTurnosEspeciales.selectedItem as ReservasTurnosEspecialesRow).Duracion;
                }
            });
            this.form.IdTipo.change((e)=>{
                if(this.form.IdTipo.selectedItem !=null){
                    if(( this.form.IdTipo.selectedItem as ReservasTiposRow).RequiereVecino2)
                        this.form.IdVecino2.getGridField().toggle(true);
                    else
                        this.form.IdVecino2.getGridField().toggle(false);
                    this.form.Duracion.value=( this.form.IdTipo.selectedItem as ReservasTiposRow).Duracion;
                }
            });
        }
    }
}