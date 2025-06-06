import{j as r}from"./iframe-2xTwKzkK.js";import{B as o}from"./Button-D6w_sEDH.js";import"./ButtonGroup-Cc9cTTKs.js";import{C as n,a as s,b as a,c as d,d as c,e as i,f as t}from"./CardSection-CG2U07bq.js";import"./icons-CdlL9hCZ.js";import"./bundle-mjs-CFgYV38x.js";import"./Divider-xEzdXBiL.js";const K={title:"Components/Card",tags:["autodocs"],component:t,subcomponents:{CardActions:i,CardInteract:c,CardImageContainer:d,CardTitle:a,CardText:s,CardSection:n},decorators:e=>r.jsx("div",{className:"storybookContainer",children:r.jsx(e,{})}),argTypes:{size:{control:{type:"inline-radio"}}}},m={render:({...e})=>r.jsxs(t,{...e,children:[r.jsx(a,{children:"Lorem, ipsum dolor."}),r.jsx(s,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id!"}),r.jsx(i,{children:r.jsx(o,{children:"Learn more"})})]})},l={render:({...e})=>r.jsx(t,{...e,children:r.jsxs(c,{href:"#",children:[r.jsx(a,{children:"Lorem, ipsum dolor."}),r.jsx(s,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id!"})]})})},C={render:({...e})=>r.jsxs(t,{...e,children:[r.jsx(n,{className:"flex-1/3",children:r.jsx(d,{children:r.jsx("img",{className:"card-image",src:"https://picsum.photos/400/200"})})}),r.jsxs(n,{className:"flex-2/3",children:[r.jsx(a,{children:"Lorem, ipsum dolor."}),r.jsx(s,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id!"}),r.jsx(i,{children:r.jsx(o,{children:"Learn more"})})]})]})},p={render:({...e})=>r.jsxs(t,{...e,children:[r.jsx(n,{className:"flex-1/3",children:r.jsx(c,{href:"#",children:r.jsx(d,{children:r.jsx("img",{className:"card-image",src:"https://picsum.photos/400/200"})})})}),r.jsxs(n,{className:"flex-2/3",children:[r.jsx(a,{children:"Lorem, ipsum dolor."}),r.jsx(s,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id!"}),r.jsx(i,{children:r.jsx(o,{children:"Learn more"})})]})]})},u={render:({...e})=>r.jsxs(t,{...e,children:[r.jsxs(c,{href:"#",children:[r.jsx(n,{children:r.jsx(d,{children:r.jsx("img",{className:"card-image",src:"https://picsum.photos/400/200"})})}),r.jsxs(n,{children:[r.jsx(a,{children:"Lorem, ipsum dolor."}),r.jsx(s,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id!"})]})]}),r.jsx(i,{children:r.jsx(o,{children:"Learn more"})})]})},x={render:({...e})=>r.jsxs(t,{...e,children:[r.jsx(n,{className:"flex-1/3",children:r.jsx(c,{href:"#",children:r.jsx(d,{padded:!0,children:r.jsx("img",{className:"card-image",src:"https://picsum.photos/400/200"})})})}),r.jsxs(n,{className:"flex-2/3",children:[r.jsx(a,{children:"Lorem, ipsum dolor."}),r.jsx(s,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id!"}),r.jsx(i,{children:r.jsx(o,{children:"Learn more"})})]})]})},h={render:({size:e="lg",..._})=>r.jsxs(t,{horizontal:!0,size:e,..._,children:[r.jsx(n,{className:"flex-1/3",children:r.jsx(d,{children:r.jsx("img",{className:"card-image",src:"https://picsum.photos/400/200"})})}),r.jsxs(n,{className:"flex-2/3",children:[r.jsx(a,{children:"Lorem, ipsum dolor."}),r.jsx(s,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id!"}),r.jsx(i,{children:r.jsx(o,{children:"Learn more"})})]})]}),argTypes:{horizontal:{if:{arg:"false",eq:"true"}}}};var g,j,L;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(L=(j=m.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};var f,T,S;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(S=(T=l.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var N,I,B;C.parameters={...C.parameters,docs:{...(N=C.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: ({
    ...rest
  }) => {
    return <Card {...rest}>\r
        <CardSection className="flex-1/3">\r
          <CardImageContainer>\r
            <img className="card-image" src="https://picsum.photos/400/200"></img>\r
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
}`,...(B=(I=C.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};var V,A,z;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: ({
    ...rest
  }) => {
    return <Card {...rest}>\r
        <CardSection className="flex-1/3">\r
          <CardInteract href="#">\r
            <CardImageContainer>\r
              <img className="card-image" src="https://picsum.photos/400/200"></img>\r
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
}`,...(z=(A=p.parameters)==null?void 0:A.docs)==null?void 0:z.source}}};var b,W,k;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: ({
    ...rest
  }) => {
    return <Card {...rest}>\r
        <CardInteract href="#">\r
          <CardSection>\r
            <CardImageContainer>\r
              <img className="card-image" src="https://picsum.photos/400/200"></img>\r
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
}`,...(k=(W=u.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};var y,q,D;x.parameters={...x.parameters,docs:{...(y=x.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: ({
    ...rest
  }) => {
    return <Card {...rest}>\r
        <CardSection className="flex-1/3">\r
          <CardInteract href="#">\r
            <CardImageContainer padded>\r
              <img className="card-image" src="https://picsum.photos/400/200"></img>\r
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
}`,...(D=(q=x.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var E,H,P;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: ({
    size = "lg",
    ...rest
  }) => {
    return <Card horizontal size={size} {...rest}>\r
        <CardSection className="flex-1/3">\r
          <CardImageContainer>\r
            <img className="card-image" src="https://picsum.photos/400/200"></img>\r
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
}`,...(P=(H=h.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};const M=["Default","Clickable","WithImage","WithClickableImage","WithClickableBody","WithPaddedImage","Horizontal"];export{l as Clickable,m as Default,h as Horizontal,u as WithClickableBody,p as WithClickableImage,C as WithImage,x as WithPaddedImage,M as __namedExportsOrder,K as default};
