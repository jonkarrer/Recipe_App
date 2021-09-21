# My Recipe App

This is a minimalistic recipe app that I would like to use in my daily life.

## Code Snippets

1. HEADER OPENING ANIMATION

- I used JS to reset the height and width back to normal by calling the CSS variables

```CSS
.header {
  --width: 65px;
  --height: 65px;

  width: var(--width);
  height: var(--height);
}
```

```typescript
openHeader() {
    let header = this.header?.style;

    if (header != undefined) {
      header.width = "100vw";
      header.height = "100vh";
      header.borderRadius = "0px";
      header.margin = "0";
    } else {
      console.log("Header not defined");
    }
    //.......
  }

  closeHeader(e: Event) {
    e.stopPropagation();

    let header = this.header?.style;

    if (header != undefined) {
      header.width = "var(--width)";
      header.height = "var(--height)";
      header.borderRadius = "50%";
      header.margin = "20px 30px";
    } else {
      console.log("Header not defined");
    }
    //.......
  }
```
