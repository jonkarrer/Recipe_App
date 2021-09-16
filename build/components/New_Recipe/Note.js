import Template from "./Template.js";
class Note extends Template {
    constructor(...args) {
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
        var _a;
        const wrapper = document.createElement("div");
        wrapper.className = "new-note-wrapper";
        (_a = this.sectionElement) === null || _a === void 0 ? void 0 : _a.append(wrapper);
        this.root = document.querySelector(`.${wrapper.className}`);
        return;
    }
    createTitle() {
        var _a;
        const wrapper = document.createElement("span");
        wrapper.className = "add-info";
        const title = document.createElement("h6");
        title.innerHTML = "Note";
        title.style.color = "var(--theme-dk-text)";
        const toggle = document.createElement("img");
        toggle.src = "./assets/bolt.svg";
        toggle.alt = "delete button";
        toggle.id = "delete-note";
        toggle.addEventListener("click", () => this.teardownTemplate());
        wrapper.append(title);
        wrapper.append(toggle);
        (_a = this.root) === null || _a === void 0 ? void 0 : _a.prepend(wrapper);
        /*
          <span class="add-info">
            <h6>Note</h6>
            <img src="./assets/bolt.svg" alt="delete button"/>
          </span>
        */
        return;
    }
    createTextarea() {
        var _a;
        const input = document.createElement("textarea");
        input.placeholder = "Describe Method";
        input.cols = 40;
        input.rows = 7;
        input.id = "note-input";
        (_a = this.root) === null || _a === void 0 ? void 0 : _a.append(input);
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
    }
    saveFormData(evt) {
        var _a;
        evt.preventDefault();
        //Capture user input
        //@ts-ignore
        let textareaInput = (_a = document.getElementById("note-input")) === null || _a === void 0 ? void 0 : _a.value;
        if (textareaInput === "")
            return; //Prevents empty fields
        //Send input info to back end
        //Teardown component
        this.teardownTemplate();
        //Add new component
        this.createFinishedComponent(textareaInput);
        return;
    }
    createFinishedComponent(textareaInput) {
        var _a;
        const wrapper = document.createElement("div");
        wrapper.className = "finished-note-wrapper";
        const methodText = document.createElement("p");
        methodText.innerText = textareaInput;
        wrapper.append(methodText);
        //Add unique id to wrapper. This will be used for back end identification
        wrapper.id = `${Date.now()}`;
        wrapper.addEventListener("click", () => this.editMethod(textareaInput, wrapper));
        (_a = this.sectionElement) === null || _a === void 0 ? void 0 : _a.append(wrapper);
        return;
    }
    editMethod(textareaInput, wrapper) {
        //Use wrapper.id to change the back end data. Immedietly delete the data and let the new ingredient save new user input.
        //Remove method from DOM
        wrapper === null || wrapper === void 0 ? void 0 : wrapper.remove();
        //Create new method template
        this.buildTemplate();
        let textarea = document.getElementById("note-input");
        //@ts-ignore
        textarea.value = textareaInput;
        return;
    }
    teardownTemplate() {
        let teardownTarget = document.querySelector(".new-note-wrapper");
        teardownTarget === null || teardownTarget === void 0 ? void 0 : teardownTarget.remove();
        if (this.toggleSwitch != null)
            this.toggleSwitch.innerText = "+";
        if (this.title != null)
            this.title.style.color = "var(--theme-lt-text)";
        this.isNotOpen = true;
        return;
    }
}
export default Note;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm90ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL05ld19SZWNpcGUvTm90ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLFFBQVEsTUFBTSxlQUFlLENBQUM7QUFFckMsTUFBTSxJQUFLLFNBQVEsUUFBUTtJQUV6QixZQUFZLEdBQUcsSUFBYztRQUMzQixLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFDRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDeEIsT0FBTztJQUNULENBQUM7SUFFRCxhQUFhOztRQUNYLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxrQkFBa0IsQ0FBQztRQUV2QyxNQUFBLElBQUksQ0FBQyxjQUFjLDBDQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVyQyxJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUU1RCxPQUFPO0lBQ1QsQ0FBQztJQUVELFdBQVc7O1FBQ1QsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQyxPQUFPLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQztRQUUvQixNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNDLEtBQUssQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1FB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