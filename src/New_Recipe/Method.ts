import Template from "./Template.js";
import { IMethod } from "./interfaces.js";

class Method extends Template {
  root: HTMLElement | null;
  constructor(...args: [string]) {
    super(...args);
    this.root = null;
  }
  buildTemplate() {
    this.createWrapper();
    this.createTitle();
    this.createTextArea();
    this.createSaveButton();
    return;
  }

  createWrapper() {
    const wrapper = document.createElement("form");
    wrapper.className = "new-method-wrapper";
    wrapper.id = "method-anchor";

    this.sectionElement?.prepend(wrapper);

    this.root = document.querySelector(`.${wrapper.className}`);

    /*
      <section id="method">
        <form class="new-method-wrapper"></form>
      </section>
    */

    return;
  }

  createTitle() {
    const wrapper = document.createElement("span");
    wrapper.className = "add-info";

    const title = document.createElement("h6");
    title.innerHTML = "Method";
    title.style.color = "var(--theme-dk-text)";

    const toggle = document.createElement("img");
    toggle.src = "./assets/trash.svg";
    toggle.alt = "delete button";
    toggle.id = "delete-method";
    toggle.addEventListener("click", () => this.teardownTemplate());

    wrapper.append(title);
    wrapper.append(toggle);

    this.root?.prepend(wrapper);

    /*
      <span class="add-info">
        <h6>Method</h6>
        <img src="./assets/bolt.svg" alt="delete button"/>
      </span>
    */

    return;
  }

  createTextArea() {
    const input = document.createElement("textarea");
    input.placeholder = "Describe Method";
    input.cols = 40;
    input.rows = 7;
    input.id = "method-input";

    this.root?.append(input);

    return;
  }

  createSaveButton() {
    const save = document.createElement("button");
    save.type = "submit";
    save.innerText = "Save";
    save.className = "save_button";

    this.root?.append(save);

    save.addEventListener("click", (e) => this.saveFormData(e));

    return;
  }

  saveFormData(evt: Event) {
    evt.preventDefault();

    //Capture user input
    let textareaInput = (
      document.getElementById("method-input") as HTMLTextAreaElement
    )?.value;
    if (textareaInput === "") return; //Prevents save with empty fields

    //Send input info to back end
    const infoPacket: IMethod = { id: Date.now(), method: textareaInput };
    this.userDataCollector.push(infoPacket);

    //Teardown component
    this.teardownTemplate();

    //Add new component
    this.createFinishedComponent(textareaInput, infoPacket.id);

    return;
  }

  createFinishedComponent(textareaInput: string, id: number) {
    const wrapper = document.createElement("div");
    wrapper.className = "finished-method-wrapper";
    wrapper.addEventListener("click", () =>
      this.editMethod(textareaInput, wrapper, id)
    );

    const methodText = document.createElement("p");
    methodText.innerText = textareaInput;

    wrapper.append(methodText);

    this.sectionElement?.append(wrapper);

    return;
  }

  editMethod(textareaInput: string, wrapper: HTMLElement | null, id: number) {
    //Remove data from backend
    this.userDataCollector = this.userDataCollector.filter(
      (item: any) => item.id != id
    );

    //Remove method from DOM
    wrapper?.remove();

    //Create new method template
    this.buildTemplate();

    //re-populate textarea with previous input
    let textarea = document.getElementById(
      "method-input"
    ) as HTMLTextAreaElement;

    textarea.value = textareaInput;

    return;
  }

  teardownTemplate() {
    this.root?.remove();

    this.isNotOpen = true;

    return;
  }

  editBuild(methods: Array<IMethod>) {
    for (const method of methods) {
      this.createFinishedComponent(method.method, method.id);

      this.userDataCollector.push(method);
    }
  }
}

export default Method;
