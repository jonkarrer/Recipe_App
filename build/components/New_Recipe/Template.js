export default class Template {
    constructor(sectionId) {
        var _a, _b;
        this.sectionId = sectionId;
        this.sectionElement = document.getElementById(sectionId);
        this.isNotOpen = false;
        this.title = document.getElementById(`title-switch-${sectionId}`);
        this.toggleSwitch = document.getElementById(`toggle-switch-${sectionId}`);
        (_a = this.title) === null || _a === void 0 ? void 0 : _a.addEventListener("click", (e) => this.clickHandler(e));
        (_b = this.toggleSwitch) === null || _b === void 0 ? void 0 : _b.addEventListener("click", (e) => this.clickHandler(e), true);
    }
    clickHandler(e) {
        e.stopPropagation();
        this.isNotOpen = !this.isNotOpen;
        if (this.isNotOpen) {
            return this.buildTemplate();
        }
        else {
            return this.teardownTemplate();
        }
    }
    buildTemplate() { }
    teardownTemplate() { }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVtcGxhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9OZXdfUmVjaXBlL1RlbXBsYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBQyxPQUFPLE9BQU8sUUFBUTtJQU0zQixZQUFtQixTQUFpQjs7UUFBakIsY0FBUyxHQUFULFNBQVMsQ0FBUTtRQUNsQyxJQUFJLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFekQsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFFdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGdCQUFnQixTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUUxRSxNQUFBLElBQUksQ0FBQyxLQUFLLDBDQUFFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25FLE1BQUEsSUFBSSxDQUFDLFlBQVksMENBQUUsZ0JBQWdCLENBQ2pDLE9BQU8sRUFDUCxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFDM0IsSUFBSSxDQUNMLENBQUM7SUFDSixDQUFDO0lBQ0QsWUFBWSxDQUFDLENBQVE7UUFDbkIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXBCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBRWpDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixPQUFPLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUM3QjthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUNoQztJQUNILENBQUM7SUFFRCxhQUFhLEtBQUksQ0FBQztJQUVsQixnQkFBZ0IsS0FBSSxDQUFDO0NBQ3RCIn0=