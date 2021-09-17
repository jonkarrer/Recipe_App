import Catagory from "./Catagory.js";
import Ingredient from "./Ingredient.js";
import Method from "./Method.js";
import Note from "./Note.js";

// Pass the DOM id of desired section.

const catagory = new Catagory("catagory");

const ingredient = new Ingredient("ingredient");

new Method("method");

new Note("note");

//Add click event to the save button
document
  .querySelector("footer .save-wrapper")
  ?.addEventListener("click", () => showSaveScreen());

//Add click enent to the delete button
document
  .querySelector("footer .delete-wrapper")
  ?.addEventListener("click", () => showDeleteScreen());

function showSaveScreen() {
  catagory.getAllData();
  ingredient.getAllData();

  // //Show that recipe was saved
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
