import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview, ReactRenderer } from "@storybook/react";
import "../lib/index.css";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "dark",
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
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
