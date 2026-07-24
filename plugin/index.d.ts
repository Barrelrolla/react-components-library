import { default as createPlugin } from 'tailwindcss/plugin';
type TailwindPlugin = ReturnType<typeof createPlugin>;
declare const plugin: TailwindPlugin;
export default plugin;
