import{j as n}from"./iframe-MBsWu6_L.js";import{H as o,T as _,B as D}from"./icons-DIUpUHpZ.js";import{B as r}from"./Button-BaZVx-ha.js";import"./preload-helper-Dp1pzeXC.js";import"./bundle-mjs-169JcMJR.js";const{expect:s,within:l}=__STORYBOOK_MODULE_TEST__,M={title:"Components/Button",component:r,tags:["autodocs"],decorators:t=>n.jsx("div",{className:"storybookContainer",children:n.jsx(t,{})}),argTypes:{children:{name:"text"},color:{control:{type:"select"}},variant:{control:{type:"inline-radio"}},ghostHover:{control:{type:"inline-radio"},if:{arg:"variant",eq:"ghost"}},size:{control:{type:"inline-radio"}},radius:{control:{type:"inline-radio"}},loadingPosition:{control:{type:"inline-radio"}},startIcon:{if:{arg:"false",exists:!0}},endIcon:{if:{arg:"false",exists:!0}},ref:{if:{arg:"false",exists:!0}},as:{control:{disable:!0}}}},c={play:async({canvasElement:t})=>{const a=l(t).getByText("Button");await s(a,"renders").toBeTruthy()},render:({children:t,...e})=>n.jsx(r,{...e,children:t}),args:{children:"Button"}},i={play:async({canvasElement:t})=>{const a=l(t).getAllByRole("button");await s(a).toHaveLength(3),await s(a[1]).toHaveClass("btn-outline"),await s(a[2]).toHaveClass("btn-ghost-none")},render:({children:t,...e})=>n.jsxs(n.Fragment,{children:[n.jsx(r,{...e,children:t}),n.jsx(r,{variant:"outline",...e,children:t}),n.jsx(r,{variant:"ghost",...e,children:t})]}),args:{children:"Button"},argTypes:{variant:{if:{arg:"false",eq:"true"}},ghostHover:{if:{arg:"false",eq:"true"}}}},u={play:async({canvasElement:t})=>{const a=l(t).getAllByRole("button");await s(a).toHaveLength(4),await s(a[0]).toHaveClass("btn-ghost-none"),await s(a[1]).toHaveClass("btn-ghost-fill"),await s(a[2]).toHaveClass("btn-ghost-outline"),await s(a[3]).toHaveClass("btn-ghost-contrasting")},render:({children:t,...e})=>n.jsxs(n.Fragment,{children:[n.jsx(r,{variant:"ghost",...e,children:t}),n.jsx(r,{variant:"ghost",ghostHover:"fill",...e,children:t}),n.jsx(r,{variant:"ghost",ghostHover:"outline",...e,children:t}),n.jsx(r,{variant:"ghost",ghostHover:"contrasting",...e,children:t})]}),args:{children:"Button"},argTypes:{variant:{if:{arg:"false",eq:"true"}},ghostHover:{if:{arg:"false",eq:"true"}}}},d={play:async({canvasElement:t})=>{const m=l(t).getAllByText("Button")[0].parentElement;await s(m==null?void 0:m.classList.contains("cursor-not-allowed"),"shows not allowed cursor on hover").toBeTruthy()},render:({children:t,...e})=>n.jsxs(n.Fragment,{children:[n.jsx(r,{disabled:!0,...e,children:t}),n.jsx(r,{loading:!0,...e,children:t})]}),args:{children:"Button"}},g={play:async({canvasElement:t})=>{const e=l(t),a=e.getAllByRole("button");await s(a).toHaveLength(3),await s(e.queryByText("Button",{selector:"button"})).toBeNull()},render:({...t})=>n.jsxs(n.Fragment,{children:[n.jsx(r,{"aria-label":"like",radius:"pill",startIcon:n.jsx(o,{}),...t}),n.jsx(r,{"aria-label":"thumbsup",radius:"none",variant:"outline",startIcon:n.jsx(_,{}),...t}),n.jsx(r,{"aria-label":"bookmark",variant:"ghost",ghostHover:"fill",startIcon:n.jsx(D,{}),...t})]})},B={play:async({canvasElement:t})=>{const a=l(t).getAllByRole("button");await s(a).toHaveLength(10)},render:({children:t,...e})=>n.jsxs(n.Fragment,{children:[n.jsx(r,{color:"main",...e,children:t}),n.jsx(r,{color:"light",...e,children:t}),n.jsx(r,{color:"dark",...e,children:t}),n.jsx(r,{color:"primary",...e,children:t}),n.jsx(r,{color:"secondary",...e,children:t}),n.jsx(r,{color:"accent",...e,children:t}),n.jsx(r,{color:"info",...e,children:t}),n.jsx(r,{color:"success",...e,children:t}),n.jsx(r,{color:"warning",...e,children:t}),n.jsx(r,{color:"error",...e,children:t})]}),args:{children:"Button"},argTypes:{color:{if:{arg:"false",eq:"true"}}}},x={render:({...t})=>n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsxs("div",{className:"flex flex-wrap items-end justify-center gap-2",children:[n.jsx(r,{...t,startIcon:n.jsx(o,{}),size:"xs",children:"Button"}),n.jsx(r,{...t,startIcon:n.jsx(o,{}),size:"sm",children:"Button"}),n.jsxs(r,{...t,size:"md",children:[n.jsx(o,{}),"Button"]}),n.jsxs(r,{...t,size:"lg",children:[n.jsx(o,{}),"Button"]}),n.jsxs(r,{...t,size:"xl",children:[n.jsx(o,{}),"Button"]})]}),n.jsxs("div",{className:"flex flex-wrap items-start justify-center gap-2",children:[n.jsx(r,{"aria-label":"like",...t,startIcon:n.jsx(o,{}),size:"xs"}),n.jsx(r,{"aria-label":"like",...t,startIcon:n.jsx(o,{}),size:"sm"}),n.jsx(r,{"aria-label":"like",...t,startIcon:n.jsx(o,{}),size:"md"}),n.jsx(r,{"aria-label":"like",...t,startIcon:n.jsx(o,{}),size:"lg"}),n.jsx(r,{"aria-label":"like",...t,startIcon:n.jsx(o,{}),size:"xl"})]}),n.jsxs("div",{className:"flex w-full items-start justify-center gap-2",children:[n.jsx(r,{...t,className:"btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl",children:"responsive"}),n.jsx(r,{"aria-label":"like",...t,className:"btn-icon-xs sm:btn-icon-sm md:btn-icon-md lg:btn-icon-lg xl:btn-icon-xl",startIcon:n.jsx(o,{})})]})]}),argTypes:{size:{if:{arg:"false",eq:"true"}}}};var v,h,p;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(p=(h=c.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var b,y,f;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(f=(y=i.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var j,w,H;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(H=(w=u.parameters)==null?void 0:w.docs)==null?void 0:H.source}}};var I,k,z;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(z=(k=d.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var T,E,C;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(C=(E=g.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var q,N,L;B.parameters={...B.parameters,docs:{...(q=B.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
      if: {
        arg: "false",
        eq: "true"
      }
    }
  }
}`,...(L=(N=B.parameters)==null?void 0:N.docs)==null?void 0:L.source}}};var S,A,R;x.parameters={...x.parameters,docs:{...(S=x.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
      if: {
        arg: "false",
        eq: "true"
      }
    }
  }
}`,...(R=(A=x.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};const P=["Default","Variants","Ghost","Disabled","Icon","Colors","Sizes"];export{B as Colors,c as Default,d as Disabled,u as Ghost,g as Icon,x as Sizes,i as Variants,P as __namedExportsOrder,M as default};
