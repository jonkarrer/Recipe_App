class Catagories {
  root: HTMLElement | null;
  constructor(private database: Array<any>) {
    this.root = document.getElementById("catagories");
    this.buildTemplate();
  }

  buildTemplate() {
    this.createCatagories();
  }
  createCatagories() {
    for (const recipe of this.database) {
      const title = document.createElement("p");
      title.innerText = recipe.id;

      this.root?.append(title);
    }
  }
}

window.onload = async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  let db = await response.json();

  new Catagories(db);
};
