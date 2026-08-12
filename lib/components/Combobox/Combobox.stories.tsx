import { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "storybook/test";
import { availableColors } from "@/types";
import { Combobox } from "./Combobox";

const meta: Meta<typeof Combobox> = {
  title: "Components/Combobox",
  tags: ["autodocs"],
  component: Combobox,
  decorators: (Story) => (
    <div className="storybookContainer">
      <Story />
    </div>
  ),
  args: {
    placeholder: "Search countries",
    toggleOpenAriaLabel: "Toggle item list",
    removeAllItemsAriaLabel: "Clear selection",
    removeItemAriaLabel: "Remove item",
  },
  argTypes: {
    color: {
      options: availableColors,
      control: { type: "select" },
      table: { category: "controls" },
    },
    label: { table: { category: "controls" } },
    multiple: { table: { category: "controls" } },
    error: { table: { category: "controls" } },
    allowFreeText: { table: { category: "controls" } },
    placeholder: { table: { category: "controls" } },
    items: { control: false, table: { category: "docs" } },
    initialSelectedIndex: { control: false, table: { category: "docs" } },
    initialSelectedIndices: { control: false, table: { category: "docs" } },
    onSelectedIndexChange: { control: false, table: { category: "docs" } },
    labelClassName: { control: false, table: { category: "docs" } },
    errorClassName: { control: false, table: { category: "docs" } },
    wrapperClassName: { control: false, table: { category: "docs" } },
    wrapperStyle: { control: false, table: { category: "docs" } },
    toggleOpenAriaLabel: { control: false, table: { category: "docs" } },
    removeAllItemsAriaLabel: { control: false, table: { category: "docs" } },
    removeItemAriaLabel: { control: false, table: { category: "docs" } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const countries = [
  "Afghanistan",
  "Aland Islands",
  "Albania",
  "Algeria",
  "American Samoa",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia (Plurinational State of)",
  "Bonaire, Sint Eustatius and Saba",
  "Bosnia and Herzegovina",
  "Botswana",
  "Bouvet Island",
  "Brazil",
  "British Indian Ocean Territory",
  "Brunei Darussalam",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cayman Islands",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Christmas Island",
  "Cocos (Keeling) Islands",
  "Colombia",
  "Comoros",
  "Congo",
  "Congo (Democratic Republic of the)",
  "Cook Islands",
  "Costa Rica",
  "Cote d'Ivoire",
  "Croatia",
  "Cuba",
  "Curacao",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Falkland Islands (Malvinas)",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Guiana",
  "French Polynesia",
  "French Southern Territories",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guadeloupe",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Heard Island and McDonald Islands",
  "Holy See",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran (Islamic Republic of)",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea (Democratic People's Republic of)",
  "Korea (Republic of)",
  "Kuwait",
  "Kyrgyzstan",
  "Lao People's Democratic Republic",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macao",
  "Macedonia (the former Yugoslav Republic of)",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Martinique",
  "Mauritania",
  "Mauritius",
  "Mayotte",
  "Mexico",
  "Micronesia (Federated States of)",
  "Moldova (Republic of)",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Niue",
  "Norfolk Island",
  "Northern Mariana Islands",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine, State of",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Pitcairn",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Reunion",
  "Romania",
  "Russian Federation",
  "Rwanda",
  "Saint Barthelemy",
  "Saint Helena, Ascension and Tristan da Cunha",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Martin (French part)",
  "Saint Pierre and Miquelon",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Sint Maarten (Dutch part)",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Georgia and the South Sandwich Islands",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Svalbard and Jan Mayen",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syrian Arab Republic",
  "Taiwan, Province of China[a]",
  "Tajikistan",
  "Tanzania, United Republic of",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tokelau",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks and Caicos Islands",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom of Great Britain and Northern Ireland",
  "United States of America",
  "United States Minor Outlying Islands",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela (Bolivarian Republic of)",
  "Viet Nam",
  "Virgin Islands (British)",
  "Virgin Islands (U.S.)",
  "Wallis and Futuna",
  "Western Sahara",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const combobox = canvas.getByTestId("Combobox");
    await expect(combobox, "renders").toBeTruthy();
  },
  render: ({ ...rest }) => {
    return (
      <Combobox
        data-testid="Combobox"
        aria-label="select country"
        {...rest}
        items={countries}
      />
    );
  },
  parameters: {
    docs: {
      source: {
        type: "code",
        code: `<Combobox items={countries} />`,
      },
    },
  },
};

export const WithLabel: Story = {
  render: ({ ...rest }) => {
    return <Combobox {...rest} data-testid="Combobox" items={countries} />;
  },
  args: {
    label: "Countries",
  },
  argTypes: {
    items: { table: { disable: true } },
    initialSelectedIndex: { table: { disable: true } },
    initialSelectedIndices: { table: { disable: true } },
    onSelectedIndexChange: { table: { disable: true } },
    labelClassName: { table: { disable: true } },
    errorClassName: { table: { disable: true } },
    wrapperClassName: { table: { disable: true } },
    wrapperStyle: { table: { disable: true } },
    toggleOpenAriaLabel: { table: { disable: true } },
    removeAllItemsAriaLabel: { table: { disable: true } },
    removeItemAriaLabel: { table: { disable: true } },
  },
  parameters: {
    docs: {
      source: {
        type: "code",
        code: `
        <Combobox items={countries} label="Country"/>`,
      },
    },
  },
};

export const Multiple: Story = {
  render: ({ ...rest }) => {
    return <Combobox {...rest} data-testid="Combobox" items={countries} />;
  },
  args: {
    label: "Country",
    multiple: true,
  },
  argTypes: {
    multiple: { table: { disable: true } },
    items: { table: { disable: true } },
    initialSelectedIndex: { table: { disable: true } },
    initialSelectedIndices: { table: { disable: true } },
    onSelectedIndexChange: { table: { disable: true } },
    labelClassName: { table: { disable: true } },
    errorClassName: { table: { disable: true } },
    wrapperClassName: { table: { disable: true } },
    wrapperStyle: { table: { disable: true } },
  },
  parameters: {
    docs: {
      source: {
        type: "code",
        code: `
        <Combobox
          items={countries}
          label="Country"
          multiple
        />`,
      },
    },
  },
};

export const WithError: Story = {
  render: ({ ...rest }) => {
    return <Combobox {...rest} data-testid="Combobox" items={countries} />;
  },
  args: {
    label: "Country",
    error: "Error",
  },
  argTypes: {
    items: { table: { disable: true } },
    initialSelectedIndex: { table: { disable: true } },
    initialSelectedIndices: { table: { disable: true } },
    onSelectedIndexChange: { table: { disable: true } },
    labelClassName: { table: { disable: true } },
    errorClassName: { table: { disable: true } },
    wrapperClassName: { table: { disable: true } },
    wrapperStyle: { table: { disable: true } },
  },
  parameters: {
    docs: {
      source: {
        type: "code",
        code: `
        <Combobox
          items={countries}
          label="Country"
          error="Error"
        />`,
      },
    },
  },
};

export const Disabled: Story = {
  render: ({ ...rest }) => {
    return <Combobox {...rest} data-testid="Combobox" items={countries} />;
  },
  args: {
    label: "Country",
    disabled: true,
  },
  argTypes: {
    disabled: { table: { disable: true } },
    items: { table: { disable: true } },
    initialSelectedIndex: { table: { disable: true } },
    initialSelectedIndices: { table: { disable: true } },
    onSelectedIndexChange: { table: { disable: true } },
    labelClassName: { table: { disable: true } },
    errorClassName: { table: { disable: true } },
    wrapperClassName: { table: { disable: true } },
    wrapperStyle: { table: { disable: true } },
  },
  parameters: {
    docs: {
      source: {
        type: "code",
        code: `
        <Combobox
          items={countries}
          label="Country"
          disabled
        />`,
      },
    },
  },
};

export const Colors: Story = {
  render: ({ ...rest }) => {
    return (
      <>
        {availableColors.map((color) => (
          <Combobox
            color={color}
            key={color}
            {...rest}
            label={color}
            items={countries}
          />
        ))}
      </>
    );
  },
  args: {},
  argTypes: {
    label: { table: { disable: true } },
    color: { table: { disable: true } },
    disabled: { table: { disable: true } },
    items: { table: { disable: true } },
    initialSelectedIndex: { table: { disable: true } },
    initialSelectedIndices: { table: { disable: true } },
    onSelectedIndexChange: { table: { disable: true } },
    labelClassName: { table: { disable: true } },
    errorClassName: { table: { disable: true } },
    wrapperClassName: { table: { disable: true } },
    wrapperStyle: { table: { disable: true } },
  },
  parameters: {
    docs: {
      source: {
        type: "code",
        code: `
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
        `,
      },
    },
  },
};
