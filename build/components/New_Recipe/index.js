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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9OZXdfUmVjaXBlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLFFBQVEsTUFBTSxlQUFlLENBQUM7QUFDckMsT0FBTyxVQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxNQUFNLE1BQU0sYUFBYSxDQUFDO0FBQ2pDLE9BQU8sSUFBSSxNQUFNLFdBQVcsQ0FBQztBQUc3QiwrREFBK0Q7QUFDL0QsTUFBTSxRQUFRLEdBQUcsSUFBSSxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDMUMsTUFBTSxVQUFVLEdBQUcsSUFBSSxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDaEQsTUFBTSxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDcEMsTUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFFOUIsNkJBQTZCO0FBQzdCLE1BQUEsUUFBUTtLQUNMLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQywwQ0FDcEMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7QUFDdEQsU0FBUyxjQUFjO0lBQ3JCLGdDQUFnQztJQUNoQyxXQUFXLEVBQUUsQ0FBQztJQUVkLDRCQUE0QjtJQUM1QixNQUFNLE9BQU8sR0FBdUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUMzRSxJQUFJLE9BQU8sSUFBSSxJQUFJO1FBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO0lBRTFELDRCQUE0QjtJQUM1QixVQUFVLENBQ1IsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsa0NBQWtDLENBQUMsRUFDakUsSUFBSSxDQUNMLENBQUM7QUFDSixDQUFDO0FBQ0QsU0FBUyxXQUFXO0lBQ2xCLFlBQVk7SUFDWixNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUVoRSxJQUFJLFVBQVUsR0FBWSxFQUFFLENBQUM7SUFFN0IsVUFBVSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDM0IsVUFBVSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7SUFDN0IsVUFBVSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDOUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDakQsVUFBVSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDekMsVUFBVSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFFckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUMxQixDQUFDO0FBRUQsK0JBQStCO0FBQy9CLE1BQUEsUUFBUTtLQUNMLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQywwQ0FDdEMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQztBQUN4RCxTQUFTLGdCQUFnQjtJQUN2Qiw0QkFBNEI7SUFDNUIsTUFBTSxPQUFPLEdBQXVCLFFBQVEsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUM3RSxJQUFJLE9BQU8sSUFBSSxJQUFJO1FBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO0lBRTFELDRCQUE0QjtJQUM1QixVQUFVLENBQ1IsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsa0NBQWtDLENBQUMsRUFDakUsSUFBSSxDQUNMLENBQUM7QUFDSixDQUFDIn0=