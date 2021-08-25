
namespace Barrios.Contenidos {

    @Serenity.Decorators.registerClass()
    export class NewsDialog extends Serenity.EntityDialog<NewsRow, any> {
        protected getFormKey() { return NewsForm.formKey; }
        protected getIdProperty() { return NewsRow.idProperty; }
        protected getLocalTextPrefix() { return NewsRow.localTextPrefix; }
        protected getNameProperty() { return NewsRow.nameProperty; }
        protected getService() { return NewsService.baseUrl; }

        protected form = new NewsForm(this.idPrefix);

    }
}