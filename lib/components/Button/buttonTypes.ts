import { cva, VariantProps } from "cva";

export type ButtonVariantProps = VariantProps<typeof button>;
export const button = cva(
  "flex items-center justify-center gap-2 outline-(--bg-color) focus-visible:outline-2 outline-offset-2 cursor-pointer disabled:pointer-events-none disabled:opacity-50 disabled:saturate-50 select-none antialiased",
  {
    variants: {
      variant: {
        solid:
          "bg-(--bg-color) hover:bg-hover focus-visible:bg-hover active:bg-active text-(--fg-color)",
        outline:
          "inset-ring text-(--bg-color) hover:inset-ring-transparent focus-visible:inset-ring-transparent hover:bg-(--bg-color) focus-visible:bg-(--bg-color) focus-visible:text-(--fg-color) hover:text-(--fg-color) active:bg-hover active:text-(--fg-color) active:inset-ring-transparent",
        ghost: "text-(--bg-color)",
      },
      ghostHover: {
        none: "hover:ghost-hover focus-visible:ghost-hover active:ghost-active",
        fill: "hover:bg-(--bg-color) focus-visible:bg-(--bg-color) hover:text-(--fg-color) focus-visible:text-(--fg-color) active:bg-hover active:text-(--fg-color) a",
        outline:
          "hover:outline-2 hover:ghost-hover focus-visible:ghost-hover active:outline-2 active:ghost-active",
        contrasting:
          "hover:text-(--fg-color) focus-visible:text-(--fg-color) active:fg-active outline-(--fg-color)",
      },
      radius: { default: "rounded", rect: "", pill: "rounded-full" },
      size: {
        xs: "",
        sm: "",
        md: "",
        lg: "",
        xl: "",
      },
      scaling: { true: "active:scale-[99%]" },
      icon: { true: "" },
    },
    compoundVariants: [
      { icon: false, size: "xs", class: "btn-xs" },
      { icon: false, size: "sm", class: "btn-sm" },
      { icon: false, size: "md", class: "btn-md" },
      { icon: false, size: "lg", class: "btn-lg" },
      { icon: false, size: "xl", class: "btn-xl" },
      { icon: true, size: "xs", class: "icon-xs" },
      { icon: true, size: "sm", class: "icon-sm" },
      { icon: true, size: "md", class: "icon-md" },
      { icon: true, size: "lg", class: "icon-lg" },
      { icon: true, size: "xl", class: "icon-xl" },
    ],
  },
);
