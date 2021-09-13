export class Header {
    constructor() {
        var _a, _b;
        this.header = document.querySelector(".header");
        (_a = this.header) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => this.openHeader());
        this.closeHeaderButton = document.querySelector(".header nav span");
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
        setTimeout(() => (navigation.style.visibility = "visible"), 200);
    }
    hideNavigation() {
        const navigation = document.querySelector(".header nav");
        navigation.style.visibility = "hidden";
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxPQUFPLE1BQU07SUFJakI7O1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2hELE1BQUEsSUFBSSxDQUFDLE1BQU0sMENBQUUsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO1FBRWhFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDcEUsTUFBQSxJQUFJLENBQUMsaUJBQWlCLDBDQUFFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQ3RELElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQ3BCLENBQUM7SUFDSixDQUFDO0lBRUQsVUFBVTs7UUFDUixJQUFJLE1BQU0sR0FBUSxNQUFBLElBQUksQ0FBQyxNQUFNLDBDQUFFLEtBQUssQ0FBQztRQUVyQyxNQUFNLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUN2QixNQUFNLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztRQUN4QixNQUFNLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUM1QixNQUFNLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUVwQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELFdBQVcsQ0FBQyxDQUFROztRQUNsQixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFcEIsSUFBSSxNQUFNLEdBQVEsTUFBQSxJQUFJLENBQUMsTUFBTSwwQ0FBRSxLQUFLLENBQUM7UUFFckMsTUFBTSxDQUFDLEtBQUssR0FBRyxjQUFjLENBQUM7UUFDOUIsTUFBTSxDQUFDLE1BQU0sR0FBRyxlQUFlLENBQUM7UUFDaEMsTUFBTSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDNUIsTUFBTSxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUM7UUFFNUIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxjQUFjO1FBQ1osTUFBTSxVQUFVLEdBQWdCLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDdEUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVELGNBQWM7UUFDWixNQUFNLFVBQVUsR0FBZ0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN0RSxVQUFVLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7SUFDekMsQ0FBQztDQUNGIn0=