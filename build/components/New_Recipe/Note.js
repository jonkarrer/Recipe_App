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
        wrapper.id = "note-anchor";
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
        const infoPacket = { id: Date.now(), note: textareaInput };
        this.userDataCollector.push(infoPacket);
        //Teardown component
        this.teardownTemplate();
        //Add new component
        this.createFinishedComponent(textareaInput, infoPacket.id);
        return;
    }
    createFinishedComponent(textareaInput, id) {
        var _a;
        const wrapper = document.createElement("div");
        wrapper.className = "finished-note-wrapper";
        const methodText = document.createElement("p");
        methodText.innerText = textareaInput;
        wrapper.append(methodText);
        //Add unique id to wrapper. This will be used for back end identification
        wrapper.id = `${Date.now()}`;
        wrapper.addEventListener("click", () => this.editMethod(textareaInput, wrapper, id));
        (_a = this.sectionElement) === null || _a === void 0 ? void 0 : _a.append(wrapper);
        return;
    }
    editMethod(textareaInput, wrapper, id) {
        //Remove data from back end
        this.userDataCollector = this.userDataCollector.filter((item) => item.id != id);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm90ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL05ld19SZWNpcGUvTm90ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLFFBQVEsTUFBTSxlQUFlLENBQUM7QUFHckMsTUFBTSxJQUFLLFNBQVEsUUFBUTtJQUV6QixZQUFZLEdBQUcsSUFBYztRQUMzQixLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFDRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDeEIsT0FBTztJQUNULENBQUM7SUFFRCxhQUFhOztRQUNYLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxrQkFBa0IsQ0FBQztRQUN2QyxPQUFPLENBQUMsRUFBRSxHQUFHLGFBQWEsQ0FBQztRQUUzQixNQUFBLElBQUksQ0FBQyxjQUFjLDBDQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVyQyxJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUU1RCxPQUFPO0lBQ1QsQ0FBQztJQUVELFdBQVc7O1FBQ1QsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQyxPQUFPLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQztRQUUvQixNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FB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