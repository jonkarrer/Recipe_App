import Template from "./Template.js";
class Ingredient extends Template {
    constructor(...args) {
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
        const section = this.sectionElement;
        const wrapper = document.createElement("form");
        wrapper.className = "new-ingredient-wrapper";
        section === null || section === void 0 ? void 0 : section.prepend(wrapper);
        this.root = document.querySelector(".new-ingredient-wrapper");
        return;
        /*
          <section id="ingredient">
            <form class="new-ingredient-wrapper"></form>
          </section>
         */
    }
    createTitle() {
        var _a;
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
        (_a = this.root) === null || _a === void 0 ? void 0 : _a.prepend(wrapper);
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
        var _a;
        const input = document.createElement("input");
        input.placeholder = "Name";
        input.id = "ingredient-name";
        (_a = this.root) === null || _a === void 0 ? void 0 : _a.append(input);
        return;
        /*
        <form class="new-ingredient-wrapper">
          ...//
          <input id="ingredient-name"  "placeholder" = "Name" />
        </form>
        */
    }
    createAmountInput() {
        var _a;
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
        (_a = this.root) === null || _a === void 0 ? void 0 : _a.appendChild(wrapper);
        function appendOptionsToSelect() {
            const optionValues = [
                "Tbsp",
                "Oz",
                "Cup",
                "Lb",
                "Gram",
                "Tsp",
                "Whole",
                "Slice",
                "Part",
                "Piece",
            ];
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
        var _a;
        const save = document.createElement("button");
        save.type = "submit";
        save.innerText = "Save";
        save.className = "save_button";
        (_a = this.root) === null || _a === void 0 ? void 0 : _a.append(save);
        save.addEventListener("click", (e) => this.saveFormData(e));
        return;
        /*
          <form class="new-ingredient-wrapper">
          ...../////
    
            <button onclick="saveFromData(e)"> Save </button>
    
          </form>
        */
    }
    saveFormData(evt) {
        var _a, _b, _c;
        evt.preventDefault();
        //Capture user input
        //@ts-ignore
        const name = (_a = document.getElementById("ingredient-name")) === null || _a === void 0 ? void 0 : _a.value;
        if (name === "")
            return; //Prevents empty fields
        //@ts-ignore
        const amount = (_b = document.getElementById("amount")) === null || _b === void 0 ? void 0 : _b.value;
        if (amount === "")
            return;
        //@ts-ignore
        const unit = (_c = document.getElementById("amount-unit")) === null || _c === void 0 ? void 0 : _c.value;
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
    createFinishedComponent(identifier, name, amount, unit) {
        var _a;
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
        wrapper.addEventListener("click", () => this.editIngredient(name, amount, unit, wrapper, identifier));
        (_a = this.sectionElement) === null || _a === void 0 ? void 0 : _a.prepend(wrapper);
    }
    editIngredient(name, amount, unit, wrapper, identifier) {
        //Filter out the ingredient by its id. Identifier is drilled down 3 deep
        this.userDataCollector = this.userDataCollector.filter((item) => item.id != identifier);
        //Remove ingredient from DOM
        wrapper === null || wrapper === void 0 ? void 0 : wrapper.remove();
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
        var _a;
        (_a = this.root) === null || _a === void 0 ? void 0 : _a.remove();
        this.isNotOpen = true;
        return;
    }
    editBuild(ingredients) {
        for (const ing of ingredients) {
            this.createFinishedComponent(ing.id, ing.name, ing.amount, ing.unit);
            this.userDataCollector.push(ing);
        }
        return;
    }
}
export default Ingredient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5ncmVkaWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9OZXdfUmVjaXBlL0luZ3JlZGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxRQUFRLE1BQU0sZUFBZSxDQUFDO0FBR3JDLE1BQU0sVUFBVyxTQUFRLFFBQVE7SUFHL0IsWUFBWSxHQUFHLElBQWM7UUFDM0IsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUN6QixDQUFDO0lBQ0QsYUFBYTtRQUNYLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLE9BQU87SUFDVCxDQUFDO0lBRUQsYUFBYTtRQUNYLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7UUFFcEMsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQyxPQUFPLENBQUMsU0FBUyxHQUFHLHdCQUF3QixDQUFDO1FBRTdDLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFMUIsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFFOUQsT0FBTztRQUNQOzs7O1dBSUc7SUFDTCxDQUFDO0lBRUQsV0FBVzs7UUFDVCxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9DLE9BQU8sQ0FBQyxTQUFTLEdB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