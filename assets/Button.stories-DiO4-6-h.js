import{j as t}from"./iframe-YYkmocuX.js";import{P as o,a as _,b as D}from"./index-72NJ_14F.js";import{B as e}from"./Button-DxzP1f3Y.js";import{b as F,a as O}from"./index-DnWjc-IH.js";import"./preload-helper-Dp1pzeXC.js";import"./bundle-mjs-169JcMJR.js";const{expect:s,within:l}=__STORYBOOK_MODULE_TEST__,Y={title:"Components/Button",component:e,tags:["autodocs"],decorators:n=>t.jsx("div",{className:"storybookContainer",children:t.jsx(n,{})}),argTypes:{children:{name:"text"},color:{control:{type:"select"},options:O},variant:{control:{type:"inline-radio"}},ghostHover:{control:{type:"inline-radio"},if:{arg:"variant",eq:"ghost"}},size:{control:{type:"inline-radio"},options:F},radius:{control:{type:"inline-radio"}},loadingPosition:{control:{type:"inline-radio"}},startIcon:{table:{disable:!0}},endIcon:{table:{disable:!0}},ref:{table:{disable:!0}},as:{table:{disable:!0}}}},i={play:async({canvasElement:n})=>{const r=l(n).getByText("Button");await s(r,"renders").toBeTruthy()},render:({children:n,...a})=>t.jsx(e,{...a,children:n}),args:{children:"Button"}},c={play:async({canvasElement:n})=>{const r=l(n).getAllByRole("button");await s(r).toHaveLength(3),await s(r[1]).toHaveClass("btn-outline"),await s(r[2]).toHaveClass("btn-ghost-none")},render:({children:n,...a})=>t.jsxs(t.Fragment,{children:[t.jsx(e,{...a,children:n}),t.jsx(e,{variant:"outline",...a,children:n}),t.jsx(e,{variant:"ghost",...a,children:n})]}),args:{children:"Button"},argTypes:{variant:{table:{disable:!0}},ghostHover:{table:{disable:!0}}}},u={play:async({canvasElement:n})=>{const r=l(n).getAllByRole("button");await s(r).toHaveLength(4),await s(r[0]).toHaveClass("btn-ghost-none"),await s(r[1]).toHaveClass("btn-ghost-fill"),await s(r[2]).toHaveClass("btn-ghost-outline"),await s(r[3]).toHaveClass("btn-ghost-contrasting")},render:({children:n,...a})=>t.jsxs(t.Fragment,{children:[t.jsx(e,{variant:"ghost",...a,children:n}),t.jsx(e,{variant:"ghost",ghostHover:"fill",...a,children:n}),t.jsx(e,{variant:"ghost",ghostHover:"outline",...a,children:n}),t.jsx(e,{variant:"ghost",ghostHover:"contrasting",...a,children:n})]}),args:{children:"Button"},argTypes:{variant:{table:{disable:!0}},ghostHover:{table:{disable:!0}}}},d={play:async({canvasElement:n})=>{const x=l(n).getAllByText("Button")[0].parentElement;await s(x==null?void 0:x.classList.contains("cursor-not-allowed"),"shows not allowed cursor on hover").toBeTruthy()},render:({children:n,...a})=>t.jsxs(t.Fragment,{children:[t.jsx(e,{disabled:!0,...a,children:n}),t.jsx(e,{loading:!0,...a,children:n})]}),args:{children:"Button"}},b={play:async({canvasElement:n})=>{const a=l(n),r=a.getAllByRole("button");await s(r).toHaveLength(3),await s(a.queryByText("Button",{selector:"button"})).toBeNull()},render:({...n})=>t.jsxs(t.Fragment,{children:[t.jsx(e,{"aria-label":"like",radius:"pill",startIcon:t.jsx(o,{}),...n}),t.jsx(e,{"aria-label":"thumbsup",radius:"none",variant:"outline",startIcon:t.jsx(_,{}),...n}),t.jsx(e,{"aria-label":"bookmark",variant:"ghost",ghostHover:"fill",startIcon:t.jsx(D,{}),...n})]})},B={play:async({canvasElement:n})=>{const r=l(n).getAllByRole("button");await s(r).toHaveLength(10)},render:({children:n,...a})=>t.jsxs(t.Fragment,{children:[t.jsx(e,{color:"main",...a,children:n}),t.jsx(e,{color:"light",...a,children:n}),t.jsx(e,{color:"dark",...a,children:n}),t.jsx(e,{color:"primary",...a,children:n}),t.jsx(e,{color:"secondary",...a,children:n}),t.jsx(e,{color:"accent",...a,children:n}),t.jsx(e,{color:"info",...a,children:n}),t.jsx(e,{color:"success",...a,children:n}),t.jsx(e,{color:"warning",...a,children:n}),t.jsx(e,{color:"error",...a,children:n})]}),args:{children:"Button"},argTypes:{color:{table:{disable:!0}}}},g={render:({...n})=>t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsxs("div",{className:"flex flex-wrap items-end justify-center gap-2",children:[t.jsx(e,{...n,startIcon:t.jsx(o,{}),size:"xs",children:"Button"}),t.jsx(e,{...n,startIcon:t.jsx(o,{}),size:"sm",children:"Button"}),t.jsxs(e,{...n,size:"md",children:[t.jsx(o,{}),"Button"]}),t.jsxs(e,{...n,size:"lg",children:[t.jsx(o,{}),"Button"]}),t.jsxs(e,{...n,size:"xl",children:[t.jsx(o,{}),"Button"]})]}),t.jsxs("div",{className:"flex flex-wrap items-start justify-center gap-2",children:[t.jsx(e,{"aria-label":"like",...n,startIcon:t.jsx(o,{}),size:"xs"}),t.jsx(e,{"aria-label":"like",...n,startIcon:t.jsx(o,{}),size:"sm"}),t.jsx(e,{"aria-label":"like",...n,startIcon:t.jsx(o,{}),size:"md"}),t.jsx(e,{"aria-label":"like",...n,startIcon:t.jsx(o,{}),size:"lg"}),t.jsx(e,{"aria-label":"like",...n,startIcon:t.jsx(o,{}),size:"xl"})]}),t.jsxs("div",{className:"flex w-full items-start justify-center gap-2",children:[t.jsx(e,{...n,className:"btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl",children:"responsive"}),t.jsx(e,{"aria-label":"like",...n,className:"btn-icon-xs sm:btn-icon-sm md:btn-icon-md lg:btn-icon-lg xl:btn-icon-xl",startIcon:t.jsx(o,{})})]})]}),argTypes:{size:{table:{disable:!0}}}};var m,v,p;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(v=i.parameters)==null?void 0:v.docs)==null?void 0:p.source}}};var h,y,j;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(j=(y=c.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var w,H,f;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(f=(H=u.parameters)==null?void 0:H.docs)==null?void 0:f.source}}};var z,I,k;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(k=(I=d.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var T,P,E;b.parameters={...b.parameters,docs:{...(T=b.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
        <Button aria-label="like" radius="pill" startIcon={<PiHeart />} {...rest}></Button>\r
        <Button aria-label="thumbsup" radius="none" variant="outline" startIcon={<PiThumbsUp />} {...rest}></Button>\r
        <Button aria-label="bookmark" variant="ghost" ghostHover="fill" startIcon={<PiBookmark />} {...rest}></Button>\r
      </>;
  }
}`,...(E=(P=b.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};var C,N,S;B.parameters={...B.parameters,docs:{...(C=B.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(S=(N=B.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var L,A,R;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: ({
    ...rest
  }) => {
    return <div className="flex flex-col gap-4">\r
        <div className="flex flex-wrap items-end justify-center gap-2">\r
          <Button {...rest} startIcon={<PiHeart />} size="xs">\r
            Button\r
          </Button>\r
          <Button {...rest} startIcon={<PiHeart />} size="sm">\r
            Button\r
          </Button>\r
          <Button {...rest} size="md">\r
            <PiHeart />\r
            Button\r
          </Button>\r
          <Button {...rest} size="lg">\r
            <PiHeart />\r
            Button\r
          </Button>\r
          <Button {...rest} size="xl">\r
            <PiHeart />\r
            Button\r
          </Button>\r
        </div>\r
        <div className="flex flex-wrap items-start justify-center gap-2">\r
          <Button aria-label="like" {...rest} startIcon={<PiHeart />} size="xs"></Button>\r
          <Button aria-label="like" {...rest} startIcon={<PiHeart />} size="sm"></Button>\r
          <Button aria-label="like" {...rest} startIcon={<PiHeart />} size="md"></Button>\r
          <Button aria-label="like" {...rest} startIcon={<PiHeart />} size="lg"></Button>\r
          <Button aria-label="like" {...rest} startIcon={<PiHeart />} size="xl"></Button>\r
        </div>\r
        <div className="flex w-full items-start justify-center gap-2">\r
          <Button {...rest} className="btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">\r
            responsive\r
          </Button>\r
          <Button aria-label="like" {...rest} className="btn-icon-xs sm:btn-icon-sm md:btn-icon-md lg:btn-icon-lg xl:btn-icon-xl" startIcon={<PiHeart />}></Button>\r
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
}`,...(R=(A=g.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};const J=["Default","Variants","Ghost","Disabled","Icon","Colors","Sizes"];export{B as Colors,i as Default,d as Disabled,u as Ghost,b as Icon,g as Sizes,c as Variants,J as __namedExportsOrder,Y as default};
