export class Recipe {
    constructor(recipe) {
        this.recipe = recipe;
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
        //Put the recipe in a cart for ./new_recipe.html to use.
        localStorage.setItem("edit-recipe", JSON.stringify(this.recipe));
        //Remove recipe from database and dom;
        this.deleteRecipe();
        //Go to ./new_recipe.html page to make edits
        window.location.replace("http://jonkarrer.github.io/Recipe_App/new_recipe.html");
    }
    deleteRecipe() {
        //Grab the database
        const key = localStorage.getItem("recipes");
        let database;
        //Parse out the database
        if (key != null)
            database = JSON.parse(key);
        //Remove the deleted recipe by id
        const filtered = database.filter((item) => item.id != this.recipe.id);
        //Reset with overwrite of the filtered list.
        localStorage.setItem("recipes", JSON.stringify(filtered));
        this.teardownComponent();
        //Update DOM
        window.location.reload();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVjaXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbXBvbmVudHMvUmVjaXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sT0FBTyxNQUFNO0lBR2pCLFlBQW9CLE1BQWU7UUFBZixXQUFNLEdBQU4sTUFBTSxDQUFTO1FBQ2pDLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcscUJBQXFCLENBQUM7SUFDakQsQ0FBQztJQUNELGFBQWE7UUFDWCxzREFBc0Q7UUFDdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUVwQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUVuQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEMsT0FBTztJQUNULENBQUM7SUFFRCxpQkFBaUI7UUFDZixNQUFNLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkQsaUJBQWlCLENBQUMsU0FBUyxHQUFHLHFCQUFxQixDQUFDO1FBQ3BELGlCQUFpQixDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7UUFDbEMsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElB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