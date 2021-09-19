import { IMaster } from "../New_Recipe/interfaces.js";

const recipeOne: IMaster = {
  id: 1,
  name: "Osso Bucco",
  catagories: [
    { id: 1, catagory: "Vegan" },
    { id: 2, catagory: "Breakfast" },
  ],
  ingredients: [
    { id: 1, name: "Red Wine", amount: "3", unit: "Cups" },
    { id: 1, name: "Garlic", amount: "3", unit: "Tbsp" },
    { id: 1, name: "Onion", amount: "3", unit: "Lb" },
  ],
  methods: [
    { id: 1, method: "Chop dem onions and garlic. Measure wine" },
    { id: 2, method: "Brown onions and garlic, add wine, deglaze" },
    { id: 3, method: "Brown meat and add the onion garlic deglaze to it." },
  ],
  notes: [{ id: 1, note: "Use a fatty cut of meat. Rump or chops" }],
};

const recipeTwo: IMaster = {
  id: 1,
  name: "Cereal",
  catagories: [
    { id: 1, catagory: "Speacial" },
    { id: 2, catagory: "Breakfast" },
  ],
  ingredients: [
    { id: 1, name: "Milk", amount: "3", unit: "Cups" },
    { id: 1, name: "Cheerios", amount: "3", unit: "Tbsp" },
    { id: 1, name: "Banana", amount: "3", unit: "Lb" },
  ],
  methods: [
    { id: 1, method: "Pout cerial first" },
    { id: 2, method: "Add milk" },
  ],
  notes: [{ id: 1, note: "Use a spoon to eat" }],
};

const recipeThree: IMaster = {
  id: 1,
  name: "Pb",
  catagories: [
    { id: 1, catagory: "Speacial" },
    { id: 2, catagory: "Lunch" },
    { id: 3, catagory: "Sandwich" },
  ],
  ingredients: [
    { id: 1, name: "Peanut butter", amount: "3", unit: "cups" },
    { id: 1, name: "Jelly", amount: "3", unit: "Tbsp" },
    { id: 1, name: "Bread", amount: "2", unit: "Slices" },
  ],
  methods: [
    { id: 1, method: "Spead peanut butter on one slice of bread" },
    { id: 2, method: "Spread jelly on other side of bread" },
    {
      id: 3,
      method: "Chop nanners and add them to one side of bread. Combine and eat",
    },
  ],
  notes: [{ id: 1, note: "Use hands to eat" }],
};

export const jasonObj = [recipeOne, recipeTwo, recipeThree];
