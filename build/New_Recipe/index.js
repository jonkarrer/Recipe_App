var _a, _b;
import Catagory from "./Catagory.js";
import Ingredient from "./Ingredient.js";
import Method from "./Method.js";
import Note from "./Note.js";
// Initiate App and Pass the desired DOM id of desired section.
const catagory = new Catagory("catagory");
const ingredient = new Ingredient("ingredient");
const method = new Method("method");
const note = new Note("note");
// Check if user is going for an edit on page load
if (localStorage.getItem("edit-recipe") != null) {
    //Get recipe to edit
    const recipeToEdit = JSON.parse(localStorage.getItem("edit-recipe"));
    //Populate name
    const recipeName = document.getElementById("recipe_name");
    recipeName.value = recipeToEdit.name;
    //Select Catagories
    catagory.buildTemplate();
    catagory.editBuild(recipeToEdit.catagories);
    //Insert Ingredients
    ingredient.editBuild(recipeToEdit.ingredients);
    //Insert Methods
    method.editBuild(recipeToEdit.methods);
    //Insert Notes
    note.editBuild(recipeToEdit.notes);
}
else {
    console.log("storage is empty");
}
//Create save button
(_a = document
    .querySelector("footer .save-wrapper")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => showSaveScreen());
function showSaveScreen() {
    //Check that data exists. Cancels save and alerts user;
    if (preventEmptyDataSubmit() === false)
        return;
    //Commit master data to back end
    saveAllData();
    //Show that recipe was saved
    const element = document.querySelector(".save-screen");
    if (element != null)
        element.style.visibility = "visible";
    //Then redirect to home page
    setTimeout(() => window.location.replace("http://jonkarrer.github.io/Recipe_App/index.html"), 2300);
}
function preventEmptyDataSubmit() {
    const recipeName = document.getElementById("recipe_name").value;
    if (recipeName === "") {
        alert("Recipe Name Empty");
        return false;
    }
    else if (catagory.getAllData().length === 0) {
        alert("Catagory Empty");
        return false;
    }
    else if (ingredient.getAllData().length === 0) {
        alert("Ingredient Empty");
        return false;
    }
    else if (method.getAllData().length === 0) {
        alert("Method Empty");
        return false;
    }
    else {
        return true;
    }
}
function saveAllData() {
    const recipeName = document.getElementById("recipe_name").value;
    let masterData = {};
    masterData.id = Date.now();
    masterData.name = recipeName;
    masterData.catagories = catagory.getAllData();
    masterData.ingredients = ingredient.getAllData();
    masterData.methods = method.getAllData();
    masterData.notes = note.getAllData();
    if (localStorage.getItem("recipes") === null) {
        localStorage.setItem("recipes", JSON.stringify([masterData]));
        return;
    }
    const recipeHistory = JSON.parse(localStorage.getItem("recipes"));
    recipeHistory.push(masterData);
    //Empy edit-recipe key and old data
    localStorage.clear();
    localStorage.setItem("recipes", JSON.stringify(recipeHistory));
}
//Create delete button
(_b = document
    .querySelector("footer .delete-wrapper")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => showDeleteScreen());
function showDeleteScreen() {
    localStorage.removeItem("edit-recipe");
    //Show that recipe was deleted
    const element = document.querySelector(".delete-screen");
    if (element != null)
        element.style.visibility = "visible";
    //Then redirect to home page
    setTimeout(() => window.location.replace("http://jonkarrer.github.io/Recipe_App/index.html"), 2300);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvTmV3X1JlY2lwZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxRQUFRLE1BQU0sZUFBZSxDQUFDO0FBQ3JDLE9BQU8sVUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sTUFBTSxNQUFNLGFBQWEsQ0FBQztBQUNqQyxPQUFPLElBQUksTUFBTSxXQUFXLENBQUM7QUFHN0IsK0RBQStEO0FBQy9ELE1BQU0sUUFBUSxHQUFHLElBQUksUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQzFDLE1BQU0sVUFBVSxHQUFHLElBQUksVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ2hELE1BQU0sTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3BDLE1BQU0sSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRTlCLGtEQUFrRDtBQUNsRCxJQUFJLFlBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksSUFBSSxFQUFFO0lBQy9DLG9CQUFvQjtJQUNwQixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUM3QixZQUFZLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBVyxDQUM5QyxDQUFDO0lBRUYsZUFBZTtJQUNmLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFxQixDQUFDO0lBQzlFLFVBQVUsQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQztJQUVyQyxtQkFBbUI7SUFDbkIsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLFFBQVEsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBRTVDLG9CQUFvQjtJQUNwQixVQUFVLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUUvQyxn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