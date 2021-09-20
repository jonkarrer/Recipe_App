import { Recipe } from "../components/Recipe.js";
import { IMaster } from "../New_Recipe/interfaces.js";

export class Catagories {
  root: HTMLElement | null;
  constructor(private database: Array<any>) {
    this.root = document.getElementById("catagories");
    this.buildTemplate();
  }
  buildTemplate() {
    this.createCatagories();
  }

  createCatagories() {
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
      wrapper.addEventListener("click", () =>
        this.openCatagory(parent, catagoryName)
      );

      parent.append(wrapper);

      this.root?.append(parent);
    }

    return;
  }

  openCatagory(parentElement: HTMLElement | null, selectedCatagory: string) {
    const targetedRecipes = this.filterRecipes(selectedCatagory);

    for (const recipe of targetedRecipes) {
      const wrapper = document.createElement("div");
      wrapper.className = "recipe-name-wrapper";

      const recipeName = document.createElement("p");
      recipeName.innerText = recipe.name;

      wrapper.append(recipeName);

      wrapper.addEventListener("click", () => this.openRecipe(recipe));

      parentElement?.append(wrapper);
    }
    return;
  }

  filterRecipes(selectedCatagory: string) {
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

  openRecipe(recipe: IMaster) {
    const selectedRecipe = new Recipe(recipe);

    selectedRecipe.openRecipe();

    return;
  }
}
