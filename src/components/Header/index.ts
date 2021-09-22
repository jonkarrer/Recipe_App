export class Header {
  private header: HTMLElement | null;
  private closeHeaderButton: HTMLElement | null;

  constructor() {
    this.header = document.getElementById("mobile-header");
    this.header?.addEventListener("click", () => this.openHeader());

    this.closeHeaderButton = document.querySelector(".mobile-header nav span");
    this.closeHeaderButton?.addEventListener("click", (e) =>
      this.closeHeader(e)
    );
  }

  openHeader() {
    let header = this.header?.style;

    if (header != undefined) {
      header.width = "100vw";
      header.height = "100vh";
      header.borderRadius = "0px";
      header.margin = "0";
    } else {
      console.log("Header not defined");
    }

    this.showNavigation();
  }

  closeHeader(e: Event) {
    e.stopPropagation();

    let header = this.header?.style;

    if (header != undefined) {
      header.width = "var(--width)";
      header.height = "var(--height)";
      header.borderRadius = "50%";
      header.margin = "20px 30px";
    } else {
      console.log("Header not defined");
    }

    this.hideNavigation();
  }

  showNavigation() {
    const navigation = <HTMLElement>(
      document.querySelector(".mobile-header nav")
    );
    setTimeout(() => (navigation.style.visibility = "visible"), 200);
  }

  hideNavigation() {
    const navigation = <HTMLElement>(
      document.querySelector(".mobile-header nav")
    );
    navigation.style.visibility = "hidden";
  }
}
