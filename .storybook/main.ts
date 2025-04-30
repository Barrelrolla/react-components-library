import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../lib/**/*mdx", "../lib/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    { name: "@storybook/addon-essentials", options: { backgrounds: false } },
    "@storybook/experimental-addon-test",
    "@storybook/addon-themes",
    "@storybook/addon-a11y",
    "storybook-dark-mode",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};

export default config;
