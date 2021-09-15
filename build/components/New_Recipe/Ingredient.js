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
        const toggle = document.createElement("img");
        toggle.src = "./assets/bolt.svg";
        toggle.id = "delete-ingredient";
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
        const save = document.createElement("button");
        save.innerText = "Save";
        (_a = this.root) === null || _a === void 0 ? void 0 : _a.append(save);
        save.addEventListener("click", (e) => this.saveFormData(e));
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
        //@ts-ignore
        let amount = (_b = document.getElementById("amount")) === null || _b === void 0 ? void 0 : _b.value;
        //@ts-ignore
        let unit = (_c = document.getElementById("amount-unit")) === null || _c === void 0 ? void 0 : _c.value;
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
        wrapper.addEventListener("click", () => this.editIngredient(name, amount, unit, wrapper));
        (_d = this.sectionElement) === null || _d === void 0 ? void 0 : _d.prepend(wrapper);
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
        console.log(name, amount, unit, wrapper.id, "from saveFormData() Ingredients.ts");
    }
    editIngredient(name, amount, unit, wrapper) {
        //Use wrapper.id to change the back end data. Immedietly delete the data and let the new ingredient save new user input.
        //Remove ingredient from DOM
        wrapper === null || wrapper === void 0 ? void 0 : wrapper.remove();
        //Create new ingredient template
        this.buildTemplate();
        //Grab input fields and set new values to the ingredients values
        //@ts-ignore
        let nameInput = document.getElementById("ingredient-name");
        //@ts-ignore
        let amountInput = document.getElementById("amount");
        //@ts-ignore
        let unitInput = document.getElementById("amount-unit");
        //@ts-ignore
        amountInput.value = amount;
        //@ts-ignore
        nameInput.value = name;
        //@ts-ignore
        unitInput.value = unit;
    }
    teardownTemplate() {
        var _a;
        (_a = this.root) === null || _a === void 0 ? void 0 : _a.remove();
        this.isNotOpen = true;
    }
}
export default Ingredient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5ncmVkaWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL05ld19SZWNpcGUvSW5ncmVkaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLFFBQVEsTUFBTSxlQUFlLENBQUM7QUFFckMsTUFBTSxVQUFXLFNBQVEsUUFBUTtJQUUvQixZQUFZLEdBQUcsSUFBYztRQUMzQixLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFDRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELGFBQWE7UUFDWCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQ3BDLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0MsT0FBTyxDQUFDLFNBQVMsR0FBRyx3QkFBd0IsQ0FBQztRQUU3QyxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTFCLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBRTlEOzs7O1dBSUc7SUFDTCxDQUFDO0lBRUQsV0FBVzs7UUFDVCxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9DLE9BQU8sQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDO1FBRS9CLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0MsS0FBSyxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUM7UUFDL0IsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsc0JBQXNCLENBQUM7UUFFM0MsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QyxNQUFNLENBQUMsR0FBRyxHQUFHLG1CQUFtQixDQUFDO1FBQ2pDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsbUJBQW1CLENBQUM7UUFDaEMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO1FBRWhFLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV2QixNQUFBLElBQUksQ0FBQyxJQUFJLDBDQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUU1Qjs7Ozs7OztVQU9FO0lBQ0osQ0FBQztJQUVELGVBQWU7O1FBQ2IsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QyxLQUFLLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztRQUMzQixLQUFLLENBQUMsRUFBRSxHQUFHLGlCQUFpQixDQUFDO1FBRTdCLE1BQUEsSUFBSSxDQUFDLElBQUksMENBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXpCOzs7OztVQUtFO0lBQ0osQ0FBQztJQUVELGlCQUFpQjs7UUFDZixNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsZ0JBQWdCLENBQUM7UUFFckMsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsRCxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRWhELE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDL0MsTUFBTSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7UUFDdkIsTUFBTSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7UUFDekIsTUFBTSxDQUFDLEVBQUUsR0FBRyxRQUFRLENBQUM7UUFFckIsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQztRQUMxQixJQUFJLENBQUMsRUFBRSxHQUFHLGFBQWEsQ0FBQztRQUV4QixVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFCLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFdEIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMzQixPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXpCLE1BQUEsSUFBSSxDQUFDLElBQUksMENBQUUsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRWhDLFNBQVMscUJBQXFCO1lBQzVCLE1BQU0sWUFBWSxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztZQUVoRSxLQUFLLE1BQU0sTUFBTSxJQUFJLFlBQVksRUFBRTtnQkFDakMsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDakQsT0FBTyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7Z0JBQ3ZCLE9BQU8sQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO2dCQUUzQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3RCO1FBQ0gsQ0FBQztRQUNELHFCQUFxQixFQUFFLENBQUM7UUFFeEI7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQWtCRTtJQUNKLENBQUM7SUFFRCxnQkFBZ0I7O1FBQ2QsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUV4QixNQUFBLElBQUksQ0FBQyxJQUFJLDBDQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV4QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFNUQ7Ozs7Ozs7VUFPRTtJQUNKLENBQUM7SUFFRCxZQUFZLENBQUMsR0FBVTs7UUFDckIsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRXJCLG9CQUFvQjtRQUNwQixZQUFZO1FBQ1osSUFBSSxJQUFJLEdBQUcsTUFBQSxRQUFRLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLDBDQUFFLEtBQUssQ0FBQztRQUM3RCxZQUFZO1FBQ1osSUFBSSxNQUFNLEdBQUcsTUFBQSxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQywwQ0FBRSxLQUFLLENBQUM7UUFDdEQsWUFBWTtRQUNaLElBQUksSUFBSSxHQUFHLE1BQUEsUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsMENBQUUsS0FBSyxDQUFDO1FBRXpELDZCQUE2QjtRQUU3QixvQkFBb0I7UUFDcEIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFFeEIsbUJBQW1CO1FBQ25CLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUMsT0FBTyxDQUFDLFNBQVMsR0FBRyw2QkFBNkIsQ0FBQztRQUVsRCxNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9DLFNBQVMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBRTNCLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakQsV0FBVyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7UUFFL0IsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRCxVQUFVLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUU1QixPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFCLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUUzQix5RUFBeUU7UUFDekUsT0FBTyxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDO1FBRTdCLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQ3JDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQ2pELENBQUM7UUFFRixNQUFBLElBQUksQ0FBQyxjQUFjLDBDQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV0Qzs7Ozs7Ozs7Ozs7VUFXRTtRQUVGLE9BQU8sQ0FBQyxHQUFHLENBQ1QsSUFBSSxFQUNKLE1BQU0sRUFDTixJQUFJLEVBQ0osT0FBTyxDQUFDLEVBQUUsRUFDVixvQ0FBb0MsQ0FDckMsQ0FBQztJQUNKLENBQUM7SUFFRCxjQUFjLENBQ1osSUFBWSxFQUNaLE1BQWMsRUFDZCxJQUFZLEVBQ1osT0FBMkI7UUFFM0Isd0hBQXdIO1FBRXhILDRCQUE0QjtRQUM1QixPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsTUFBTSxFQUFFLENBQUM7UUFFbEIsZ0NBQWdDO1FBQ2hDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUVyQixnRUFBZ0U7UUFDaEUsWUFBWTtRQUNaLElBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUMzRCxZQUFZO1FBQ1osSUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwRCxZQUFZO1FBQ1osSUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN2RCxZQUFZO1FBQ1osV0FBVyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7UUFDM0IsWUFBWTtRQUNaLFNBQVMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLFlBQVk7UUFDWixTQUFTLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztJQUN6QixDQUFDO0lBRUQsZ0JBQWdCOztRQUNkLE1BQUEsSUFBSSxDQUFDLElBQUksMENBQUUsTUFBTSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDeEIsQ0FBQztDQUNGO0FBRUQsZUFBZSxVQUFVLENBQUMifQ==