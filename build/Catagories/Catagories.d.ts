import { IMaster } from "../New_Recipe/interfaces.js";
export declare class Catagories {
    private database;
    root: HTMLElement | null;
    constructor(database: Array<any>);
    buildTemplate(): void;
    createCatagories(): void;
    openCatagory(parentElement: HTMLElement | null, selectedCatagory: string): void;
    filterRecipes(selectedCatagory: string): any[];
    openRecipe(recipe: IMaster): void;
}
