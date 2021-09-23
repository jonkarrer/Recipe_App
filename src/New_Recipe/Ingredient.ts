import Template from "./Template.js";
import { IIngredient } from "./interfaces.js";

class Ingredient extends Template {
  root: HTMLElement | null;
  infoPacket: IIngredient | null;
  constructor(...args: [string]) {
    super(...args);
    this.root = null;
    this.infoPacket = null;
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
    const parent = this.sectionElement;

    const wrapper = document.createElement("form");
    const name = "new-ingredient-wrapper";
    wrapper.className = name;

    parent?.append(wrapper);

    this.root = document.querySelector(`.${name}`);

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
    toggle.src = "./assets/trash.svg";
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

    (function appendOptionsToSelect() {
      const optionValues = [
        "Cup",
        "Oz",
        "fl",
        "Lb",
        "Gram",
        "Tbsp",
        "Tsp",
        "Pint",
        "Quart",
        "Gal",
        "liter",
        "ml",
        "Whole",
        "Slice",
        "Part",
        "Piece",
        "Unit",
      ];

      for (const option of optionValues) {
        const element = document.createElement("option");
        element.value = option;
        element.innerText = option;

        unit.append(element);
      }
    })();

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
    const name = (
      document.getElementById("ingredient-name") as HTMLInputElement
    )?.value;
    if (name === "") return; //Prevents save with empty fields

    const amount = (document.getElementById("amount") as HTMLInputElement)
      ?.value;
    if (amount === "") return;

    const unit = (document.getElementById("amount-unit") as HTMLInputElement)
      ?.value;

    const identifier = Date.now();

    //Send input info to back end
    this.infoPacket = {
      id: identifier,
      name: name,
      amount: amount,
      unit: unit,
    };
    this.userDataCollector.push(this.infoPacket);

    //Teardown component
    this.teardownTemplate();

    //Add new component
    this.createFinishedComponent(identifier, name, amount, unit);

    return;
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

  createFinishedComponent(
    identifier: number,
    name: string,
    amount: string,
    unit: string
  ) {
    const wrapper = document.createElement("div");
    wrapper.className = "finished-ingredient-wrapper";

    const amountContainer = document.createElement("div");
    amountContainer.className = "amount-container";

    const nameOfIng = document.createElement("h6");
    nameOfIng.innerText = name;

    const amountOfIng = document.createElement("h6");
    amountOfIng.innerText = amount;

    const amountUnit = document.createElement("h6");
    amountUnit.innerText = unit;

    amountContainer.append(amountOfIng);

    amountContainer.append(amountUnit);

    wrapper.append(nameOfIng);
    wrapper.append(amountContainer);

    wrapper.addEventListener("click", () =>
      this.editIngredient(name, amount, unit, wrapper, identifier)
    );

    this.sectionElement?.append(wrapper);
  }

  editIngredient(
    name: string,
    amount: string,
    unit: string,
    wrapper: HTMLElement | null,
    identifier: number
  ) {
    //Filter out the ingredient by its id. Identifier is drilled down 3 deep
    this.userDataCollector = this.userDataCollector.filter(
      (item: any) => item.id != identifier
    );

    //Remove ingredient from DOM
    wrapper?.remove();

    //Create new ingredient template
    this.buildTemplate();

    //Grab input fields and set new values to the ingredients values
    let nameInput = document.getElementById(
      "ingredient-name"
    ) as HTMLInputElement;
    let amountInput = document.getElementById("amount") as HTMLInputElement;
    let unitInput = document.getElementById("amount-unit") as HTMLInputElement;

    nameInput.value = name;
    amountInput.value = amount;
    unitInput.value = unit;

    return;
  }

  teardownTemplate() {
    this.root?.remove();

    this.isNotOpen = true;

    return;
  }

  editBuild(ingredients: Array<IIngredient>) {
    for (const ing of ingredients) {
      this.createFinishedComponent(ing.id, ing.name, ing.amount, ing.unit);

      this.userDataCollector.push(ing);
    }
    return;
  }
}

export default Ingredient;
