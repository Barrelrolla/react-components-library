import{j as a,r as p}from"./iframe-DQouAEEm.js";import{a as u,c as C}from"./index-DttbUWqL.js";import{C as r}from"./Combobox-GYj2lDux.js";import"./preload-helper-PPVm8Dsz.js";import"./ButtonGroup-CUTHd7TQ.js";import"./icons-7UZihqaI.js";import"./bundle-mjs-Ct12j0u0.js";import"./cssColorProps-D-Xi89r8.js";import"./Divider-CucZEIcj.js";import"./useIsMobile-DUFZ7AiS.js";import"./getSelectClasses-BW9JhsD-.js";import"./AutocompleteTrigger-CFH4Iv6Y.js";import"./FloatingElementContent-BkL-JcUo.js";import"./helpers-loWiP-OY.js";import"./Slot-BpKng9qt.js";import"./Badge-Dqfw397L.js";const{expect:y,within:g}=__STORYBOOK_MODULE_TEST__,R={title:"Components/Combobox",tags:["autodocs"],component:r,decorators:e=>a.jsx("div",{className:"storybookContainer",children:a.jsx(e,{})}),args:{placeholder:"Search countries",toggleOpenAriaLabel:"Toggle item list",removeAllItemsAriaLabel:"Clear selection",removeItemAriaLabel:"Remove item"},argTypes:{color:{options:u,control:{type:"select"},table:{category:"controls"}},size:{control:{type:"inline-radio"},table:{category:"controls"}},label:{table:{category:"controls"}},multiple:{table:{category:"controls"}},error:{table:{category:"controls"}},allowFreeText:{table:{category:"controls"}},placeholder:{table:{category:"controls"}},items:{control:!1,table:{category:"docs"}},initialSelectedIndex:{control:!1,table:{category:"docs"}},initialSelectedIndices:{control:!1,table:{category:"docs"}},onSelectedIndexChange:{control:!1,table:{category:"docs"}},labelClassName:{control:!1,table:{category:"docs"}},errorClassName:{control:!1,table:{category:"docs"}},wrapperClassName:{control:!1,table:{category:"docs"}},wrapperStyle:{control:!1,table:{category:"docs"}},toggleOpenAriaLabel:{control:!1,table:{category:"docs"}},removeAllItemsAriaLabel:{control:!1,table:{category:"docs"}},removeItemAriaLabel:{control:!1,table:{category:"docs"}}}},t=["Afghanistan","Aland Islands","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia (Plurinational State of)","Bonaire, Sint Eustatius and Saba","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cabo Verde","Cambodia","Cameroon","Canada","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands","Colombia","Comoros","Congo","Congo (Democratic Republic of the)","Cook Islands","Costa Rica","Cote d'Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands (Malvinas)","Faroe Islands","Fiji","Finland","France","French Guiana","French Polynesia","French Southern Territories","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea","Guinea-Bissau","Guyana","Haiti","Heard Island and McDonald Islands","Holy See","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran (Islamic Republic of)","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Korea (Democratic People's Republic of)","Korea (Republic of)","Kuwait","Kyrgyzstan","Lao People's Democratic Republic","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macao","Macedonia (the former Yugoslav Republic of)","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia (Federated States of)","Moldova (Republic of)","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","Northern Mariana Islands","Norway","Oman","Pakistan","Palau","Palestine, State of","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russian Federation","Rwanda","Saint Barthelemy","Saint Helena, Ascension and Tristan da Cunha","Saint Kitts and Nevis","Saint Lucia","Saint Martin (French part)","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Sint Maarten (Dutch part)","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and the South Sandwich Islands","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Svalbard and Jan Mayen","Swaziland","Sweden","Switzerland","Syrian Arab Republic","Taiwan, Province of China[a]","Tajikistan","Tanzania, United Republic of","Thailand","Timor-Leste","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom of Great Britain and Northern Ireland","United States of America","United States Minor Outlying Islands","Uruguay","Uzbekistan","Vanuatu","Venezuela (Bolivarian Republic of)","Viet Nam","Virgin Islands (British)","Virgin Islands (U.S.)","Wallis and Futuna","Western Sahara","Yemen","Zambia","Zimbabwe"],l={play:async({canvasElement:e})=>{const m=g(e).getByTestId("Combobox");await y(m,"renders").toBeTruthy()},render:({...e})=>a.jsx(r,{"data-testid":"Combobox","aria-label":"select country",...e,items:t}),parameters:{docs:{source:{type:"code",code:"<Combobox items={countries} />"}}}},o={render:({...e})=>a.jsx(r,{...e,"data-testid":"Combobox",items:t}),args:{label:"Countries"},argTypes:{items:{table:{disable:!0}},initialSelectedIndex:{table:{disable:!0}},initialSelectedIndices:{table:{disable:!0}},onSelectedIndexChange:{table:{disable:!0}},labelClassName:{table:{disable:!0}},errorClassName:{table:{disable:!0}},wrapperClassName:{table:{disable:!0}},wrapperStyle:{table:{disable:!0}},toggleOpenAriaLabel:{table:{disable:!0}},removeAllItemsAriaLabel:{table:{disable:!0}},removeItemAriaLabel:{table:{disable:!0}}},parameters:{docs:{source:{type:"code",code:`
        <Combobox items={countries} label="Country"/>`}}}},s={render:({...e})=>a.jsx(r,{...e,"data-testid":"Combobox",items:t}),args:{label:"Country",multiple:!0},argTypes:{multiple:{table:{disable:!0}},items:{table:{disable:!0}},initialSelectedIndex:{table:{disable:!0}},initialSelectedIndices:{table:{disable:!0}},onSelectedIndexChange:{table:{disable:!0}},labelClassName:{table:{disable:!0}},errorClassName:{table:{disable:!0}},wrapperClassName:{table:{disable:!0}},wrapperStyle:{table:{disable:!0}}},parameters:{docs:{source:{type:"code",code:`
        <Combobox
          items={countries}
          label="Country"
          multiple
        />`}}}},i={render:({...e})=>a.jsx(r,{...e,"data-testid":"Combobox",items:t}),args:{label:"Country",error:"Error"},argTypes:{items:{table:{disable:!0}},initialSelectedIndex:{table:{disable:!0}},initialSelectedIndices:{table:{disable:!0}},onSelectedIndexChange:{table:{disable:!0}},labelClassName:{table:{disable:!0}},errorClassName:{table:{disable:!0}},wrapperClassName:{table:{disable:!0}},wrapperStyle:{table:{disable:!0}}},parameters:{docs:{source:{type:"code",code:`
        <Combobox
          items={countries}
          label="Country"
          error="Error"
        />`}}}},b={render:({...e})=>a.jsx(r,{...e,"data-testid":"Combobox",items:t}),args:{label:"Country",disabled:!0},argTypes:{disabled:{table:{disable:!0}},items:{table:{disable:!0}},initialSelectedIndex:{table:{disable:!0}},initialSelectedIndices:{table:{disable:!0}},onSelectedIndexChange:{table:{disable:!0}},labelClassName:{table:{disable:!0}},errorClassName:{table:{disable:!0}},wrapperClassName:{table:{disable:!0}},wrapperStyle:{table:{disable:!0}}},parameters:{docs:{source:{type:"code",code:`
        <Combobox
          items={countries}
          label="Country"
          disabled
        />`}}}},d={render:({...e})=>a.jsx("div",{className:"grid gap-4",children:C.map(n=>p.createElement(r,{...e,size:n,key:n,label:n,items:t}))}),args:{},argTypes:{label:{table:{disable:!0}},size:{table:{disable:!0}},disabled:{table:{disable:!0}},items:{table:{disable:!0}},initialSelectedIndex:{table:{disable:!0}},initialSelectedIndices:{table:{disable:!0}},onSelectedIndexChange:{table:{disable:!0}},labelClassName:{table:{disable:!0}},errorClassName:{table:{disable:!0}},wrapperClassName:{table:{disable:!0}},wrapperStyle:{table:{disable:!0}}},parameters:{docs:{source:{type:"code",code:`
      <>
        <Combobox
          size="xs"
          items={countries}
          label="Country"
        />
        <Combobox
          size="sm"
          items={countries}
          label="Country"
        />
        <Combobox
          size="md"
          items={countries}
          label="Country"
        />
        <Combobox
          size="lg"
          items={countries}
          label="Country"
        />
        <Combobox
          size="xl"
          items={countries}
          label="Country"
        />
      </>
        `}}}},c={render:({...e})=>a.jsx(a.Fragment,{children:u.map(n=>a.jsx(r,{color:n,...e,label:n,items:t},n))}),args:{},argTypes:{label:{table:{disable:!0}},color:{table:{disable:!0}},disabled:{table:{disable:!0}},items:{table:{disable:!0}},initialSelectedIndex:{table:{disable:!0}},initialSelectedIndices:{table:{disable:!0}},onSelectedIndexChange:{table:{disable:!0}},labelClassName:{table:{disable:!0}},errorClassName:{table:{disable:!0}},wrapperClassName:{table:{disable:!0}},wrapperStyle:{table:{disable:!0}}},parameters:{docs:{source:{type:"code",code:`
      <>
        <Combobox
          color="main"
          items={countries}
          label="Country"
        />
        <Combobox
          color="neutral"
          items={countries}
          label="Country"
        />
        <Combobox
          color="primary"
          items={countries}
          label="Country"
        />
        <Combobox
          color="secondary"
          items={countries}
          label="Country"
        />
        <Combobox
          color="accent"
          items={countries}
          label="Country"
        />
        <Combobox
          color="info"
          items={countries}
          label="Country"
        />
        <Combobox
          color="success"
          items={countries}
          label="Country"
        />
        <Combobox
          color="warning"
          items={countries}
          label="Country"
        />
        <Combobox
          color="error"
          items={countries}
          label="Country"
        />
      </>
        `}}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
  },
  parameters: {
    docs: {
      source: {
        type: "code",
        code: \`<Combobox items={countries} />\`
      }
    }
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: ({
    ...rest
  }) => {
    return <Combobox {...rest} data-testid="Combobox" items={countries} />;
  },
  args: {
    label: "Countries"
  },
  argTypes: {
    items: {
      table: {
        disable: true
      }
    },
    initialSelectedIndex: {
      table: {
        disable: true
      }
    },
    initialSelectedIndices: {
      table: {
        disable: true
      }
    },
    onSelectedIndexChange: {
      table: {
        disable: true
      }
    },
    labelClassName: {
      table: {
        disable: true
      }
    },
    errorClassName: {
      table: {
        disable: true
      }
    },
    wrapperClassName: {
      table: {
        disable: true
      }
    },
    wrapperStyle: {
      table: {
        disable: true
      }
    },
    toggleOpenAriaLabel: {
      table: {
        disable: true
      }
    },
    removeAllItemsAriaLabel: {
      table: {
        disable: true
      }
    },
    removeItemAriaLabel: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    docs: {
      source: {
        type: "code",
        code: \`
        <Combobox items={countries} label="Country"/>\`
      }
    }
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: ({
    ...rest
  }) => {
    return <Combobox {...rest} data-testid="Combobox" items={countries} />;
  },
  args: {
    label: "Country",
    multiple: true
  },
  argTypes: {
    multiple: {
      table: {
        disable: true
      }
    },
    items: {
      table: {
        disable: true
      }
    },
    initialSelectedIndex: {
      table: {
        disable: true
      }
    },
    initialSelectedIndices: {
      table: {
        disable: true
      }
    },
    onSelectedIndexChange: {
      table: {
        disable: true
      }
    },
    labelClassName: {
      table: {
        disable: true
      }
    },
    errorClassName: {
      table: {
        disable: true
      }
    },
    wrapperClassName: {
      table: {
        disable: true
      }
    },
    wrapperStyle: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    docs: {
      source: {
        type: "code",
        code: \`
        <Combobox
          items={countries}
          label="Country"
          multiple
        />\`
      }
    }
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: ({
    ...rest
  }) => {
    return <Combobox {...rest} data-testid="Combobox" items={countries} />;
  },
  args: {
    label: "Country",
    error: "Error"
  },
  argTypes: {
    items: {
      table: {
        disable: true
      }
    },
    initialSelectedIndex: {
      table: {
        disable: true
      }
    },
    initialSelectedIndices: {
      table: {
        disable: true
      }
    },
    onSelectedIndexChange: {
      table: {
        disable: true
      }
    },
    labelClassName: {
      table: {
        disable: true
      }
    },
    errorClassName: {
      table: {
        disable: true
      }
    },
    wrapperClassName: {
      table: {
        disable: true
      }
    },
    wrapperStyle: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    docs: {
      source: {
        type: "code",
        code: \`
        <Combobox
          items={countries}
          label="Country"
          error="Error"
        />\`
      }
    }
  }
}`,...i.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: ({
    ...rest
  }) => {
    return <Combobox {...rest} data-testid="Combobox" items={countries} />;
  },
  args: {
    label: "Country",
    disabled: true
  },
  argTypes: {
    disabled: {
      table: {
        disable: true
      }
    },
    items: {
      table: {
        disable: true
      }
    },
    initialSelectedIndex: {
      table: {
        disable: true
      }
    },
    initialSelectedIndices: {
      table: {
        disable: true
      }
    },
    onSelectedIndexChange: {
      table: {
        disable: true
      }
    },
    labelClassName: {
      table: {
        disable: true
      }
    },
    errorClassName: {
      table: {
        disable: true
      }
    },
    wrapperClassName: {
      table: {
        disable: true
      }
    },
    wrapperStyle: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    docs: {
      source: {
        type: "code",
        code: \`
        <Combobox
          items={countries}
          label="Country"
          disabled
        />\`
      }
    }
  }
}`,...b.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: ({
    ...rest
  }) => {
    return <div className="grid gap-4">\r
        {availableSizes.map(size => <Combobox {...rest} size={size} key={size} label={size} items={countries} />)}\r
      </div>;
  },
  args: {},
  argTypes: {
    label: {
      table: {
        disable: true
      }
    },
    size: {
      table: {
        disable: true
      }
    },
    disabled: {
      table: {
        disable: true
      }
    },
    items: {
      table: {
        disable: true
      }
    },
    initialSelectedIndex: {
      table: {
        disable: true
      }
    },
    initialSelectedIndices: {
      table: {
        disable: true
      }
    },
    onSelectedIndexChange: {
      table: {
        disable: true
      }
    },
    labelClassName: {
      table: {
        disable: true
      }
    },
    errorClassName: {
      table: {
        disable: true
      }
    },
    wrapperClassName: {
      table: {
        disable: true
      }
    },
    wrapperStyle: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    docs: {
      source: {
        type: "code",
        code: \`
      <>
        <Combobox
          size="xs"
          items={countries}
          label="Country"
        />
        <Combobox
          size="sm"
          items={countries}
          label="Country"
        />
        <Combobox
          size="md"
          items={countries}
          label="Country"
        />
        <Combobox
          size="lg"
          items={countries}
          label="Country"
        />
        <Combobox
          size="xl"
          items={countries}
          label="Country"
        />
      </>
        \`
      }
    }
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: ({
    ...rest
  }) => {
    return <>\r
        {availableColors.map(color => <Combobox color={color} key={color} {...rest} label={color} items={countries} />)}\r
      </>;
  },
  args: {},
  argTypes: {
    label: {
      table: {
        disable: true
      }
    },
    color: {
      table: {
        disable: true
      }
    },
    disabled: {
      table: {
        disable: true
      }
    },
    items: {
      table: {
        disable: true
      }
    },
    initialSelectedIndex: {
      table: {
        disable: true
      }
    },
    initialSelectedIndices: {
      table: {
        disable: true
      }
    },
    onSelectedIndexChange: {
      table: {
        disable: true
      }
    },
    labelClassName: {
      table: {
        disable: true
      }
    },
    errorClassName: {
      table: {
        disable: true
      }
    },
    wrapperClassName: {
      table: {
        disable: true
      }
    },
    wrapperStyle: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    docs: {
      source: {
        type: "code",
        code: \`
      <>
        <Combobox
          color="main"
          items={countries}
          label="Country"
        />
        <Combobox
          color="neutral"
          items={countries}
          label="Country"
        />
        <Combobox
          color="primary"
          items={countries}
          label="Country"
        />
        <Combobox
          color="secondary"
          items={countries}
          label="Country"
        />
        <Combobox
          color="accent"
          items={countries}
          label="Country"
        />
        <Combobox
          color="info"
          items={countries}
          label="Country"
        />
        <Combobox
          color="success"
          items={countries}
          label="Country"
        />
        <Combobox
          color="warning"
          items={countries}
          label="Country"
        />
        <Combobox
          color="error"
          items={countries}
          label="Country"
        />
      </>
        \`
      }
    }
  }
}`,...c.parameters?.docs?.source}}};const k=["Default","WithLabel","Multiple","WithError","Disabled","Sizes","Colors"];export{c as Colors,l as Default,b as Disabled,s as Multiple,d as Sizes,i as WithError,o as WithLabel,k as __namedExportsOrder,R as default};
