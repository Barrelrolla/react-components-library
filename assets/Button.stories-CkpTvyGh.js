import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{w as D,e as A}from"./index-D_lHLW6D.js";import{H as s,T as G,B as L}from"./icons-B4SbTHPB.js";import{B as r}from"./Button-DUdPKRUv.js";import"./bundle-mjs-CFgYV38x.js";import"./index-BKyFwriW.js";import"./_commonjsHelpers-CqkleIqs.js";const M={title:"Components/Button",component:r,tags:["autodocs"],decorators:t=>n.jsx("div",{className:"storybookContainer",children:n.jsx(t,{})}),argTypes:{children:{name:"text"},color:{control:{type:"select"}},variant:{control:{type:"inline-radio"}},ghostHover:{control:{type:"inline-radio"},if:{arg:"variant",eq:"ghost"}},size:{control:{type:"inline-radio"}},radius:{control:{type:"inline-radio"}},loadingPosition:{control:{type:"inline-radio"}},startIcon:{if:{arg:"false",exists:!0}},endIcon:{if:{arg:"false",exists:!0}},ref:{if:{arg:"false",exists:!0}},as:{control:{disable:!0}}}},o={play:async({canvasElement:t})=>{const B=D(t).getByText("Button");await A(B,"renders").toBeTruthy()},render:({children:t,...e})=>n.jsx(r,{...e,children:t}),args:{children:"Button"}},a={render:({children:t,...e})=>n.jsxs(n.Fragment,{children:[n.jsx(r,{...e,children:t}),n.jsx(r,{variant:"outline",...e,children:t}),n.jsx(r,{variant:"ghost",...e,children:t})]}),args:{children:"Button"},argTypes:{variant:{if:{arg:"false",eq:"true"}},ghostHover:{if:{arg:"false",eq:"true"}}}},c={render:({children:t,...e})=>n.jsxs(n.Fragment,{children:[n.jsx(r,{variant:"ghost",...e,children:t}),n.jsx(r,{variant:"ghost",ghostHover:"fill",...e,children:t}),n.jsx(r,{variant:"ghost",ghostHover:"outline",...e,children:t}),n.jsx(r,{variant:"ghost",ghostHover:"contrasting",...e,children:t})]}),args:{children:"Button"},argTypes:{variant:{if:{arg:"false",eq:"true"}},ghostHover:{if:{arg:"false",eq:"true"}}}},i={play:async({canvasElement:t})=>{const x=D(t).getAllByText("Button")[0].parentElement;await A(x==null?void 0:x.classList.contains("cursor-not-allowed"),"shows not allowed cursor on hover").toBeTruthy()},render:({children:t,...e})=>n.jsxs(n.Fragment,{children:[n.jsx(r,{disabled:!0,...e,children:t}),n.jsx(r,{loading:!0,...e,children:t})]}),args:{children:"Button"}},l={render:({...t})=>n.jsxs(n.Fragment,{children:[n.jsx(r,{radius:"pill",startIcon:n.jsx(s,{}),...t}),n.jsx(r,{radius:"none",variant:"outline",startIcon:n.jsx(G,{}),...t}),n.jsx(r,{variant:"ghost",ghostHover:"fill",startIcon:n.jsx(L,{}),...t})]})},u={render:({children:t,...e})=>n.jsxs(n.Fragment,{children:[n.jsx(r,{color:"main",...e,children:t}),n.jsx(r,{color:"light",...e,children:t}),n.jsx(r,{color:"dark",...e,children:t}),n.jsx(r,{color:"primary",...e,children:t}),n.jsx(r,{color:"secondary",...e,children:t}),n.jsx(r,{color:"accent",...e,children:t}),n.jsx(r,{color:"info",...e,children:t}),n.jsx(r,{color:"success",...e,children:t}),n.jsx(r,{color:"warning",...e,children:t}),n.jsx(r,{color:"error",...e,children:t})]}),args:{children:"Button"},argTypes:{color:{if:{arg:"false",eq:"true"}}}},d={render:({...t})=>n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsxs("div",{className:"flex flex-wrap items-end justify-center gap-2",children:[n.jsx(r,{...t,startIcon:n.jsx(s,{}),size:"xs",children:"Button"}),n.jsx(r,{...t,startIcon:n.jsx(s,{}),size:"sm",children:"Button"}),n.jsxs(r,{...t,size:"md",children:[n.jsx(s,{}),"Button"]}),n.jsxs(r,{...t,size:"lg",children:[n.jsx(s,{}),"Button"]}),n.jsxs(r,{...t,size:"xl",children:[n.jsx(s,{}),"Button"]})]}),n.jsxs("div",{className:"flex flex-wrap items-start justify-center gap-2",children:[n.jsx(r,{...t,startIcon:n.jsx(s,{}),size:"xs"}),n.jsx(r,{...t,startIcon:n.jsx(s,{}),size:"sm"}),n.jsx(r,{...t,startIcon:n.jsx(s,{}),size:"md"}),n.jsx(r,{...t,startIcon:n.jsx(s,{}),size:"lg"}),n.jsx(r,{...t,startIcon:n.jsx(s,{}),size:"xl"})]}),n.jsxs("div",{className:"flex w-full items-start justify-center gap-2",children:[n.jsx(r,{...t,className:"btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl",children:"responsive"}),n.jsx(r,{...t,className:"btn-icon-xs sm:btn-icon-sm md:btn-icon-md lg:btn-icon-lg xl:btn-icon-xl",startIcon:n.jsx(s,{})})]})]}),argTypes:{size:{if:{arg:"false",eq:"true"}}}};var g,m,p;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var h,j,f;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(f=(j=a.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var v,I,y;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(y=(I=c.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};var b,H,z;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(z=(H=i.parameters)==null?void 0:H.docs)==null?void 0:z.source}}};var w,T,q;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: ({
    ...rest
  }) => {
    return <>\r
        <Button radius="pill" startIcon={<HeartIcon />} {...rest}></Button>\r
        <Button radius="none" variant="outline" startIcon={<ThumbIcon />} {...rest}></Button>\r
        <Button variant="ghost" ghostHover="fill" startIcon={<BookmarkIcon />} {...rest}></Button>\r
      </>;
  }
}`,...(q=(T=l.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var N,S,E;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
  },
  argTypes: {
    color: {
      if: {
        arg: "false",
        eq: "true"
      }
    }
  }
}`,...(E=(S=u.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var k,F,C;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: ({
    ...rest
  }) => {
    return <div className="flex flex-col gap-4">\r
        <div className="flex flex-wrap items-end justify-center gap-2">\r
          <Button {...rest} startIcon={<HeartIcon />} size="xs">\r
            Button\r
          </Button>\r
          <Button {...rest} startIcon={<HeartIcon />} size="sm">\r
            Button\r
          </Button>\r
          <Button {...rest} size="md">\r
            <HeartIcon />\r
            Button\r
          </Button>\r
          <Button {...rest} size="lg">\r
            <HeartIcon />\r
            Button\r
          </Button>\r
          <Button {...rest} size="xl">\r
            <HeartIcon />\r
            Button\r
          </Button>\r
        </div>\r
        <div className="flex flex-wrap items-start justify-center gap-2">\r
          <Button {...rest} startIcon={<HeartIcon />} size="xs"></Button>\r
          <Button {...rest} startIcon={<HeartIcon />} size="sm"></Button>\r
          <Button {...rest} startIcon={<HeartIcon />} size="md"></Button>\r
          <Button {...rest} startIcon={<HeartIcon />} size="lg"></Button>\r
          <Button {...rest} startIcon={<HeartIcon />} size="xl"></Button>\r
        </div>\r
        <div className="flex w-full items-start justify-center gap-2">\r
          <Button {...rest} className="btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">\r
            responsive\r
          </Button>\r
          <Button {...rest} className="btn-icon-xs sm:btn-icon-sm md:btn-icon-md lg:btn-icon-lg xl:btn-icon-xl" startIcon={<HeartIcon />}></Button>\r
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
}`,...(C=(F=d.parameters)==null?void 0:F.docs)==null?void 0:C.source}}};const Q=["Default","Variants","Ghost","Disabled","Icon","Colors","Sizes"];export{u as Colors,o as Default,i as Disabled,c as Ghost,l as Icon,d as Sizes,a as Variants,Q as __namedExportsOrder,M as default};
