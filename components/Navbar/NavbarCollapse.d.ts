import { ComponentProps } from '../../../node_modules/react';
export type NavbarCollapseProps = {
    /** The list has a wrapper. Use this to add classes to it. */
    wrapperClasses?: string;
} & ComponentProps<"menu">;
/** List that hides when the Navbar is small. */
export declare function NavbarCollapse({ className, wrapperClasses, children, ...rest }: NavbarCollapseProps): import("react").JSX.Element;
