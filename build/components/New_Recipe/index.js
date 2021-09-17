var _a, _b;
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
(_a = document
    .querySelector("footer .save-wrapper")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => showSaveScreen());
//Add click enent to the delete button
(_b = document
    .querySelector("footer .delete-wrapper")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => showDeleteScreen());
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
    const element = document.querySelector(".delete-screen");
    if (element != null)
        element.style.visibility = "visible";
    //Then redirect to home page
    setTimeout(() => window.location.replace("http://127.0.0.1:5500/index.html"), 2300);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9OZXdfUmVjaXBlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLFFBQVEsTUFBTSxlQUFlLENBQUM7QUFDckMsT0FBTyxVQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxNQUFNLE1BQU0sYUFBYSxDQUFDO0FBQ2pDLE9BQU8sSUFBSSxNQUFNLFdBQVcsQ0FBQztBQUU3QixzQ0FBc0M7QUFFdEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7QUFFMUMsTUFBTSxVQUFVLEdBQUcsSUFBSSxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7QUFFaEQsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7QUFFckIsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFFakIsb0NBQW9DO0FBQ3BDLE1BQUEsUUFBUTtLQUNMLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQywwQ0FDcEMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7QUFFdEQsc0NBQXNDO0FBQ3RDLE1BQUEsUUFBUTtLQUNMLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQywwQ0FDdEMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQztBQUV4RCxTQUFTLGNBQWM7SUFDckIsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUV4QiwrQkFBK0I7SUFDL0IsOEVBQThFO0lBQzlFLDZEQUE2RDtJQUU3RCwrQkFBK0I7SUFDL0IsY0FBYztJQUNkLHVFQUF1RTtJQUN2RSxTQUFTO0lBQ1QsS0FBSztBQUNQLENBQUM7QUFFRCxTQUFTLGdCQUFnQjtJQUN2Qiw0QkFBNEI7SUFDNUIsTUFBTSxPQUFPLEdBQXVCLFFBQVEsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUM3RSxJQUFJLE9BQU8sSUFBSSxJQUFJO1FBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO0lBRTFELDRCQUE0QjtJQUM1QixVQUFVLENBQ1IsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsa0NBQWtDLENBQUMsRUFDakUsSUFBSSxDQUNMLENBQUM7QUFDSixDQUFDIn0=