import { Meta, Story } from '@storybook/react';
import Ribbon, { RibbonProps } from '.';

export default {
  title: `Ribbon`,
  component: Ribbon,
  args: {
    children: 'Best Seller'
  },
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const RibbonStory: Story<RibbonProps> = (args) => <Ribbon {...args} />
