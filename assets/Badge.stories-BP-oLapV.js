import{j as r,r as c}from"./iframe-U_biKzM6.js";import{a as i}from"./index-DttbUWqL.js";import{B as l}from"./Badge-bHFHkX8F.js";import"./preload-helper-PPVm8Dsz.js";import"./cssColorProps-D-Xi89r8.js";import"./bundle-mjs-Ct12j0u0.js";const d=["soft","outline","solid"],{expect:p,within:g}=__STORYBOOK_MODULE_TEST__,B={title:"Components/Badge",tags:["autodocs"],component:l,decorators:a=>r.jsx("div",{className:"storybookContainer",children:r.jsx(a,{})}),argTypes:{children:{name:"text",table:{category:"storybook"}},color:{options:i,control:{type:"select"},table:{category:"controls"}},variant:{table:{category:"controls"}}}},t={play:async({canvasElement:a})=>{const n=g(a).getByText("Badge");await p(n,"renders").toBeTruthy()},render:({children:a,...e})=>r.jsx(l,{...e,children:a}),args:{children:"Badge"}},s={render:({...a})=>r.jsx("div",{className:"flex flex-wrap gap-2",children:d.map(e=>c.createElement(l,{...a,variant:e,key:e},e))}),args:{},argTypes:{variant:{table:{disable:!0}},children:{table:{disable:!0}}}},o={render:({...a})=>r.jsx(r.Fragment,{children:i.map(e=>r.jsx("div",{className:"flex flex-col gap-4",children:d.map(n=>c.createElement(l,{...a,color:e,variant:n,key:`${n}-${e}`},e))},e))}),args:{},argTypes:{variant:{table:{disable:!0}},color:{table:{disable:!0}},children:{table:{disable:!0}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const badge = canvas.getByText("Badge");
    await expect(badge, "renders").toBeTruthy();
  },
  render: ({
    children,
    ...rest
  }) => {
    return <Badge {...rest}>{children}</Badge>;
  },
  args: {
    children: "Badge"
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: ({
    ...rest
  }) => {
    return <div className="flex flex-wrap gap-2">\r
        {availableBadgeVariants.map(variant => <Badge {...rest} variant={variant} key={variant}>\r
            {variant}\r
          </Badge>)}\r
      </div>;
  },
  args: {},
  argTypes: {
    variant: {
      table: {
        disable: true
      }
    },
    children: {
      table: {
        disable: true
      }
    }
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: ({
    ...rest
  }) => {
    return <>\r
        {availableColors.map(color => {
        return <div className="flex flex-col gap-4" key={color}>\r
              {availableBadgeVariants.map(variant => {
            return <Badge {...rest} color={color} variant={variant} key={\`\${variant}-\${color}\`}>\r
                    {color}\r
                  </Badge>;
          })}\r
            </div>;
      })}\r
      </>;
  },
  args: {},
  argTypes: {
    variant: {
      table: {
        disable: true
      }
    },
    color: {
      table: {
        disable: true
      }
    },
    children: {
      table: {
        disable: true
      }
    }
  }
}`,...o.parameters?.docs?.source}}};const h=["Default","Variants","Colors"];export{o as Colors,t as Default,s as Variants,h as __namedExportsOrder,B as default};
