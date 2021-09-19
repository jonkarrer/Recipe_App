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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2F0YWdvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvTmV3X1JlY2lwZS9DYXRhZ29yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLFFBQVEsTUFBTSxlQUFlLENBQUM7QUFHckMsTUFBTSxRQUFTLFNBQVEsUUFBUTtJQUM3QixhQUFhOztRQUNYLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJO1lBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1FBQ2pFLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJO1lBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLHNCQUFzQixDQUFDO1FBRXhFLE1BQUEsSUFBSSxDQUFDLFlBQVksMENBQUUsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7UUFFNUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixPQUFPO0lBQ1QsQ0FBQztJQUVELGVBQWU7UUFDYixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQ2pDLE1BQU0sTUFBTSxHQUFtQixRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdELE1BQU0sS0FBSyxHQUFtQixRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTVELE1BQU0sQ0FBQyxTQUFTLEdBQUcsbUJBQW1CLENBQUM7UUFDdkMsS0FBSyxDQUFDLFNBQVMsR0FBRyxrQkFBa0IsQ0FBQztRQUVyQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXJCLElBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFckIsT0FBTztR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