import Template from "./Template.js";
class Catagory extends Template {
    buildTemplate() {
        var _a;
        if (this.toggleSwitch != null)
            this.toggleSwitch.innerText = "-";
        if (this.title != null)
            this.title.style.color = "var(--theme-dk-text)";
        (_a = this.toggleSwitch) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => this.teardownTemplate());
        this.createContainer();
        this.createBubbles();
        return;
    }
    createContainer() {
        const root = this.sectionElement;
        const parent = document.createElement("div");
        const child = document.createElement("div");
        parent.className = "bubbles-container";
        child.className = "overflow-wrapper";
        parent.append(child);
        root === null || root === void 0 ? void 0 : root.append(parent);
        return;
        /*
          <section class="catagory">
    
            <div class="bubbles-container">
              <div class="overflow-wrapper"></div>
            </div>
    
          </section>
        */
    }
    createBubbles() {
        const wrapper = document.querySelector(".overflow-wrapper");
        //Stock data, will come from users custom catagories
        const catagories = [
            "Vegan",
            "Breakfast",
            "Soup",
            "Lunch",
            "Dinner",
            "Creole",
            "Special",
        ];
        for (const cat of catagories) {
            const bubble = document.createElement("div");
            bubble.innerText = `${cat}`;
            bubble.setAttribute("data-catagory-name", `${cat}`);
            // This will capture the information to store in the backend
            bubble.addEventListener("click", (evt) => this.captureUserSelection(bubble, evt, cat, catagories));
            wrapper === null || wrapper === void 0 ? void 0 : wrapper.append(bubble);
        }
        return;
        /*
          <div class="overflow-wrapper">
            <div>Bubble 1</div>
            <div>Bubble 2</div>
            <div>Bubble 3</div>
            ......//
          </div>
        */
    }
    captureUserSelection(bubble, evt, cat, catagories) {
        var _a;
        if (bubble.style.background != "var(--theme-blue)") {
            //Change color to reflect has been clicked;
            bubble.style.background = "var(--theme-blue)";
            bubble.style.color = "var(--theme-lt-text)";
            const infoPacket = {
                id: catagories.indexOf(cat),
                //@ts-ignore
                catagory: (_a = evt.target) === null || _a === void 0 ? void 0 : _a.getAttribute("data-catagory-name"),
            };
            this.userDataCollector.push(infoPacket);
        }
        else {
            //Change color to reflect has been clicked again;
            bubble.style.background = "var(--theme-grey)";
            bubble.style.color = "var(--theme-dk-text)";
            //Remove the catagory that was clicked;
            this.userDataCollector = this.userDataCollector.filter((item) => item.id != catagories.indexOf(cat));
        }
    }
    teardownTemplate() {
        let teardownTarget = document.querySelector(".bubbles-container");
        teardownTarget === null || teardownTarget === void 0 ? void 0 : teardownTarget.remove();
        if (this.toggleSwitch != null)
            this.toggleSwitch.innerText = "+";
        if (this.title != null)
            this.title.style.color = "var(--theme-lt-text)";
        this.isNotOpen = true;
        return;
    }
}
export default Catagory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2F0YWdvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9OZXdfUmVjaXBlL0NhdGFnb3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sUUFBUSxNQUFNLGVBQWUsQ0FBQztBQUdyQyxNQUFNLFFBQVMsU0FBUSxRQUFRO0lBQzdCLGFBQWE7O1FBQ1gsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUk7WUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7UUFDakUsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUk7WUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsc0JBQXNCLENBQUM7UUFFeEUsTUFBQSxJQUFJLENBQUMsWUFBWSwwQ0FBRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQztRQUU1RSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLE9BQU87SUFDVCxDQUFDO0lBRUQsZUFBZTtRQUNiLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDakMsTUFBTSxNQUFNLEdBQW1CLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0QsTUFBTSxLQUFLLEdBQW1CLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFNUQsTUFBTSxDQUFDLFNBQVMsR0FBRyxtQkFBbUIsQ0FBQztRQUN2QyxLQUFLLENBQUMsU0FBUyxHQUFHLGtCQUFrQixDQUFDO1FBRXJDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFckIsSUFBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FB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