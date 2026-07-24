import { ComponentProps } from '../../../node_modules/react';
import { Meta, StoryObj } from '@storybook/react';
import { ButtonGroup } from './ButtonGroup';
type Props = ComponentProps<typeof ButtonGroup> & {
    selection: boolean;
};
declare const meta: Meta<Props>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Vertical: Story;
export declare const Icon: Story;
export declare const SplitButton: Story;
