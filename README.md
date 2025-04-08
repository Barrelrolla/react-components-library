# A react components library for personal use

A collection of react components for personal use.

## How to use

Install using

```
npm install @barrelrolla/react-components-library
```

In your `.css` file add

```css
@import "tailwindcss";
@import "../node_modules/@barrelrolla/react-components-library/dist/index.css";

@custom-variant dark (&:where(.dark, .dark *));
```

You can customize the main colors by using:

```css
@theme {
  --color-primary-600: #4c5c5a;
  --color-secondary-200: #dad6cf;
}
:root {
  --color-primary-600: #4c5c5a;
  --color-secondary-200: #dad6cf;
}
```

First one is necessary for tailwind intellisense, the second one overrides the colors. The library uses most shades 100, 200, 300, 600, 700 and 800 shades so it's advisable to add all. The colors you can use are `primary`, `secondary` and `accent`.

For info about the components, check the [Components](https://github.com/Barrelrolla/react-components-library/tree/main/lib/README.md) section.
