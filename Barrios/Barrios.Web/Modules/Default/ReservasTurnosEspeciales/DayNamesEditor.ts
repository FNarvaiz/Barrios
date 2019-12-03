namespace Barrios.Modules.Default.ReservasTurnosEspeciales {

    /**
     * Our select editor with hardcoded values.
     * 
     * When you define a new editor type, make sure you build
     * and transform templates for it to be available 
     * in server side forms, e.g. [HardCodedValuesEditor]
     */
    @Serenity.Decorators.registerEditor()
    export class DayNamesEditor extends Serenity.Select2Editor<any, any> {

        constructor(container: JQuery) {
            super(container, null);

            // add option accepts a key (id) value and display text value
            this.addOption("1", "Lunes");
            this.addOption("2", "Martes");
            this.addOption("3", "Miercoles");
            this.addOption("4", "Jueves");
            this.addOption("5", "Vierenes");
            this.addOption("6", "Sabado");
            this.addOption("0", "Domingo");

        }
    }
}