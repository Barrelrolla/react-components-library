import { ComponentProps } from '../../../node_modules/react';
import { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './Navbar';
type Props = ComponentProps<typeof Navbar> & {
    selected: number | undefined;
};
declare const meta: Meta<Props>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const PageDemo: Story;
