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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVtcGxhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvTmV3X1JlY2lwZS9UZW1wbGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLENBQUMsT0FBTyxPQUFPLFFBQVE7SUFPM0IsWUFBbUIsU0FBaUI7O1FBQWpCLGNBQVMsR0FBVCxTQUFTLENBQVE7UUFDbEMsNkNBQTZDO1FBQzdDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFFNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRXpELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBRXRCLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsaUJBQWlCLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFFMUUsTUFBQSxJQUFJLENBQUMsS0FBSywwQ0FBRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRSxNQUFBLElBQUksQ0FBQyxZQUFZLDBDQUFFLGdCQUFnQixDQUNqQyxPQUFPLEVBQ1AsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQzNCLElBQUksQ0FDTCxDQUFDO0lBQ0osQ0FBQztJQUNELFlBQVksQ0FBQyxDQUFRO1FBQ25CLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUVwQixJQUFJLElBQUksQ0FBQyxTQUFTO1lBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFDRCxpREFBaUQ7SUFDakQsYUFBYSxLQUFJLENBQUM7SUFFbEIsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ2hDLENBQUM7Q0FDRiJ9