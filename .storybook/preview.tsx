import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";
import "../lib/index.css";

const preview: Preview = {
  parameters: {
    options: { storySort: { order: ["Intro", ["Welcome"], "Components"] } },
    layout: "fullscreen",
    darkMode: {
      classTarget: "html",
      dark: themes.dark,
      darkClass: ["dark"],
      light: themes.light,
      stylePreview: true,
    },
    docs: {
      theme: themes.dark,
    },
  },
};

export default preview;
