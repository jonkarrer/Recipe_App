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
//Create footer's save button
(_a = document
    .querySelector("footer .save-wrapper")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => showSaveScreen());
function showSaveScreen() {
    //Commit master data to back end
    saveAllData();
    //Show that recipe was saved
    const element = document.querySelector(".save-screen");
    if (element != null)
        element.style.visibility = "visible";
    //Then redirect to home page
    setTimeout(() => window.location.replace("http://127.0.0.1:5500/index.html"), 2300);
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
    console.log(masterData);
}
//Create footer's delete button
(_b = document
    .querySelector("footer .delete-wrapper")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => showDeleteScreen());
function showDeleteScreen() {
    //Show that recipe was saved
    const element = document.querySelector(".delete-screen");
    if (element != null)
        element.style.visibility = "visible";
    //Then redirect to home page
    setTimeout(() => window.location.replace("http://127.0.0.1:5500/index.html"), 2300);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvTmV3X1JlY2lwZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxRQUFRLE1BQU0sZUFBZSxDQUFDO0FBQ3JDLE9BQU8sVUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sTUFBTSxNQUFNLGFBQWEsQ0FBQztBQUNqQyxPQUFPLElBQUksTUFBTSxXQUFXLENBQUM7QUFHN0IsK0RBQStEO0FBQy9ELE1BQU0sUUFBUSxHQUFHLElBQUksUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQzFDLE1BQU0sVUFBVSxHQUFHLElBQUksVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ2hELE1BQU0sTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3BDLE1BQU0sSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRTlCLDZCQUE2QjtBQUM3QixNQUFBLFFBQVE7S0FDTCxhQUFhLENBQUMsc0JBQXNCLENBQUMsMENBQ3BDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0FBQ3RELFNBQVMsY0FBYztJQUNyQixnQ0FBZ0M7SUFDaEMsV0FBVyxFQUFFLENBQUM7SUFFZCw0QkFBNEI7SUFDNUIsTUFBTSxPQUFPLEdBQXVCLFFBQVEsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDM0UsSUFBSSxPQUFPLElBQUksSUFBSTtRQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztJQUUxRCw0QkFBNEI7SUFDNUIsVUFBVSxDQUNSLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLGtDQUFrQyxDQUFDLEVBQ2pFLElBQUksQ0FDTCxDQUFDO0FBQ0osQ0FBQztBQUNELFNBQVMsV0FBVztJQUNsQixZQUFZO0lBQ1osTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFFaEUsSUFBSSxVQUFVLEdBQVksRUFBRSxDQUFDO0lBRTdCLFVBQVUsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQzNCLFVBQVUsQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO0lBQzdCLFVBQVUsQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzlDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ2pELFVBQVUsQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3pDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBRXJDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDMUIsQ0FBQztBQUVELCtCQUErQjtBQUMvQixNQUFBLFFBQVE7S0FDTCxhQUFhLENBQUMsd0JBQXdCLENBQUMsMENBQ3RDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7QUFDeEQsU0FBUyxnQkFBZ0I7SUFDdkIsNEJBQTRCO0lBQzVCLE1BQU0sT0FBTyxHQUF1QixRQUFRLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDN0UsSUFBSSxPQUFPLElBQUksSUFBSTtRQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztJQUUxRCw0QkFBNEI7SUFDNUIsVUFBVSxDQUNSLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLGtDQUFrQyxDQUFDLEVBQ2pFLElBQUksQ0FDTCxDQUFDO0FBQ0osQ0FBQyJ9