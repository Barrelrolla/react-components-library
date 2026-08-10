import{j as e,r as h}from"./iframe-seTiTV_v.js";import{c as n}from"./index-vGQ53xCS.js";import{I as r,A as I}from"./AutocompleteInput-7PVv10NN.js";import{a as b}from"./index-COUSODbC.js";import"./preload-helper-PPVm8Dsz.js";import"./AutocompleteTrigger-Urlyb_zp.js";import"./ButtonGroup-cvsoB710.js";import"./icons-D9XKdwam.js";import"./bundle-mjs-Ct12j0u0.js";import"./cssColorProps-D-Xi89r8.js";import"./Divider-DXQtVhka.js";import"./FloatingElementContent-DqORj6EY.js";import"./useIsMobile-BPT4M8Vw.js";import"./helpers-DuDVA4ff.js";import"./getSelectClasses-BWZGqEYj.js";import"./Slot-B51z0L24.js";const{expect:S,within:y}=__STORYBOOK_MODULE_TEST__,D={title:"Components/Input",tags:["autodocs"],component:r,decorators:a=>e.jsx("div",{className:"storybookContainer",children:e.jsx(a,{})}),argTypes:{color:{control:{type:"select"},options:b},startIcon:{table:{disable:!0}},endIcon:{table:{disable:!0}},labelClassName:{table:{disable:!0}},wrapperClassName:{table:{disable:!0}},errorClassName:{table:{disable:!0}},inputContainerClassName:{table:{disable:!0}},wrapperStyle:{table:{disable:!0}},as:{table:{disable:!0}},inputContainerStyle:{table:{disable:!0}}}},C=["Afghanistan","Aland Islands","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia (Plurinational State of)","Bonaire, Sint Eustatius and Saba","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cabo Verde","Cambodia","Cameroon","Canada","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands","Colombia","Comoros","Congo","Congo (Democratic Republic of the)","Cook Islands","Costa Rica","Cote d'Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands (Malvinas)","Faroe Islands","Fiji","Finland","France","French Guiana","French Polynesia","French Southern Territories","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea","Guinea-Bissau","Guyana","Haiti","Heard Island and McDonald Islands","Holy See","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran (Islamic Republic of)","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Korea (Democratic People's Republic of)","Korea (Republic of)","Kuwait","Kyrgyzstan","Lao People's Democratic Republic","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macao","Macedonia (the former Yugoslav Republic of)","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia (Federated States of)","Moldova (Republic of)","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","Northern Mariana Islands","Norway","Oman","Pakistan","Palau","Palestine, State of","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russian Federation","Rwanda","Saint Barthelemy","Saint Helena, Ascension and Tristan da Cunha","Saint Kitts and Nevis","Saint Lucia","Saint Martin (French part)","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Sint Maarten (Dutch part)","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and the South Sandwich Islands","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Svalbard and Jan Mayen","Swaziland","Sweden","Switzerland","Syrian Arab Republic","Taiwan, Province of China[a]","Tajikistan","Tanzania, United Republic of","Thailand","Timor-Leste","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom of Great Britain and Northern Ireland","United States of America","United States Minor Outlying Islands","Uruguay","Uzbekistan","Vanuatu","Venezuela (Bolivarian Republic of)","Viet Nam","Virgin Islands (British)","Virgin Islands (U.S.)","Wallis and Futuna","Western Sahara","Yemen","Zambia","Zimbabwe"],o={play:async({canvasElement:a})=>{const g=y(a).getByTestId("default");await S(g,"renders").toBeTruthy()},render:a=>e.jsx(r,{"data-testid":"default",...a}),args:{placeholder:"Input"}},s={render:a=>e.jsx(r,{...a}),args:{placeholder:"Input",label:"Label"}},i={render:a=>e.jsx(r,{...a}),args:{startIcon:e.jsx(n,{}),placeholder:"Input",label:"Label"}},l={render:a=>e.jsx(r,{...a}),args:{startIcon:e.jsx(n,{}),placeholder:"Input",label:"Label",error:"Error"}},u={render:a=>e.jsx(r,{as:"textarea",...a}),args:{placeholder:"Input",label:"Label"}},c={render:a=>e.jsx(r,{type:"number",...a}),args:{placeholder:"Input",label:"Label"}},d={render:a=>e.jsx(r,{disabled:!0,...a}),args:{startIcon:e.jsx(n,{}),placeholder:"Input",label:"Label"}},p={render:({...a})=>e.jsx(I,{items:C,...a}),args:{startIcon:e.jsx(n,{}),placeholder:"Search countries",label:"Country"}},m={render:a=>e.jsx(e.Fragment,{children:b.map(t=>h.createElement(r,{...a,key:t,label:t,color:t}))}),args:{startIcon:e.jsx(n,{}),placeholder:"Input"},argTypes:{color:{table:{disable:!0}},id:{table:{disable:!0}},label:{table:{disable:!0}}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByTestId("default");
    await expect(button, "renders").toBeTruthy();
  },
  render: props => {
    return <Input data-testid="default" {...props} />;
  },
  args: {
    placeholder: "Input"
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <Input {...props} />;
  },
  args: {
    placeholder: "Input",
    label: "Label"
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <Input {...props} />;
  },
  args: {
    startIcon: <PiMagnifyingGlass />,
    placeholder: "Input",
    label: "Label"
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <Input {...props} />;
  },
  args: {
    startIcon: <PiMagnifyingGlass />,
    placeholder: "Input",
    label: "Label",
    error: "Error"
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <Input as="textarea" {...props} />;
  },
  args: {
    placeholder: "Input",
    label: "Label"
  }
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <Input type="number" {...props} />;
  },
  args: {
    placeholder: "Input",
    label: "Label"
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <Input disabled {...props} />;
  },
  args: {
    startIcon: <PiMagnifyingGlass />,
    placeholder: "Input",
    label: "Label"
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: ({
    ...rest
  }) => {
    return <AutocompleteInput items={countries} {...rest as InputProps} />;
  },
  args: {
    startIcon: <PiMagnifyingGlass />,
    placeholder: "Search countries",
    label: "Country"
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <>\r
        {availableColors.map(color => {
        return <Input {...props} key={color} label={color} color={color} />;
      })}\r
      </>;
  },
  args: {
    startIcon: <PiMagnifyingGlass />,
    placeholder: "Input"
  },
  argTypes: {
    color: {
      table: {
        disable: true
      }
    },
    id: {
      table: {
        disable: true
      }
    },
    label: {
      table: {
        disable: true
      }
    }
  }
}`,...m.parameters?.docs?.source}}};const F=["Default","WithLabel","WithIcon","WithError","Textarea","Number","Disabled","WithAutocomplete","Colors"];export{m as Colors,o as Default,d as Disabled,c as Number,u as Textarea,p as WithAutocomplete,l as WithError,i as WithIcon,s as WithLabel,F as __namedExportsOrder,D as default};
