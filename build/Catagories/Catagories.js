import { Recipe } from "../components/Recipe.js";
export class Catagories {
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
        // Establish Catagories
        const catagories = [
            "Vegan",
            "Breakfast",
            "Soup",
            "Lunch",
            "Dinner",
            "Asian",
            "Cajun",
            "Holiday",
            "Bread",
            "Desserts",
            "Special",
        ];
        // Loop through catagories array and append to body
        for (const catagoryName of catagories.sort()) {
            const parent = document.createElement("div");
            parent.id = "parent";
            parent.className = "open-catagory-wrapper";
            const wrapper = document.createElement("span");
            wrapper.className = "title-wrapper";
            const title = document.createElement("h6");
            title.innerText = catagoryName;
            const toggle = document.createElement("h4");
            toggle.innerText = "+";
            wrapper.append(title, toggle);
            wrapper.addEventListener("click", () => this.openCatagory(parent, catagoryName));
            parent.append(wrapper);
            (_a = this.root) === null || _a === void 0 ? void 0 : _a.append(parent);
        }
        return;
    }
    openCatagory(parentElement, selectedCatagory) {
        const targetedRecipes = this.filterRecipes(selectedCatagory);
        for (const recipe of targetedRecipes) {
            const wrapper = document.createElement("div");
            wrapper.className = "recipe-name-wrapper";
            const recipeName = document.createElement("p");
            recipeName.innerText = recipe.name;
            wrapper.append(recipeName);
            wrapper.addEventListener("click", () => this.openRecipe(recipe));
            parentElement === null || parentElement === void 0 ? void 0 : parentElement.append(wrapper);
        }
        return;
    }
    filterRecipes(selectedCatagory) {
        return this.database.filter((recipe) => {
            // recipe.catagories is an array of objects
            for (const catagoryObj of recipe.catagories) {
                // Does this catagory equal user selected catagory?
                if (catagoryObj.catagory === selectedCatagory) {
                    return recipe;
                }
            }
        });
    }
    openRecipe(recipe) {
        const selectedRecipe = new Recipe(recipe);
        selectedRecipe.openRecipe();
        return;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2F0YWdvcmllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9DYXRhZ29yaWVzL0NhdGFnb3JpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBR2pELE1BQU0sT0FBTyxVQUFVO0lBRXJCLFlBQW9CLFFBQW9CO1FBQXBCLGFBQVEsR0FBUixRQUFRLENBQVk7UUFDdEMsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBQ0QsYUFBYTtRQUNYLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxnQkFBZ0I7O1FBQ2QsdUJBQXVCO1FBQ3ZCLE1BQU0sVUFBVSxHQUFHO1lBQ2pCLE9BQU87WUFDUCxXQUFXO1lBQ1gsTUFBTTtZQUNOLE9BQU87WUFDUCxRQUFRO1lBQ1IsT0FBTztZQUNQLE9BQU87WUFDUCxTQUFTO1lBQ1QsT0FBTztZQUNQLFVBQVU7WUFDVixTQUFTO1NBQ1YsQ0FBQztRQUVGLG1EQUFtRDtRQUNuRCxLQUFLLE1BQU0sWUFBWSxJQUFJLFVBQVUsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUM1QyxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsUUFBUSxDQUFDO1lBQ3JCLE1BQU0sQ0FBQyxTQUFTLEdBQUcsdUJBQXVCLENBQUM7WUFFM0MsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMvQyxPQUFPLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQztZQUVwQyxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNDLEtBQUssQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDO1lBRS9CLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDNUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7WUFFdkIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDOUIsT0FBTyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FDckMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsWUFBWSxDQUFDLENBQ3hDLENBQUM7WUFFRixNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRXZCLE1BQUEsSUFBSSxDQUFDLElBQUksMENBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzNCO1FBRUQsT0FBTztJQUNULENBQUM7SUFFRCxZQUFZLENBQUMsYUFBaUMsRUFBRSxnQkFBd0I7UUFDdEUsTUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBRTdELEtBQUssTUFBTSxNQUFNLElBQUksZUFBZSxFQUFFO1lBQ3BDLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDOUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxxQkFBcUIsQ0FBQztZQUUxQyxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQy9DLFVBQVUsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztZQUVuQyxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBRTNCLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBRWpFLGFBQWEsYUFBYixhQUFhLHVCQUFiLGFBQWEsQ0FBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDaEM7UUFDRCxPQUFPO0lBQ1QsQ0FBQztJQUVELGFBQWEsQ0FBQyxnQkFBd0I7UUFDcEMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ3JDLDJDQUEyQztZQUMzQyxLQUFLLE1BQU0sV0FBVyxJQUFJLE1BQU0sQ0FBQyxVQUFVLEVBQUU7Z0JBQzNDLG1EQUFtRDtnQkFDbkQsSUFBSSxXQUFXLENBQUMsUUFBUSxLQUFLLGdCQUFnQixFQUFFO29CQUM3QyxPQUFPLE1BQU0sQ0FBQztpQkFDZjthQUNGO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsVUFBVSxDQUFDLE1BQWU7UUFDeEIsTUFBTSxjQUFjLEdBQUcsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFMUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBRTVCLE9BQU87SUFDVCxDQUFDO0NBQ0YifQ==