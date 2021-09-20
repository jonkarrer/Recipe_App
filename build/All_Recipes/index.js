"use strict";
class Catagories {
    constructor(database) {
        this.database = database;
        this.root = document.getElementById("catagories");
        this.buildTemplate();
    }
    buildTemplate() {
        this.createCatagories();
    }
    createCatagories() {
        var _a;
        for (const recipe of this.database) {
            const title = document.createElement("p");
            title.innerText = recipe.id;
            (_a = this.root) === null || _a === void 0 ? void 0 : _a.append(title);
        }
    }
}
window.onload = async () => {
    //@ts-ignore
    let db = JSON.parse(localStorage.getItem("recipes"));
    new Catagories(db);
    // let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    // let db = await response.json();
    // new Catagories(db);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvQWxsX1JlY2lwZXMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU0sVUFBVTtJQUVkLFlBQW9CLFFBQW9CO1FBQXBCLGFBQVEsR0FBUixRQUFRLENBQVk7UUFDdEMsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsYUFBYTtRQUNYLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFDRCxnQkFBZ0I7O1FBQ2QsS0FBSyxNQUFNLE1BQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xDLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDMUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDO1lBRTVCLE1BQUEsSUFBSSxDQUFDLElBQUksMENBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzFCO0lBQ0gsQ0FBQztDQUNGO0FBRUQsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLElBQUksRUFBRTtJQUN6QixZQUFZO0lBQ1osSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFFckQsSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbkIsNEVBQTRFO0lBQzVFLGtDQUFrQztJQUNsQyxzQkFBc0I7QUFDeEIsQ0FBQyxDQUFDIn0=