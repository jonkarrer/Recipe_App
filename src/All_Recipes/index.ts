import { Recipe } from "../components/Recipe.js";
import { IMaster } from "../New_Recipe/interfaces.js";
class AllRecipes {
  root: HTMLElement | null;
  constructor(private database: Array<any>) {
    this.root = document.getElementById("all_recipes");
    this.buildTemplate();
  }
  buildTemplate() {
    for (const recipe of this.database) {
      const wrapper = document.createElement("div");
      wrapper.className = "recipe-name-wrapper";

      const recipeName = document.createElement("p");

      recipeName.innerText = recipe.name;

      wrapper.append(recipeName);

      wrapper.addEventListener("click", () => this.openRecipe(recipe));

      this.root?.append(wrapper);
    }
  }
  openRecipe(recipe: IMaster) {
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
