import createPlugin from "tailwindcss/plugin";
import base from "./base/base";
import anchor from "./components/anchor";
import button from "./components/button";
import utilities from "./utilities/utilities";

export default createPlugin(({ addBase, addComponents, addUtilities }) => {
  addBase(base), addComponents([anchor, button]), addUtilities(utilities);
});
