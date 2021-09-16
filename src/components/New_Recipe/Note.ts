import Template from "./Template.js";

class Note extends Template {
  root: HTMLElement | null;
  constructor(...args: [string]) {
    super(...args);
    this.root = null;
  }
  buildTemplate() {
    this.createWrapper();
    this.createTitle();
    this.createTextarea();
    this.createSaveButton();
    return;
  }

  createWrapper() {
    const wrapper = document.createElement("div");
    wrapper.className = "new-note-wrapper";

    this.sectionElement?.append(wrapper);

    this.root = document.querySelector(`.${wrapper.className}`);

    return;
  }

  createTitle() {
    const wrapper = document.createElement("span");
    wrapper.className = "add-info";

    const title = document.createElement("h6");
    title.innerHTML = "Note";
    title.style.color = "var(--theme-dk-text)";

    const toggle = document.createElement("img");
    toggle.src = "./assets/bolt.svg";
    toggle.alt = "delete button";
    toggle.id = "delete-note";
    toggle.addEventListener("click", () => this.teardownTemplate());

    wrapper.append(title);
    wrapper.append(toggle);

    this.root?.prepend(wrapper);

    /*
      <span class="add-info">
        <h6>Note</h6>
        <img src="./assets/bolt.svg" alt="delete button"/>
      </span>
    */

    return;
  }

  createTextarea() {
    const input = document.createElement("textarea");
    input.placeholder = "Describe Method";
    input.cols = 40;
    input.rows = 7;
    input.id = "note-input";

    this.root?.append(input);
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
    let textareaInput = document.getElementById("note-input")?.value;
    if (textareaInput === "") return; //Prevents empty fields

    //Send input info to back end

    //Teardown component
    this.teardownTemplate();

    //Add new component
    this.createFinishedComponent(textareaInput);

    return;
  }

  createFinishedComponent(textareaInput: string) {
    const wrapper = document.createElement("div");
    wrapper.className = "finished-note-wrapper";

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

    let textarea = document.getElementById("note-input");

    //@ts-ignore
    textarea.value = textareaInput;

    return;
  }

  teardownTemplate() {
    let teardownTarget = document.querySelector(".new-note-wrapper");
    teardownTarget?.remove();
    if (this.toggleSwitch != null) this.toggleSwitch.innerText = "+";
    if (this.title != null) this.title.style.color = "var(--theme-lt-text)";
    this.isNotOpen = true;
    return;
  }
}

export default Note;
