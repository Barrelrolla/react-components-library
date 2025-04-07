# A react components library for personal use

A collection of react components for personal use.

## How to use

Install using

```
npm install @barrelrolla/react-components-library
```

In your `.css` file add

```css
@import "../node_modules/@barrelrolla/react-components-library/dist/react-components-library.css";
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));
```

You can customize the main colors by using:

```css
@theme {
  --color-primary-600: #4c5c5a;
  --color-secondary-600: #7e7262;
}
```

The library uses most shades from 50 to 900 so it's advisable to add all. The colors you can use are `primary`, `secondary` and `accent`.

For info about the components, check the [Components](https://github.com/Barrelrolla/react-components-library/tree/main/lib/README.md) section.
