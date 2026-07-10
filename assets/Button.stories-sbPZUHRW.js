import{j as n}from"./iframe-BSlgQXjc.js";import{H as o,T as D,B as F}from"./icons-B0NrFHDQ.js";import{B as e}from"./Button-C9ZbTKC8.js";import{b as O,a as q}from"./index-DnWjc-IH.js";import"./preload-helper-Dp1pzeXC.js";import"./bundle-mjs-169JcMJR.js";const{expect:s,within:l}=__STORYBOOK_MODULE_TEST__,Y={title:"Components/Button",component:e,tags:["autodocs"],decorators:t=>n.jsx("div",{className:"storybookContainer",children:n.jsx(t,{})}),argTypes:{children:{name:"text"},color:{control:{type:"select"},options:q},variant:{control:{type:"inline-radio"}},ghostHover:{control:{type:"inline-radio"},if:{arg:"variant",eq:"ghost"}},size:{control:{type:"inline-radio"},options:O},radius:{control:{type:"inline-radio"}},loadingPosition:{control:{type:"inline-radio"}},startIcon:{table:{disable:!0}},endIcon:{table:{disable:!0}},ref:{table:{disable:!0}},as:{table:{disable:!0}}}},c={play:async({canvasElement:t})=>{const r=l(t).getByText("Button");await s(r,"renders").toBeTruthy()},render:({children:t,...a})=>n.jsx(e,{...a,children:t}),args:{children:"Button"}},i={play:async({canvasElement:t})=>{const r=l(t).getAllByRole("button");await s(r).toHaveLength(3),await s(r[1]).toHaveClass("btn-outline"),await s(r[2]).toHaveClass("btn-ghost-none")},render:({children:t,...a})=>n.jsxs(n.Fragment,{children:[n.jsx(e,{...a,children:t}),n.jsx(e,{variant:"outline",...a,children:t}),n.jsx(e,{variant:"ghost",...a,children:t})]}),args:{children:"Button"},argTypes:{variant:{table:{disable:!0}},ghostHover:{table:{disable:!0}}}},u={play:async({canvasElement:t})=>{const r=l(t).getAllByRole("button");await s(r).toHaveLength(4),await s(r[0]).toHaveClass("btn-ghost-none"),await s(r[1]).toHaveClass("btn-ghost-fill"),await s(r[2]).toHaveClass("btn-ghost-outline"),await s(r[3]).toHaveClass("btn-ghost-contrasting")},render:({children:t,...a})=>n.jsxs(n.Fragment,{children:[n.jsx(e,{variant:"ghost",...a,children:t}),n.jsx(e,{variant:"ghost",ghostHover:"fill",...a,children:t}),n.jsx(e,{variant:"ghost",ghostHover:"outline",...a,children:t}),n.jsx(e,{variant:"ghost",ghostHover:"contrasting",...a,children:t})]}),args:{children:"Button"},argTypes:{variant:{table:{disable:!0}},ghostHover:{table:{disable:!0}}}},d={play:async({canvasElement:t})=>{const x=l(t).getAllByText("Button")[0].parentElement;await s(x==null?void 0:x.classList.contains("cursor-not-allowed"),"shows not allowed cursor on hover").toBeTruthy()},render:({children:t,...a})=>n.jsxs(n.Fragment,{children:[n.jsx(e,{disabled:!0,...a,children:t}),n.jsx(e,{loading:!0,...a,children:t})]}),args:{children:"Button"}},b={play:async({canvasElement:t})=>{const a=l(t),r=a.getAllByRole("button");await s(r).toHaveLength(3),await s(a.queryByText("Button",{selector:"button"})).toBeNull()},render:({...t})=>n.jsxs(n.Fragment,{children:[n.jsx(e,{"aria-label":"like",radius:"pill",startIcon:n.jsx(o,{}),...t}),n.jsx(e,{"aria-label":"thumbsup",radius:"none",variant:"outline",startIcon:n.jsx(D,{}),...t}),n.jsx(e,{"aria-label":"bookmark",variant:"ghost",ghostHover:"fill",startIcon:n.jsx(F,{}),...t})]})},B={play:async({canvasElement:t})=>{const r=l(t).getAllByRole("button");await s(r).toHaveLength(10)},render:({children:t,...a})=>n.jsxs(n.Fragment,{children:[n.jsx(e,{color:"main",...a,children:t}),n.jsx(e,{color:"light",...a,children:t}),n.jsx(e,{color:"dark",...a,children:t}),n.jsx(e,{color:"primary",...a,children:t}),n.jsx(e,{color:"secondary",...a,children:t}),n.jsx(e,{color:"accent",...a,children:t}),n.jsx(e,{color:"info",...a,children:t}),n.jsx(e,{color:"success",...a,children:t}),n.jsx(e,{color:"warning",...a,children:t}),n.jsx(e,{color:"error",...a,children:t})]}),args:{children:"Button"},argTypes:{color:{table:{disable:!0}}}},g={render:({...t})=>n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsxs("div",{className:"flex flex-wrap items-end justify-center gap-2",children:[n.jsx(e,{...t,startIcon:n.jsx(o,{}),size:"xs",children:"Button"}),n.jsx(e,{...t,startIcon:n.jsx(o,{}),size:"sm",children:"Button"}),n.jsxs(e,{...t,size:"md",children:[n.jsx(o,{}),"Button"]}),n.jsxs(e,{...t,size:"lg",children:[n.jsx(o,{}),"Button"]}),n.jsxs(e,{...t,size:"xl",children:[n.jsx(o,{}),"Button"]})]}),n.jsxs("div",{className:"flex flex-wrap items-start justify-center gap-2",children:[n.jsx(e,{"aria-label":"like",...t,startIcon:n.jsx(o,{}),size:"xs"}),n.jsx(e,{"aria-label":"like",...t,startIcon:n.jsx(o,{}),size:"sm"}),n.jsx(e,{"aria-label":"like",...t,startIcon:n.jsx(o,{}),size:"md"}),n.jsx(e,{"aria-label":"like",...t,startIcon:n.jsx(o,{}),size:"lg"}),n.jsx(e,{"aria-label":"like",...t,startIcon:n.jsx(o,{}),size:"xl"})]}),n.jsxs("div",{className:"flex w-full items-start justify-center gap-2",children:[n.jsx(e,{...t,className:"btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl",children:"responsive"}),n.jsx(e,{"aria-label":"like",...t,className:"btn-icon-xs sm:btn-icon-sm md:btn-icon-md lg:btn-icon-lg xl:btn-icon-xl",startIcon:n.jsx(o,{})})]})]}),argTypes:{size:{table:{disable:!0}}}};var m,v,p;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(v=c.parameters)==null?void 0:v.docs)==null?void 0:p.source}}};var h,y,j;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole("button");
    await expect(buttons).toHaveLength(3);
    await expect(buttons[1]).toHaveClass("btn-outline");
    await expect(buttons[2]).toHaveClass("btn-ghost-none");
  },
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
      table: {
        disable: true
      }
    },
    ghostHover: {
      table: {
        disable: true
      }
    }
  }
}`,...(j=(y=i.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var w,H,I;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole("button");
    await expect(buttons).toHaveLength(4);
    await expect(buttons[0]).toHaveClass("btn-ghost-none");
    await expect(buttons[1]).toHaveClass("btn-ghost-fill");
    await expect(buttons[2]).toHaveClass("btn-ghost-outline");
    await expect(buttons[3]).toHaveClass("btn-ghost-contrasting");
  },
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
      table: {
        disable: true
      }
    },
    ghostHover: {
      table: {
        disable: true
      }
    }
  }
}`,...(I=(H=u.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var f,z,k;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(k=(z=d.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};var T,E,C;b.parameters={...b.parameters,docs:{...(T=b.parameters)==null?void 0:T.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole("button");
    await expect(buttons).toHaveLength(3);
    await expect(canvas.queryByText("Button", {
      selector: "button"
    })).toBeNull();
  },
  render: ({
    ...rest
  }) => {
    return <>\r
        <Button aria-label="like" radius="pill" startIcon={<HeartIcon />} {...rest}></Button>\r
        <Button aria-label="thumbsup" radius="none" variant="outline" startIcon={<ThumbIcon />} {...rest}></Button>\r
        <Button aria-label="bookmark" variant="ghost" ghostHover="fill" startIcon={<BookmarkIcon />} {...rest}></Button>\r
      </>;
  }
}`,...(C=(E=b.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var N,S,L;B.parameters={...B.parameters,docs:{...(N=B.parameters)==null?void 0:N.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole("button");
    await expect(buttons).toHaveLength(10);
  },
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
      table: {
        disable: true
      }
    }
  }
}`,...(L=(S=B.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};var A,R,_;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
          <Button aria-label="like" {...rest} startIcon={<HeartIcon />} size="xs"></Button>\r
          <Button aria-label="like" {...rest} startIcon={<HeartIcon />} size="sm"></Button>\r
          <Button aria-label="like" {...rest} startIcon={<HeartIcon />} size="md"></Button>\r
          <Button aria-label="like" {...rest} startIcon={<HeartIcon />} size="lg"></Button>\r
          <Button aria-label="like" {...rest} startIcon={<HeartIcon />} size="xl"></Button>\r
        </div>\r
        <div className="flex w-full items-start justify-center gap-2">\r
          <Button {...rest} className="btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">\r
            responsive\r
          </Button>\r
          <Button aria-label="like" {...rest} className="btn-icon-xs sm:btn-icon-sm md:btn-icon-md lg:btn-icon-lg xl:btn-icon-xl" startIcon={<HeartIcon />}></Button>\r
        </div>\r
      </div>;
  },
  argTypes: {
    size: {
      table: {
        disable: true
      }
    }
  }
}`,...(_=(R=g.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};const J=["Default","Variants","Ghost","Disabled","Icon","Colors","Sizes"];export{B as Colors,c as Default,d as Disabled,u as Ghost,b as Icon,g as Sizes,i as Variants,J as __namedExportsOrder,Y as default};
