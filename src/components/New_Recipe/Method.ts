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
    toggle.src = "./assets/bolt.svg";
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
    //@ts-ignore
    let textareaInput = document.getElementById("method-input")?.value;
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
    wrapper.className = "finished-method-wrapper";
    //Add unique id to wrapper. This will be used for back end identification
    wrapper.id = `${Date.now()}`;
    wrapper.addEventListener("click", () =>
      this.editMethod(textareaInput, wrapper)
    );

    const methodText = document.createElement("p");
    methodText.innerText = textareaInput;

    wrapper.append(methodText);

    this.sectionElement?.append(wrapper);

    return;
  }

  editMethod(textareaInput: string, wrapper: HTMLElement | null) {
    //Use wrapper.id to change the back end data. Immedietly delete the data and let the new ingredient save new user input.

    //Remove method from DOM
    wrapper?.remove();

    //Create new method template
    this.buildTemplate();

    //re-populate textarea with previous input
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
