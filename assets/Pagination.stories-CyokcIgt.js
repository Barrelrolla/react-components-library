import{r as l,j as a}from"./iframe-Bbxhc0td.js";import{P as s}from"./Pagination-BdLsu59G.js";import{a as i}from"./index-DttbUWqL.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-BO93cLlU.js";import"./icons-DfMaXq6z.js";import"./bundle-mjs-Ct12j0u0.js";import"./cssColorProps-D-Xi89r8.js";const{expect:g,within:p}=__STORYBOOK_MODULE_TEST__,C={title:"Components/Pagination",tags:["autodocs"],component:s,decorators:e=>a.jsx("div",{className:"storybookContainer",children:a.jsx(e,{})}),argTypes:{color:{options:i,control:{type:"select"},table:{category:"controls"}},visiblePages:{table:{category:"controls"}},pageCount:{table:{category:"controls"}},currentPage:{control:{disable:!0},table:{category:"docs"}},onPageChange:{control:{disable:!0},table:{category:"docs"}},previousAriaLabel:{control:{disable:!0},table:{category:"docs"}},nextAriaLabel:{control:{disable:!0},table:{category:"docs"}}},args:{visiblePages:7,pageCount:20,previousAriaLabel:"previous",nextAriaLabel:"next"}},r={play:async({canvasElement:e})=>{const t=p(e).getByText(1);await g(t,"renders").toBeTruthy()},render:({...e})=>{const[n,t]=l.useState(1);return a.jsx(s,{...e,currentPage:n,onPageChange:t})}},o={render:({...e})=>{const[n,t]=l.useState(1);return a.jsx(a.Fragment,{children:i.map(c=>a.jsx(s,{color:c,...e,currentPage:n,onPageChange:t},c))})},argTypes:{currentPage:{table:{disable:!0}},onPageChange:{table:{disable:!0}},previousAriaLabel:{table:{disable:!0}},nextAriaLabel:{table:{disable:!0}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const pagination = canvas.getByText(1);
    await expect(pagination, "renders").toBeTruthy();
  },
  render: ({
    ...rest
  }) => {
    const [page, setPage] = useState(1);
    return <Pagination {...rest} currentPage={page} onPageChange={setPage} />;
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: ({
    ...rest
  }) => {
    const [page, setPage] = useState(1);
    return <>\r
        {availableColors.map(color => <Pagination color={color} key={color} {...rest} currentPage={page} onPageChange={setPage} />)}\r
      </>;
  },
  argTypes: {
    currentPage: {
      table: {
        disable: true
      }
    },
    onPageChange: {
      table: {
        disable: true
      }
    },
    previousAriaLabel: {
      table: {
        disable: true
      }
    },
    nextAriaLabel: {
      table: {
        disable: true
      }
    }
  }
}`,...o.parameters?.docs?.source}}};const h=["Default","Colors"];export{o as Colors,r as Default,h as __namedExportsOrder,C as default};
