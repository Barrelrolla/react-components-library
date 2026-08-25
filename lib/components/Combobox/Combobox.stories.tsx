import { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "storybook/test";
import { availableColors, availableSizes } from "@/types";
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
    size: {
      control: { type: "inline-radio" },
      table: { category: "controls" },
    },
    label: { table: { category: "controls" } },
    multiple: { table: { category: "controls" } },
    error: { table: { category: "controls" } },
    allowFreeText: { table: { category: "controls" } },
    placeholder: { table: { category: "controls" } },
    showClearButton: { table: { category: "controls" } },
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
  { name: "Afghanistan", value: "Afghanistan" },
  { name: "Aland Islands", value: "Aland Islands" },
  { name: "Albania", value: "Albania" },
  { name: "Algeria", value: "Algeria" },
  { name: "American Samoa", value: "American Samoa" },
  { name: "Andorra", value: "Andorra" },
  { name: "Angola", value: "Angola" },
  { name: "Anguilla", value: "Anguilla" },
  { name: "Antarctica", value: "Antarctica" },
  { name: "Antigua and Barbuda", value: "Antigua and Barbuda" },
  { name: "Argentina", value: "Argentina" },
  { name: "Armenia", value: "Armenia" },
  { name: "Aruba", value: "Aruba" },
  { name: "Australia", value: "Australia" },
  { name: "Austria", value: "Austria" },
  { name: "Azerbaijan", value: "Azerbaijan" },
  { name: "Bahamas", value: "Bahamas" },
  { name: "Bahrain", value: "Bahrain" },
  { name: "Bangladesh", value: "Bangladesh" },
  { name: "Barbados", value: "Barbados" },
  { name: "Belarus", value: "Belarus" },
  { name: "Belgium", value: "Belgium" },
  { name: "Belize", value: "Belize" },
  { name: "Benin", value: "Benin" },
  { name: "Bermuda", value: "Bermuda" },
  { name: "Bhutan", value: "Bhutan" },
  {
    name: "Bolivia (Plurinational State of)",
    value: "Bolivia (Plurinational State of)",
  },
  {
    name: "Bonaire, Sint Eustatius and Saba",
    value: "Bonaire, Sint Eustatius and Saba",
  },
  { name: "Bosnia and Herzegovina", value: "Bosnia and Herzegovina" },
  { name: "Botswana", value: "Botswana" },
  { name: "Bouvet Island", value: "Bouvet Island" },
  { name: "Brazil", value: "Brazil" },
  {
    name: "British Indian Ocean Territory",
    value: "British Indian Ocean Territory",
  },
  { name: "Brunei Darussalam", value: "Brunei Darussalam" },
  { name: "Bulgaria", value: "Bulgaria" },
  { name: "Burkina Faso", value: "Burkina Faso" },
  { name: "Burundi", value: "Burundi" },
  { name: "Cabo Verde", value: "Cabo Verde" },
  { name: "Cambodia", value: "Cambodia" },
  { name: "Cameroon", value: "Cameroon" },
  { name: "Canada", value: "Canada" },
  { name: "Cayman Islands", value: "Cayman Islands" },
  { name: "Central African Republic", value: "Central African Republic" },
  { name: "Chad", value: "Chad" },
  { name: "Chile", value: "Chile" },
  { name: "China", value: "China" },
  { name: "Christmas Island", value: "Christmas Island" },
  { name: "Cocos (Keeling) Islands", value: "Cocos (Keeling) Islands" },
  { name: "Colombia", value: "Colombia" },
  { name: "Comoros", value: "Comoros" },
  { name: "Congo", value: "Congo" },
  {
    name: "Congo (Democratic Republic of the)",
    value: "Congo (Democratic Republic of the)",
  },
  { name: "Cook Islands", value: "Cook Islands" },
  { name: "Costa Rica", value: "Costa Rica" },
  { name: "Cote d'Ivoire", value: "Cote d'Ivoire" },
  { name: "Croatia", value: "Croatia" },
  { name: "Cuba", value: "Cuba" },
  { name: "Curacao", value: "Curacao" },
  { name: "Cyprus", value: "Cyprus" },
  { name: "Czech Republic", value: "Czech Republic" },
  { name: "Denmark", value: "Denmark" },
  { name: "Djibouti", value: "Djibouti" },
  { name: "Dominica", value: "Dominica" },
  { name: "Dominican Republic", value: "Dominican Republic" },
  { name: "Ecuador", value: "Ecuador" },
  { name: "Egypt", value: "Egypt" },
  { name: "El Salvador", value: "El Salvador" },
  { name: "Equatorial Guinea", value: "Equatorial Guinea" },
  { name: "Eritrea", value: "Eritrea" },
  { name: "Estonia", value: "Estonia" },
  { name: "Ethiopia", value: "Ethiopia" },
  { name: "Falkland Islands (Malvinas)", value: "Falkland Islands (Malvinas)" },
  { name: "Faroe Islands", value: "Faroe Islands" },
  { name: "Fiji", value: "Fiji" },
  { name: "Finland", value: "Finland" },
  { name: "France", value: "France" },
  { name: "French Guiana", value: "French Guiana" },
  { name: "French Polynesia", value: "French Polynesia" },
  { name: "French Southern Territories", value: "French Southern Territories" },
  { name: "Gabon", value: "Gabon" },
  { name: "Gambia", value: "Gambia" },
  { name: "Georgia", value: "Georgia" },
  { name: "Germany", value: "Germany" },
  { name: "Ghana", value: "Ghana" },
  { name: "Gibraltar", value: "Gibraltar" },
  { name: "Greece", value: "Greece" },
  { name: "Greenland", value: "Greenland" },
  { name: "Grenada", value: "Grenada" },
  { name: "Guadeloupe", value: "Guadeloupe" },
  { name: "Guam", value: "Guam" },
  { name: "Guatemala", value: "Guatemala" },
  { name: "Guernsey", value: "Guernsey" },
  { name: "Guinea", value: "Guinea" },
  { name: "Guinea-Bissau", value: "Guinea-Bissau" },
  { name: "Guyana", value: "Guyana" },
  { name: "Haiti", value: "Haiti" },
  {
    name: "Heard Island and McDonald Islands",
    value: "Heard Island and McDonald Islands",
  },
  { name: "Holy See", value: "Holy See" },
  { name: "Honduras", value: "Honduras" },
  { name: "Hong Kong", value: "Hong Kong" },
  { name: "Hungary", value: "Hungary" },
  { name: "Iceland", value: "Iceland" },
  { name: "India", value: "India" },
  { name: "Indonesia", value: "Indonesia" },
  { name: "Iran (Islamic Republic of)", value: "Iran (Islamic Republic of)" },
  { name: "Iraq", value: "Iraq" },
  { name: "Ireland", value: "Ireland" },
  { name: "Isle of Man", value: "Isle of Man" },
  { name: "Israel", value: "Israel" },
  { name: "Italy", value: "Italy" },
  { name: "Jamaica", value: "Jamaica" },
  { name: "Japan", value: "Japan" },
  { name: "Jersey", value: "Jersey" },
  { name: "Jordan", value: "Jordan" },
  { name: "Kazakhstan", value: "Kazakhstan" },
  { name: "Kenya", value: "Kenya" },
  { name: "Kiribati", value: "Kiribati" },
  {
    name: "Korea (Democratic People's Republic of)",
    value: "Korea (Democratic People's Republic of)",
  },
  { name: "Korea (Republic of)", value: "Korea (Republic of)" },
  { name: "Kuwait", value: "Kuwait" },
  { name: "Kyrgyzstan", value: "Kyrgyzstan" },
  {
    name: "Lao People's Democratic Republic",
    value: "Lao People's Democratic Republic",
  },
  { name: "Latvia", value: "Latvia" },
  { name: "Lebanon", value: "Lebanon" },
  { name: "Lesotho", value: "Lesotho" },
  { name: "Liberia", value: "Liberia" },
  { name: "Libya", value: "Libya" },
  { name: "Liechtenstein", value: "Liechtenstein" },
  { name: "Lithuania", value: "Lithuania" },
  { name: "Luxembourg", value: "Luxembourg" },
  { name: "Macao", value: "Macao" },
  {
    name: "Macedonia (the former Yugoslav Republic of)",
    value: "Macedonia (the former Yugoslav Republic of)",
  },
  { name: "Madagascar", value: "Madagascar" },
  { name: "Malawi", value: "Malawi" },
  { name: "Malaysia", value: "Malaysia" },
  { name: "Maldives", value: "Maldives" },
  { name: "Mali", value: "Mali" },
  { name: "Malta", value: "Malta" },
  { name: "Marshall Islands", value: "Marshall Islands" },
  { name: "Martinique", value: "Martinique" },
  { name: "Mauritania", value: "Mauritania" },
  { name: "Mauritius", value: "Mauritius" },
  { name: "Mayotte", value: "Mayotte" },
  { name: "Mexico", value: "Mexico" },
  {
    name: "Micronesia (Federated States of)",
    value: "Micronesia (Federated States of)",
  },
  { name: "Moldova (Republic of)", value: "Moldova (Republic of)" },
  { name: "Monaco", value: "Monaco" },
  { name: "Mongolia", value: "Mongolia" },
  { name: "Montenegro", value: "Montenegro" },
  { name: "Montserrat", value: "Montserrat" },
  { name: "Morocco", value: "Morocco" },
  { name: "Mozambique", value: "Mozambique" },
  { name: "Myanmar", value: "Myanmar" },
  { name: "Namibia", value: "Namibia" },
  { name: "Nauru", value: "Nauru" },
  { name: "Nepal", value: "Nepal" },
  { name: "Netherlands", value: "Netherlands" },
  { name: "New Caledonia", value: "New Caledonia" },
  { name: "New Zealand", value: "New Zealand" },
  { name: "Nicaragua", value: "Nicaragua" },
  { name: "Niger", value: "Niger" },
  { name: "Nigeria", value: "Nigeria" },
  { name: "Niue", value: "Niue" },
  { name: "Norfolk Island", value: "Norfolk Island" },
  { name: "Northern Mariana Islands", value: "Northern Mariana Islands" },
  { name: "Norway", value: "Norway" },
  { name: "Oman", value: "Oman" },
  { name: "Pakistan", value: "Pakistan" },
  { name: "Palau", value: "Palau" },
  { name: "Palestine, State of", value: "Palestine, State of" },
  { name: "Panama", value: "Panama" },
  { name: "Papua New Guinea", value: "Papua New Guinea" },
  { name: "Paraguay", value: "Paraguay" },
  { name: "Peru", value: "Peru" },
  { name: "Philippines", value: "Philippines" },
  { name: "Pitcairn", value: "Pitcairn" },
  { name: "Poland", value: "Poland" },
  { name: "Portugal", value: "Portugal" },
  { name: "Puerto Rico", value: "Puerto Rico" },
  { name: "Qatar", value: "Qatar" },
  { name: "Reunion", value: "Reunion" },
  { name: "Romania", value: "Romania" },
  { name: "Russian Federation", value: "Russian Federation" },
  { name: "Rwanda", value: "Rwanda" },
  { name: "Saint Barthelemy", value: "Saint Barthelemy" },
  {
    name: "Saint Helena, Ascension and Tristan da Cunha",
    value: "Saint Helena, Ascension and Tristan da Cunha",
  },
  { name: "Saint Kitts and Nevis", value: "Saint Kitts and Nevis" },
  { name: "Saint Lucia", value: "Saint Lucia" },
  { name: "Saint Martin (French part)", value: "Saint Martin (French part)" },
  { name: "Saint Pierre and Miquelon", value: "Saint Pierre and Miquelon" },
  {
    name: "Saint Vincent and the Grenadines",
    value: "Saint Vincent and the Grenadines",
  },
  { name: "Samoa", value: "Samoa" },
  { name: "San Marino", value: "San Marino" },
  { name: "Sao Tome and Principe", value: "Sao Tome and Principe" },
  { name: "Saudi Arabia", value: "Saudi Arabia" },
  { name: "Senegal", value: "Senegal" },
  { name: "Serbia", value: "Serbia" },
  { name: "Seychelles", value: "Seychelles" },
  { name: "Sierra Leone", value: "Sierra Leone" },
  { name: "Singapore", value: "Singapore" },
  { name: "Sint Maarten (Dutch part)", value: "Sint Maarten (Dutch part)" },
  { name: "Slovakia", value: "Slovakia" },
  { name: "Slovenia", value: "Slovenia" },
  { name: "Solomon Islands", value: "Solomon Islands" },
  { name: "Somalia", value: "Somalia" },
  { name: "South Africa", value: "South Africa" },
  {
    name: "South Georgia and the South Sandwich Islands",
    value: "South Georgia and the South Sandwich Islands",
  },
  { name: "South Sudan", value: "South Sudan" },
  { name: "Spain", value: "Spain" },
  { name: "Sri Lanka", value: "Sri Lanka" },
  { name: "Sudan", value: "Sudan" },
  { name: "Suriname", value: "Suriname" },
  { name: "Svalbard and Jan Mayen", value: "Svalbard and Jan Mayen" },
  { name: "Swaziland", value: "Swaziland" },
  { name: "Sweden", value: "Sweden" },
  { name: "Switzerland", value: "Switzerland" },
  { name: "Syrian Arab Republic", value: "Syrian Arab Republic" },
  {
    name: "Taiwan, Province of China[a]",
    value: "Taiwan, Province of China[a]",
  },
  { name: "Tajikistan", value: "Tajikistan" },
  {
    name: "Tanzania, United Republic of",
    value: "Tanzania, United Republic of",
  },
  { name: "Thailand", value: "Thailand" },
  { name: "Timor-Leste", value: "Timor-Leste" },
  { name: "Togo", value: "Togo" },
  { name: "Tokelau", value: "Tokelau" },
  { name: "Tonga", value: "Tonga" },
  { name: "Trinidad and Tobago", value: "Trinidad and Tobago" },
  { name: "Tunisia", value: "Tunisia" },
  { name: "Turkey", value: "Turkey" },
  { name: "Turkmenistan", value: "Turkmenistan" },
  { name: "Turks and Caicos Islands", value: "Turks and Caicos Islands" },
  { name: "Tuvalu", value: "Tuvalu" },
  { name: "Uganda", value: "Uganda" },
  { name: "Ukraine", value: "Ukraine" },
  { name: "United Arab Emirates", value: "United Arab Emirates" },
  {
    name: "United Kingdom of Great Britain and Northern Ireland",
    value: "United Kingdom of Great Britain and Northern Ireland",
  },
  { name: "United States of America", value: "United States of America" },
  {
    name: "United States Minor Outlying Islands",
    value: "United States Minor Outlying Islands",
  },
  { name: "Uruguay", value: "Uruguay" },
  { name: "Uzbekistan", value: "Uzbekistan" },
  { name: "Vanuatu", value: "Vanuatu" },
  {
    name: "Venezuela (Bolivarian Republic of)",
    value: "Venezuela (Bolivarian Republic of)",
  },
  { name: "Viet Nam", value: "Viet Nam" },
  { name: "Virgin Islands (British)", value: "Virgin Islands (British)" },
  { name: "Virgin Islands (U.S.)", value: "Virgin Islands (U.S.)" },
  { name: "Wallis and Futuna", value: "Wallis and Futuna" },
  { name: "Western Sahara", value: "Western Sahara" },
  { name: "Yemen", value: "Yemen" },
  { name: "Zambia", value: "Zambia" },
  { name: "Zimbabwe", value: "Zimbabwe" },
];

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const combobox = canvas.getByTestId("Combobox");
    await expect(combobox, "renders").toBeTruthy();
  },
  render: ({ ...rest }) => {
    return (
      <form
        action={(f) => {
          const a = f.get("test")?.toString();
          console.log(a);
        }}
      >
        <Combobox
          data-testid="Combobox"
          aria-label="select country"
          {...rest}
          name="test"
          items={countries}
          initialSelectedIndex={5}
        />
        <button>gege</button>
      </form>
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

export const Sizes: Story = {
  render: ({ ...rest }) => {
    return (
      <div className="grid gap-4">
        {availableSizes.map((size) => (
          <Combobox
            {...rest}
            size={size}
            key={size}
            label={size}
            items={countries}
          />
        ))}
      </div>
    );
  },
  args: {},
  argTypes: {
    label: { table: { disable: true } },
    size: { table: { disable: true } },
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
        `,
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
