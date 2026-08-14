import createPlugin from "tailwindcss/plugin";
import base from "./base/base.ts";
import anchor from "./components/anchor/index.ts";
import autocomplete from "./components/autocomplete/index.ts";
import badge from "./components/badge/index.ts";
import button from "./components/button/index.ts";
import card from "./components/card/index.ts";
import checkbox from "./components/checkbox/index.ts";
import dialog from "./components/dialog/index.ts";
import floating from "./components/floating/index.ts";
import footer from "./components/footer/index.ts";
import hamburgerButton from "./components/hamburgerButton/index.ts";
import hero from "./components/hero/index.ts";
import input from "./components/input/index.ts";
import navbar from "./components/navbar/index.ts";
import popover from "./components/popover/index.ts";
import radio from "./components/radio/index.ts";
import select from "./components/select/index.ts";
import sidemenu from "./components/sidemenu/index.ts";
import skeleton from "./components/skeleton/index.ts";
import tooltip from "./components/tooltip/index.ts";
import utilities from "./utilities/utilities.ts";

type TailwindPlugin = ReturnType<typeof createPlugin>;

const plugin: TailwindPlugin = createPlugin(
  ({ addBase, addComponents, addUtilities, addVariant }) => {
    addBase(base);
    addComponents([
      autocomplete,
      anchor,
      badge,
      button,
      card,
      checkbox,
      dialog,
      floating,
      footer,
      hamburgerButton,
      hero,
      input,
      navbar,
      popover,
      radio,
      select,
      sidemenu,
      skeleton,
      tooltip,
    ]);
    addUtilities(utilities);
    addVariant("selected", "&[data-selected='true']");
    addVariant("error", "&[data-error='true']");
    addVariant("expanded", "&[aria-expanded='true']");
    addVariant("can-expand", "&[aria-expanded]");
  },
  {
    theme: {
      extend: {
        colors: {
          main: "var(--color-main)",
          "main-content": "var(--color-main-content)",
          neutral: "var(--color-neutral)",
          "neutral-content": "var(--color-neutral-content)",
          primary: "var(--color-primary)",
          "primary-content": "var(--color-primary-content)",
          secondary: "var(--color-secondary)",
          "secondary-content": "var(--color-secondary-content)",
          accent: "var(--color-accent)",
          "accent-content": "var(--color-accent-content)",
          info: "var(--color-info)",
          "info-content": "var(--color-info-content)",
          success: "var(--color-success)",
          "success-content": "var(--color-success-content)",
          warning: "var(--color-warning)",
          "warning-content": "var(--color-warning-content)",
          error: "var(--color-error)",
          "error-content": "var(--color-error-content)",
        },
      },
    },
  },
);

export default plugin;
