import{u as t,j as r,m as a,n as i}from"./iframe-seTiTV_v.js";import"./preload-helper-PPVm8Dsz.js";const s=`# A react components library\r
\r
A collection of react components built for personal use, but you can use it, or modify it freely. If you find, or especially fix, any issues, please let me know.\r
\r
## How to use\r
\r
Assuming you already have react and tailwind installed, install the package through npm:\r
\r
\`\`\`\r
npm install @barrelrolla/react-components-library\r
\`\`\`\r
\r
In your \`.css\` file add\r
\r
\`\`\`css\r
@import "tailwindcss";\r
@plugin "@barrelrolla/react-components-library/plugin";\r
@source "../node_modules/@barrelrolla/react-components-library/";\r
\`\`\`\r
\r
This adds the tailwind plugin, so you can use the provided components and utilities and the \`@source\` directive is requred to use the pre-built components, otherwise tailwind won't recongnize the classes used in the library and won't build the styles for them.\r
\r
## Customization\r
\r
Everything is built with tailwind so you can just use tailwind classes and utilities to style everything to your liking. To adjust the colors, simply override them like this:\r
\r
\`\`\`css\r
:root {\r
  --color-main: #yourColor;\r
  --color-main-content: #yourColor;\r
  --color-primary: #yourColor;\r
  --color-primary-content: #yourColor;\r
}\r
\`\`\`\r
\r
No need to use \`dark:bg-dark\` just override the colors for dark mode:\r
\r
\`\`\`css\r
.dark {\r
  --color-main: #yourDarkColor;\r
  --color-main-content: #yourDarkColor;\r
  --color-primary: #yourDarkColor;\r
  --color-primary-content: #yourDarkColor;\r
}\r
\`\`\`\r
\r
The library is adjusting the \`l\` value of the \`lch\` colors to lighten or darken components on \`hover:\`. If you want to use a color that's not from the color list, you can assign it to the \`--bg-color\` or \`--fg-color\` variable and retain the hover effects. Or you can provide your own.\r
\r
\`\`\`ts\r
<Button style={{ "--bg-color": "var(--color-red-500)" } as  CSSProperties}>\r
  button\r
</Button>\r
\`\`\`\r
\r
There is also a hover modifier variable \`--mod-highlight\` that's used to adjust the color's \`l\` value. You can modify that value to change the hover effect for all colors, or if a specific color needs adjustment, you can use \`--mod-highlight-primary\` or any other color name you want to override the value for that specific color.\r
\r
For the full documentation, check the storyboard on github pages: [Docs](https://barrelrolla.github.io/react-components-library/) section.\r
`;function e(o){return r.jsxs(r.Fragment,{children:[r.jsx(a,{title:"Intro/Installation"}),`
`,r.jsx(i,{children:s})]})}function u(o={}){const{wrapper:n}={...t(),...o.components};return n?r.jsx(n,{...o,children:r.jsx(e,{...o})}):e()}export{u as default};
