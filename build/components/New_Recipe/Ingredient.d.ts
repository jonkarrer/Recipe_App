import Template from "./Template.js";
declare class Ingredient extends Template {
    root: HTMLElement | null;
    infoPacket: {
        id: number;
        name: string;
        amount: string;
        unit: string;
    } | null;
    constructor(...args: [string]);
    buildTemplate(): void;
    createWrapper(): void;
    createTitle(): void;
    createNameInput(): void;
    createAmountInput(): void;
    createSaveButton(): void;
    saveFormData(evt: Event): void;
    createFinishedComponent(name: string, amount: string, unit: string, identifier: number): void;
    editIngredient(name: string, amount: string, unit: string, wrapper: HTMLElement | null, identifier: number): void;
    teardownTemplate(): void;
}
export default Ingredient;
