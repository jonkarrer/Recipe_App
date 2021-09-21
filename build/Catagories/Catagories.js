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
            "Holiday",
            "Bread",
            "Dessert",
            "Special",
        ];
        // Loop through catagories array and append to body
        for (const catagoryName of catagories.sort()) {
            const parent = document.createElement("div");
            parent.id = `${catagoryName}`;
            parent.className = "open-catagory-wrapper";
            const wrapper = document.createElement("span");
            wrapper.className = "title-wrapper";
            const title = document.createElement("h6");
            title.innerText = catagoryName;
            const toggle = document.createElement("h4");
            toggle.innerText = "+";
            wrapper.append(title, toggle);
            wrapper.addEventListener("click", () => {
                if (wrapper.id != "open") {
                    title.style.color = "var(--theme-dk-text)";
                    toggle.innerText = "-";
                    wrapper.id = "open";
                    this.openCatagory(parent, catagoryName);
                    return;
                }
                else {
                    title.style.color = "var(--theme-lt-text)";
                    toggle.innerText = "+";
                    wrapper.id = "closed";
                    this.closeCatagory(parent);
                }
            });
            parent.append(wrapper);
            (_a = this.root) === null || _a === void 0 ? void 0 : _a.append(parent);
        }
        return;
    }
    openCatagory(parentElement, selectedCatagory) {
        const targetedRecipes = this.filterRecipes(selectedCatagory);
        const container = document.createElement("div");
        container.className = "recipes-container";
        container.id = `${parentElement === null || parentElement === void 0 ? void 0 : parentElement.id}-root`;
        for (const recipe of targetedRecipes) {
            const wrapper = document.createElement("div");
            wrapper.className = "recipe-name-wrapper";
            const recipeName = document.createElement("p");
            recipeName.innerText = recipe.name;
            wrapper.append(recipeName);
            wrapper.addEventListener("click", () => this.openRecipe(recipe));
            container === null || container === void 0 ? void 0 : container.append(wrapper);
        }
        parentElement === null || parentElement === void 0 ? void 0 : parentElement.append(container);
        return;
    }
    closeCatagory(parentElement) {
        const recipesContainer = document.getElementById(`${parentElement === null || parentElement === void 0 ? void 0 : parentElement.id}-root`);
        recipesContainer === null || recipesContainer === void 0 ? void 0 : recipesContainer.remove();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2F0YWdvcmllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9DYXRhZ29yaWVzL0NhdGFnb3JpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBR2pELE1BQU0sT0FBTyxVQUFVO0lBRXJCLFlBQW9CLFFBQW9CO1FBQXBCLGFBQVEsR0FBUixRQUFRLENBQVk7UUFDdEMsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBQ0QsYUFBYTtRQUNYLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxnQkFBZ0I7O1FBQ2QsdUJBQXVCO1FBQ3ZCLE1BQU0sVUFBVSxHQUFHO1lBQ2pCLE9BQU87WUFDUCxXQUFXO1lBQ1gsTUFBTTtZQUNOLE9BQU87WUFDUCxRQUFRO1lBQ1IsU0FBUztZQUNULE9BQU87WUFDUCxTQUFTO1lBQ1QsU0FBUztTQUNWLENBQUM7UUFFRixtREFBbUQ7UUFDbkQsS0FBSyxNQUFNLFlBQVksSUFBSSxVQUFVLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDNUMsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3QyxNQUFNLENBQUMsRUFBRSxHQUFHLEdBQUcsWUFBWSxFQUFFLENBQUM7WUFDOUIsTUFBTSxDQUFDLFNBQVMsR0FBRyx1QkFBdUIsQ0FBQztZQUUzQyxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQy9DLE9BQU8sQ0FBQyxTQUFTLEdBQUcsZUFBZSxDQUFDO1lBRXBDLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0MsS0FBSyxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUM7WUFFL0IsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM1QyxNQUFNLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztZQUV2QixPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztZQUU5QixPQUFPLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtnQkFDckMsSUFBSSxPQUFPLENBQUMsRUFBRSxJQUFJLE1BQU0sRUFBRTtvQkFDeEIsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsc0JBQXNCLENBQUM7b0JBQzNDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO29CQUN2QixPQUFPLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQztvQkFDcEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsWUFBWSxDQUFDLENBQUM7b0JBQ3hDLE9BQU87aUJBQ1I7cUJBQU07b0JBQ0wsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsc0JBQXNCLENBQUM7b0JBQzNDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO29CQUN2QixPQUFPLENBQUMsRUFBRSxHQUFHLFFBQVEsQ0FBQztvQkFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDNUI7WUFDSCxDQUFDLENBQUMsQ0FBQztZQUVILE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFdkIsTUFBQSxJQUFJLENBQUMsSUFBSSwwQ0FBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDM0I7UUFFRCxPQUFPO0lBQ1QsQ0FBQztJQUVELFlBQVksQ0FBQyxhQUFpQyxFQUFFLGdCQUF3QjtRQUN0RSxNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFFN0QsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoRCxTQUFTLENBQUMsU0FBUyxHQUFHLG1CQUFtQixDQUFDO1FBQzFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxhQUFhLGFBQWIsYUFBYSx1QkFBYixhQUFhLENBQUUsRUFBRSxPQUFPLENBQUM7UUFFM0MsS0FBSyxNQUFNLE1BQU0sSUFBSSxlQUFlLEVBQUU7WUFDcEMsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM5QyxPQUFPLENBQUMsU0FBUyxHQUFHLHFCQUFxQixDQUFDO1lBRTFDLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDL0MsVUFBVSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBRW5DLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7WUFFM0IsT0FBTyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFFakUsU0FBUyxhQUFULFNBQVMsdUJBQVQsU0FBUyxDQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM1QjtRQUVELGFBQWEsYUFBYixhQUFhLHVCQUFiLGFBQWEsQ0FBRSxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakMsT0FBTztJQUNULENBQUM7SUFFRCxhQUFhLENBQUMsYUFBaUM7UUFDN0MsTUFBTSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUM5QyxHQUFHLGFBQWEsYUFBYixhQUFhLHVCQUFiLGFBQWEsQ0FBRSxFQUFFLE9BQU8sQ0FDNUIsQ0FBQztRQUVGLGdCQUFnQixhQUFoQixnQkFBZ0IsdUJBQWhCLGdCQUFnQixDQUFFLE1BQU0sRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxhQUFhLENBQUMsZ0JBQXdCO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUNyQywyQ0FBMkM7WUFDM0MsS0FBSyxNQUFNLFdBQVcsSUFBSSxNQUFNLENBQUMsVUFBVSxFQUFFO2dCQUMzQyxtREFBbUQ7Z0JBQ25ELElBQUksV0FBVyxDQUFDLFFBQVEsS0FBSyxnQkFBZ0IsRUFBRTtvQkFDN0MsT0FBTyxNQUFNLENBQUM7aUJBQ2Y7YUFDRjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFVBQVUsQ0FBQyxNQUFlO1FBQ3hCLE1BQU0sY0FBYyxHQUFHLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUU1QixPQUFPO0lBQ1QsQ0FBQztDQUNGIn0=