import Template from "./Template.js";
class Ingredient extends Template {
    constructor(...args) {
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
        toggle.src = "./assets/bolt.svg";
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
        var _a, _b, _c, _d;
        evt.preventDefault();
        //Capture user input
        //@ts-ignore
        let name = (_a = document.getElementById("ingredient-name")) === null || _a === void 0 ? void 0 : _a.value;
        if (name === "")
            return; //Prevents empty fields
        //@ts-ignore
        let amount = (_b = document.getElementById("amount")) === null || _b === void 0 ? void 0 : _b.value;
        if (amount === "")
            return;
        //@ts-ignore
        let unit = (_c = document.getElementById("amount-unit")) === null || _c === void 0 ? void 0 : _c.value;
        //Send input info to back end
        //Teardown component
        this.teardownTemplate();
        //Add new component
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
        //Add unique id to wrapper. This will be used for back end identification
        wrapper.id = `${Date.now()}`;
        wrapper.addEventListener("click", () => this.editIngredient(name, amount, unit, wrapper));
        (_d = this.sectionElement) === null || _d === void 0 ? void 0 : _d.prepend(wrapper);
        return console.log(name, amount, unit, wrapper.id, "from saveFormData() Ingredients.ts");
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
    editIngredient(name, amount, unit, wrapper) {
        //Use wrapper.id to change the back end data. Immedietly delete the data and let the new ingredient save new user input.
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
}
export default Ingredient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5ncmVkaWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL05ld19SZWNpcGUvSW5ncmVkaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLFFBQVEsTUFBTSxlQUFlLENBQUM7QUFFckMsTUFBTSxVQUFXLFNBQVEsUUFBUTtJQUUvQixZQUFZLEdBQUcsSUFBYztRQUMzQixLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFDRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDeEIsT0FBTztJQUNULENBQUM7SUFFRCxhQUFhO1FBQ1gsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUVwQyxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9DLE9BQU8sQ0FBQyxTQUFTLEdBQUcsd0JBQXdCLENBQUM7UUFFN0MsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUUxQixJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUU5RCxPQUFPO1FBQ1A7Ozs7V0FJRztJQUNMLENBQUM7SUFFRCxXQUFXOztRQUNULE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0MsT0FBTyxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUM7UUFDL0IsT0FB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