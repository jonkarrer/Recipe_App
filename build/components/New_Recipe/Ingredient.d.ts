import Template from "./Template.js";
declare class Ingredient extends Template {
    root: HTMLElement | null;
    constructor(...args: [string]);
    buildTemplate(): void;
    createWrapper(): void;
    createTitle(): void;
    createNameInput(): void;
    createAmountInput(): void;
    createSaveButton(): void;
    saveFormData(evt: Event): void;
    editIngredient(name: string, amount: string, unit: string, wrapper: HTMLElement | null): void;
    teardownTemplate(): void;
}
export default Ingredient;
