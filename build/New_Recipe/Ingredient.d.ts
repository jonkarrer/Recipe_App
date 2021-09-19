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
    createFinishedComponent(name: string, amount: string, unit: string, identifier: number): void;
    editIngredient(name: string, amount: string, unit: string, wrapper: HTMLElement | null, identifier: number): void;
    teardownTemplate(): void;
}
export default Ingredient;
