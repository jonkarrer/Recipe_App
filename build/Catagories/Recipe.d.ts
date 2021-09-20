import { IMaster } from "../New_Recipe/interfaces";
declare class Recipe {
    private recipe;
    root: HTMLElement;
    wrapper: HTMLElement;
    constructor(recipe: IMaster);
    openRecipe(): void;
    createWrapper(): void;
    createIngredients(): void;
    createMethods(): void;
    createNotes(): void;
    teardownComponent(): void;
}
export { Recipe };
