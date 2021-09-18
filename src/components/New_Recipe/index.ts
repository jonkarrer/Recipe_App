import Catagory from "./Catagory.js";
import Ingredient from "./Ingredient.js";
import Method from "./Method.js";
import Note from "./Note.js";

import { ICatagory, IIngredient, INote, IMethod } from "./interfaces.js";

// Pass the DOM id of desired section.

const catagory = new Catagory("catagory");

const ingredient = new Ingredient("ingredient");

const method = new Method("method");

const note = new Note("note");

//Add click event to the save button
document
  .querySelector("footer .save-wrapper")
  ?.addEventListener("click", () => showSaveScreen());

//Add click enent to the delete button
document
  .querySelector("footer .delete-wrapper")
  ?.addEventListener("click", () => showDeleteScreen());

function saveAllData() {
  interface IMaster {
    id?: number;
    name?: string;
    catagories?: Array<ICatagory>;
    ingredients?: Array<IIngredient>;
    methods?: Array<IMethod>;
    notes?: Array<INote>;
  }

  //@ts-ignore
  const recipeName = document.getElementById("recipe_name").value;

  let masterData: IMaster = {};

  masterData.id = Date.now();
  masterData.name = recipeName;
  masterData.catagories = catagory.getAllData();
  masterData.ingredients = ingredient.getAllData();
  masterData.methods = method.getAllData();
  masterData.notes = note.getAllData();

  console.log(masterData);
}

function showSaveScreen() {
  saveAllData();

  //Show that recipe was saved
  // const element: HTMLElement | null = document.querySelector(".save-screen");
  // if (element != null) element.style.visibility = "visible";

  // //Then redirect to home page
  // setTimeout(
  //   () => window.location.replace("http://127.0.0.1:5500/index.html"),
  //   2300
  // );
}

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
