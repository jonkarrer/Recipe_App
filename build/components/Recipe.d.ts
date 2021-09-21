import { IMaster } from "../New_Recipe/interfaces";
export declare class Recipe {
    private recipe;
    root: HTMLElement;
    wrapper: HTMLElement;
    constructor(recipe: IMaster);
    buildTemplate(): void;
    createCloseButton(): void;
    createHeading(): void;
    createModifyButtons(): void;
    editRecipe(): void;
    deleteRecipe(): void;
    createIngredients(): void;
    createMethods(): void;
    createNotes(): void;
    teardownComponent(): void;
}
