# A react components library for personal use

A collection of react components for personal use.

## How to use

Assuming you already have react and tailwind installed, install the package through npm:

```
npm install @barrelrolla/react-components-library
```

Ideally there should be a separate package for the tailwind plugin, but for the moment you have to export it yourself. Create a `plugin.ts` file in the same folder as your `index.css` or wherever you want and add the following in it:

```ts
import { Plugin } from "@barrelrolla/react-components-library";
export default Plugin;
```

In your `.css` file add

```css
@import "tailwindcss";
@plugin "./plugin";
@source "../node_modules/@barrelrolla/react-components-library/";
```

This adds the tailwind plugin, so you can use the provided components and utilities and the `@source` directive is requred to use the pre-built components, otherwise tailwind won't recongnize the classes used in the library and won't build the styles for them.

## Customization

Everything is built with tailwind so you can just use tailwind classes and utilities to style everything to your liking. To adjust the colors, simply override them like this:

```css
:root {
  --color-main: #yourColor;
  --color-main-content: #yourColor;
  --color-primary: #yourColor;
  --color-primary-content: #yourColor;
}
```

No need to use `dark:bg-dark` just override the colors for dark mode:

```css
.dark {
  --color-main: #yourDarkColor;
  --color-main-content: #yourDarkColor;
  --color-primary: #yourDarkColor;
  --color-primary-content: #yourDarkColor;
}
```

The library is adjusting the `l` value of the `lch` colors to lighten or darken components on `hover:`. If you want to use a color that's not from the color list, you can assign it to the `--bg-color` or `--fg-color` variable and retain the hover effects. Or you can provide your own.

```ts
<Button style={{ "--bg-color": "var(--color-red-500)" } as  CSSProperties}>
  button
</Button>
```

There is also a hover modifier variable `--mod-highlight` that's used to adjust the color's `l` value. You can modify that value to change the hover effect for all colors, or if a specific color needs adjustment, you can use `--mod-highlight-primary` or any other color name you want to override the value for that specific color.

For info about the components, check the [Components](https://github.com/Barrelrolla/react-components-library/tree/main/lib/README.md) section.
