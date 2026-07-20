import{j as r}from"./iframe-YYkmocuX.js";import{B as o}from"./Button-DxzP1f3Y.js";import"./ButtonGroup-DhtqODt8.js";import{C as a,a as n,b as s,c as d,d as c,e as i,f as t}from"./CardTitle-D1-eG_zC.js";import{a as _}from"./index-DnWjc-IH.js";import"./preload-helper-Dp1pzeXC.js";import"./bundle-mjs-169JcMJR.js";import"./Divider-D4EhF-0V.js";const Q={title:"Components/Card",tags:["autodocs"],component:t,subcomponents:{CardActions:i,CardInteract:c,CardImageContainer:d,CardTitle:s,CardText:n,CardSection:a},decorators:e=>r.jsx("div",{className:"storybookContainer",children:r.jsx(e,{})}),argTypes:{size:{control:{type:"inline-radio"}},color:{control:{type:"select"},options:_},containerClasses:{table:{disable:!0}},containerStyle:{table:{disable:!0}},className:{table:{disable:!0}}}},l={render:({...e})=>r.jsxs(t,{...e,children:[r.jsx(s,{children:"Lorem, ipsum dolor."}),r.jsx(n,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id!"}),r.jsx(i,{children:r.jsx(o,{children:"Learn more"})})]})},m={render:({...e})=>r.jsx(t,{...e,children:r.jsxs(c,{href:"#",children:[r.jsx(s,{children:"Lorem, ipsum dolor."}),r.jsx(n,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id!"})]})})},p={render:({...e})=>r.jsxs(t,{...e,children:[r.jsx(a,{className:"flex-1/3",children:r.jsx(d,{children:r.jsx("img",{className:"card-image",src:"https://picsum.photos/400/200",alt:"placeholder image"})})}),r.jsxs(a,{className:"flex-2/3",children:[r.jsx(s,{children:"Lorem, ipsum dolor."}),r.jsx(n,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id!"}),r.jsx(i,{children:r.jsx(o,{children:"Learn more"})})]})]})},C={render:({...e})=>r.jsxs(t,{...e,children:[r.jsx(a,{className:"flex-1/3",children:r.jsx(c,{href:"#",children:r.jsx(d,{children:r.jsx("img",{className:"card-image",src:"https://picsum.photos/400/200",alt:"placeholder image"})})})}),r.jsxs(a,{className:"flex-2/3",children:[r.jsx(s,{children:"Lorem, ipsum dolor."}),r.jsx(n,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id!"}),r.jsx(i,{children:r.jsx(o,{children:"Learn more"})})]})]})},u={render:({...e})=>r.jsxs(t,{...e,children:[r.jsxs(c,{href:"#",children:[r.jsx(a,{children:r.jsx(d,{children:r.jsx("img",{className:"card-image",src:"https://picsum.photos/400/200",alt:"placeholder image"})})}),r.jsxs(a,{children:[r.jsx(s,{children:"Lorem, ipsum dolor."}),r.jsx(n,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id!"})]})]}),r.jsx(i,{children:r.jsx(o,{children:"Learn more"})})]})},h={render:({...e})=>r.jsxs(t,{...e,children:[r.jsx(a,{className:"flex-1/3",children:r.jsx(c,{href:"#",children:r.jsx(d,{padded:!0,children:r.jsx("img",{className:"card-image",src:"https://picsum.photos/400/200",alt:"placeholder image"})})})}),r.jsxs(a,{className:"flex-2/3",children:[r.jsx(s,{children:"Lorem, ipsum dolor."}),r.jsx(n,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id!"}),r.jsx(i,{children:r.jsx(o,{children:"Learn more"})})]})]})},x={render:({size:e="lg",...P})=>r.jsxs(t,{horizontal:!0,size:e,...P,children:[r.jsx(a,{className:"flex-1/3",children:r.jsx(d,{children:r.jsx("img",{className:"card-image",src:"https://picsum.photos/400/200",alt:"placeholder image"})})}),r.jsxs(a,{className:"flex-2/3",children:[r.jsx(s,{children:"Lorem, ipsum dolor."}),r.jsx(n,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id!"}),r.jsx(i,{children:r.jsx(o,{children:"Learn more"})})]})]}),argTypes:{horizontal:{if:{arg:"false",eq:"true"}}}};var g,j,L;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: ({
    ...rest
  }) => {
    return <Card {...rest}>\r
        <CardTitle>Lorem, ipsum dolor.</CardTitle>\r
        <CardText>\r
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id!\r
        </CardText>\r
        <CardActions>\r
          <Button>Learn more</Button>\r
        </CardActions>\r
      </Card>;
  }
}`,...(L=(j=l.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};var f,T,S;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: ({
    ...rest
  }) => {
    return <Card {...rest}>\r
        <CardInteract href="#">\r
          <CardTitle>Lorem, ipsum dolor.</CardTitle>\r
          <CardText>\r
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id!\r
          </CardText>\r
        </CardInteract>\r
      </Card>;
  }
}`,...(S=(T=m.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var N,I,b;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: ({
    ...rest
  }) => {
    return <Card {...rest}>\r
        <CardSection className="flex-1/3">\r
          <CardImageContainer>\r
            <img className="card-image" src="https://picsum.photos/400/200" alt="placeholder image"></img>\r
          </CardImageContainer>\r
        </CardSection>\r
        <CardSection className="flex-2/3">\r
          <CardTitle>Lorem, ipsum dolor.</CardTitle>\r
          <CardText>\r
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id!\r
          </CardText>\r
          <CardActions>\r
            <Button>Learn more</Button>\r
          </CardActions>\r
        </CardSection>\r
      </Card>;
  }
}`,...(b=(I=p.parameters)==null?void 0:I.docs)==null?void 0:b.source}}};var B,V,A;C.parameters={...C.parameters,docs:{...(B=C.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: ({
    ...rest
  }) => {
    return <Card {...rest}>\r
        <CardSection className="flex-1/3">\r
          <CardInteract href="#">\r
            <CardImageContainer>\r
              <img className="card-image" src="https://picsum.photos/400/200" alt="placeholder image"></img>\r
            </CardImageContainer>\r
          </CardInteract>\r
        </CardSection>\r
        <CardSection className="flex-2/3">\r
          <CardTitle>Lorem, ipsum dolor.</CardTitle>\r
          <CardText>\r
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id!\r
          </CardText>\r
          <CardActions>\r
            <Button>Learn more</Button>\r
          </CardActions>\r
        </CardSection>\r
      </Card>;
  }
}`,...(A=(V=C.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};var z,y,W;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: ({
    ...rest
  }) => {
    return <Card {...rest}>\r
        <CardInteract href="#">\r
          <CardSection>\r
            <CardImageContainer>\r
              <img className="card-image" src="https://picsum.photos/400/200" alt="placeholder image"></img>\r
            </CardImageContainer>\r
          </CardSection>\r
          <CardSection>\r
            <CardTitle>Lorem, ipsum dolor.</CardTitle>\r
            <CardText>\r
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id!\r
            </CardText>\r
          </CardSection>\r
        </CardInteract>\r
        <CardActions>\r
          <Button>Learn more</Button>\r
        </CardActions>\r
      </Card>;
  }
}`,...(W=(y=u.parameters)==null?void 0:y.docs)==null?void 0:W.source}}};var k,q,v;h.parameters={...h.parameters,docs:{...(k=h.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: ({
    ...rest
  }) => {
    return <Card {...rest}>\r
        <CardSection className="flex-1/3">\r
          <CardInteract href="#">\r
            <CardImageContainer padded>\r
              <img className="card-image" src="https://picsum.photos/400/200" alt="placeholder image"></img>\r
            </CardImageContainer>\r
          </CardInteract>\r
        </CardSection>\r
        <CardSection className="flex-2/3">\r
          <CardTitle>Lorem, ipsum dolor.</CardTitle>\r
          <CardText>\r
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id!\r
          </CardText>\r
          <CardActions>\r
            <Button>Learn more</Button>\r
          </CardActions>\r
        </CardSection>\r
      </Card>;
  }
}`,...(v=(q=h.parameters)==null?void 0:q.docs)==null?void 0:v.source}}};var D,E,H;x.parameters={...x.parameters,docs:{...(D=x.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: ({
    size = "lg",
    ...rest
  }) => {
    return <Card horizontal size={size} {...rest}>\r
        <CardSection className="flex-1/3">\r
          <CardImageContainer>\r
            <img className="card-image" src="https://picsum.photos/400/200" alt="placeholder image"></img>\r
          </CardImageContainer>\r
        </CardSection>\r
        <CardSection className="flex-2/3">\r
          <CardTitle>Lorem, ipsum dolor.</CardTitle>\r
          <CardText>\r
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id!\r
          </CardText>\r
          <CardActions>\r
            <Button>Learn more</Button>\r
          </CardActions>\r
        </CardSection>\r
      </Card>;
  },
  argTypes: {
    horizontal: {
      if: {
        arg: "false",
        eq: "true"
      }
    }
  }
}`,...(H=(E=x.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};const U=["Default","Clickable","WithImage","WithClickableImage","WithClickableBody","WithPaddedImage","Horizontal"];export{m as Clickable,l as Default,x as Horizontal,u as WithClickableBody,C as WithClickableImage,p as WithImage,h as WithPaddedImage,U as __namedExportsOrder,Q as default};
