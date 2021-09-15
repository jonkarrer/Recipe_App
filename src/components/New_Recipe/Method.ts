import Template from "./Template.js";

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
    const section = this.sectionElement;

    const wrapper = document.createElement("form");
    wrapper.className = "new-method-wrapper";

    section?.prepend(wrapper);

    this.root = document.querySelector(".new-method-wrapper");

    return;
  }

  createTitle() {
    const wrapper = document.createElement("span");
    wrapper.className = "add-info";

    const title = document.createElement("h6");
    title.innerHTML = "Method";
    title.style.color = "var(--theme-dk-text)";

    const toggle = document.createElement("img");
    toggle.src = "./assets/bolt.svg";
    toggle.id = "delete-method";
    toggle.addEventListener("click", () => this.teardownTemplate());

    wrapper.append(title);
    wrapper.append(toggle);

    this.root?.prepend(wrapper);

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
    //@ts-ignore
    let textareaInput = document.getElementById("method-input")?.value;
    if (textareaInput === "") return; //Prevents empty fields

    //Send input info to back end

    //Teardown component
    this.teardownTemplate();

    //Add new component
    const wrapper = document.createElement("div");
    wrapper.className = "finished-method-wrapper";

    const methodText = document.createElement("p");
    methodText.innerText = textareaInput;

    wrapper.append(methodText);

    //Add unique id to wrapper. This will be used for back end identification
    wrapper.id = `${Date.now()}`;

    wrapper.addEventListener("click", () =>
      this.editMethod(textareaInput, wrapper)
    );

    this.sectionElement?.append(wrapper);

    return;
  }

  editMethod(textareaInput: string, wrapper: HTMLElement | null) {
    //Use wrapper.id to change the back end data. Immedietly delete the data and let the new ingredient save new user input.

    //Remove method from DOM
    wrapper?.remove();

    //Create new method template
    this.buildTemplate();

    let textarea = document.getElementById("method-input");

    //@ts-ignore
    textarea.value = textareaInput;

    return;
  }

  teardownTemplate() {
    this.root?.remove();
    this.isNotOpen = true;
    return;
  }
}

export default Method;
