import createPlugin from "tailwindcss/plugin";
import base from "./base/base";
import anchor from "./components/anchor";
import button from "./components/button";
import card from "./components/card";
import footer from "./components/footer";
import hamburgerButton from "./components/hamburgerButton";
import hero from "./components/hero";
import navbar from "./components/navbar";
import utilities from "./utilities/utilities";

export default createPlugin(
  ({ addBase, addComponents, addUtilities, addVariant }) => {
    addBase(base),
      addComponents([
        anchor,
        button,
        card,
        footer,
        hamburgerButton,
        hero,
        navbar,
      ]),
      addUtilities(utilities),
      addVariant("selected", "&[data-selected='true']");
  },
  {
    theme: {
      extend: {
        colors: {
          main: "var(--color-main)",
          "main-content": "var(--color-main-content)",
          light: "var(--color-light)",
          "light-content": "var(--color-light-content)",
          dark: "var(--color-dark)",
          "dark-content": "var(--color-dark-content)",
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
