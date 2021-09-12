export class Header {
  private header: HTMLElement | null;
  private closeHeaderButton: HTMLElement | null;

  constructor() {
    this.header = document.querySelector(".header");
    this.header?.addEventListener("click", () => this.openHeader());

    this.closeHeaderButton = document.querySelector("nav span");
    this.closeHeaderButton?.addEventListener("click", (e) =>
      this.closeHeader(e)
    );
  }

  openHeader() {
    let header: any = this.header?.style;

    header.width = "100vw";
    header.height = "100vh";
    header.borderRadius = "0px";
    header.margin = "0";

    this.showNavigation();
  }

  closeHeader(e: Event) {
    e.stopPropagation();

    let header: any = this.header?.style;

    header.width = "var(--width)";
    header.height = "var(--height)";
    header.borderRadius = "50%";
    header.margin = "20px 30px";

    this.hideNavigation();
  }

  showNavigation() {
    const navigation = <HTMLElement>document.querySelector(".header nav");
    setTimeout(() => (navigation.style.visibility = "visible"), 300);
  }

  hideNavigation() {
    const navigation = <HTMLElement>document.querySelector(".header nav");
    navigation.style.visibility = "hidden";
  }
}
