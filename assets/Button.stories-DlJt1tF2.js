import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{w as k,e as A}from"./index-D_lHLW6D.js";import{B as r,C as s,S as G,M as L}from"./Button-DZMTvQ6D.js";import"./ThemeContext-CzQ_9dh3.js";import"./index-BKyFwriW.js";import"./_commonjsHelpers-CqkleIqs.js";const J={title:"Components/Button",component:r,argTypes:{children:{name:"text"},color:{control:{type:"inline-radio"}},variant:{control:{type:"inline-radio"}},ghostHover:{control:{type:"inline-radio"},if:{arg:"variant",eq:"ghost"}},size:{control:{type:"inline-radio"}},radius:{control:{type:"inline-radio"}},loadingPosition:{control:{type:"inline-radio"}},startIcon:{if:{arg:"false",exists:!0}},endIcon:{if:{arg:"false",exists:!0}},ref:{if:{arg:"false",exists:!0}},as:{if:{arg:"false",exists:!0}},wrapperClasses:{if:{arg:"false",exists:!0}}}},o={play:async({canvasElement:e})=>{const x=k(e).getByText("Button");await A(x,"renders").toBeTruthy()},render:({children:e,...t})=>n.jsx("div",{className:"bg-main flex min-h-100 flex-wrap gap-4 px-10 py-20",children:n.jsx(r,{...t,children:e})}),args:{children:"Button"}},a={render:({children:e,...t})=>n.jsxs("div",{className:"bg-main flex min-h-100 flex-wrap gap-4 px-10 py-20",children:[n.jsx(r,{...t,children:e}),n.jsx(r,{variant:"outline",...t,children:e}),n.jsx(r,{variant:"ghost",...t,children:e})]}),args:{children:"Button"},argTypes:{variant:{if:{arg:"false",eq:"true"}},ghostHover:{if:{arg:"false",eq:"true"}}}},i={render:({children:e,...t})=>n.jsxs("div",{className:"bg-main flex min-h-100 flex-wrap gap-4 px-10 py-20",children:[n.jsx(r,{variant:"ghost",...t,children:e}),n.jsx(r,{variant:"ghost",ghostHover:"fill",...t,children:e}),n.jsx(r,{variant:"ghost",ghostHover:"outline",...t,children:e}),n.jsx(r,{variant:"ghost",ghostHover:"contrasting",...t,children:e})]}),args:{children:"Button"},argTypes:{variant:{if:{arg:"false",eq:"true"}},ghostHover:{if:{arg:"false",eq:"true"}}}},c={play:async({canvasElement:e})=>{const p=k(e).getAllByText("Button")[0].parentElement;await A(p==null?void 0:p.classList.contains("cursor-not-allowed"),"shows not allowed cursor on hover").toBeTruthy()},render:({children:e,...t})=>n.jsxs("div",{className:"bg-main flex min-h-100 gap-4 px-10 py-20",children:[n.jsx(r,{disabled:!0,...t,children:e}),n.jsx(r,{loading:!0,...t,children:e})]}),args:{children:"Button"}},l={render:({...e})=>n.jsxs("div",{className:"bg-main flex min-h-100 flex-wrap gap-10 px-10 py-20",children:[n.jsx(r,{radius:"pill",startIcon:n.jsx(s,{}),...e}),n.jsx(r,{radius:"none",variant:"outline",startIcon:n.jsx(G,{}),...e}),n.jsx(r,{variant:"ghost",ghostHover:"fill",startIcon:n.jsx(L,{}),...e})]})},u={render:({children:e,...t})=>n.jsxs("div",{className:"bg-main flex flex-wrap gap-2 px-10 py-20",children:[n.jsx(r,{color:"main",...t,children:e}),n.jsx(r,{color:"light",...t,children:e}),n.jsx(r,{color:"dark",...t,children:e}),n.jsx(r,{color:"primary",...t,children:e}),n.jsx(r,{color:"secondary",...t,children:e}),n.jsx(r,{color:"accent",...t,children:e}),n.jsx(r,{color:"info",...t,children:e}),n.jsx(r,{color:"success",...t,children:e}),n.jsx(r,{color:"warning",...t,children:e}),n.jsx(r,{color:"error",...t,children:e})]}),args:{children:"Button"}},d={render:({size:e,...t})=>n.jsxs("div",{className:"bg-main flex flex-col gap-2 px-2 py-20",children:[n.jsxs("div",{className:"flex flex-wrap items-end justify-center gap-2",children:[n.jsx(r,{...t,startIcon:n.jsx(s,{}),size:"xs",children:"Button"}),n.jsx(r,{...t,startIcon:n.jsx(s,{}),size:"sm",children:"Button"}),n.jsxs(r,{...t,size:"md",children:[n.jsx(s,{}),"Button"]}),n.jsxs(r,{...t,size:"lg",children:[n.jsx(s,{}),"Button"]}),n.jsxs(r,{...t,size:"xl",children:[n.jsx(s,{}),"Button"]})]}),n.jsxs("div",{className:"flex flex-wrap items-start justify-center gap-2",children:[n.jsx(r,{...t,startIcon:n.jsx(s,{}),size:"xs"}),n.jsx(r,{...t,startIcon:n.jsx(s,{}),size:"sm"}),n.jsx(r,{...t,startIcon:n.jsx(s,{}),size:"md"}),n.jsx(r,{...t,startIcon:n.jsx(s,{}),size:"lg"}),n.jsx(r,{...t,startIcon:n.jsx(s,{}),size:"xl"})]}),n.jsxs("div",{className:"flex w-full items-start justify-center gap-2",children:[n.jsx(r,{...t,className:"btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl",children:"responsive"}),n.jsx(r,{...t,className:"btn-icon-xs sm:btn-icon-sm md:btn-icon-md lg:btn-icon-lg xl:btn-icon-xl",startIcon:n.jsx(s,{})})]})]}),argTypes:{size:{if:{arg:"false",eq:"true"}}}};var m,g,B;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
    return <div className="bg-main flex min-h-100 flex-wrap gap-4 px-10 py-20">\r
        <Button {...rest}>{children}</Button>\r
      </div>;
  },
  args: {
    children: "Button"
  }
}`,...(B=(g=o.parameters)==null?void 0:g.docs)==null?void 0:B.source}}};var f,h,v;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: ({
    children,
    ...rest
  }) => {
    return <div className="bg-main flex min-h-100 flex-wrap gap-4 px-10 py-20">\r
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
}`,...(v=(h=a.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var j,y,b;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: ({
    children,
    ...rest
  }) => {
    return <div className="bg-main flex min-h-100 flex-wrap gap-4 px-10 py-20">\r
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
}`,...(b=(y=i.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var I,w,z;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
    return <div className="bg-main flex min-h-100 gap-4 px-10 py-20">\r
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
}`,...(z=(w=c.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var N,C,T;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: ({
    ...rest
  }) => {
    return <div className="bg-main flex min-h-100 flex-wrap gap-10 px-10 py-20">\r
        <Button radius="pill" startIcon={<ComputerIcon />} {...rest}></Button>\r
        <Button radius="none" variant="outline" startIcon={<SunIcon />} {...rest}></Button>\r
        <Button variant="ghost" ghostHover="fill" startIcon={<MoonIcon />} {...rest}></Button>\r
      </div>;
  }
}`,...(T=(C=l.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var H,S,q;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: ({
    children,
    ...rest
  }) => {
    return <div className="bg-main flex flex-wrap gap-2 px-10 py-20">\r
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
}`,...(q=(S=u.parameters)==null?void 0:S.docs)==null?void 0:q.source}}};var E,D,M;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: ({
    size,
    ...rest
  }) => {
    return <div className="bg-main flex flex-col gap-2 px-2 py-20">\r
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
}`,...(M=(D=d.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};const K=["Default","Variants","Ghost","Disabled","Icon","Colors","Sizes"];export{u as Colors,o as Default,c as Disabled,i as Ghost,l as Icon,d as Sizes,a as Variants,K as __namedExportsOrder,J as default};
