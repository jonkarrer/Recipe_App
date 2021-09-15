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

    let i = 0;
    for (i; i < 6; i++) {
      const bubble: HTMLDivElement = document.createElement("div");
      bubble.innerText = `Bubble ${i}`;
      bubble.setAttribute("data-catagory-name", `${i}`);

      /// This will capture the information to store in the backend

      bubble.addEventListener("click", function (this) {
        bubble.style.background = "var(--theme-blue)";
        bubble.style.color = "var(--theme-lt-text)";
        console.log(this.getAttribute("data-catagory-name"));
      });

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
