import Template from "./Template.js";
class Method extends Template {
    constructor(...args) {
        super(...args);
        this.root = null;
    }
    buildTemplate() {
        this.createWrapper();
        this.createTitle();
        this.createTextArea();
        this.createSaveButton();
        return;
    }
    createWrapper() {
        var _a;
        const wrapper = document.createElement("form");
        wrapper.className = "new-method-wrapper";
        wrapper.id = "method-anchor";
        (_a = this.sectionElement) === null || _a === void 0 ? void 0 : _a.prepend(wrapper);
        this.root = document.querySelector(`.${wrapper.className}`);
        /*
          <section id="method">
            <form class="new-method-wrapper"></form>
          </section>
        */
        return;
    }
    createTitle() {
        var _a;
        const wrapper = document.createElement("span");
        wrapper.className = "add-info";
        const title = document.createElement("h6");
        title.innerHTML = "Method";
        title.style.color = "var(--theme-dk-text)";
        const toggle = document.createElement("img");
        toggle.src = "./assets/bolt.svg";
        toggle.alt = "delete button";
        toggle.id = "delete-method";
        toggle.addEventListener("click", () => this.teardownTemplate());
        wrapper.append(title);
        wrapper.append(toggle);
        (_a = this.root) === null || _a === void 0 ? void 0 : _a.prepend(wrapper);
        /*
          <span class="add-info">
            <h6>Method</h6>
            <img src="./assets/bolt.svg" alt="delete button"/>
          </span>
        */
        return;
    }
    createTextArea() {
        var _a;
        const input = document.createElement("textarea");
        input.placeholder = "Describe Method";
        input.cols = 40;
        input.rows = 7;
        input.id = "method-input";
        (_a = this.root) === null || _a === void 0 ? void 0 : _a.append(input);
        return;
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
        let textareaInput = (_a = document.getElementById("method-input")) === null || _a === void 0 ? void 0 : _a.value;
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
        wrapper.className = "finished-method-wrapper";
        //Add unique id to wrapper. This will be used for back end identification
        wrapper.id = `${Date.now()}`;
        wrapper.addEventListener("click", () => this.editMethod(textareaInput, wrapper));
        const methodText = document.createElement("p");
        methodText.innerText = textareaInput;
        wrapper.append(methodText);
        (_a = this.sectionElement) === null || _a === void 0 ? void 0 : _a.append(wrapper);
        return;
    }
    editMethod(textareaInput, wrapper) {
        //Use wrapper.id to change the back end data. Immedietly delete the data and let the new ingredient save new user input.
        //Remove method from DOM
        wrapper === null || wrapper === void 0 ? void 0 : wrapper.remove();
        //Create new method template
        this.buildTemplate();
        //re-populate textarea with previous input
        let textarea = document.getElementById("method-input");
        //@ts-ignore
        textarea.value = textareaInput;
        return;
    }
    teardownTemplate() {
        var _a;
        (_a = this.root) === null || _a === void 0 ? void 0 : _a.remove();
        this.isNotOpen = true;
        return;
    }
}
export default Method;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWV0aG9kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvTmV3X1JlY2lwZS9NZXRob2QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxRQUFRLE1BQU0sZUFBZSxDQUFDO0FBRXJDLE1BQU0sTUFBTyxTQUFRLFFBQVE7SUFFM0IsWUFBWSxHQUFHLElBQWM7UUFDM0IsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNuQixDQUFDO0lBQ0QsYUFBYTtRQUNYLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLE9BQU87SUFDVCxDQUFDO0lBRUQsYUFBYTs7UUFDWCxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9DLE9BQU8sQ0FBQyxTQUFTLEdBQUcsb0JBQW9CLENBQUM7UUFDekMsT0FBTyxDQUFDLEVBQUUsR0FBRyxlQUFlLENBQUM7UUFFN0IsTUFBQSxJQUFJLENBQUMsY0FBYywwQ0FBRSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFdEMsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFFNUQ7Ozs7VUFJRTtRQUVGLE9BQU87SUFDVCxDQUFDO0lBRUQsV0FBVzs7UUFDVCxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9DLE9BQU8sQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDO1FBRS9CLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMs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