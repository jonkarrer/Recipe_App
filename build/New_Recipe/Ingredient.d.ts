import Template from "./Template.js";
import { IIngredient } from "./interfaces.js";
declare class Ingredient extends Template {
    root: HTMLElement | null;
    infoPacket: IIngredient | null;
    constructor(...args: [string]);
    buildTemplate(): void;
    createWrapper(): void;
    createTitle(): void;
    createNameInput(): void;
    createAmountInput(): void;
    createSaveButton(): void;
    saveFormData(evt: Event): void;
    createFinishedComponent(identifier: number, name: string, amount: string, unit: string): void;
    editIngredient(name: string, amount: string, unit: string, wrapper: HTMLElement | null, identifier: number): void;
    teardownTemplate(): void;
    editBuild(ingredients: Array<IIngredient>): void;
}
export default Ingredient;
