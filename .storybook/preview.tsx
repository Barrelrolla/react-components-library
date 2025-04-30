import React from "react";
import { DocsContainer } from "@storybook/blocks";
import { addons } from "@storybook/preview-api";
import { themes } from "@storybook/theming";
import { DARK_MODE_EVENT_NAME } from "storybook-dark-mode";
import type { Preview } from "@storybook/react";
import "../lib/index.css";

const channel = addons.getChannel();

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
      container: ({ children, context }) => {
        const [isDark, setDark] = React.useState();

        React.useEffect(() => {
          channel.on(DARK_MODE_EVENT_NAME, setDark);
          return () => channel.removeListener(DARK_MODE_EVENT_NAME, setDark);
        }, [channel, setDark]);

        return (
          <DocsContainer
            context={context}
            theme={isDark ? themes.dark : themes.normal}
          >
            {children}
          </DocsContainer>
        );
      },
    },
  },
};

export default preview;
