# A react components library for personal use

A collection of react components for personal use.

## How to use

Install using

```
npm install @barrelrolla/react-components-library
```

In your `.css` file add

```css
@layer theme, base, components, utilities;
@import "tailwindcss/preflight.css" layer(base);
@import "tailwindcss/utilities.css" layer(utilities);
@import "../node_modules/@barrelrolla/react-components-library/dist/index.css";
@import "tailwindcss/theme.css" layer(theme);

@custom-variant dark (&:where(.dark, .dark *));
```

We're splitting the tailwind layers, because the preflight overrides some of our classes and we have to import our styles after tailwind, and importing the theme after our styles allows for easy overriding of the colors like this:

```css
@theme {
  --color-primary-600: #4c5c5a;
  --color-secondary-200: #dad6cf;
}
```

The library uses shades between 50 and 950 so it's advisable to add all. The colors you can override are `primary`, `secondary` and `accent`.

For info about the components, check the [Components](https://github.com/Barrelrolla/react-components-library/tree/main/lib/README.md) section.
