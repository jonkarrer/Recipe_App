import { Catagories } from "./Catagories.js";

window.onload = async () => {
  //@ts-ignore
  let db = JSON.parse(localStorage.getItem("recipes"));

  new Catagories(db);
};
