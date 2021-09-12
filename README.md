# My Recipe App

This is a minimalistic recipe app that I would like to use in my daily life.

## Code Documentation

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
    let header: any = this.header?.style;

    header.width = "100vw";
    header.height = "100vh";
    //.......
  }

  closeHeader(e: Event) {
    e.stopPropagation();

    let header: any = this.header?.style;

    header.width = "var(--width)";
    header.height = "var(--height)";
    //.......
  }
```
