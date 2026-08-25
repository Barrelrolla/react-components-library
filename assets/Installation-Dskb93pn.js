import{u as t,j as r,o as a,p as i}from"./iframe-CUsvQeIR.js";import"./preload-helper-PPVm8Dsz.js";const s=`# React Components Library\r
\r
A collection of React components built for personal projects, free to use, modify, or extend. If you run into issues or have fixes to contribute, feel free to open an issue or pull request!\r
\r
---\r
\r
## Installation\r
\r
Ensure you have **React** and **Tailwind CSS v4** installed, then install the package via npm:\r
\r
\`\`\`bash\r
npm install @barrelrolla/react-components-library\r
\`\`\`\r
\r
---\r
\r
## Setup\r
\r
Add the following directives to your main \`.css\` file:\r
\r
\`\`\`css\r
@import "tailwindcss";\r
@plugin "@barrelrolla/react-components-library/plugin";\r
@source "../node_modules/@barrelrolla/react-components-library/";\r
\`\`\`\r
\r
> **Note:** The \`@source\` directive ensures Tailwind scans the library's pre-built components so its classes are included in your CSS build.\r
\r
---\r
\r
## Customization\r
\r
Since components are built with Tailwind CSS, you can style them using standard Tailwind classes and utilities.\r
\r
### Theme Colors\r
\r
Override CSS custom properties to customize your color palette:\r
\r
\`\`\`css\r
:root {\r
  --color-main: #yourColor;\r
  --color-main-content: #yourColor;\r
  --color-primary: #yourColor;\r
  --color-primary-content: #yourColor;\r
}\r
\r
/* Dark Mode Overrides */\r
.dark {\r
  --color-main: #yourDarkColor;\r
  --color-main-content: #yourDarkColor;\r
  --color-primary: #yourDarkColor;\r
  --color-primary-content: #yourDarkColor;\r
}\r
\`\`\`\r
\r
### Layout & Utility Variables\r
\r
You can also adjust border radii, borders, layout spacing, and animation defaults globally:\r
\r
\`\`\`css\r
:root {\r
  /* Border Radii */\r
  --radius-inputs: 0.25rem; /* Buttons and inputs */\r
  --radius-containers: 0.5rem; /* Cards and container elements */\r
  --radius-navigation: 0.5rem; /* Main navigation and footer */\r
  --radius-infos: 1rem; /* Small elements like badges */\r
\r
  /* Borders */\r
  --border-inputs: 1px; /* Border width for buttons and inputs */\r
  --border-containers: 1px; /* Border width for containers */\r
  --border-navigation: 1px; /* Border width for navbar and footer */\r
  --border-transparency: 50%; /* Transparency for all borders */\r
\r
  /* Layout & Stacking */\r
  --z-navbar: 100; /* Z-index of the main navbar */\r
  --z-floats: 1000; /* Z-index of floating elements */\r
  --max-width: 1440px; /* Content max-width (e.g., Hero component) */\r
  --hero-height: 800px; /* Hero section height (use 100vh for full screen) */\r
\r
  /* Typography & Motion */\r
  --default-font-weight: 300; /* Global font-weight baseline */\r
  --dropdown-animation-duration: 300ms; /* Navbar dropdown animation speed */\r
}\r
\`\`\`\r
\r
### Dynamic Hover States & Custom Colors\r
\r
The library adjusts the lightness (\`l\`) channel of \`lch\` colors to automatically generate hover states.\r
\r
To use an arbitrary color while maintaining dynamic hover effects, pass it via inline CSS variables:\r
\r
\`\`\`tsx\r
<Button style={{ "--bg-color": "var(--color-red-500)" } as CSSProperties}>\r
  button\r
</Button>\r
\`\`\`\r
\r
### Fine-Tuning Hover Intensity\r
\r
Hover adjustments rely on modifier variables. You can adjust hover intensity globally or per color:\r
\r
- **Global adjustment:** Override \`--mod-highlight\`\r
- **Per-color adjustment:** Override \`--mod-highlight-{colorName}\` (e.g., \`--mod-highlight-primary\`)\r
\r
---\r
\r
## Documentation\r
\r
For component previews and full API details, visit the [Storybook Documentation](https://barrelrolla.github.io/react-components-library/).\r
`;function e(n){return r.jsxs(r.Fragment,{children:[r.jsx(a,{title:"Intro/Installation"}),`
`,r.jsx(i,{children:s})]})}function c(n={}){const{wrapper:o}={...t(),...n.components};return o?r.jsx(o,{...n,children:r.jsx(e,{...n})}):e()}export{c as default};
