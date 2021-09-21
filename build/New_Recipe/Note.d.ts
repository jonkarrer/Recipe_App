import Template from "./Template.js";
import { INote } from "./interfaces.js";
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
    editBuild(notes: Array<INote>): void;
}
export default Note;
