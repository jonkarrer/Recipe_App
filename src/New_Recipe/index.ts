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
} else {
  console.log("storage is empty");
}

//Create footer's save button
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
  //@ts-ignore
  const recipeName = document.getElementById("recipe_name").value;

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
  //@ts-ignore
  const recipeName = document.getElementById("recipe_name").value;

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

  //@ts-ignore
  const recipeHistory = JSON.parse(localStorage.getItem("recipes"));

  recipeHistory.push(masterData);
  localStorage.clear();
  localStorage.setItem("recipes", JSON.stringify(recipeHistory));
}

//Create footer's delete button
document
  .querySelector("footer .delete-wrapper")
  ?.addEventListener("click", () => showDeleteScreen());

function showDeleteScreen() {
  localStorage.removeItem("edit-recipe");
  //Show that recipe was saved
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
