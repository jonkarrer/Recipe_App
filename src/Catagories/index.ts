import { Catagories } from "./Catagories.js";

window.onload = async () => {
  let db = JSON.parse(localStorage.getItem("recipes") as string);

  new Catagories(db);
};
