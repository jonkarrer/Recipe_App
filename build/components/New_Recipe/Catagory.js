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
        let i = 0;
        for (i; i < 6; i++) {
            const bubble = document.createElement("div");
            bubble.innerText = `Bubble ${i}`;
            bubble.setAttribute("data-catagory-name", `${i}`);
            /// This will capture the information to store in the backend
            bubble.addEventListener("click", function () {
                bubble.style.background = "var(--theme-blue)";
                bubble.style.color = "var(--theme-lt-text)";
                console.log(this.getAttribute("data-catagory-name"));
            });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2F0YWdvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9OZXdfUmVjaXBlL0NhdGFnb3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sUUFBUSxNQUFNLGVBQWUsQ0FBQztBQUVyQyxNQUFNLFFBQVMsU0FBUSxRQUFRO0lBQzdCLGFBQWE7O1FBQ1gsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUk7WUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7UUFDakUsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUk7WUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsc0JBQXNCLENBQUM7UUFFeEUsTUFBQSxJQUFJLENBQUMsWUFBWSwwQ0FBRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQztRQUU1RSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLE9BQU87SUFDVCxDQUFDO0lBRUQsZUFBZTtRQUNiLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDakMsTUFBTSxNQUFNLEdBQW1CLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0QsTUFBTSxLQUFLLEdBQW1CLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFNUQsTUFBTSxDQUFDLFNBQVMsR0FBRyxtQkFBbUIsQ0FBQztRQUN2QyxLQUFLLENBQUMsU0FBUyxHQUFHLGtCQUFrQixDQUFDO1FBRXJDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFckIsSUFBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVyQixPQUFPO1FBRVA7Ozs7Ozs7O1VBUUU7SUFDSixDQUFDO0lBRUQsYUFBYTtRQUNYLE1BQU0sT0FBTyxHQUNYLFFBQVEsQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUU5QyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDVixLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2xCLE1BQU0sTUFBTSxHQUFtQixRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdELE1BQU0sQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQztZQUNqQyxNQUFNLENBQUMsWUFBWSxDQUFDLG9CQUFvQixFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUVsRCw2REFBNkQ7WUFFN0QsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtnQkFDL0IsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsbUJBQW1CLENBQUM7Z0JBQzlDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLHNCQUFzQixDQUFDO2dCQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO1lBQ3ZELENBQUMsQ0FBQyxDQUFDO1lBRUgsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN6QjtRQUNELE9BQU87UUFFUDs7Ozs7OztVQU9FO0lBQ0osQ0FBQztJQUVELGdCQUFnQjtRQUNkLElBQUksY0FBYyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNsRSxjQUFjLGFBQWQsY0FBYyx1QkFBZCxjQUFjLENBQUUsTUFBTSxFQUFFLENBQUM7UUFDekIsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUk7WUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7UUFDakUsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUk7WUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsc0JBQXNCLENBQUM7UUFDeEUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsT0FBTztJQUNULENBQUM7Q0FDRjtBQUVELGVBQWUsUUFBUSxDQUFDIn0=