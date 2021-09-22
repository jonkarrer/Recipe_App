export class Header {
    constructor() {
        var _a, _b;
        this.header = document.getElementById("mobile-header");
        (_a = this.header) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => this.openHeader());
        this.closeHeaderButton = document.querySelector(".mobile-header nav span");
        (_b = this.closeHeaderButton) === null || _b === void 0 ? void 0 : _b.addEventListener("click", (e) => this.closeHeader(e));
    }
    openHeader() {
        var _a;
        let header = (_a = this.header) === null || _a === void 0 ? void 0 : _a.style;
        if (header != undefined) {
            header.width = "100vw";
            header.height = "100vh";
            header.borderRadius = "0px";
            header.margin = "0";
        }
        else {
            console.log("Header not defined");
        }
        this.showNavigation();
    }
    closeHeader(e) {
        var _a;
        e.stopPropagation();
        let header = (_a = this.header) === null || _a === void 0 ? void 0 : _a.style;
        if (header != undefined) {
            header.width = "var(--width)";
            header.height = "var(--height)";
            header.borderRadius = "50%";
            header.margin = "20px 30px";
        }
        else {
            console.log("Header not defined");
        }
        this.hideNavigation();
    }
    showNavigation() {
        const navigation = (document.querySelector(".mobile-header nav"));
        setTimeout(() => (navigation.style.visibility = "visible"), 200);
    }
    hideNavigation() {
        const navigation = (document.querySelector(".mobile-header nav"));
        navigation.style.visibility = "hidden";
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxPQUFPLE1BQU07SUFJakI7O1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3ZELE1BQUEsSUFBSSxDQUFDLE1BQU0sMENBQUUsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO1FBRWhFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDM0UsTUFBQSxJQUFJLENBQUMsaUJBQWlCLDBDQUFFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQ3RELElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQ3BCLENBQUM7SUFDSixDQUFDO0lBRUQsVUFBVTs7UUFDUixJQUFJLE1BQU0sR0FBRyxNQUFBLElBQUksQ0FBQyxNQUFNLDBDQUFFLEtBQUssQ0FBQztRQUVoQyxJQUFJLE1BQU0sSUFBSSxTQUFTLEVBQUU7WUFDdkIsTUFBTSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7WUFDdkIsTUFBTSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7WUFDeEIsTUFBTSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7WUFDNUIsTUFBTSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7U0FDckI7YUFBTTtZQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztTQUNuQztRQUVELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsV0FBVyxDQUFDLENBQVE7O1FBQ2xCLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUVwQixJQUFJLE1BQU0sR0FBRyxNQUFBLElBQUksQ0FBQyxNQUFNLDBDQUFFLEtBQUssQ0FBQztRQUVoQyxJQUFJLE1BQU0sSUFBSSxTQUFTLEVBQUU7WUFDdkIsTUFBTSxDQUFDLEtBQUssR0FBRyxjQUFjLENBQUM7WUFDOUIsTUFBTSxDQUFDLE1BQU0sR0FBRyxlQUFlLENBQUM7WUFDaEMsTUFBTSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7WUFDNUIsTUFBTSxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUM7U0FDN0I7YUFBTTtZQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztTQUNuQztRQUVELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsY0FBYztRQUNaLE1BQU0sVUFBVSxHQUFnQixDQUM5QixRQUFRLENBQUMsYUFBYSxDQUFDLG9CQUFvQixDQUFDLENBQzdDLENBQUM7UUFDRixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUQsY0FBYztRQUNaLE1BQU0sVUFBVSxHQUFnQixDQUM5QixRQUFRLENBQUMsYUFBYSxDQUFDLG9CQUFvQixDQUFDLENBQzdDLENBQUM7UUFDRixVQUFVLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7SUFDekMsQ0FBQztDQUNGIn0=