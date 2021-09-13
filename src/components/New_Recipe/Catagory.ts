export class Catagory {
  catagory: Element | null;
  isOpen: boolean;
  title: HTMLElement | null;
  toggleSwitch: HTMLElement | null;

  constructor() {
    this.catagory = document.querySelector("section .catagory");

    this.isOpen = false;

    this.title = document.querySelector(".catagory h6");
    this.toggleSwitch = document.getElementById("toggle-switch-catagory");

    this.title?.addEventListener("click", (e) => this.clickHandler(e));

    this.toggleSwitch?.addEventListener(
      "click",
      (e) => this.clickHandler(e),
      true
    );
  }

  clickHandler(e: Event) {
    e.stopPropagation();

    this.isOpen = !this.isOpen;

    if (this.isOpen) {
      return this.activateCatagory();
    } else {
      return this.teardownCatagories();
    }
  }

  activateCatagory() {
    if (this.toggleSwitch != null) this.toggleSwitch.innerText = "-";

    this.createContainer();
    this.createBubbles();
    return;
  }

  createContainer() {
    const root: Element | null = document.querySelector(".catagory");
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
      const bubble = document.createElement("div");
      bubble.innerText = `Bubble ${i}`;
      wrapper?.append(bubble);
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
    teardownTarget?.remove();
    if (this.toggleSwitch != null) this.toggleSwitch.innerText = "+";
    return;
  }
}
