declare class Catagories {
    private database;
    root: HTMLElement | null;
    constructor(database: Array<any>);
    buildTemplate(): void;
    createCatagories(): void;
}
