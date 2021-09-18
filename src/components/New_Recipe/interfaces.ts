interface IMethod {
  id: number;
  method: string;
}

interface INote {
  id: number;
  note: string;
}

interface IIngredient {
  id: number;
  name: string;
  amount: string;
  unit: string;
}

interface ICatagory {
  id: number;
  catagory: string | null;
}

export { IMethod, INote, IIngredient, ICatagory };
