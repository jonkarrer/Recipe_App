export class Recipe {
    constructor(recipe) {
        this.recipe = recipe;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVjaXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbXBvbmVudHMvUmVjaXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sT0FBTyxNQUFNO0lBR2pCLFlBQW9CLE1BQWU7UUFBZixXQUFNLEdBQU4sTUFBTSxDQUFTO1FBQ2pDLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcscUJBQXFCLENBQUM7SUFDakQsQ0FBQztJQUVELFVBQVU7UUFDUixzREFBc0Q7UUFDdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUVwQywwQkFBMEI7UUFDMUIsTUFBTSxpQkFBaUIsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZELGlCQUFpQixDQUFDLFNBQVMsR0FBRyxxQkFBcUIsQ0FBQztRQUNwRCxpQkFBaUIsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1FBQ2xDLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO1FBRTVFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFFdkMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRXJCLE9BQU87SUFDVCxDQUFDO0lBRUQsYUFBYTtRQUNYLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUMsWUFBWTtRQUNaLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFFbEMs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