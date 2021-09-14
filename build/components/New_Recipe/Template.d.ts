export default class Template {
    sectionId: string;
    isNotOpen: boolean;
    title: HTMLElement | null;
    toggleSwitch: HTMLElement | null;
    sectionElement: HTMLElement | null;
    constructor(sectionId: string);
    clickHandler(e: Event): void;
    buildTemplate(): void;
    teardownTemplate(): void;
}
