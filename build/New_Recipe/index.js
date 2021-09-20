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
    console.log(recipeHistory);
    localStorage.setItem("recipes", JSON.stringify(recipeHistory));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvTmV3X1JlY2lwZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxRQUFRLE1BQU0sZUFBZSxDQUFDO0FBQ3JDLE9BQU8sVUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sTUFBTSxNQUFNLGFBQWEsQ0FBQztBQUNqQyxPQUFPLElBQUksTUFBTSxXQUFXLENBQUM7QUFHN0IsK0RBQStEO0FBQy9ELE1BQU0sUUFBUSxHQUFHLElBQUksUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQzFDLE1BQU0sVUFBVSxHQUFHLElBQUksVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ2hELE1BQU0sTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3BDLE1BQU0sSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRTlCLDZCQUE2QjtBQUM3QixNQUFBLFFBQVE7S0FDTCxhQUFhLENBQUMsc0JBQXNCLENBQUMsMENBQ3BDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0FBQ3RELFNBQVMsY0FBYztJQUNyQixnQ0FBZ0M7SUFDaEMsV0FBVyxFQUFFLENBQUM7SUFFZCwrQkFBK0I7SUFDL0IsOEVBQThFO0lBQzlFLDZEQUE2RDtJQUU3RCwrQkFBK0I7SUFDL0IsY0FBYztJQUNkLHVFQUF1RTtJQUN2RSxTQUFTO0lBQ1QsS0FBSztBQUNQLENBQUM7QUFDRCxTQUFTLFdBQVc7SUFDbEIsWUFBWTtJQUNaLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSyxDQUFDO0lBRWhFLElBQUksVUFBVSxHQUFZLEVBQUUsQ0FBQztJQUU3QixVQUFVLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUMzQixVQUFVLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztJQUM3QixVQUFVLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM5QyxVQUFVLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNqRCxVQUFVLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN6QyxVQUFVLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUVyQyxJQUFJLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssSUFBSSxFQUFFO1FBQzVDLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUQsT0FBTztLQUNSO0lBRUQsWUFBWTtJQUNaLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBRWxFLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDL0IsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBRXJCLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7SUFFM0IsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0FBQ2pFLENBQUM7QUFFRCwrQkFBK0I7QUFDL0IsTUFBQSxRQUFRO0tBQ0wsYUFBYSxDQUFDLHdCQUF3QixDQUFDLDBDQUN0QyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO0FBQ3hELFNBQVMsZ0JBQWdCO0lBQ3ZCLDRCQUE0QjtJQUM1QixNQUFNLE9BQU8sR0FBdUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzdFLElBQUksT0FBTyxJQUFJLElBQUk7UUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7SUFFMUQsNEJBQTRCO0lBQzVCLFVBQVUsQ0FDUixHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxrQ0FBa0MsQ0FBQyxFQUNqRSxJQUFJLENBQ0wsQ0FBQztBQUNKLENBQUMifQ==