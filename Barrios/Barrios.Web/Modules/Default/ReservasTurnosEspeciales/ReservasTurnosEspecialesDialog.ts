
namespace Barrios.Default {

    @Serenity.Decorators.registerClass()
    export class ReservasTurnosEspecialesDialog extends Common.GridEditorDialog<ReservasTurnosEspecialesRow> {
        protected getFormKey() { return ReservasTurnosEspecialesForm.formKey; }
        protected getLocalTextPrefix() { return ReservasTurnosEspecialesRow.localTextPrefix; }
        private days=[];
        protected form = new ReservasTurnosEspecialesForm(this.idPrefix);
        constructor(container: JQuery) {
            super(container);
            this.days.push(this.form.Domingo);
            this.days.push(this.form.Lunes);
            this.days.push(this.form.Martes);
            this.days.push(this.form.Miercoles);
            this.days.push(this.form.Jueves);
            this.days.push(this.form.Viernes);
            this.days.push(this.form.Sabado);
            this.days.push(this.form.Feriados);
        }
        protected afterLoadEntity(){
            if(this.form.Dias.value){
                for(var x=0; x<this.form.Dias.value.length;x++){
                    var dayOfWeek=parseInt( this.form.Dias.value.charAt(x));
                    if(dayOfWeek<8)
                        this.days[dayOfWeek].value= true;
                }
            }
            super.afterLoadEntity();
        }
        protected validateBeforeSave():boolean{
            this.form.Dias.value="";
            for(var x=0; x<this.days.length;x++){
                if(this.days[x].value==true)
                    this.form.Dias.value=this.form.Dias.value+x.toString();
            }
            return super.validateBeforeSave();

        }
    }
}