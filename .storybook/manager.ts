import { addons } from "storybook/manager-api";

addons.register("initial-loader", (api) => {
  const loader = document.getElementById("storybook-initial-loader");

  if (!loader) {
    return;
  }

  const channel = api.getChannel();
  if (!channel) {
    return;
  }

  const removeLoader = () => {
    loader.remove();
    channel.off("storyPrepared", removeLoader);
    channel.off("docsPrepared", removeLoader);
    channel.off("storyRendered", removeLoader);
    channel.off("docsRendered", removeLoader);
  };

  channel.once("storyPrepared", removeLoader);
  channel.once("docsPrepared", removeLoader);
  channel.once("storyRendered", removeLoader);
  channel.once("docsRendered", removeLoader);
});
