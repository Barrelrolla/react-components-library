import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{B as c}from"./Button-dQQngyAZ.js";import"./ButtonGroup-B9WW19Th.js";import{g as R,C as a,a as i,b as d,c as l,d as o,e as t}from"./CardText-BS90FMuJ.js";import"./ThemeContext-EqqjHPk4.js";import"./index-BKyFwriW.js";import"./_commonjsHelpers-CqkleIqs.js";function s({className:n,children:e}){const{styles:j}=R({className:n});return r.jsx("div",{className:j,children:e})}s.__docgenInfo={description:"Use to divide a Card into multiple sections.",methods:[],displayName:"CardSection",props:{className:{required:!1,tsType:{name:"string"},description:""}}};const P={title:"Components/Card",tags:["autodocs"],component:t,subcomponents:{CardActions:o,CardInteract:l,CardImageContainer:d,CardTitle:i,CardText:a,CardSection:s},decorators:n=>r.jsx("div",{className:"storybookContainer",children:r.jsx(n,{})}),argTypes:{size:{control:{type:"inline-radio"}}}},m={render:({children:n,...e})=>r.jsxs(t,{...e,children:[r.jsx(i,{children:"Lorem, ipsum dolor."}),r.jsx(a,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id!"}),r.jsx(o,{children:r.jsx(c,{children:"Learn more"})})]})},p={render:({children:n,...e})=>r.jsx(t,{className:"group rounded-containers",...e,children:r.jsxs(l,{href:"#",children:[r.jsx(i,{children:"Lorem, ipsum dolor."}),r.jsx(a,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id!"})]})})},C={render:({children:n,...e})=>r.jsxs(t,{...e,children:[r.jsx(s,{className:"flex-1/3",children:r.jsx(d,{children:r.jsx("img",{className:"card-image",src:"https://picsum.photos/400/200?grayscale"})})}),r.jsxs(s,{className:"flex-2/3",children:[r.jsx(i,{children:"Lorem, ipsum dolor."}),r.jsx(a,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id!"}),r.jsx(o,{children:r.jsx(c,{children:"Learn more"})})]})]})},u={render:({children:n,...e})=>r.jsxs(t,{...e,children:[r.jsx(l,{href:"#",children:r.jsx(s,{className:"flex-1/3",children:r.jsx(d,{children:r.jsx("img",{className:"card-image",src:"https://picsum.photos/400/200?grayscale"})})})}),r.jsxs(s,{className:"flex-2/3",children:[r.jsx(i,{children:"Lorem, ipsum dolor."}),r.jsx(a,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id!"}),r.jsx(o,{children:r.jsx(c,{children:"Learn more"})})]})]})},h={render:({children:n,...e})=>r.jsxs(t,{...e,children:[r.jsxs(l,{href:"#",children:[r.jsx(d,{children:r.jsx("img",{className:"card-image",src:"https://picsum.photos/400/200?grayscale"})}),r.jsx(i,{children:"Lorem, ipsum dolor."}),r.jsx(a,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id!"})]}),r.jsx(o,{children:r.jsx(c,{children:"Learn more"})})]})},x={render:({children:n,...e})=>r.jsxs(t,{...e,children:[r.jsx(l,{href:"#",children:r.jsx(s,{className:"flex-1/3",children:r.jsx(d,{padded:!0,children:r.jsx("img",{className:"card-image",src:"https://picsum.photos/400/200?grayscale"})})})}),r.jsxs(s,{className:"flex-2/3",children:[r.jsx(i,{children:"Lorem, ipsum dolor."}),r.jsx(a,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id!"}),r.jsx(o,{children:r.jsx(c,{children:"Learn more"})})]})]})},g={render:({size:n="lg",children:e,...j})=>r.jsxs(t,{vertical:!1,size:n,...j,children:[r.jsx(s,{className:"flex-1/3",children:r.jsx(d,{children:r.jsx("img",{className:"card-image",src:"https://picsum.photos/400/200?grayscale"})})}),r.jsxs(s,{className:"flex-2/3",children:[r.jsx(i,{children:"Lorem, ipsum dolor."}),r.jsx(a,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id!"}),r.jsx(o,{children:r.jsx(c,{children:"Learn more"})})]})]}),argTypes:{vertical:{if:{arg:"false",eq:"true"}}}};var L,f,T;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: ({
    children,
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
}`,...(T=(f=m.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var N,I,S;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: ({
    children,
    ...rest
  }) => {
    return <Card className="group rounded-containers" {...rest}>\r
        <CardInteract href="#">\r
          <CardTitle>Lorem, ipsum dolor.</CardTitle>\r
          <CardText>\r
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id!\r
          </CardText>\r
        </CardInteract>\r
      </Card>;
  }
}`,...(S=(I=p.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var y,B,V;C.parameters={...C.parameters,docs:{...(y=C.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: ({
    children,
    ...rest
  }) => {
    return <Card {...rest}>\r
        <CardSection className="flex-1/3">\r
          <CardImageContainer>\r
            <img className="card-image" src="https://picsum.photos/400/200?grayscale"></img>\r
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
}`,...(V=(B=C.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};var A,b,W;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: ({
    children,
    ...rest
  }) => {
    return <Card {...rest}>\r
        <CardInteract href="#">\r
          <CardSection className="flex-1/3">\r
            <CardImageContainer>\r
              <img className="card-image" src="https://picsum.photos/400/200?grayscale"></img>\r
            </CardImageContainer>\r
          </CardSection>\r
        </CardInteract>\r
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
}`,...(W=(b=u.parameters)==null?void 0:b.docs)==null?void 0:W.source}}};var k,v,z;h.parameters={...h.parameters,docs:{...(k=h.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: ({
    children,
    ...rest
  }) => {
    return <Card {...rest}>\r
        <CardInteract href="#">\r
          <CardImageContainer>\r
            <img className="card-image" src="https://picsum.photos/400/200?grayscale"></img>\r
          </CardImageContainer>\r
          <CardTitle>Lorem, ipsum dolor.</CardTitle>\r
          <CardText>\r
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id!\r
          </CardText>\r
        </CardInteract>\r
        <CardActions>\r
          <Button>Learn more</Button>\r
        </CardActions>\r
      </Card>;
  }
}`,...(z=(v=h.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var _,q,D;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: ({
    children,
    ...rest
  }) => {
    return <Card {...rest}>\r
        <CardInteract href="#">\r
          <CardSection className="flex-1/3">\r
            <CardImageContainer padded>\r
              <img className="card-image" src="https://picsum.photos/400/200?grayscale"></img>\r
            </CardImageContainer>\r
          </CardSection>\r
        </CardInteract>\r
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
}`,...(D=(q=x.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var E,H,O;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: ({
    size = "lg",
    children,
    ...rest
  }) => {
    return <Card vertical={false} size={size} {...rest}>\r
        <CardSection className="flex-1/3">\r
          <CardImageContainer>\r
            <img className="card-image" src="https://picsum.photos/400/200?grayscale"></img>\r
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
    vertical: {
      if: {
        arg: "false",
        eq: "true"
      }
    }
  }
}`,...(O=(H=g.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};const Q=["Default","Clickable","WithImage","WithClickableImage","WithClickableBody","WithImageContainer","Horizontal"];export{p as Clickable,m as Default,g as Horizontal,h as WithClickableBody,u as WithClickableImage,C as WithImage,x as WithImageContainer,Q as __namedExportsOrder,P as default};
