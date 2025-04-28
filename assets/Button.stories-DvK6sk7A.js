import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{w as M,e as A}from"./index-D_lHLW6D.js";import{B as r,C as s,S as G,M as L}from"./Button-DoQ_5DKt.js";import"./ThemeContext-CzQ_9dh3.js";import"./index-BKyFwriW.js";import"./_commonjsHelpers-CqkleIqs.js";const J={title:"Components/Button",component:r,tags:["autodocs"],argTypes:{children:{name:"text"},color:{control:{type:"inline-radio"}},variant:{control:{type:"inline-radio"}},ghostHover:{control:{type:"inline-radio"},if:{arg:"variant",eq:"ghost"}},size:{control:{type:"inline-radio"}},radius:{control:{type:"inline-radio"}},loadingPosition:{control:{type:"inline-radio"}},startIcon:{if:{arg:"false",exists:!0}},endIcon:{if:{arg:"false",exists:!0}},ref:{if:{arg:"false",exists:!0}},as:{control:{disable:!0}}}},e={play:async({canvasElement:o})=>{const B=M(o).getByText("Button");await A(B,"renders").toBeTruthy()},render:({children:o,...t})=>n.jsx("div",{className:"storybookContainer",children:n.jsx(r,{...t,children:o})}),args:{children:"Button"}},a={render:({children:o,...t})=>n.jsxs("div",{className:"storybookContainer",children:[n.jsx(r,{...t,children:o}),n.jsx(r,{variant:"outline",...t,children:o}),n.jsx(r,{variant:"ghost",...t,children:o})]}),args:{children:"Button"},argTypes:{variant:{if:{arg:"false",eq:"true"}},ghostHover:{if:{arg:"false",eq:"true"}}}},i={render:({children:o,...t})=>n.jsxs("div",{className:"storybookContainer",children:[n.jsx(r,{variant:"ghost",...t,children:o}),n.jsx(r,{variant:"ghost",ghostHover:"fill",...t,children:o}),n.jsx(r,{variant:"ghost",ghostHover:"outline",...t,children:o}),n.jsx(r,{variant:"ghost",ghostHover:"contrasting",...t,children:o})]}),args:{children:"Button"},argTypes:{variant:{if:{arg:"false",eq:"true"}},ghostHover:{if:{arg:"false",eq:"true"}}}},c={play:async({canvasElement:o})=>{const m=M(o).getAllByText("Button")[0].parentElement;await A(m==null?void 0:m.classList.contains("cursor-not-allowed"),"shows not allowed cursor on hover").toBeTruthy()},render:({children:o,...t})=>n.jsxs("div",{className:"storybookContainer",children:[n.jsx(r,{disabled:!0,...t,children:o}),n.jsx(r,{loading:!0,...t,children:o})]}),args:{children:"Button"}},l={render:({...o})=>n.jsxs("div",{className:"storybookContainer",children:[n.jsx(r,{radius:"pill",startIcon:n.jsx(s,{}),...o}),n.jsx(r,{radius:"none",variant:"outline",startIcon:n.jsx(G,{}),...o}),n.jsx(r,{variant:"ghost",ghostHover:"fill",startIcon:n.jsx(L,{}),...o})]})},u={render:({children:o,...t})=>n.jsxs("div",{className:"storybookContainer",children:[n.jsx(r,{color:"main",...t,children:o}),n.jsx(r,{color:"light",...t,children:o}),n.jsx(r,{color:"dark",...t,children:o}),n.jsx(r,{color:"primary",...t,children:o}),n.jsx(r,{color:"secondary",...t,children:o}),n.jsx(r,{color:"accent",...t,children:o}),n.jsx(r,{color:"info",...t,children:o}),n.jsx(r,{color:"success",...t,children:o}),n.jsx(r,{color:"warning",...t,children:o}),n.jsx(r,{color:"error",...t,children:o})]}),args:{children:"Button"}},d={render:({size:o,...t})=>n.jsxs("div",{className:"storybookContainer",children:[n.jsxs("div",{className:"flex flex-wrap items-end justify-center gap-2",children:[n.jsx(r,{...t,startIcon:n.jsx(s,{}),size:"xs",children:"Button"}),n.jsx(r,{...t,startIcon:n.jsx(s,{}),size:"sm",children:"Button"}),n.jsxs(r,{...t,size:"md",children:[n.jsx(s,{}),"Button"]}),n.jsxs(r,{...t,size:"lg",children:[n.jsx(s,{}),"Button"]}),n.jsxs(r,{...t,size:"xl",children:[n.jsx(s,{}),"Button"]})]}),n.jsxs("div",{className:"flex flex-wrap items-start justify-center gap-2",children:[n.jsx(r,{...t,startIcon:n.jsx(s,{}),size:"xs"}),n.jsx(r,{...t,startIcon:n.jsx(s,{}),size:"sm"}),n.jsx(r,{...t,startIcon:n.jsx(s,{}),size:"md"}),n.jsx(r,{...t,startIcon:n.jsx(s,{}),size:"lg"}),n.jsx(r,{...t,startIcon:n.jsx(s,{}),size:"xl"})]}),n.jsxs("div",{className:"flex w-full items-start justify-center gap-2",children:[n.jsx(r,{...t,className:"btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl",children:"responsive"}),n.jsx(r,{...t,className:"btn-icon-xs sm:btn-icon-sm md:btn-icon-md lg:btn-icon-lg xl:btn-icon-xl",startIcon:n.jsx(s,{})})]})]}),argTypes:{size:{if:{arg:"false",eq:"true"}}}};var x,g,p;e.parameters={...e.parameters,docs:{...(x=e.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
    return <div className="storybookContainer">\r
        <Button {...rest}>{children}</Button>\r
      </div>;
  },
  args: {
    children: "Button"
  }
}`,...(p=(g=e.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var v,h,j;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: ({
    children,
    ...rest
  }) => {
    return <div className="storybookContainer">\r
        <Button {...rest}>{children}</Button>\r
        <Button variant="outline" {...rest}>\r
          {children}\r
        </Button>\r
        <Button variant="ghost" {...rest}>\r
          {children}\r
        </Button>\r
      </div>;
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
}`,...(j=(h=a.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var f,y,b;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: ({
    children,
    ...rest
  }) => {
    return <div className="storybookContainer">\r
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
      </div>;
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
}`,...(b=(y=i.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var I,C,z;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
    return <div className="storybookContainer">\r
        <Button disabled {...rest}>\r
          {children}\r
        </Button>\r
        <Button loading {...rest}>\r
          {children}\r
        </Button>\r
      </div>;
  },
  args: {
    children: "Button"
  }
}`,...(z=(C=c.parameters)==null?void 0:C.docs)==null?void 0:z.source}}};var N,w,k;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: ({
    ...rest
  }) => {
    return <div className="storybookContainer">\r
        <Button radius="pill" startIcon={<ComputerIcon />} {...rest}></Button>\r
        <Button radius="none" variant="outline" startIcon={<SunIcon />} {...rest}></Button>\r
        <Button variant="ghost" ghostHover="fill" startIcon={<MoonIcon />} {...rest}></Button>\r
      </div>;
  }
}`,...(k=(w=l.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var T,H,S;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: ({
    children,
    ...rest
  }) => {
    return <div className="storybookContainer">\r
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
      </div>;
  },
  args: {
    children: "Button"
  }
}`,...(S=(H=u.parameters)==null?void 0:H.docs)==null?void 0:S.source}}};var q,E,D;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: ({
    size,
    ...rest
  }) => {
    return <div className="storybookContainer">\r
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
}`,...(D=(E=d.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};const K=["Default","Variants","Ghost","Disabled","Icon","Colors","Sizes"];export{u as Colors,e as Default,c as Disabled,i as Ghost,l as Icon,d as Sizes,a as Variants,K as __namedExportsOrder,J as default};
