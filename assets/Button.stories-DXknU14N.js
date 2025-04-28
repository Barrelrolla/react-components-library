import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{w as k,e as M}from"./index-D_lHLW6D.js";import{B as r,C as e,S as A,M as G}from"./Button-C02d4wDw.js";import"./ThemeContext-CzQ_9dh3.js";import"./index-BKyFwriW.js";import"./_commonjsHelpers-CqkleIqs.js";const J={title:"Components/Button",component:r,tags:["autodocs"],decorators:s=>n.jsx("div",{className:"storybookContainer",children:n.jsx(s,{})}),argTypes:{children:{name:"text"},color:{control:{type:"select"}},variant:{control:{type:"inline-radio"}},ghostHover:{control:{type:"inline-radio"},if:{arg:"variant",eq:"ghost"}},size:{control:{type:"inline-radio"}},radius:{control:{type:"inline-radio"}},loadingPosition:{control:{type:"inline-radio"}},startIcon:{if:{arg:"false",exists:!0}},endIcon:{if:{arg:"false",exists:!0}},ref:{if:{arg:"false",exists:!0}},as:{control:{disable:!0}}}},o={play:async({canvasElement:s})=>{const x=k(s).getByText("Button");await M(x,"renders").toBeTruthy()},render:({children:s,...t})=>n.jsx(r,{...t,children:s}),args:{children:"Button"}},a={render:({children:s,...t})=>n.jsxs(n.Fragment,{children:[n.jsx(r,{...t,children:s}),n.jsx(r,{variant:"outline",...t,children:s}),n.jsx(r,{variant:"ghost",...t,children:s})]}),args:{children:"Button"},argTypes:{variant:{if:{arg:"false",eq:"true"}},ghostHover:{if:{arg:"false",eq:"true"}}}},c={render:({children:s,...t})=>n.jsxs(n.Fragment,{children:[n.jsx(r,{variant:"ghost",...t,children:s}),n.jsx(r,{variant:"ghost",ghostHover:"fill",...t,children:s}),n.jsx(r,{variant:"ghost",ghostHover:"outline",...t,children:s}),n.jsx(r,{variant:"ghost",ghostHover:"contrasting",...t,children:s})]}),args:{children:"Button"},argTypes:{variant:{if:{arg:"false",eq:"true"}},ghostHover:{if:{arg:"false",eq:"true"}}}},i={play:async({canvasElement:s})=>{const m=k(s).getAllByText("Button")[0].parentElement;await M(m==null?void 0:m.classList.contains("cursor-not-allowed"),"shows not allowed cursor on hover").toBeTruthy()},render:({children:s,...t})=>n.jsxs(n.Fragment,{children:[n.jsx(r,{disabled:!0,...t,children:s}),n.jsx(r,{loading:!0,...t,children:s})]}),args:{children:"Button"}},l={render:({...s})=>n.jsxs(n.Fragment,{children:[n.jsx(r,{radius:"pill",startIcon:n.jsx(e,{}),...s}),n.jsx(r,{radius:"none",variant:"outline",startIcon:n.jsx(A,{}),...s}),n.jsx(r,{variant:"ghost",ghostHover:"fill",startIcon:n.jsx(G,{}),...s})]})},u={render:({children:s,...t})=>n.jsxs(n.Fragment,{children:[n.jsx(r,{color:"main",...t,children:s}),n.jsx(r,{color:"light",...t,children:s}),n.jsx(r,{color:"dark",...t,children:s}),n.jsx(r,{color:"primary",...t,children:s}),n.jsx(r,{color:"secondary",...t,children:s}),n.jsx(r,{color:"accent",...t,children:s}),n.jsx(r,{color:"info",...t,children:s}),n.jsx(r,{color:"success",...t,children:s}),n.jsx(r,{color:"warning",...t,children:s}),n.jsx(r,{color:"error",...t,children:s})]}),args:{children:"Button"}},d={render:({size:s,...t})=>n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsxs("div",{className:"flex flex-wrap items-end justify-center gap-2",children:[n.jsx(r,{...t,startIcon:n.jsx(e,{}),size:"xs",children:"Button"}),n.jsx(r,{...t,startIcon:n.jsx(e,{}),size:"sm",children:"Button"}),n.jsxs(r,{...t,size:"md",children:[n.jsx(e,{}),"Button"]}),n.jsxs(r,{...t,size:"lg",children:[n.jsx(e,{}),"Button"]}),n.jsxs(r,{...t,size:"xl",children:[n.jsx(e,{}),"Button"]})]}),n.jsxs("div",{className:"flex flex-wrap items-start justify-center gap-2",children:[n.jsx(r,{...t,startIcon:n.jsx(e,{}),size:"xs"}),n.jsx(r,{...t,startIcon:n.jsx(e,{}),size:"sm"}),n.jsx(r,{...t,startIcon:n.jsx(e,{}),size:"md"}),n.jsx(r,{...t,startIcon:n.jsx(e,{}),size:"lg"}),n.jsx(r,{...t,startIcon:n.jsx(e,{}),size:"xl"})]}),n.jsxs("div",{className:"flex w-full items-start justify-center gap-2",children:[n.jsx(r,{...t,className:"btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl",children:"responsive"}),n.jsx(r,{...t,className:"btn-icon-xs sm:btn-icon-sm md:btn-icon-md lg:btn-icon-lg xl:btn-icon-xl",startIcon:n.jsx(e,{})})]})]}),argTypes:{size:{if:{arg:"false",eq:"true"}}}};var B,g,p;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText("Button");
    await expect(button, "renders").toBeTruthy();
  },
  render: ({
    children,
    ...rest
  }) => {
    return <Button {...rest}>{children}</Button>;
  },
  args: {
    children: "Button"
  }
}`,...(p=(g=o.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var h,j,v;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: ({
    children,
    ...rest
  }) => {
    return <>\r
        <Button {...rest}>{children}</Button>\r
        <Button variant="outline" {...rest}>\r
          {children}\r
        </Button>\r
        <Button variant="ghost" {...rest}>\r
          {children}\r
        </Button>\r
      </>;
  },
  args: {
    children: "Button"
  },
  argTypes: {
    variant: {
      if: {
        arg: "false",
        eq: "true"
      }
    },
    ghostHover: {
      if: {
        arg: "false",
        eq: "true"
      }
    }
  }
}`,...(v=(j=a.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var f,I,y;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: ({
    children,
    ...rest
  }) => {
    return <>\r
        <Button variant="ghost" {...rest}>\r
          {children}\r
        </Button>\r
        <Button variant="ghost" ghostHover="fill" {...rest}>\r
          {children}\r
        </Button>\r
        <Button variant="ghost" ghostHover="outline" {...rest}>\r
          {children}\r
        </Button>\r
        <Button variant="ghost" ghostHover="contrasting" {...rest}>\r
          {children}\r
        </Button>\r
      </>;
  },
  args: {
    children: "Button"
  },
  argTypes: {
    variant: {
      if: {
        arg: "false",
        eq: "true"
      }
    },
    ghostHover: {
      if: {
        arg: "false",
        eq: "true"
      }
    }
  }
}`,...(y=(I=c.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};var b,z,w;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getAllByText("Button")[0];
    const wrapper = button.parentElement;
    await expect(wrapper?.classList.contains("cursor-not-allowed"), "shows not allowed cursor on hover").toBeTruthy();
  },
  render: ({
    children,
    ...rest
  }) => {
    return <>\r
        <Button disabled {...rest}>\r
          {children}\r
        </Button>\r
        <Button loading {...rest}>\r
          {children}\r
        </Button>\r
      </>;
  },
  args: {
    children: "Button"
  }
}`,...(w=(z=i.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};var C,T,H;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: ({
    ...rest
  }) => {
    return <>\r
        <Button radius="pill" startIcon={<ComputerIcon />} {...rest}></Button>\r
        <Button radius="none" variant="outline" startIcon={<SunIcon />} {...rest}></Button>\r
        <Button variant="ghost" ghostHover="fill" startIcon={<MoonIcon />} {...rest}></Button>\r
      </>;
  }
}`,...(H=(T=l.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};var N,S,q;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: ({
    children,
    ...rest
  }) => {
    return <>\r
        <Button color="main" {...rest}>\r
          {children}\r
        </Button>\r
        <Button color="light" {...rest}>\r
          {children}\r
        </Button>\r
        <Button color="dark" {...rest}>\r
          {children}\r
        </Button>\r
        <Button color="primary" {...rest}>\r
          {children}\r
        </Button>\r
        <Button color="secondary" {...rest}>\r
          {children}\r
        </Button>\r
        <Button color="accent" {...rest}>\r
          {children}\r
        </Button>\r
        <Button color="info" {...rest}>\r
          {children}\r
        </Button>\r
        <Button color="success" {...rest}>\r
          {children}\r
        </Button>\r
        <Button color="warning" {...rest}>\r
          {children}\r
        </Button>\r
        <Button color="error" {...rest}>\r
          {children}\r
        </Button>\r
      </>;
  },
  args: {
    children: "Button"
  }
}`,...(q=(S=u.parameters)==null?void 0:S.docs)==null?void 0:q.source}}};var E,F,D;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: ({
    size,
    ...rest
  }) => {
    return <div className="flex flex-col gap-4">\r
        <div className="flex flex-wrap items-end justify-center gap-2">\r
          <Button {...rest} startIcon={<ComputerIcon />} size="xs">\r
            Button\r
          </Button>\r
          <Button {...rest} startIcon={<ComputerIcon />} size="sm">\r
            Button\r
          </Button>\r
          <Button {...rest} size="md">\r
            <ComputerIcon />\r
            Button\r
          </Button>\r
          <Button {...rest} size="lg">\r
            <ComputerIcon />\r
            Button\r
          </Button>\r
          <Button {...rest} size="xl">\r
            <ComputerIcon />\r
            Button\r
          </Button>\r
        </div>\r
        <div className="flex flex-wrap items-start justify-center gap-2">\r
          <Button {...rest} startIcon={<ComputerIcon />} size="xs"></Button>\r
          <Button {...rest} startIcon={<ComputerIcon />} size="sm"></Button>\r
          <Button {...rest} startIcon={<ComputerIcon />} size="md"></Button>\r
          <Button {...rest} startIcon={<ComputerIcon />} size="lg"></Button>\r
          <Button {...rest} startIcon={<ComputerIcon />} size="xl"></Button>\r
        </div>\r
        <div className="flex w-full items-start justify-center gap-2">\r
          <Button {...rest} className="btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">\r
            responsive\r
          </Button>\r
          <Button {...rest} className="btn-icon-xs sm:btn-icon-sm md:btn-icon-md lg:btn-icon-lg xl:btn-icon-xl" startIcon={<ComputerIcon />}></Button>\r
        </div>\r
      </div>;
  },
  argTypes: {
    size: {
      if: {
        arg: "false",
        eq: "true"
      }
    }
  }
}`,...(D=(F=d.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};const K=["Default","Variants","Ghost","Disabled","Icon","Colors","Sizes"];export{u as Colors,o as Default,i as Disabled,c as Ghost,l as Icon,d as Sizes,a as Variants,K as __namedExportsOrder,J as default};
