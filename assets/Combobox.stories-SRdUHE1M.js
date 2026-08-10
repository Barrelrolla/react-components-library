import{j as e}from"./iframe-seTiTV_v.js";import{C as n}from"./Combobox-BkOBZfRQ.js";import{a as d}from"./index-COUSODbC.js";import"./preload-helper-PPVm8Dsz.js";import"./cssColorProps-D-Xi89r8.js";import"./AutocompleteTrigger-Urlyb_zp.js";import"./ButtonGroup-cvsoB710.js";import"./icons-D9XKdwam.js";import"./bundle-mjs-Ct12j0u0.js";import"./Divider-DXQtVhka.js";import"./FloatingElementContent-DqORj6EY.js";import"./useIsMobile-BPT4M8Vw.js";import"./helpers-DuDVA4ff.js";import"./getSelectClasses-BWZGqEYj.js";import"./Slot-B51z0L24.js";import"./Badge-CKO4wwAY.js";const{expect:m,within:b}=__STORYBOOK_MODULE_TEST__,P={title:"Components/Combobox",tags:["autodocs"],component:n,decorators:a=>e.jsx("div",{className:"storybookContainer",children:e.jsx(a,{})}),argTypes:{color:{options:d,control:{type:"select"}}}},r=["Afghanistan","Aland Islands","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia (Plurinational State of)","Bonaire, Sint Eustatius and Saba","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cabo Verde","Cambodia","Cameroon","Canada","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands","Colombia","Comoros","Congo","Congo (Democratic Republic of the)","Cook Islands","Costa Rica","Cote d'Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands (Malvinas)","Faroe Islands","Fiji","Finland","France","French Guiana","French Polynesia","French Southern Territories","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea","Guinea-Bissau","Guyana","Haiti","Heard Island and McDonald Islands","Holy See","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran (Islamic Republic of)","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Korea (Democratic People's Republic of)","Korea (Republic of)","Kuwait","Kyrgyzstan","Lao People's Democratic Republic","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macao","Macedonia (the former Yugoslav Republic of)","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia (Federated States of)","Moldova (Republic of)","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","Northern Mariana Islands","Norway","Oman","Pakistan","Palau","Palestine, State of","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russian Federation","Rwanda","Saint Barthelemy","Saint Helena, Ascension and Tristan da Cunha","Saint Kitts and Nevis","Saint Lucia","Saint Martin (French part)","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Sint Maarten (Dutch part)","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and the South Sandwich Islands","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Svalbard and Jan Mayen","Swaziland","Sweden","Switzerland","Syrian Arab Republic","Taiwan, Province of China[a]","Tajikistan","Tanzania, United Republic of","Thailand","Timor-Leste","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom of Great Britain and Northern Ireland","United States of America","United States Minor Outlying Islands","Uruguay","Uzbekistan","Vanuatu","Venezuela (Bolivarian Republic of)","Viet Nam","Virgin Islands (British)","Virgin Islands (U.S.)","Wallis and Futuna","Western Sahara","Yemen","Zambia","Zimbabwe"],i={play:async({canvasElement:a})=>{const c=b(a).getByTestId("Combobox");await m(c,"renders").toBeTruthy()},render:({...a})=>e.jsx(n,{"data-testid":"Combobox","aria-label":"select country",...a,items:r})},t={render:({...a})=>e.jsx(n,{...a,label:"Country","data-testid":"Combobox",items:r})},s={render:({...a})=>e.jsx(n,{...a,multiple:!0,label:"Country","data-testid":"Combobox",items:r})},l={render:({...a})=>e.jsx(n,{...a,disabled:!0,label:"Country","data-testid":"Combobox",items:r})},u={render:({...a})=>e.jsx(e.Fragment,{children:d.map(o=>e.jsx(n,{color:o,...a,label:o,items:r},o))}),args:{},argTypes:{color:{table:{disable:!0}}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const combobox = canvas.getByTestId("Combobox");
    await expect(combobox, "renders").toBeTruthy();
  },
  render: ({
    ...rest
  }) => {
    return <Combobox data-testid="Combobox" aria-label="select country" {...rest} items={countries} />;
  }
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: ({
    ...rest
  }) => {
    return <Combobox {...rest} label="Country" data-testid="Combobox" items={countries} />;
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: ({
    ...rest
  }) => {
    return <Combobox {...rest} multiple label="Country" data-testid="Combobox" items={countries} />;
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: ({
    ...rest
  }) => {
    return <Combobox {...rest} disabled label="Country" data-testid="Combobox" items={countries} />;
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: ({
    ...rest
  }) => {
    return <>\r
        {availableColors.map(color => <Combobox color={color} key={color} {...rest} label={color} items={countries} />)}\r
      </>;
  },
  args: {},
  argTypes: {
    color: {
      table: {
        disable: true
      }
    }
  }
}`,...u.parameters?.docs?.source}}};const k=["Default","WithLabel","Multiple","Disabled","Colors"];export{u as Colors,i as Default,l as Disabled,s as Multiple,t as WithLabel,k as __namedExportsOrder,P as default};
