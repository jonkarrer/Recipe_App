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
    return;
  }

  createWrapper() {
    const section = this.sectionElement;

    const wrapper = document.createElement("form");
    wrapper.className = "new-ingredient-wrapper";

    section?.prepend(wrapper);

    this.root = document.querySelector(".new-ingredient-wrapper");

    return;
    /*
      <section id="ingredient">
        <form class="new-ingredient-wrapper"></form>
      </section>
     */
  }

  createTitle() {
    const wrapper = document.createElement("span");
    wrapper.className = "add-info";
    wrapper.id = "ingredient-anchor";

    const title = document.createElement("h6");
    title.innerHTML = "Ingredient";
    title.style.color = "var(--theme-dk-text)";

    const toggle = document.createElement("img");
    toggle.src = "./assets/bolt.svg";
    toggle.id = "delete-ingredient";
    toggle.addEventListener("click", () => this.teardownTemplate());

    wrapper.append(title);
    wrapper.append(toggle);

    this.root?.prepend(wrapper);

    return;
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

    return;
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

    const amount = document.createElement("input");
    amount.type = "number";
    amount.placeholder = "0";
    amount.id = "amount";
    amount.required;

    const unit = document.createElement("select");
    unit.name = "amount-unit";
    unit.id = "amount-unit";

    amountSpan.append(amount);
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

    return;
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
    const save = document.createElement("button");
    save.type = "submit";
    save.innerText = "Save";
    save.className = "save_button";

    this.root?.append(save);

    save.addEventListener("click", (e) => this.saveFormData(e));

    return;
    /*
      <form class="new-ingredient-wrapper">
      ...../////

        <button onclick="saveFromData(e)"> Save </button>

      </form>
    */
  }

  saveFormData(evt: Event) {
    evt.preventDefault();

    //Capture user input
    //@ts-ignore
    let name = document.getElementById("ingredient-name")?.value;
    if (name === "") return; //Prevents empty fields
    //@ts-ignore
    let amount = document.getElementById("amount")?.value;
    if (amount === "") return;
    //@ts-ignore
    let unit = document.getElementById("amount-unit")?.value;

    //Send input info to back end

    //Teardown component
    this.teardownTemplate();

    //Add new component
    const wrapper = document.createElement("div");
    wrapper.className = "finished-ingredient-wrapper";

    const nameOfIng = document.createElement("h6");
    nameOfIng.innerText = name;

    const amountOfIng = document.createElement("h6");
    amountOfIng.innerText = amount;

    const amountUnit = document.createElement("h6");
    amountUnit.innerText = unit;

    wrapper.append(nameOfIng);
    wrapper.append(amountOfIng);
    wrapper.append(amountUnit);

    //Add unique id to wrapper. This will be used for back end identification
    wrapper.id = `${Date.now()}`;

    wrapper.addEventListener("click", () =>
      this.editIngredient(name, amount, unit, wrapper)
    );

    this.sectionElement?.prepend(wrapper);

    return console.log(
      name,
      amount,
      unit,
      wrapper.id,
      "from saveFormData() Ingredients.ts"
    );
    /*
      <section id="ingredient">

        <div class = "finished-ingredient-wrapper">
          <h6>Ingredient Name</h6>
          <h6>Amout</h6>
          <h6>Unit</h6>
        </div>

        .......//
      </section>
    */
  }

  editIngredient(
    name: string,
    amount: string,
    unit: string,
    wrapper: HTMLElement | null
  ) {
    //Use wrapper.id to change the back end data. Immedietly delete the data and let the new ingredient save new user input.

    //Remove ingredient from DOM
    wrapper?.remove();

    //Create new ingredient template
    this.buildTemplate();

    //Grab input fields and set new values to the ingredients values

    let nameInput = document.getElementById("ingredient-name");
    let amountInput = document.getElementById("amount");
    let unitInput = document.getElementById("amount-unit");

    //@ts-ignore
    amountInput.value = amount;
    //@ts-ignore
    nameInput.value = name;
    //@ts-ignore
    unitInput.value = unit;

    return;
  }

  teardownTemplate() {
    this.root?.remove();
    this.isNotOpen = true;
    return;
  }
}

export default Ingredient;
