import Template from "./Template.js";
import { IMethod } from "./interfaces.js";
declare class Method extends Template {
    root: HTMLElement | null;
    constructor(...args: [string]);
    buildTemplate(): void;
    createWrapper(): void;
    createTitle(): void;
    createTextArea(): void;
    createSaveButton(): void;
    saveFormData(evt: Event): void;
    createFinishedComponent(textareaInput: string, id: number): void;
    editMethod(textareaInput: string, wrapper: HTMLElement | null, id: number): void;
    teardownTemplate(): void;
    editBuild(methods: Array<IMethod>): void;
}
export default Method;
