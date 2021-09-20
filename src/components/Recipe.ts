import { IMaster } from "../New_Recipe/interfaces";

export class Recipe {
  root: HTMLElement;
  wrapper: HTMLElement;
  constructor(private recipe: IMaster) {
    this.root = document.body;
    this.wrapper = document.createElement("div");
    this.wrapper.className = "open-recipe-wrapper";
  }

  openRecipe() {
    // Prevent body from scrolling behind recipe component
    this.root.style.overflow = "hidden";

    // Set up the close button
    const closeRecipeButton = document.createElement("h2");
    closeRecipeButton.className = "close-recipe-button";
    closeRecipeButton.innerText = "X";
    closeRecipeButton.addEventListener("click", () => this.teardownComponent());

    this.wrapper.append(closeRecipeButton);

    this.createWrapper();

    return;
  }

  createWrapper() {
    const name = document.createElement("h4");
    //@ts-ignore
    name.innerText = this.recipe.name;

    this.wrapper.append(name);

    this.createIngredients();

    this.createMethods();

    this.createNotes();

    this.root.appendChild(this.wrapper);

    return;
  }

  createIngredients() {
    const container = document.createElement("div");
    container.className = "ingredients-container";

    if (this.recipe.ingredients != undefined) {
      for (const ing of this.recipe.ingredients) {
        const wrapper = document.createElement("div");
        wrapper.className = "single-ingredient";
        const ingredientName = document.createElement("p");
        ingredientName.innerText = ing.name;

        const ingredientAmount = document.createElement("p");
        ingredientAmount.innerText = ing.amount;

        const ingredientUnit = document.createElement("p");
        ingredientUnit.innerText = ing.unit;

        wrapper.append(ingredientName, ingredientAmount, ingredientUnit);

        container.append(wrapper);
      }
    }

    this.wrapper.append(container);

    return;
  }

  createMethods() {
    const container = document.createElement("div");
    container.className = "methods-container";

    if (this.recipe.methods != undefined) {
      for (const method of this.recipe.methods) {
        const wrapper = document.createElement("div");
        wrapper.className = "single-method";

        const img = document.createElement("img");
        img.src = "./assets/bolt.svg";

        const text = document.createElement("p");
        text.innerText = method.method;

        wrapper.append(img, text);

        container.append(wrapper);
      }
    }
    this.wrapper.append(container);

    return;
  }

  createNotes() {
    const container = document.createElement("div");
    container.className = "notes-container";

    if (this.recipe.notes != undefined) {
      for (const note of this.recipe.notes) {
        const wrapper = document.createElement("div");
        wrapper.className = "single-note";

        const text = document.createElement("p");
        text.innerText = `*** ${note.note}`;

        wrapper.append(text);

        container.append(wrapper);
      }
    }
    this.wrapper.append(container);

    return;
  }
  teardownComponent() {
    this.root.style.overflow = "auto";
    this.wrapper.remove();

    return;
  }
}
