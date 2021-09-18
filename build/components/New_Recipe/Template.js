export default class Template {
    constructor(sectionId) {
        var _a, _b;
        this.sectionId = sectionId;
        //This collcts the inputs from each catagory.
        this.userDataCollector = [];
        this.sectionElement = document.getElementById(sectionId);
        this.isNotOpen = true;
        this.title = document.getElementById(`title-switch-${sectionId}`);
        this.toggleSwitch = document.getElementById(`toggle-switch-${sectionId}`);
        (_a = this.title) === null || _a === void 0 ? void 0 : _a.addEventListener("click", (e) => this.clickHandler(e));
        (_b = this.toggleSwitch) === null || _b === void 0 ? void 0 : _b.addEventListener("click", (e) => this.clickHandler(e), true);
    }
    clickHandler(e) {
        e.stopPropagation();
        if (this.isNotOpen)
            this.buildTemplate();
        this.isNotOpen = false;
    }
    //This initaites the inheriting components logic.
    buildTemplate() { }
    getAllData() {
        return this.userDataCollector;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVtcGxhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9OZXdfUmVjaXBlL1RlbXBsYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBQyxPQUFPLE9BQU8sUUFBUTtJQU8zQixZQUFtQixTQUFpQjs7UUFBakIsY0FBUyxHQUFULFNBQVMsQ0FBUTtRQUNsQyw2Q0FBNkM7UUFDN0MsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUU1QixJQUFJLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFekQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFFdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGdCQUFnQixTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUUxRSxNQUFBLElBQUksQ0FBQyxLQUFLLDBDQUFFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25FLE1BQUEsSUFBSSxDQUFDLFlBQVksMENBQUUsZ0JBQWdCLENBQ2pDLE9BQU8sRUFDUCxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFDM0IsSUFBSSxDQUNMLENBQUM7SUFDSixDQUFDO0lBQ0QsWUFBWSxDQUFDLENBQVE7UUFDbkIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXBCLElBQUksSUFBSSxDQUFDLFNBQVM7WUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUNELGlEQUFpRDtJQUNqRCxhQUFhLEtBQUksQ0FBQztJQUVsQixVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDaEMsQ0FBQztDQUNGIn0=