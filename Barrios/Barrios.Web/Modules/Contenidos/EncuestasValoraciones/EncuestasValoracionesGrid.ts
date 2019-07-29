
namespace Barrios.Contenidos {
    
    export class EncuestasValoracionesGrid extends DetailGridBase<EncuestasValoracionesRow> {
        protected getColumnsKey() { return 'Contenidos.EncuestasValoraciones'; }
        protected getDialogType() { return EncuestasValoracionesDialog; }
        protected getIdProperty() { return EncuestasValoracionesRow.idProperty; }
        protected getLocalTextPrefix() { return EncuestasValoracionesRow.localTextPrefix; }
        protected getService() { return EncuestasValoracionesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);

            this.setTitle("Valoraciones");
        }
        protected getMasterFieldName() {
            return "ID_Encuesta";
        }
    }
}