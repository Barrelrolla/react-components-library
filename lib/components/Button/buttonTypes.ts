import { cva, VariantProps } from "cva";

export type ButtonVariantProps = VariantProps<typeof button>;
export const button = cva(
  "flex items-center justify-center gap-2 outline-(--bg-color) focus-visible:outline-2 outline-offset-2 cursor-pointer disabled:pointer-events-none disabled:opacity-50 disabled:saturate-50 select-none antialiased",
  {
    variants: {
      variant: {
        solid:
          "bg-(--bg-color) hover:bgHover focus-visible:bgHover active:bgActive text-(--fg-color)",
        outline:
          "border border-(--bg-color) text-(--bg-color) hover:border-transparent focus-visible:border-transparent hover:bg-(--bg-color) focus-visible:bg-(--bg-color) focus-visible:text-(--fg-color) hover:text-(--fg-color) active:bgHover active:text-(--fg-color)",
        ghost: "text-(--bg-color)",
      },
      ghostHover: {
        none: "hover:ghostHover focus-visible:ghostHover active:ghostActive",
        fill: "hover:bg-(--bg-color) focus-visible:bg-(--bg-color) hover:text-(--fg-color) focus-visible:text-(--fg-color) active:bgHover active:text-(--fg-color)",
        outline:
          "hover:ghostHover focus-visible:ghostActive hover:outline-2 ring-(--bg-color)",
        contrasting:
          "hover:text-(--fg-color) focus-visible:text-(--fg-color) active:fgHover outline-(--fg-color)",
      },
      radius: { default: "rounded", rect: "", pill: "rounded-full" },
      size: {
        xs: "",
        sm: "",
        md: "",
        lg: "",
        xl: "",
      },
      scaling: { true: " hover:scale-[102%] active:scale-[98%]" },
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
