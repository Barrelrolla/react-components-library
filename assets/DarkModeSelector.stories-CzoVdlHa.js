import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as y,l as s,d as o,s as d,D as g}from"./ThemeContext-CzQ_9dh3.js";import{B as t,S as x,M as h,C as T}from"./Button-DZMTvQ6D.js";import{B as j}from"./ButtonGroup-DT1cgbKi.js";import"./index-BKyFwriW.js";import"./_commonjsHelpers-CqkleIqs.js";function i({variant:r="outline",size:p="sm",divider:f=!1,...v}){const{themeMode:n,setThemeMode:l}=y();return e.jsxs(j,{variant:r,size:p,divider:f,...v,children:[e.jsx(t,{selected:n===s,onClick:()=>l(s),startIcon:e.jsx(x,{})}),e.jsx(t,{selected:n===o,onClick:()=>l(o),startIcon:e.jsx(h,{})}),e.jsx(t,{selected:n===d,onClick:()=>l(d),startIcon:e.jsx(T,{})})]})}i.__docgenInfo={description:"",methods:[],displayName:"DarkModeSelector",props:{color:{required:!1,tsType:{name:"union",raw:`| "main"\r
| "light"\r
| "dark"\r
| "primary"\r
| "secondary"\r
| "accent"\r
| "info"\r
| "success"\r
| "warning"\r
| "error"`,elements:[{name:"literal",value:'"main"'},{name:"literal",value:'"light"'},{name:"literal",value:'"dark"'},{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"accent"'},{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'}]},description:""},variant:{required:!1,tsType:{name:"union",raw:'"solid" | "outline" | "ghost"',elements:[{name:"literal",value:'"solid"'},{name:"literal",value:'"outline"'},{name:"literal",value:'"ghost"'}]},description:"",defaultValue:{value:'"outline"',computed:!1}},ghostHover:{required:!1,tsType:{name:"union",raw:'"none" | "fill" | "outline" | "contrasting"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"fill"'},{name:"literal",value:'"outline"'},{name:"literal",value:'"contrasting"'}]},description:""},retainFocusState:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg" | "xl"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'}]},description:"",defaultValue:{value:'"sm"',computed:!1}},radius:{required:!1,tsType:{name:"union",raw:'"default" | "none" | "pill"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"none"'},{name:"literal",value:'"pill"'}]},description:""},transitions:{required:!1,tsType:{name:"boolean"},description:""},divider:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},vertical:{required:!1,tsType:{name:"boolean"},description:""},scaling:{required:!1,tsType:{name:"boolean"},description:""},dividerClasses:{required:!1,tsType:{name:"string"},description:""},wrapperClasses:{required:!1,tsType:{name:"string"},description:""}}};const b={title:"Components/DarkModeSelector",component:i,argTypes:{color:{control:{type:"inline-radio"}},variant:{control:{type:"inline-radio"}},size:{control:{type:"inline-radio"}},radius:{control:{type:"inline-radio"}},ghostHover:{control:{type:"inline-radio"},if:{arg:"variant",eq:"ghost"}},children:{if:{arg:"false",exists:!0}}}},a={render:({...r})=>e.jsx(g,{children:e.jsx("div",{className:"bg-main flex justify-between p-4",children:e.jsx(i,{...r})})})};var u,m,c;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: ({
    ...props
  }) => {
    return <DarkModeContextProvider>\r
        <div className="bg-main flex justify-between p-4">\r
          <DarkModeSelector {...props} />\r
        </div>\r
      </DarkModeContextProvider>;
  }
}`,...(c=(m=a.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const S=["Default"];export{a as Default,S as __namedExportsOrder,b as default};
