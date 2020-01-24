
namespace Barrios.Administration {

    @Serenity.Decorators.registerClass()
    export class NotesGrid extends Serenity.EntityGrid<NotesRow, any> {
        protected getColumnsKey() { return 'Administration.Notes'; }
        protected getDialogType() { return NotesDialog; }
        protected getIdProperty() { return NotesRow.idProperty; }
        protected getLocalTextPrefix() { return NotesRow.localTextPrefix; }
        protected getService() { return NotesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}