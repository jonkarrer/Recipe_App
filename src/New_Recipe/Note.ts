import Template from "./Template.js";
import { INote } from "./interfaces.js";

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
    wrapper.id = "note-anchor";

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
    toggle.src = "./assets/trash.svg";
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

    let textareaInput = (
      document.getElementById("note-input") as HTMLTextAreaElement
    )?.value;
    if (textareaInput === "") return; //Prevents empty fields

    //Send input info to back end
    const infoPacket: INote = { id: Date.now(), note: textareaInput };
    this.userDataCollector.push(infoPacket);

    //Teardown component
    this.teardownTemplate();

    //Add new component
    this.createFinishedComponent(textareaInput, infoPacket.id);

    return;
  }

  createFinishedComponent(textareaInput: string, id: number) {
    const wrapper = document.createElement("div");
    wrapper.className = "finished-note-wrapper";

    const methodText = document.createElement("p");
    methodText.innerText = textareaInput;

    wrapper.append(methodText);

    //Add unique id to wrapper. This will be used for back end identification
    wrapper.id = `${Date.now()}`;

    wrapper.addEventListener("click", () =>
      this.editMethod(textareaInput, wrapper, id)
    );

    this.sectionElement?.append(wrapper);

    return;
  }

  editMethod(textareaInput: string, wrapper: HTMLElement | null, id: number) {
    //Remove data from back end
    this.userDataCollector = this.userDataCollector.filter(
      (item: any) => item.id != id
    );

    //Remove method from DOM
    wrapper?.remove();

    //Create new method template
    this.buildTemplate();

    let textarea = document.getElementById("note-input") as HTMLTextAreaElement;

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

  editBuild(notes: Array<INote>) {
    for (const note of notes) {
      this.createFinishedComponent(note.note, note.id);

      this.userDataCollector.push(note);
    }
  }
}

export default Note;
