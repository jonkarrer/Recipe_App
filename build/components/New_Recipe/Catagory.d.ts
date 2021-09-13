export declare class Catagory {
    catagory: Element | null;
    isOpen: boolean;
    title: HTMLElement | null;
    toggleSwitch: HTMLElement | null;
    constructor();
    clickHandler(e: Event): void;
    activateCatagory(): void;
    createContainer(): void;
    createBubbles(): void;
    teardownCatagories(): void;
}
