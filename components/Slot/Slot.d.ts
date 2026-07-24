import { HTMLAttributes } from '../../../node_modules/react';
type SlotProps = HTMLAttributes<HTMLElement> & {
    ref?: React.Ref<HTMLElement>;
};
export declare function Slot({ children, ref, ...props }: SlotProps): import('../../../node_modules/react').ReactElement<unknown, string | import('../../../node_modules/react').JSXElementConstructor<any>>;
export {};
