import Template from "./Template.js";
import { ICatagory } from "./interfaces.js";
declare class Catagory extends Template {
    buildTemplate(): void;
    createContainer(): void;
    createBubbles(): void;
    captureUserSelection(bubble: HTMLElement, evt: Event, catagory: string, catagories: Array<string>): void;
    teardownTemplate(): void;
    editBuild(catagories: Array<ICatagory>): void;
}
export default Catagory;
