import Template from "./Template.js";
declare class Note extends Template {
    buildTemplate(): void;
    createWrapper(): void;
    createTextarea(): void;
    createSaveButton(): void;
    saveFormData(evt: Event): void;
    editMethod(textareaInput: string, wrapper: HTMLElement | null): void;
    teardownTemplate(): void;
}
export default Note;
