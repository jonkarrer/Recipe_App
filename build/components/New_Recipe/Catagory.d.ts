import Template from "./Template.js";
declare class Catagory extends Template {
    buildTemplate(): void;
    createContainer(): void;
    createBubbles(): void;
    captureUserSelection(bubble: HTMLElement, evt: Event, cat: string, catagories: Array<string>): void;
    teardownTemplate(): void;
}
export default Catagory;
