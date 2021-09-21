import { IMaster } from "../New_Recipe/interfaces";

export class Recipe {
  root: HTMLElement;
  wrapper: HTMLElement;
  constructor(private recipe: IMaster) {
    this.root = document.body;
    this.wrapper = document.createElement("div");
    this.wrapper.className = "open-recipe-wrapper";
  }
  buildTemplate() {
    // Prevent body from scrolling behind recipe component
    this.root.style.overflow = "hidden";

    this.createCloseButton();
    this.createModifyButtons();
    this.createHeading();
    this.createIngredients();
    this.createMethods();
    this.createNotes();

    this.root.appendChild(this.wrapper);
    return;
  }

  createCloseButton() {
    const closeRecipeButton = document.createElement("h2");
    closeRecipeButton.className = "close-recipe-button";
    closeRecipeButton.innerText = "X";
    closeRecipeButton.addEventListener("click", () => this.teardownComponent());

    this.wrapper.append(closeRecipeButton);
    return;
  }

  createHeading() {
    const heading = document.createElement("h4");
    //@ts-ignore
    heading.innerText = this.recipe.name;

    this.wrapper.append(heading);
    return;
  }

  createModifyButtons() {
    const container = document.createElement("span");
    container.className = "edit-delete-container";

    const editButton = document.createElement("a");
    editButton.className = "edit-button";
    editButton.innerText = "Edit";
    editButton.addEventListener("click", () => this.editRecipe());

    const deleteButton = document.createElement("a");
    deleteButton.className = "delete-button";
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", () => this.deleteRecipe());

    container.append(editButton, deleteButton);

    this.wrapper.append(container);
  }
  editRecipe() {
    localStorage.setItem("edit-recipe", JSON.stringify(this.recipe));
  }

  deleteRecipe() {
    const key = localStorage.getItem("recipes");
    let database;

    if (key != null) database = JSON.parse(key);

    const filtered = database.filter(
      (item: { id: number | undefined }) => item.id != this.recipe.id
    );

    localStorage.clear();
    localStorage.setItem("recipes", JSON.stringify(filtered));

    this.teardownComponent();
  }

  createIngredients() {
    const container = document.createElement("div");
    container.className = "ingredients-container";

    if (this.recipe.ingredients != undefined) {
      for (const ingredient of this.recipe.ingredients) {
        const wrapper = document.createElement("div");
        wrapper.className = "single-ingredient";
        const ingredientName = document.createElement("p");
        ingredientName.innerText = ingredient.name;

        const ingredientAmount = document.createElement("p");
        ingredientAmount.innerText = ingredient.amount;

        const ingredientUnit = document.createElement("p");
        ingredientUnit.innerText = ingredient.unit;

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
