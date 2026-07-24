import { ComponentProps } from '../../../node_modules/react';
export type DialogProps = {
    /** You should keep track of the open state of the dialog, it doesn't do it by itself, save it in a state? */
    isOpen: boolean;
    /** This function will be called when the dialog wants to close.  */
    setIsOpen: (open: boolean) => void;
    /** Classes for the backdrop. */
    backdropClasses?: string;
} & ComponentProps<"dialog">;
/** The dialog component has no visuals. You should add your own visual as children. You can use a card or a form or whatever you'd like */
export declare function Dialog({ isOpen, setIsOpen, backdropClasses, className, children, ...props }: DialogProps): import('../../../node_modules/react').ReactPortal | undefined;
