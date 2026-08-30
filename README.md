# React Components Library

A collection of React components built for personal projects, free to use, modify, or extend. If you run into issues or have fixes to contribute, feel free to open an issue or pull request!

---

## Installation

Ensure you have **React** and **Tailwind CSS v4** installed, then install the package via npm:

```bash
npm install barrelrolla-ui
```

---

## Setup

Add the following directives to your main `.css` file:

```css
@import "tailwindcss";
@plugin "barrelrolla-ui/plugin";
@source "../node_modules/barrelrolla-ui/";
```

> **Note:** The `@source` directive ensures Tailwind scans the library's pre-built components so its classes are included in your CSS build.

---

## Customization

Since components are built with Tailwind CSS, you can style them using standard Tailwind classes and utilities.

### Theme Colors

Override CSS custom properties to customize your color palette:

```css
:root {
  --color-main: #yourColor;
  --color-main-content: #yourColor;
  --color-primary: #yourColor;
  --color-primary-content: #yourColor;
}

/* Dark Mode Overrides */
.dark {
  --color-main: #yourDarkColor;
  --color-main-content: #yourDarkColor;
  --color-primary: #yourDarkColor;
  --color-primary-content: #yourDarkColor;
}
```

### Layout & Utility Variables

You can also adjust border radii, borders, layout spacing, and animation defaults globally:

```css
:root {
  /* Border Radii */
  --radius-inputs: 0.25rem; /* Buttons and inputs */
  --radius-containers: 0.5rem; /* Cards and container elements */
  --radius-navigation: 0.5rem; /* Main navigation and footer */
  --radius-infos: 1rem; /* Small elements like badges */

  /* Borders */
  --border-inputs: 1px; /* Border width for buttons and inputs */
  --border-containers: 1px; /* Border width for containers */
  --border-navigation: 1px; /* Border width for navbar and footer */
  --border-transparency: 50%; /* Transparency for all borders */

  /* Layout & Stacking */
  --z-navbar: 100; /* Z-index of the main navbar */
  --z-floats: 1000; /* Z-index of floating elements */
  --max-width: 1440px; /* Content max-width (e.g., Hero component) */
  --hero-height: 800px; /* Hero section height (use 100vh for full screen) */

  /* Typography & Motion */
  --default-font-weight: 300; /* Global font-weight baseline */
  --dropdown-animation-duration: 300ms; /* Navbar dropdown animation speed */
}
```

### Dynamic Hover States & Custom Colors

The library adjusts the lightness (`l`) channel of `lch` colors to automatically generate hover states.

To use an arbitrary color while maintaining dynamic hover effects, pass it via inline CSS variables:

```tsx
<Button style={{ "--bg-color": "var(--color-red-500)" } as CSSProperties}>
  button
</Button>
```

### Fine-Tuning Hover Intensity

Hover adjustments rely on modifier variables. You can adjust hover intensity globally or per color:

- **Global adjustment:** Override `--mod-highlight`
- **Per-color adjustment:** Override `--mod-highlight-{colorName}` (e.g., `--mod-highlight-primary`)

---

## Documentation

For component previews and full API details, visit the [Storybook Documentation](https://barrelrolla.github.io/react-components-library/).
