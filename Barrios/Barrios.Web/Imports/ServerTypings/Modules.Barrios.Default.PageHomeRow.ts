namespace Barrios.Modules.Barrios.Default {
    export interface PageHomeRow {
        Name?: string;
        Path?: string;
    }

    export namespace PageHomeRow {
        export const idProperty = 'Path';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Modules.Barrios.Default.PageHome';

        export declare const enum Fields {
            Name = "Name",
            Path = "Path"
        }
    }
}

