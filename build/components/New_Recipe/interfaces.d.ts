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
interface IMaster {
    id?: number;
    name?: string;
    catagories?: Array<ICatagory>;
    ingredients?: Array<IIngredient>;
    methods?: Array<IMethod>;
    notes?: Array<INote>;
}
export { IMethod, INote, IIngredient, ICatagory, IMaster };
