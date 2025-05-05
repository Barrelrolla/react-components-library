import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as x}from"./Button-dQQngyAZ.js";import"./ButtonGroup-B9WW19Th.js";import{t}from"./ThemeContext-EqqjHPk4.js";import"./index-BKyFwriW.js";import"./_commonjsHelpers-CqkleIqs.js";function V({vertical:r,size:s,containerClasses:n,className:C}){return{cardContainerStyles:t("card-container",s==="xs"&&"w-xs",s==="sm"&&"w-sm",s==="md"&&"w-md",s==="lg"&&"w-lg",s==="xl"&&"w-xl",n),cardStyles:t("card","flex-col",!r&&s==="xs"&&"@2xs:flex-row",!r&&s==="sm"&&"@xs:flex-row",!r&&s==="md"&&"@sm:flex-row",!r&&s==="lg"&&"@md:flex-row",!r&&s==="xl"&&"@lg:flex-row",C)}}function b({className:r}){return{styles:t("card-section",r)}}function W({className:r}){return{styles:t("card-title",r)}}function D({className:r}){return{styles:t("card-text",r)}}function E({className:r}){return{styles:t("card-actions",r)}}function H({className:r}){return{styles:t("card-image-container",r)}}function i({vertical:r=!0,size:s="sm",containerClasses:n,className:C,children:A}){const{cardStyles:q,cardContainerStyles:B}=V({vertical:r,size:s,containerClasses:n,className:C});return e.jsx("div",{className:B,children:e.jsx("div",{className:q,children:A})})}i.__docgenInfo={description:"Card component",methods:[],displayName:"Card",props:{vertical:{required:!1,tsType:{name:"boolean"},description:"Set to 'false' if you want the card to be horizontal, default is `true`.",defaultValue:{value:"true",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg" | "xl"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'}]},description:"Size of the card.",defaultValue:{value:'"sm"',computed:!1}},containerClasses:{required:!1,tsType:{name:"string"},description:"The card is inside a `@container`. Add any classes to it here."},className:{required:!1,tsType:{name:"string"},description:"Classes for the card itself."}}};function o({className:r,children:s}){const{styles:n}=E({className:r});return e.jsx("div",{className:n,children:s})}o.__docgenInfo={description:"Section for actions inside a Card",methods:[],displayName:"CardActions",props:{className:{required:!1,tsType:{name:"string"},description:""}}};function g({className:r,children:s}){const{styles:n}=H({className:r});return e.jsx("div",{className:n,children:s})}g.__docgenInfo={description:"Place an image inside if you don't want the image to stretch to the end of the card.",methods:[],displayName:"CardImageContainer",props:{className:{required:!1,tsType:{name:"string"},description:""}}};function d({className:r,children:s}){const{styles:n}=W({className:r});return e.jsx("p",{className:n,children:s})}d.__docgenInfo={description:"Card title",methods:[],displayName:"CardTitle",props:{className:{required:!1,tsType:{name:"string"},description:""}}};function c({className:r,children:s}){const{styles:n}=D({className:r});return e.jsx("h2",{className:n,children:s})}c.__docgenInfo={description:"Body text inside a Card.",methods:[],displayName:"CardText",props:{className:{required:!1,tsType:{name:"string"},description:""}}};function a({className:r,children:s}){const{styles:n}=b({className:r});return e.jsx("div",{className:n,children:s})}a.__docgenInfo={description:"Use to divide a Card into multiple sections.",methods:[],displayName:"CardSection",props:{className:{required:!1,tsType:{name:"string"},description:""}}};const z={title:"Components/Card",tags:["autodocs"],component:i,subcomponents:{CardActions:o,CardImageContainer:g,CardTitle:d,CardText:c,CardSection:a},decorators:r=>e.jsx("div",{className:"storybookContainer",children:e.jsx(r,{})}),argTypes:{size:{control:{type:"inline-radio"}}}},l={render:({children:r,...s})=>e.jsxs(i,{...s,children:[e.jsx(d,{children:"Lorem, ipsum dolor."}),e.jsx(c,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id!"}),e.jsx(o,{children:e.jsx(x,{children:"Learn more"})})]})},m={render:({children:r,...s})=>e.jsxs(i,{...s,children:[e.jsx(a,{className:"flex-1/3",children:e.jsx("img",{className:"card-image",src:"https://picsum.photos/400/200?grayscale"})}),e.jsxs(a,{className:"flex-2/3",children:[e.jsx(d,{children:"Lorem, ipsum dolor."}),e.jsx(c,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id!"}),e.jsx(o,{children:e.jsx(x,{children:"Learn more"})})]})]})},p={render:({size:r="lg",children:s,...n})=>e.jsxs(i,{vertical:!1,size:r,...n,children:[e.jsx(a,{className:"flex-1/3",children:e.jsx("img",{className:"card-image",src:"https://picsum.photos/400/200?grayscale"})}),e.jsxs(a,{className:"flex-2/3",children:[e.jsx(d,{children:"Lorem, ipsum dolor."}),e.jsx(c,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id!"}),e.jsx(o,{children:e.jsx(x,{children:"Learn more"})})]})]}),argTypes:{vertical:{if:{arg:"false",eq:"true"}}}},u={render:({children:r,...s})=>e.jsx("div",{className:"flex w-full items-center gap-4",children:e.jsxs(i,{...s,children:[e.jsx(a,{className:"flex-1/3",children:e.jsx(g,{children:e.jsx("img",{className:"card-image",src:"https://picsum.photos/200/100?grayscale"})})}),e.jsxs(a,{className:"flex-2/3",children:[e.jsx(d,{children:"Lorem, ipsum dolor."}),e.jsx(c,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id!"}),e.jsx(o,{children:e.jsx(x,{children:"Learn more"})})]})]})})};var f,h,y;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(y=(h=l.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var j,N,T;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: ({
    children,
    ...rest
  }) => {
    return <Card {...rest}>\r
        <CardSection className="flex-1/3">\r
          <img className="card-image" src="https://picsum.photos/400/200?grayscale"></img>\r
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
}`,...(T=(N=m.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var S,L,v;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: ({
    size = "lg",
    children,
    ...rest
  }) => {
    return <Card vertical={false} size={size} {...rest}>\r
        <CardSection className="flex-1/3">\r
          <img className="card-image" src="https://picsum.photos/400/200?grayscale"></img>\r
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
}`,...(v=(L=p.parameters)==null?void 0:L.docs)==null?void 0:v.source}}};var w,I,_;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: ({
    children,
    ...rest
  }) => {
    return <div className="flex w-full items-center gap-4">\r
        <Card {...rest}>\r
          <CardSection className="flex-1/3">\r
            <CardImageContainer>\r
              <img className="card-image" src="https://picsum.photos/200/100?grayscale"></img>\r
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
        </Card>\r
      </div>;
  }
}`,...(_=(I=u.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};const F=["Default","WithImage","Horizontal","WithImageContainer"];export{l as Default,p as Horizontal,m as WithImage,u as WithImageContainer,F as __namedExportsOrder,z as default};
