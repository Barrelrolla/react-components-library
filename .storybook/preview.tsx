/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState, ReactNode } from "react";
import { DocsContainer, DocsContextProps } from "@storybook/addon-docs/blocks";
import { addons } from "storybook/preview-api";
import { themes } from "storybook/theming";
import { DARK_MODE_EVENT_NAME } from "@vueless/storybook-dark-mode";
import type { Preview } from "@storybook/react";
import { Renderer } from "storybook/internal/csf";
import "../lib/index.css";

const channel = addons.getChannel();

const preview: Preview = {
  decorators: [
    (Story) => {
      // Fixes the issue where storybook-dark-mode adds the dark class to body elements inside docs
      document.body.classList.remove("dark");
      return (
        <div>
          <Story />
        </div>
      );
    },
  ],
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
      container: ({
        children,
        context,
      }: {
        children: ReactNode;
        context: DocsContextProps<Renderer>;
      }) => {
        const [isDark, setDark] = useState(() => {
          return (
            document.documentElement.classList.contains("dark") ||
            document.body.classList.contains("dark")
          );
        });

        useEffect(() => {
          const handleThemeChange = (dark: boolean) => {
            setDark(dark);
          };
          channel.on(DARK_MODE_EVENT_NAME, handleThemeChange);
          return () =>
            channel.removeListener(DARK_MODE_EVENT_NAME, handleThemeChange);
        }, []);

        return (
          <DocsContainer
            context={context}
            theme={isDark ? themes.dark : themes.light}
          >
            {children}
          </DocsContainer>
        );
      },
    },

    a11y: {
      test: "todo",
    },
  },
};

export default preview;
