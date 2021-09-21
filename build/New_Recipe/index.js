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
if (localStorage.getItem("edit-recipe") != null) {
    //Get recipe to edit
    //@ts-ignore
    const recipeToEdit = JSON.parse(localStorage.getItem("edit-recipe"));
    console.log(recipeToEdit);
    //Populate name
    const recipeName = document.getElementById("recipe_name");
    //@ts-ignore
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
//Create footer's save button
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
    //@ts-ignore
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
    //@ts-ignore
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
    //@ts-ignore
    const recipeHistory = JSON.parse(localStorage.getItem("recipes"));
    recipeHistory.push(masterData);
    localStorage.clear();
    localStorage.setItem("recipes", JSON.stringify(recipeHistory));
}
//Create footer's delete button
(_b = document
    .querySelector("footer .delete-wrapper")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => showDeleteScreen());
function showDeleteScreen() {
    localStorage.removeItem("edit-recipe");
    //Show that recipe was saved
    const element = document.querySelector(".delete-screen");
    if (element != null)
        element.style.visibility = "visible";
    //Then redirect to home page
    setTimeout(() => window.location.replace("http://jonkarrer.github.io/Recipe_App/index.html"), 2300);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvTmV3X1JlY2lwZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxRQUFRLE1BQU0sZUFBZSxDQUFDO0FBQ3JDLE9BQU8sVUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sTUFBTSxNQUFNLGFBQWEsQ0FBQztBQUNqQyxPQUFPLElBQUksTUFBTSxXQUFXLENBQUM7QUFHN0IsK0RBQStEO0FBQy9ELE1BQU0sUUFBUSxHQUFHLElBQUksUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQzFDLE1BQU0sVUFBVSxHQUFHLElBQUksVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ2hELE1BQU0sTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3BDLE1BQU0sSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRTlCLElBQUksWUFBWSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLEVBQUU7SUFDL0Msb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUVyRSxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBRTFCLGVBQWU7SUFDZixNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzFELFlBQVk7SUFDWixVQUFVLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUM7SUFFckMsbUJBQW1CO0lBQ25CLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixRQUFRLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUU1QyxvQkFBb0I7SUFDcEIsVUFBVSxD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