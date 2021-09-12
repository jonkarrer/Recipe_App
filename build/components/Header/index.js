export class Header {
    constructor() {
        var _a, _b;
        this.header = document.querySelector(".header");
        (_a = this.header) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => this.openHeader());
        this.closeHeaderButton = document.querySelector("nav span");
        (_b = this.closeHeaderButton) === null || _b === void 0 ? void 0 : _b.addEventListener("click", (e) => this.closeHeader(e));
    }
    openHeader() {
        var _a;
        let header = (_a = this.header) === null || _a === void 0 ? void 0 : _a.style;
        header.width = "100vw";
        header.height = "100vh";
        header.borderRadius = "0px";
        header.margin = "0";
        this.showNavigation();
    }
    closeHeader(e) {
        var _a;
        e.stopPropagation();
        let header = (_a = this.header) === null || _a === void 0 ? void 0 : _a.style;
        header.width = "var(--width)";
        header.height = "var(--height)";
        header.borderRadius = "50%";
        header.margin = "20px 30px";
        this.hideNavigation();
    }
    showNavigation() {
        const navigation = document.querySelector(".header nav");
        setTimeout(() => (navigation.style.visibility = "visible"), 300);
    }
    hideNavigation() {
        const navigation = document.querySelector(".header nav");
        navigation.style.visibility = "hidden";
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxPQUFPLE1BQU07SUFJakI7O1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2hELE1BQUEsSUFBSSxDQUFDLE1BQU0sMENBQUUsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO1FBRWhFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzVELE1BQUEsSUFBSSxDQUFDLGlCQUFpQiwwQ0FBRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUN0RCxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUNwQixDQUFDO0lBQ0osQ0FBQztJQUVELFVBQVU7O1FBQ1IsSUFBSSxNQUFNLEdBQVEsTUFBQSxJQUFJLENBQUMsTUFBTSwwQ0FBRSxLQUFLLENBQUM7UUFFckMsTUFBTSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7UUFDdkIsTUFBTSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7UUFDeEIsTUFBTSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDNUIsTUFBTSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFFcEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxXQUFXLENBQUMsQ0FBUTs7UUFDbEIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXBCLElBQUksTUFBTSxHQUFRLE1BQUEsSUFBSSxDQUFDLE1BQU0sMENBQUUsS0FBSyxDQUFDO1FBRXJDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsY0FBYyxDQUFDO1FBQzlCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsZUFBZSxDQUFDO1FBQ2hDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzVCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDO1FBRTVCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsY0FBYztRQUNaLE1BQU0sVUFBVSxHQUFnQixRQUFRLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3RFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRCxjQUFjO1FBQ1osTUFBTSxVQUFVLEdBQWdCLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDdEUsVUFBVSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO0lBQ3pDLENBQUM7Q0FDRiJ9