import { Recipe } from "../components/Recipe.js";
class AllRecipes {
    constructor(database) {
        this.database = database;
        this.root = document.getElementById("all_recipes");
        this.buildTemplate();
    }
    buildTemplate() {
        var _a;
        for (const recipe of this.database) {
            const wrapper = document.createElement("div");
            wrapper.className = "recipe-name-wrapper";
            const recipeName = document.createElement("p");
            recipeName.innerText = recipe.name;
            wrapper.append(recipeName);
            wrapper.addEventListener("click", () => this.openRecipe(recipe));
            (_a = this.root) === null || _a === void 0 ? void 0 : _a.append(wrapper);
        }
    }
    openRecipe(recipe) {
        const selectedRecipe = new Recipe(recipe);
        selectedRecipe.openRecipe();
        return;
    }
}
window.onload = async () => {
    //@ts-ignore
    let db = JSON.parse(localStorage.getItem("recipes"));
    new AllRecipes(db);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvQWxsX1JlY2lwZXMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRWpELE1BQU0sVUFBVTtJQUVkLFlBQW9CLFFBQW9CO1FBQXBCLGFBQVEsR0FBUixRQUFRLENBQVk7UUFDdEMsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBQ0QsYUFBYTs7UUFDWCxLQUFLLE1BQU0sTUFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEMsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM5QyxPQUFPLENBQUMsU0FBUyxHQUFHLHFCQUFxQixDQUFDO1lBRTFDLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFL0MsVUFBVSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBRW5DLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7WUFFM0IsT0FBTyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFFakUsTUFBQSxJQUFJLENBQUMsSUFBSSwwQ0FBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDNUI7SUFDSCxDQUFDO0lBQ0QsVUFBVSxDQUFDLE1BQWU7UUFDeEIsTUFBTSxjQUFjLEdBQUcsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFMUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBRTVCLE9BQU87SUFDVCxDQUFDO0NBQ0Y7QUFFRCxNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssSUFBSSxFQUFFO0lBQ3pCLFlBQVk7SUFDWixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUVyRCxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNyQixDQUFDLENBQUMifQ==