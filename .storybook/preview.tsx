import React from "react";
import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview, ReactRenderer } from "@storybook/react";
import { DocsPage } from "@storybook/addon-docs";
import { themes } from "@storybook/theming";
import "../lib/index.css";

const preview: Preview = {
  parameters: {
    options: { storySort: { order: ["Intro", ["Welcome"], "Components"] } },
    backgrounds: {
      default: "dark",
    },
    layout: "fullscreen",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.dark,
    },
  },
  decorators: [
    withThemeByClassName<ReactRenderer>({
      themes: {
        light: "",
        dark: "dark",
      },
      defaultTheme: "dark",
    }),
  ],
};

export default preview;
