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
    setTimeout(() => window.location.replace("http://jonkarrer.github.io/Recipe_App/index.html"), 2300);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvTmV3X1JlY2lwZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxRQUFRLE1BQU0sZUFBZSxDQUFDO0FBQ3JDLE9BQU8sVUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sTUFBTSxNQUFNLGFBQWEsQ0FBQztBQUNqQyxPQUFPLElBQUksTUFBTSxXQUFXLENBQUM7QUFHN0IsK0RBQStEO0FBQy9ELE1BQU0sUUFBUSxHQUFHLElBQUksUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQzFDLE1BQU0sVUFBVSxHQUFHLElBQUksVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ2hELE1BQU0sTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3BDLE1BQU0sSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRTlCLDZCQUE2QjtBQUM3QixNQUFBLFFBQVE7S0FDTCxhQUFhLENBQUMsc0JBQXNCLENBQUMsMENBQ3BDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0FBRXRELFNBQVMsY0FBYztJQUNyQix1REFBdUQ7SUFDdkQsSUFBSSxzQkFBc0IsRUFBRSxLQUFLLEtBQUs7UUFBRSxPQUFPO0lBRS9DLGdDQUFnQztJQUNoQyxXQUFXLEVBQUUsQ0FBQztJQUVkLDRCQUE0QjtJQUM1QixNQUFNLE9BQU8sR0FBdUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUMzRSxJQUFJLE9BQU8sSUFBSSxJQUFJO1FBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO0lBRTFELDRCQUE0QjtJQUM1QixVQUFVLENBQ1IsR0FBRyxFQUFFLENBQ0gsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQ3JCLGtEQUFrRCxDQUNuRCxFQUNILElBQUksQ0FDTCxDQUFDO0FBQ0osQ0FBQztBQUVELFNBQVMsc0JBQXNCO0lBQzdCLFlBQVk7SUFDWixNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUVoRSxJQUFJLFVBQVUsS0FBSyxFQUFFLEVBQUU7UUFDckIsS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDM0IsT0FBTyxLQUFLLENBQUM7S0FDZDtTQUFNLElBQUksUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDN0MsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDeEIsT0FBTyxLQUFLLENBQUM7S0FDZDtTQUFNLElBQUksVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDL0MsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDMUIsT0FBTyxLQUFLLENBQUM7S0FDZDtTQUFNLElBQUksTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDM0MsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3RCLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7U0FBTTtRQUNMLE9BQU8sSUFBSSxDQUFDO0tBQ2I7QUFDSCxDQUFDO0FBRUQsU0FBUyxXQUFXO0lBQ2xCLFlBQVk7SUFDWixNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUVoRSxJQUFJLFVBQVUsR0FBWSxFQUFFLENBQUM7SUFFN0IsVUFBVSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDM0IsVUFBVSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7SUFDN0IsVUFBVSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDOUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDakQsVUFBVSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDekMsVUFBVSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFFckMsSUFBSSxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLElBQUksRUFBRTtRQUM1QyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlELE9BQU87S0FDUjtJQUVELFlBQVk7SUFDWixNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUVsRSxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQy9CLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUVyQixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBRTNCLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztBQUNqRSxDQUFDO0FBRUQsK0JBQStCO0FBQy9CLE1BQUEsUUFBUTtLQUNMLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQywwQ0FDdEMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQztBQUN4RCxTQUFTLGdCQUFnQjtJQUN2Qiw0QkFBNEI7SUFDNUIsTUFBTSxPQUFPLEdBQXVCLFFBQVEsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUM3RSxJQUFJLE9BQU8sSUFBSSxJQUFJO1FBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO0lBRTFELDRCQUE0QjtJQUM1QixVQUFVLENBQ1IsR0FBRyxFQUFFLENBQ0gsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQ3JCLGtEQUFrRCxDQUNuRCxFQUNILElBQUksQ0FDTCxDQUFDO0FBQ0osQ0FBQyJ9