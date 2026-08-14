import{j as n}from"./iframe-DQouAEEm.js";import{S as s}from"./Skeleton-8mdyUZcA.js";import"./preload-helper-PPVm8Dsz.js";import"./bundle-mjs-Ct12j0u0.js";const{expect:o,within:r}=__STORYBOOK_MODULE_TEST__,p={title:"Components/Skeleton",tags:["autodocs"],component:s,decorators:e=>n.jsx("div",{className:"storybookContainer",children:n.jsx(e,{})}),argTypes:{}},t={play:async({canvasElement:e})=>{const a=r(e).getByTestId("Skeleton");await o(a,"renders").toBeTruthy()},render:({...e})=>n.jsx(s,{"data-testid":"Skeleton",className:"h-8 w-60",...e}),args:{}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const skeleton = canvas.getByTestId("Skeleton");
    await expect(skeleton, "renders").toBeTruthy();
  },
  render: ({
    ...rest
  }) => {
    return <Skeleton data-testid="Skeleton" className="h-8 w-60" {...rest} />;
  },
  args: {}
}`,...t.parameters?.docs?.source}}};const u=["Default"];export{t as Default,u as __namedExportsOrder,p as default};
