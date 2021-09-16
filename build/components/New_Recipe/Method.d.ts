import Template from "./Template.js";
declare class Method extends Template {
    root: HTMLElement | null;
    constructor(...args: [string]);
    buildTemplate(): void;
    createWrapper(): void;
    createTitle(): void;
    createTextArea(): void;
    createSaveButton(): void;
    saveFormData(evt: Event): void;
    createFinishedComponent(textareaInput: string): void;
    editMethod(textareaInput: string, wrapper: HTMLElement | null): void;
    teardownTemplate(): void;
}
export default Method;
