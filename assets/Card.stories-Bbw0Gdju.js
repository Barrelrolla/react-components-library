import{j as r}from"./iframe-MZB_caGF.js";import{B as o}from"./Button-DZTzONxe.js";import"./ButtonGroup-0IbGhgEV.js";import{C as a,a as n,b as s,c as d,d as c,e as i,f as t}from"./CardTitle-DaGPg37z.js";import{a as j}from"./index-Ccfv0_tG.js";import"./preload-helper-PPVm8Dsz.js";import"./icons-C6YbZSVv.js";import"./bundle-mjs-169JcMJR.js";import"./Divider-Df6SaE8Q.js";import"./floating-ui.react-DDLLzMxe.js";const z={title:"Components/Card",tags:["autodocs"],component:t,subcomponents:{CardActions:i,CardInteract:c,CardImageContainer:d,CardTitle:s,CardText:n,CardSection:a},decorators:e=>r.jsx("div",{className:"storybookContainer",children:r.jsx(e,{})}),argTypes:{size:{control:{type:"inline-radio"}},color:{control:{type:"select"},options:j},containerClasses:{table:{disable:!0}},containerStyle:{table:{disable:!0}},className:{table:{disable:!0}}}},l={render:({...e})=>r.jsxs(t,{...e,children:[r.jsx(s,{children:"Lorem, ipsum dolor."}),r.jsx(n,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id!"}),r.jsx(i,{children:r.jsx(o,{children:"Learn more"})})]})},m={render:({...e})=>r.jsx(t,{...e,children:r.jsxs(c,{href:"#",children:[r.jsx(s,{children:"Lorem, ipsum dolor."}),r.jsx(n,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id!"})]})})},p={render:({...e})=>r.jsxs(t,{...e,children:[r.jsx(a,{className:"flex-1/3",children:r.jsx(d,{children:r.jsx("img",{className:"card-image",src:"https://picsum.photos/400/200",alt:"placeholder image"})})}),r.jsxs(a,{className:"flex-2/3",children:[r.jsx(s,{children:"Lorem, ipsum dolor."}),r.jsx(n,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id!"}),r.jsx(i,{children:r.jsx(o,{children:"Learn more"})})]})]})},C={render:({...e})=>r.jsxs(t,{...e,children:[r.jsx(a,{className:"flex-1/3",children:r.jsx(c,{href:"#",children:r.jsx(d,{children:r.jsx("img",{className:"card-image",src:"https://picsum.photos/400/200",alt:"placeholder image"})})})}),r.jsxs(a,{className:"flex-2/3",children:[r.jsx(s,{children:"Lorem, ipsum dolor."}),r.jsx(n,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id!"}),r.jsx(i,{children:r.jsx(o,{children:"Learn more"})})]})]})},u={render:({...e})=>r.jsxs(t,{...e,children:[r.jsxs(c,{href:"#",children:[r.jsx(a,{children:r.jsx(d,{children:r.jsx("img",{className:"card-image",src:"https://picsum.photos/400/200",alt:"placeholder image"})})}),r.jsxs(a,{children:[r.jsx(s,{children:"Lorem, ipsum dolor."}),r.jsx(n,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id!"})]})]}),r.jsx(i,{children:r.jsx(o,{children:"Learn more"})})]})},h={render:({...e})=>r.jsxs(t,{...e,children:[r.jsx(a,{className:"flex-1/3",children:r.jsx(c,{href:"#",children:r.jsx(d,{padded:!0,children:r.jsx("img",{className:"card-image",src:"https://picsum.photos/400/200",alt:"placeholder image"})})})}),r.jsxs(a,{className:"flex-2/3",children:[r.jsx(s,{children:"Lorem, ipsum dolor."}),r.jsx(n,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id!"}),r.jsx(i,{children:r.jsx(o,{children:"Learn more"})})]})]})},x={render:({size:e="lg",...g})=>r.jsxs(t,{horizontal:!0,size:e,...g,children:[r.jsx(a,{className:"flex-1/3",children:r.jsx(d,{children:r.jsx("img",{className:"card-image",src:"https://picsum.photos/400/200",alt:"placeholder image"})})}),r.jsxs(a,{className:"flex-2/3",children:[r.jsx(s,{children:"Lorem, ipsum dolor."}),r.jsx(n,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id!"}),r.jsx(i,{children:r.jsx(o,{children:"Learn more"})})]})]}),argTypes:{horizontal:{if:{arg:"false",eq:"true"}}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};const y=["Default","Clickable","WithImage","WithClickableImage","WithClickableBody","WithPaddedImage","Horizontal"];export{m as Clickable,l as Default,x as Horizontal,u as WithClickableBody,C as WithClickableImage,p as WithImage,h as WithPaddedImage,y as __namedExportsOrder,z as default};
