import createPlugin from "tailwindcss/plugin";
import base from "./base/base";
import skeleton from "./components/skeleton";
import select from "./components/select";
import sidemenu from "./components/sidemenu";
import dropdown from "./components/dropdown";
import popover from "./components/popover";
import tooltip from "./components/tooltip";
import radio from "./components/radio";
import checkbox from "./components/checkbox";
import anchor from "./components/anchor";
import badge from "./components/badge";
import button from "./components/button";
import card from "./components/card";
import footer from "./components/footer";
import hamburgerButton from "./components/hamburgerButton";
import hero from "./components/hero";
import navbar from "./components/navbar";
import input from "./components/input";
import dialog from "./components/dialog";
import utilities from "./utilities/utilities";

type TailwindPlugin = ReturnType<typeof createPlugin>;

const plugin: TailwindPlugin = createPlugin(
  ({ addBase, addComponents, addUtilities, addVariant }) => {
    addBase(base);
    addComponents([
      skeleton,
      select,
      sidemenu,
      dropdown,
      popover,
      tooltip,
      radio,
      checkbox,
      anchor,
      badge,
      button,
      card,
      dialog,
      footer,
      hamburgerButton,
      hero,
      input,
      navbar,
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
