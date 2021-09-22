import { Recipe } from "../components/Recipe.js";
export class Catagories {
    constructor(database) {
        this.database = database;
        this.root = document.getElementById("catagories");
        this.buildTemplate();
    }
    buildTemplate() {
        this.createCatagories();
        return;
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
        selectedRecipe.buildTemplate();
        return;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2F0YWdvcmllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9DYXRhZ29yaWVzL0NhdGFnb3JpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBR2pELE1BQU0sT0FBTyxVQUFVO0lBRXJCLFlBQW9CLFFBQW9CO1FBQXBCLGFBQVEsR0FBUixRQUFRLENBQVk7UUFDdEMsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBQ0QsYUFBYTtRQUNYLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLE9BQU87SUFDVCxDQUFDO0lBRUQsZ0JBQWdCOztRQUNkLHVCQUF1QjtRQUN2QixNQUFNLFVBQVUsR0FBRztZQUNqQixPQUFPO1lBQ1AsV0FBVztZQUNYLE1BQU07WUFDTixPQUFPO1lBQ1AsUUFBUTtZQUNSLFNBQVM7WUFDVCxPQUFPO1lBQ1AsU0FBUztZQUNULFNBQVM7U0FDVixDQUFDO1FBRUYsbURBQW1EO1FBQ25ELEtBQUssTUFBTSxZQUFZLElBQUksVUFBVSxDQUFDLElBQUksRUFBRSxFQUFFO1lBQzVDLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0MsTUFBTSxDQUFDLEVBQUUsR0FBRyxHQUFHLFlBQVksRUFBRSxDQUFDO1lBQzlCLE1BQU0sQ0FBQyxTQUFTLEdBQUcsdUJBQXVCLENBQUM7WUFFM0MsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMvQyxPQUFPLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQztZQUVwQyxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNDLEtBQUssQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDO1lBRS9CLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDNUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7WUFFdkIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFFOUIsT0FBTyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7Z0JBQ3JDLElBQUksT0FBTyxDQUFDLEVBQUUsSUFBSSxNQUFNLEVBQUU7b0JBQ3hCLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLHNCQUFzQixDQUFDO29CQUMzQyxNQUFNLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztvQkFDdkIsT0FBTyxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUM7b0JBQ3BCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQyxDQUFDO29CQUN4QyxPQUFPO2lCQUNSO3FCQUFNO29CQUNMLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLHNCQUFzQixDQUFDO29CQUMzQyxNQUFNLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztvQkFDdkIsT0FBTyxDQUFDLEVBQUUsR0FBRyxRQUFRLENBQUM7b0JBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQzVCO1lBQ0gsQ0FBQyxDQUFDLENBQUM7WUFFSCxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRXZCLE1BQUEsSUFBSSxDQUFDLElBQUksMENBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzNCO1FBRUQsT0FBTztJQUNULENBQUM7SUFFRCxZQUFZLENBQUMsYUFBaUMsRUFBRSxnQkFBd0I7UUFDdEUsTUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBRTdELE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEQsU0FBUyxDQUFDLFNBQVMsR0FBRyxtQkFBbUIsQ0FBQztRQUMxQyxTQUFTLENBQUMsRUFBRSxHQUFHLEdBQUcsYUFBYSxhQUFiLGFBQWEsdUJBQWIsYUFBYSxDQUFFLEVBQUUsT0FBTyxDQUFDO1FBRTNDLEtBQUssTUFBTSxNQUFNLElBQUksZUFBZSxFQUFFO1lBQ3BDLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDOUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxxQkFBcUIsQ0FBQztZQUUxQyxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQy9DLFVBQVUsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztZQUVuQyxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBRTNCLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBRWpFLFNBQVMsYUFBVCxTQUFTLHVCQUFULFNBQVMsQ0FBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDNUI7UUFFRCxhQUFhLGFBQWIsYUFBYSx1QkFBYixhQUFhLENBQUUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pDLE9BQU87SUFDVCxDQUFDO0lBRUQsYUFBYSxDQUFDLGFBQWlDO1FBQzdDLE1BQU0sZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FDOUMsR0FBRyxhQUFhLGFBQWIsYUFBYSx1QkFBYixhQUFhLENBQUUsRUFBRSxPQUFPLENBQzVCLENBQUM7UUFFRixnQkFBZ0IsYUFBaEIsZ0JBQWdCLHVCQUFoQixnQkFBZ0IsQ0FBRSxNQUFNLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsYUFBYSxDQUFDLGdCQUF3QjtRQUNwQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDckMsMkNBQTJDO1lBQzNDLEtBQUssTUFBTSxXQUFXLElBQUksTUFBTSxDQUFDLFVBQVUsRUFBRTtnQkFDM0MsbURBQW1EO2dCQUNuRCxJQUFJLFdBQVcsQ0FBQyxRQUFRLEtBQUssZ0JBQWdCLEVBQUU7b0JBQzdDLE9BQU8sTUFBTSxDQUFDO2lCQUNmO2FBQ0Y7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxVQUFVLENBQUMsTUFBZTtRQUN4QixNQUFNLGNBQWMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUxQyxjQUFjLENBQUMsYUFBYSxFQUFFLENBQUM7UUFFL0IsT0FBTztJQUNULENBQUM7Q0FDRiJ9