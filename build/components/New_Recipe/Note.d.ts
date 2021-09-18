import Template from "./Template.js";
declare class Note extends Template {
    root: HTMLElement | null;
    constructor(...args: [string]);
    buildTemplate(): void;
    createWrapper(): void;
    createTitle(): void;
    createTextarea(): void;
    createSaveButton(): void;
    saveFormData(evt: Event): void;
    createFinishedComponent(textareaInput: string, id: number): void;
    editMethod(textareaInput: string, wrapper: HTMLElement | null, id: number): void;
    teardownTemplate(): void;
}
export default Note;
