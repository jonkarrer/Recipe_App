import Template from "./Template.js";

class Catagory extends Template {
  buildTemplate() {
    if (this.toggleSwitch != null) this.toggleSwitch.innerText = "-";
    if (this.title != null) this.title.style.color = "var(--theme-dk-text)";

    this.toggleSwitch?.addEventListener("click", () => this.teardownTemplate());

    this.createContainer();
    this.createBubbles();
    return;
  }

  createContainer() {
    const root = this.sectionElement;
    const parent: HTMLDivElement = document.createElement("div");
    const child: HTMLDivElement = document.createElement("div");

    parent.className = "bubbles-container";
    child.className = "overflow-wrapper";

    parent.append(child);

    root?.append(parent);

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
    const wrapper: HTMLElement | null =
      document.querySelector(".overflow-wrapper");

    //Stock data
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
      bubble.addEventListener("click", (evt) =>
        this.captureUserSelection(bubble, evt, cat, catagories)
      );

      wrapper?.append(bubble);
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

  captureUserSelection(
    bubble: HTMLElement,
    evt: Event,
    cat: string,
    catagories: Array<string>
  ) {
    interface ICat {
      id: number;
      catagory: string | null;
    }

    if (bubble.style.background != "var(--theme-blue)") {
      //Change color to reflect has been clicked;
      bubble.style.background = "var(--theme-blue)";
      bubble.style.color = "var(--theme-lt-text)";

      const infoPacket: ICat = {
        id: catagories.indexOf(cat),
        //@ts-ignore
        catagory: evt.target?.getAttribute("data-catagory-name"),
      };

      this.userDataCollector.push(infoPacket);
    } else {
      //Change color to reflect has been clicked again;
      bubble.style.background = "var(--theme-grey)";
      bubble.style.color = "var(--theme-dk-text)";

      //Remove the catagory that was clicked;
      this.userDataCollector = this.userDataCollector.filter(
        (item: ICat) => item.id != catagories.indexOf(cat)
      );
    }
  }

  teardownTemplate() {
    let teardownTarget = document.querySelector(".bubbles-container");
    teardownTarget?.remove();
    if (this.toggleSwitch != null) this.toggleSwitch.innerText = "+";
    if (this.title != null) this.title.style.color = "var(--theme-lt-text)";
    this.isNotOpen = true;
    return;
  }
}

export default Catagory;
