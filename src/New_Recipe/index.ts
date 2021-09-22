import Catagory from "./Catagory.js";
import Ingredient from "./Ingredient.js";
import Method from "./Method.js";
import Note from "./Note.js";
import { IMaster } from "./interfaces.js";

// Initiate App and Pass the desired DOM id of desired section.
const catagory = new Catagory("catagory");
const ingredient = new Ingredient("ingredient");
const method = new Method("method");
const note = new Note("note");

// Check if user is going for an edit on page load
if (localStorage.getItem("edit-recipe") != null) {
  //Get recipe to edit
  const recipeToEdit = JSON.parse(
    localStorage.getItem("edit-recipe") as string
  );

  //Populate name
  const recipeName = document.getElementById("recipe_name") as HTMLInputElement;
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
} else {
  console.log("storage is empty");
}

//Create save button
document
  .querySelector("footer .save-wrapper")
  ?.addEventListener("click", () => showSaveScreen());

function showSaveScreen() {
  //Check that data exists. Cancels save and alerts user;
  if (preventEmptyDataSubmit() === false) return;

  //Commit master data to back end
  saveAllData();

  //Show that recipe was saved
  const element: HTMLElement | null = document.querySelector(".save-screen");
  if (element != null) element.style.visibility = "visible";

  //Then redirect to home page
  setTimeout(
    () =>
      window.location.replace(
        "http://jonkarrer.github.io/Recipe_App/index.html"
      ),
    2300
  );
}
function preventEmptyDataSubmit() {
  const recipeName = (
    document.getElementById("recipe_name") as HTMLInputElement
  ).value;

  if (recipeName === "") {
    alert("Recipe Name Empty");
    return false;
  } else if (catagory.getAllData().length === 0) {
    alert("Catagory Empty");
    return false;
  } else if (ingredient.getAllData().length === 0) {
    alert("Ingredient Empty");
    return false;
  } else if (method.getAllData().length === 0) {
    alert("Method Empty");
    return false;
  } else {
    return true;
  }
}
function saveAllData() {
  const recipeName = (
    document.getElementById("recipe_name") as HTMLInputElement
  ).value;

  let masterData: IMaster = {};

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

  const recipeHistory = JSON.parse(localStorage.getItem("recipes") as string);

  recipeHistory.push(masterData);
  //Empy edit-recipe key and old data
  localStorage.clear();
  localStorage.setItem("recipes", JSON.stringify(recipeHistory));
}

//Create delete button
document
  .querySelector("footer .delete-wrapper")
  ?.addEventListener("click", () => showDeleteScreen());

function showDeleteScreen() {
  localStorage.removeItem("edit-recipe");
  //Show that recipe was deleted
  const element: HTMLElement | null = document.querySelector(".delete-screen");
  if (element != null) element.style.visibility = "visible";

  //Then redirect to home page
  setTimeout(
    () =>
      window.location.replace(
        "http://jonkarrer.github.io/Recipe_App/index.html"
      ),
    2300
  );
}
