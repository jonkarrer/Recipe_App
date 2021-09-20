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

//Create footer's save button
document
  .querySelector("footer .save-wrapper")
  ?.addEventListener("click", () => showSaveScreen());
function showSaveScreen() {
  //Commit master data to back end
  saveAllData();

  // //Show that recipe was saved
  // const element: HTMLElement | null = document.querySelector(".save-screen");
  // if (element != null) element.style.visibility = "visible";

  // //Then redirect to home page
  // setTimeout(
  //   () => window.location.replace("http://127.0.0.1:5500/index.html"),
  //   2300
  // );
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

  console.log(recipeHistory);

  localStorage.setItem("recipes", JSON.stringify(recipeHistory));
}

//Create footer's delete button
document
  .querySelector("footer .delete-wrapper")
  ?.addEventListener("click", () => showDeleteScreen());
function showDeleteScreen() {
  //Show that recipe was saved
  const element: HTMLElement | null = document.querySelector(".delete-screen");
  if (element != null) element.style.visibility = "visible";

  //Then redirect to home page
  setTimeout(
    () => window.location.replace("http://127.0.0.1:5500/index.html"),
    2300
  );
}
