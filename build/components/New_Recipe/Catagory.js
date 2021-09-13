export class Catagory {
    constructor() {
        var _a, _b;
        this.catagory = document.querySelector("section .catagory");
        this.isOpen = false;
        this.title = document.querySelector(".catagory h6");
        this.toggleSwitch = document.getElementById("toggle-switch-catagory");
        (_a = this.title) === null || _a === void 0 ? void 0 : _a.addEventListener("click", (e) => this.clickHandler(e));
        (_b = this.toggleSwitch) === null || _b === void 0 ? void 0 : _b.addEventListener("click", (e) => this.clickHandler(e), true);
    }
    clickHandler(e) {
        e.stopPropagation();
        this.isOpen = !this.isOpen;
        if (this.isOpen) {
            return this.activateCatagory();
        }
        else {
            return this.teardownCatagories();
        }
    }
    activateCatagory() {
        if (this.toggleSwitch != null)
            this.toggleSwitch.innerText = "-";
        this.createContainer();
        this.createBubbles();
        return;
    }
    createContainer() {
        const root = document.querySelector(".catagory");
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
        let i = 0;
        for (i; i < 6; i++) {
            const bubble = document.createElement("div");
            bubble.innerText = `Bubble ${i}`;
            wrapper === null || wrapper === void 0 ? void 0 : wrapper.append(bubble);
        }
        return;
        /*
          <section class="catagory">
            <div class="bubbles-container">
              <div class="overflow-wrapper">
                <div>Bubble 1</div>
                <div>Bubble 2</div>
                <div>Bubble 3</div>
                ......//
              </div>
            </div>
          </section>
        */
    }
    teardownCatagories() {
        let teardownTarget = document.querySelector(".bubbles-container");
        teardownTarget === null || teardownTarget === void 0 ? void 0 : teardownTarget.remove();
        if (this.toggleSwitch != null)
            this.toggleSwitch.innerText = "+";
        return;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2F0YWdvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9OZXdfUmVjaXBlL0NhdGFnb3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sT0FBTyxRQUFRO0lBTW5COztRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBRTVELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBRXBCLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUV0RSxNQUFBLElBQUksQ0FBQyxLQUFLLDBDQUFFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRW5FLE1BQUEsSUFBSSxDQUFDLFlBQVksMENBQUUsZ0JBQWdCLENBQ2pDLE9BQU8sRUFDUCxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFDM0IsSUFBSSxDQUNMLENBQUM7SUFDSixDQUFDO0lBRUQsWUFBWSxDQUFDLENBQVE7UUFDbkIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXBCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRTNCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDaEM7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7U0FDbEM7SUFDSCxDQUFDO0lBRUQsZ0JBQWdCO1FBQ2QsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUk7WUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7UUFFakUsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixPQUFPO0lBQ1QsQ0FBQztJQUVELGVBQWU7UUFDYixNQUFNLElBQUksR0FBbUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNqRSxNQUFNLE1BQU0sR0FBbUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3RCxNQUFNLEtBQUssR0FBbUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUU1RCxNQUFNLENBQUMsU0FBUyxHQUFHLG1CQUFtQixDQUFDO1FBQ3ZDLEtBQUssQ0FBQyxTQUFTLEdBQUcsa0JBQWtCLENBQUM7UUFFckMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVyQixJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXJCLE9BQU87UUFFUDs7Ozs7O1VBTUU7SUFDSixDQUFDO0lBRUQsYUFBYTtRQUNYLE1BQU0sT0FBTyxHQUNYLFFBQVEsQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDVixLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2xCLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0MsTUFBTSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsRUFBRSxDQUFDO1lBQ2pDLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDekI7UUFDRCxPQUFPO1FBRVA7Ozs7Ozs7Ozs7O1VBV0U7SUFDSixDQUFDO0lBRUQsa0JBQWtCO1FBQ2hCLElBQUksY0FBYyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNsRSxjQUFjLGFBQWQsY0FBYyx1QkFBZCxjQUFjLENBQUUsTUFBTSxFQUFFLENBQUM7UUFDekIsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUk7WUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7UUFDakUsT0FBTztJQUNULENBQUM7Q0FDRiJ9