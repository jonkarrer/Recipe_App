import { Recipe } from "./Recipe.js";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2F0YWdvcmllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9DYXRhZ29yaWVzL0NhdGFnb3JpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUdyQyxNQUFNLE9BQU8sVUFBVTtJQUVyQixZQUFvQixRQUFvQjtRQUFwQixhQUFRLEdBQVIsUUFBUSxDQUFZO1FBQ3RDLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUNELGFBQWE7UUFDWCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsZ0JBQWdCOztRQUNkLHVCQUF1QjtRQUN2QixNQUFNLFVBQVUsR0FBRztZQUNqQixPQUFPO1lBQ1AsV0FBVztZQUNYLE1BQU07WUFDTixPQUFPO1lBQ1AsUUFBUTtZQUNSLE9BQU87WUFDUCxPQUFPO1lBQ1AsU0FBUztZQUNULE9BQU87WUFDUCxVQUFVO1lBQ1YsU0FBUztTQUNWLENBQUM7UUFFRixtREFBbUQ7UUFDbkQsS0FBSyxNQUFNLFlBQVksSUFBSSxVQUFVLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDNUMsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3QyxNQUFNLENBQUMsRUFBRSxHQUFHLFFBQVEsQ0FBQztZQUNyQixNQUFNLENBQUMsU0FBUyxHQUFHLHVCQUF1QixDQUFDO1lBRTNDLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDL0MsT0FBTyxDQUFDLFNBQVMsR0FBRyxlQUFlLENBQUM7WUFFcEMsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMzQyxLQUFLLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQztZQUUvQixNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzVDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1lBRXZCLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQzlCLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQ3JDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQyxDQUN4QyxDQUFDO1lBRUYsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUV2QixNQUFBLElBQUksQ0FBQyxJQUFJLDBDQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUMzQjtRQUVELE9BQU87SUFDVCxDQUFDO0lBRUQsWUFBWSxDQUFDLGFBQWlDLEVBQUUsZ0JBQXdCO1FBQ3RFLE1BQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUU3RCxLQUFLLE1BQU0sTUFBTSxJQUFJLGVBQWUsRUFBRTtZQUNwQyxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzlDLE9BQU8sQ0FBQyxTQUFTLEdBQUcscUJBQXFCLENBQUM7WUFFMUMsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMvQyxVQUFVLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFFbkMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUUzQixPQUFPLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUVqRSxhQUFhLGFBQWIsYUFBYSx1QkFBYixhQUFhLENBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2hDO1FBQ0QsT0FBTztJQUNULENBQUM7SUFFRCxhQUFhLENBQUMsZ0JBQXdCO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUNyQywyQ0FBMkM7WUFDM0MsS0FBSyxNQUFNLFdBQVcsSUFBSSxNQUFNLENBQUMsVUFBVSxFQUFFO2dCQUMzQyxtREFBbUQ7Z0JBQ25ELElBQUksV0FBVyxDQUFDLFFBQVEsS0FBSyxnQkFBZ0IsRUFBRTtvQkFDN0MsT0FBTyxNQUFNLENBQUM7aUJBQ2Y7YUFDRjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFVBQVUsQ0FBQyxNQUFlO1FBQ3hCLE1BQU0sY0FBYyxHQUFHLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUU1QixPQUFPO0lBQ1QsQ0FBQztDQUNGIn0=