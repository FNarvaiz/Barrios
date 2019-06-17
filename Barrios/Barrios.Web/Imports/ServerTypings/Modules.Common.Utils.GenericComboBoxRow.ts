namespace Barrios.Modules.Common.Utils {
    export interface GenericComboBoxRow {
        Name?: string;
        Id?: number;
    }

    export namespace GenericComboBoxRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Modules.Common.Utils.GenericComboBox';

        export declare const enum Fields {
            Name = "Name",
            Id = "Id"
        }
    }
}

