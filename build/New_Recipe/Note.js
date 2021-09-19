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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm90ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9OZXdfUmVjaXBlL05vdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxRQUFRLE1BQU0sZUFBZSxDQUFDO0FBR3JDLE1BQU0sSUFBSyxTQUFRLFFBQVE7SUFFekIsWUFBWSxHQUFHLElBQWM7UUFDM0IsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNuQixDQUFDO0lBQ0QsYUFBYTtRQUNYLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLE9BQU87SUFDVCxDQUFDO0lBRUQsYUFBYTs7UUFDWCxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsa0JBQWtCLENBQUM7UUFDdkMsT0FBTyxDQUFDLEVBQUUsR0FBRyxhQUFhLENBQUM7UUFFM0IsTUFBQSxJQUFJLENBQUMsY0FBYywwQ0FBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFckMsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFFNUQsT0FBTztJQUNULENBQUM7SUFFRCxXQUFXOztRQUNULE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0MsT0FBTyxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUM7UUFFL0IsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQyxLQUFLLENBQUMs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