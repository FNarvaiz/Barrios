
namespace Barrios.Contenidos {

    @Serenity.Decorators.registerClass()
    export class CategoriasDialog extends Serenity.EntityDialog<CategoriasRow, any> {
        protected getFormKey() { return CategoriasForm.formKey; }
        protected getIdProperty() { return CategoriasRow.idProperty; }
        protected getLocalTextPrefix() { return CategoriasRow.localTextPrefix; }
        protected getNameProperty() { return CategoriasRow.nameProperty; }
        protected getService() { return CategoriasService.baseUrl; }

        protected form = new CategoriasForm(this.idPrefix);
        public static typeCategory: number;
        
        constructor(container: JQuery) {
            super(container);

            console.log("Constructor Category");
            console.log(CategoriasDialog.typeCategory);
            
        }
        protected beforeLoadEntity(entity: CategoriasRow) {
            super.beforeLoadEntity(entity);
            if (CategoriasDialog.typeCategory != null)
                entity.Type = CategoriasDialog.typeCategory;
        }
        protected afterLoadEntity() {
            super.afterLoadEntity();
            if (CategoriasDialog.typeCategory != null) {
                this.form.Type.set_readOnly(true);
            }
        }


    }
}