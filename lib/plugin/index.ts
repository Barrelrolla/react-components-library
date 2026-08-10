import createPlugin from "tailwindcss/plugin";
import base from "./base/base";
import anchor from "./components/anchor";
import autocomplete from "./components/autocomplete";
import badge from "./components/badge";
import button from "./components/button";
import card from "./components/card";
import checkbox from "./components/checkbox";
import dialog from "./components/dialog";
import floating from "./components/floating";
import footer from "./components/footer";
import hamburgerButton from "./components/hamburgerButton";
import hero from "./components/hero";
import input from "./components/input";
import navbar from "./components/navbar";
import popover from "./components/popover";
import radio from "./components/radio";
import select from "./components/select";
import sidemenu from "./components/sidemenu";
import skeleton from "./components/skeleton";
import tooltip from "./components/tooltip";
import utilities from "./utilities/utilities";

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
