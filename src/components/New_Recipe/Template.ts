export default class Template {
  isNotOpen: boolean;
  title: HTMLElement | null;
  toggleSwitch: HTMLElement | null;
  sectionElement: HTMLElement | null;

  constructor(public sectionId: string) {
    this.sectionElement = document.getElementById(sectionId);

    this.isNotOpen = true;

    this.title = document.getElementById(`title-switch-${sectionId}`);
    this.toggleSwitch = document.getElementById(`toggle-switch-${sectionId}`);

    this.title?.addEventListener("click", (e) => this.clickHandler(e));
    this.toggleSwitch?.addEventListener(
      "click",
      (e) => this.clickHandler(e),
      true
    );
  }
  clickHandler(e: Event) {
    e.stopPropagation();

    if (this.isNotOpen) this.buildTemplate();
    this.isNotOpen = false;
  }

  buildTemplate() {}
}
