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
    }
    createWrapper() {
        const section = this.sectionElement;
        const wrapper = document.createElement("form");
        wrapper.className = "new-ingredient-wrapper";
        section === null || section === void 0 ? void 0 : section.prepend(wrapper);
        this.root = document.querySelector(".new-ingredient-wrapper");
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
        const title = document.createElement("h6");
        title.innerHTML = "Ingredient";
        title.style.color = "var(--theme-dk-text)";
        const toggle = document.createElement("h1");
        toggle.innerHTML = "-";
        toggle.addEventListener("click", () => this.teardownTemplate());
        wrapper.append(title);
        wrapper.append(toggle);
        (_a = this.root) === null || _a === void 0 ? void 0 : _a.prepend(wrapper);
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
        const button = document.createElement("button");
        button.innerText = "Save";
        (_a = this.root) === null || _a === void 0 ? void 0 : _a.append(button);
        button.addEventListener("click", (e) => this.saveFormData(e));
    }
    saveFormData(evt) {
        var _a, _b, _c, _d;
        evt.preventDefault();
        //@ts-ignore
        let name = (_a = document.getElementById("ingredient-name")) === null || _a === void 0 ? void 0 : _a.value;
        //@ts-ignore
        let amount = (_b = document.getElementById("amount")) === null || _b === void 0 ? void 0 : _b.value;
        //@ts-ignore
        let unit = (_c = document.getElementById("amount-unit")) === null || _c === void 0 ? void 0 : _c.value;
        //Send info to back end here
        //Teardown component here
        this.teardownTemplate();
        //Add new component here
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
        (_d = this.sectionElement) === null || _d === void 0 ? void 0 : _d.prepend(wrapper);
        console.log(name, amount, unit);
    }
    teardownTemplate() {
        var _a;
        (_a = this.root) === null || _a === void 0 ? void 0 : _a.remove();
    }
}
export default Ingredient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5ncmVkaWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL05ld19SZWNpcGUvSW5ncmVkaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLFFBQVEsTUFBTSxlQUFlLENBQUM7QUFFckMsTUFBTSxVQUFXLFNBQVEsUUFBUTtJQUUvQixZQUFZLEdBQUcsSUFBYztRQUMzQixLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFDRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELGFBQWE7UUFDWCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQ3BDLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0MsT0FBTyxDQUFDLFNBQVMsR0FBRyx3QkFBd0IsQ0FBQztRQUU3QyxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTFCLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBRTlEOzs7O1dBSUc7SUFDTCxDQUFDO0lBRUQsV0FBVzs7UUFDVCxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9DLE9BQU8sQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDO1FBRS9CLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FB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