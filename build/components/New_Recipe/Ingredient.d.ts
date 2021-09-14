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
    teardownTemplate(): void;
}
export default Ingredient;
