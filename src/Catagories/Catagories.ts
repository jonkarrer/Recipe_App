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
        } else {
          title.style.color = "var(--theme-lt-text)";
          toggle.innerText = "+";
          wrapper.id = "closed";
          this.closeCatagory(parent);
        }
      });

      parent.append(wrapper);

      this.root?.append(parent);
    }

    return;
  }

  openCatagory(parentElement: HTMLElement | null, selectedCatagory: string) {
    const targetedRecipes = this.filterRecipes(selectedCatagory);

    const container = document.createElement("div");
    container.className = "recipes-container";
    container.id = `${parentElement?.id}-root`;

    for (const recipe of targetedRecipes) {
      const wrapper = document.createElement("div");
      wrapper.className = "recipe-name-wrapper";

      const recipeName = document.createElement("p");
      recipeName.innerText = recipe.name;

      wrapper.append(recipeName);

      wrapper.addEventListener("click", () => this.openRecipe(recipe));

      container?.append(wrapper);
    }

    parentElement?.append(container);
    return;
  }

  closeCatagory(parentElement: HTMLElement | null) {
    const recipesContainer = document.getElementById(
      `${parentElement?.id}-root`
    );

    recipesContainer?.remove();
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

    selectedRecipe.buildTemplate();

    return;
  }
}
