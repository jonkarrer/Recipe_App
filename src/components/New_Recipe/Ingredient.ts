import Template from "./Template.js";

class Ingredient extends Template {
  root: HTMLElement | null;
  constructor(...args: [string]) {
    super(...args);
    this.root = null;
  }
  buildTemplate() {
    this.createWrapper();
    this.createTitle();
    this.createNameInput();
    this.createAmountInput();
    this.createSaveButton();
  }

  createWrapper() {
    const section = this.sectionElement;
    const wrapper = document.createElement("form");
    wrapper.className = "new-ingredient-wrapper";

    section?.prepend(wrapper);

    this.root = document.querySelector(".new-ingredient-wrapper");

    /*
      <section id="ingredient">
        <form class="new-ingredient-wrapper"></form>
      </section>
     */
  }

  createTitle() {
    const wrapper = document.createElement("span");
    wrapper.className = "add-info";

    const title = document.createElement("h6");
    title.innerHTML = "Ingredient";
    title.style.color = "var(--theme-dk-text)";

    const toggle = document.createElement("h1");
    toggle.innerHTML = "-";
    toggle.addEventListener("click", () => this.teardownTemplate());

    wrapper.append(title);
    wrapper.append(toggle);

    this.root?.prepend(wrapper);

    /*
    <div class="new-ingredient-wrapper">
      <span class="add-info">
        <h6>Ingredient</h6>
        <h1>-</h1>
      </span>
    </div>
    */
  }

  createNameInput() {
    const input = document.createElement("input");
    input.placeholder = "Name";
    input.id = "ingredient-name";

    this.root?.append(input);

    /*
    <form class="new-ingredient-wrapper">
      ...//
      <input id="ingredient-name"  "placeholder" = "Name" />
    </form>
    */
  }

  createAmountInput() {
    const wrapper = document.createElement("div");
    wrapper.className = "amount-wrapper";

    const amountSpan = document.createElement("span");
    const unitSpan = document.createElement("span");

    const amountName = document.createElement("input");
    amountName.type = "number";
    amountName.placeholder = "0";

    const unit = document.createElement("select");
    unit.name = "amount-unit";
    unit.id = "amount-unit";

    amountSpan.append(amountName);
    unitSpan.append(unit);

    wrapper.append(amountSpan);
    wrapper.append(unitSpan);

    this.root?.appendChild(wrapper);

    function appendOptionsToSelect() {
      const optionValues = ["Tbsp", "Oz", "Cup", "Lb", "Gram", "Tsp"];

      for (const option of optionValues) {
        const element = document.createElement("option");
        element.value = option;
        element.innerText = option;

        unit.append(element);
      }
    }
    appendOptionsToSelect();

    /*
    <form class="new-ingredient-wrapper">

        <div class="amount-wrapper">
          <span>
            <input type="number" />
          </span>
          <span>
             <select name="amount unit" id="amount-unit">
                <option value="Tbsp">Tbsp</option>
                <option value="Oz">Oz</option>
                <option value="Cup">Cup</option>
                <option value="Pound">Lb</option>
                <option value="Gram">Gram</option>
                <option value="Tsp">Tsp</option>
              </select>
          </span>
        </div>
      
    </form>
    */
  }

  createSaveButton() {
    const button = document.createElement("button");
    button.innerText = "Save";
    button.disabled = true;

    this.root?.append(button);

    button.addEventListener("click", () => saveFormData());

    function saveFormData() {}
  }

  teardownTemplate() {
    console.log("teardown");
  }
}

export default Ingredient;
