export default class Template {
    sectionId: string;
    isNotOpen: boolean;
    title: HTMLElement | null;
    toggleSwitch: HTMLElement | null;
    sectionElement: HTMLElement | null;
    userDataCollector: any;
    constructor(sectionId: string);
    clickHandler(e: Event): void;
    buildTemplate(): void;
    getAllData(): void;
}
