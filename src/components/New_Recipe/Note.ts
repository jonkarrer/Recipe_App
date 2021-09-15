import Template from "./Template.js";

class Note extends Template {
  buildTemplate() {
    if (this.toggleSwitch != null) this.toggleSwitch.innerText = "-";
    if (this.title != null) this.title.style.color = "var(--theme-dk-text)";

    this.toggleSwitch?.addEventListener("click", () => this.teardownTemplate());

    this.createWrapper();
    this.createTextarea();
    this.createSaveButton();
    return;
  }
  createWrapper() {
    const root = this.sectionElement;
    const parent: HTMLDivElement = document.createElement("div");
    parent.className = "new-note-wrapper";

    root?.append(parent);
  }
  createTextarea() {
    const root = document.querySelector(".new-note-wrapper");

    const input = document.createElement("textarea");
    input.placeholder = "Describe Method";
    input.cols = 40;
    input.rows = 7;
    input.id = "note-input";

    root?.append(input);
  }
  createSaveButton() {
    const root = document.querySelector(".new-note-wrapper");

    const save = document.createElement("button");
    save.type = "submit";
    save.innerText = "Save";
    save.className = "save_button";

    root?.append(save);

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
    const wrapper = document.createElement("div");
    wrapper.className = "finished-note-wrapper";

    const methodText = document.createElement("h6");
    methodText.innerText = "Note";

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
