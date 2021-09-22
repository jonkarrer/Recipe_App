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
            "Holiday",
            "Bread",
            "Dessert",
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
    captureUserSelection(bubble, evt, catagory, catagories) {
        //Has bubble been clicked? Will be blue if true.
        if (bubble.style.background != "var(--theme-blue)") {
            // Pass info
            const target = evt.target;
            const infoPacket = {
                id: catagories.indexOf(catagory),
                catagory: target.getAttribute("data-catagory-name"),
            };
            this.userDataCollector.push(infoPacket);
            //Change color to reflect bubble has been clicked on;
            bubble.style.background = "var(--theme-blue)";
            bubble.style.color = "var(--theme-lt-text)";
            return;
        }
        else {
            //Remove the catagory that was clicked;
            this.userDataCollector = this.userDataCollector.filter((item) => item.id != catagories.indexOf(catagory));
            //Change color to reflect has been clicked off;
            bubble.style.background = "var(--theme-grey)";
            bubble.style.color = "var(--theme-dk-text)";
            return;
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
    editBuild(catagories) {
        const parent = document.querySelector(".overflow-wrapper");
        for (const cat of catagories) {
            const bubble = parent === null || parent === void 0 ? void 0 : parent.children[cat.id];
            bubble.style.background = "var(--theme-blue)";
            bubble.style.color = "var(--theme-lt-text)";
            this.userDataCollector.push(cat);
        }
    }
}
export default Catagory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2F0YWdvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvTmV3X1JlY2lwZS9DYXRhZ29yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLFFBQVEsTUFBTSxlQUFlLENBQUM7QUFHckMsTUFBTSxRQUFTLFNBQVEsUUFBUTtJQUM3QixhQUFhOztRQUNYLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJO1lBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1FBQ2pFLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJO1lBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLHNCQUFzQixDQUFDO1FBRXhFLE1BQUEsSUFBSSxDQUFDLFlBQVksMENBQUUsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7UUFFNUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixPQUFPO0lBQ1QsQ0FBQztJQUVELGVBQWU7UUFDYixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQ2pDLE1BQU0sTUFBTSxHQUFtQixRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdELE1BQU0sS0FBSyxHQUFtQixRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTVELE1BQU0sQ0FBQyxTQUFTLEdBQUcsbUJBQW1CLENBQUM7UUFDdkMsS0FBSyxDQUFDLFNBQVMsR0FBRyxrQkFBa0IsQ0FBQztRQUVyQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXJCLElBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFckIsT0FBTztR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