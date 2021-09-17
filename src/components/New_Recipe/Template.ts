export default class Template {
  isNotOpen: boolean;
  title: HTMLElement | null;
  toggleSwitch: HTMLElement | null;
  sectionElement: HTMLElement | null;
  userDataCollector: any;

  constructor(public sectionId: string) {
    //This collcts the inputs from each catagory.
    this.userDataCollector = [];

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

  //This initaites the inheriting components logic.
  buildTemplate() {}

  getAllData() {
    console.log(this.userDataCollector);
  }
}
